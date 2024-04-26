import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Producto[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Producto>) => {
      const products = state.items.find((item) =>
        item.cardapio.some(
          (produto) => produto.id === action.payload.cardapio[0].id
        )
      )

      if (!products) {
        state.items.push(action.payload)
      } else {
        alert('O produto já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => {
        const isItemInCardapio = item.cardapio.some(
          (produto) => produto.id === action.payload
        )
        return !isItemInCardapio
      })
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
