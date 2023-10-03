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
    removeFromCart: (state, action) => {
      const { productName, productSize } = action.payload;
      state.cart = state.cart.filter(item => (
        item.productName !== productName || item.productSize !== productSize
      ));
    }
  }
})
  
export const { addToCart, removeFromCart } = cartSlice.actions

export const cart = state => state.cart

export default cartSlice.reducer




