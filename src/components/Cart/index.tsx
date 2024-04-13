import Button from '../Button'
import { Overlay, CardContainer, Sidebar, TotalPrice, CartItem } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    let totalPrice = 0
    items.forEach((producto) => {
      producto.cardapio.forEach((item) => {
        totalPrice += item.preco
      })
    })
    return totalPrice
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
      preco
    )
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((producto) =>
            producto.cardapio.map((item, index) => (
              <CartItem key={index}>
                <img src={item.foto} alt="" />
                <div>
                  <h3>{item.nome}</h3>
                  <span>R$ {formataPreco(item.preco)}</span>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  type="button"
                  title="Clique aqui para remover este item"
                />
              </CartItem>
            ))
          )}
        </ul>
        <TotalPrice>
          <p>Valor Total</p>
          <p>R$ {formataPreco(getTotalPrice())}</p>
        </TotalPrice>
        <Button
          title="clique aqui para preencher os dados da entrega"
          type={'button'}
        >
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CardContainer>
  )
}

export default Cart
