import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import selectedProductReducer from './slices/selectedProductSlice'
import cartReducer from './slices/cartSlice'

const makeStore = () => configureStore({
  reducer: {
    selectedProduct: selectedProductReducer,
    cart: cartReducer,
  }
})

export const wrapper = createWrapper(makeStore)