import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import Swal from 'sweetalert2'

import { close, clear } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { usePurchaseMutation } from '../../services/api'
import { ParseToBrl } from '../../utils'

import * as S from './styles'

const Checkout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [step, setStep] = useState(1)

  const handleContinueToPayment = () => {
    if (
      form.values.fullName &&
      form.values.address &&
      form.values.city &&
      form.values.cep &&
      form.values.numberHouse
    ) {
      setStep(2)
    } else {
      Swal.fire(
        'Atenção',
        'Preencha todos os campos para continuar com o pagamento',
        'error'
      )
    }
  }

  const handleGoBackToAddress = () => {
    setStep(1)
  }

  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const goToHome = () => {
    navigate('/')
    closeCart()
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      numberHouse: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      cvv: '',
      expiresCardMonth: '',
      expiresCardYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo e obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo e obrigatório'),
      city: Yup.string().required('O campo e obrigatório'),
      cep: Yup.string()
        .min(9, 'O cep precisa ter 9 caracteres')
        .max(9, 'O cep precisa ter 9 caracteres')
        .required('O campo e obrigatório'),
      numberHouse: Yup.string().required('O campo e obrigatório'),
      complement: Yup.string(),

      //Dados de pagamento

      cardDisplayName: Yup.string().required('O campo e obrigatório'),
      cardNumber: Yup.string().required('O campo e obrigatório'),
      cvv: Yup.string()
        .required('O campo e obrigatório')
        .min(3, 'O cvv precisa ter 3 números')
        .max(3, 'O cvv precisa ter 3 números'),
      expiresCardMonth: Yup.string()
        .required('O campo e obrigatório')
        .min(2, 'O campo precisa ter 2 números')
        .max(2, 'O campo precisa ter 2 números'),
      expiresCardYear: Yup.string()
        .required('O campo e obrigatório')
        .min(2, 'O campo precisa ter 2 números')
        .max(2, 'O campo precisa ter 2 números')
    }),

    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            descricao: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.numberHouse),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresCardMonth),
              year: Number(values.expiresCardYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.cardapio[Math.floor(item.cardapio.length / 2)].id,
          prices: item.cardapio[Math.floor(item.cardapio.length / 2)].preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const getTotalPrice = () => {
    let totalPrice = 0
    items.forEach((producto) => {
      producto.cardapio.forEach((item) => {
        totalPrice += item.preco
      })
    })
    return totalPrice
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <>
      {isSuccess && data ? (
        <Card title={`Pedido realizado - ${data.orderId}`}>
          <>
            <S.ContainerText>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <Button
                type="button"
                title="clique aqui para concluir"
                onClick={goToHome}
              >
                Concluir
              </Button>
            </S.ContainerText>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {step === 1 && (
            <Card title={'Entrega'}>
              <div>
                <S.Column>
                  <S.ImputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={form.values.fullName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('fullName') ? 'error' : ''}
                    />
                    <label htmlFor="address">Endereço</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={form.values.address}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('address') ? 'error' : ''}
                    />
                    <label htmlFor="city">Cidade </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('city') ? 'error' : ''}
                    />
                  </S.ImputGroup>
                </S.Column>
                <S.Row>
                  <S.InputGroupTwo>
                    <label htmlFor="cep">CEP</label>
                    <InputMask
                      type="text"
                      id="cep"
                      name="cep"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cep') ? 'error' : ''}
                      mask="99999-999"
                    />
                  </S.InputGroupTwo>
                  <S.InputGroupTwo>
                    <label htmlFor="numberHouse">Número</label>
                    <input
                      type="text"
                      id="numberHouse"
                      name="numberHouse"
                      value={form.values.numberHouse}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('numberHouse') ? 'error' : ''
                      }
                    />
                  </S.InputGroupTwo>
                </S.Row>
                <S.Column>
                  <S.ImputGroup>
                    <label htmlFor="complement">Complemento (Opcional)</label>
                    <input
                      type="text"
                      id="complement"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('complement') ? 'error' : ''
                      }
                    />
                    <S.Buttons>
                      <Button
                        type={'button'}
                        title={'Clique aqui para continuar com o pagamento'}
                        onClick={handleContinueToPayment}
                      >
                        Continuar com o pagamento
                      </Button>
                    </S.Buttons>
                  </S.ImputGroup>
                </S.Column>
              </div>
            </Card>
          )}

          {step === 2 && (
            <Card
              title={`Pagamento - Valor a pagar R$:${ParseToBrl(
                getTotalPrice()
              )}`}
            >
              <div>
                <S.Column>
                  <S.ImputGroup>
                    <label htmlFor="cardDisplayName">Nome no Cartão</label>
                    <input
                      type="text"
                      id="cardDisplayName"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardDisplayName') ? 'error' : ''
                      }
                    />
                  </S.ImputGroup>
                </S.Column>
                <S.Row>
                  <S.InputGroupCardNumber>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputGroupCardNumber>
                  <S.InputGroupCardCvv>
                    <label htmlFor="cvv">CVV</label>
                    <InputMask
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={form.values.cvv}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cvv') ? 'error' : ''}
                      mask="999"
                    />
                  </S.InputGroupCardCvv>
                </S.Row>
                <S.Row>
                  <S.InputGroupTwo>
                    <label htmlFor="expiresCardMonth">Mês de vencimento</label>
                    <InputMask
                      type="text"
                      id="expiresCardMonth"
                      name="expiresCardMonth"
                      value={form.values.expiresCardMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresCardMonth') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </S.InputGroupTwo>
                  <S.InputGroupTwo>
                    <label htmlFor="expiresCardYear">Ano de vencimento</label>
                    <InputMask
                      type="text"
                      id="expiresCardYear"
                      name="expiresCardYear"
                      value={form.values.expiresCardYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresCardYear') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </S.InputGroupTwo>
                </S.Row>
                <S.Column>
                  <S.Buttons>
                    <Button
                      type={'button'}
                      title={'Clique aqui para finalizar o pagamento'}
                      onClick={form.handleSubmit}
                    >
                      {isLoading
                        ? 'Finalizando pagamento...'
                        : 'Finalizar pagamento'}
                    </Button>
                    <Button
                      type={'button'}
                      title={'Clique aqui para voltar a pagina anterior'}
                      onClick={handleGoBackToAddress}
                    >
                      Voltar para edição do endereço
                    </Button>
                  </S.Buttons>
                </S.Column>
              </div>
            </Card>
          )}
        </form>
      )}
    </>
  )
}

export default Checkout
