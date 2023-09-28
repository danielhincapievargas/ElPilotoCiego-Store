import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import selectedProductReducer from './slices/selectedProductSlice'
import cartReducer from './slices/cartSlice'
import productsReducer from './slices/productSlice'

const makeStore = () => configureStore({
  reducer: {
    selectedProduct: selectedProductReducer,
    cart: cartReducer,
    products: productsReducer
  }
})

export const wrapper = createWrapper(makeStore)