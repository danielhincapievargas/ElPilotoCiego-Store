import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], 
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart = [
        ...state.cart,
        payload
      ]
    },
  }
})
  
export const { addToCart } = cartSlice.actions

export const cart = state => state.cart

export default cartSlice.reducer
