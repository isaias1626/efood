import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'

import emptyCart from '../../Assets/image/cart.png'
import Button from '../Button'
import { close, remove } from '../../store/reducers/cart'
import { ParseToBrl } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const getTotalPrice = () => {
    let totalPrice = 0
    items.forEach((producto) => {
      producto.cardapio.forEach((item) => {
        totalPrice += item.preco
      })
    })
    return totalPrice
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CardContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((producto) =>
                producto.cardapio.map((item, index) => (
                  <S.CartItem key={index}>
                    <img src={item.foto} alt="" />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>R$ {ParseToBrl(item.preco)}</span>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      type="button"
                      title="Clique aqui para remover este item"
                    />
                  </S.CartItem>
                ))
              )}
            </ul>
            <S.TotalPrice>
              <p>Valor Total</p>
              <p>R$ {ParseToBrl(getTotalPrice())}</p>
            </S.TotalPrice>
            <Button
              title="clique aqui para preencher os dados da entrega"
              type="button"
              onClick={goToCheckout}
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <>
            <S.EmptyCart>
              <img src={emptyCart} alt="carrinho vazio" />
            </S.EmptyCart>
            <p className="empty-text">
              O carrinho está vazio, adicione pelo menos um produto para
              continuar com a compra.
            </p>
          </>
        )}
      </S.Sidebar>
    </S.CardContainer>
  )
}

export default Cart
