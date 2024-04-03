import Button from '../Button'
import { Overlay, CardContainer, Sidebar, TotalPrice, CartItem } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((producto) =>
            producto.cardapio.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt="" />
                <div>
                  <h3>{item.nome}</h3>
                  <span>R$ {item.preco}</span>
                </div>
                <button
                  type="button"
                  title="Clique aqui para remover este item"
                />
              </CartItem>
            ))
          )}
        </ul>
        <TotalPrice>
          <p>Valor Total</p>
          <p>R$ 250,00</p>
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
