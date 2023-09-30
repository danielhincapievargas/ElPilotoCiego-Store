import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import selectedProductReducer from './slices/selectedProductSlice'
import cartReducer from './slices/cartSlice'
import productsReducer from './slices/productSlice'
import formReducer from './slices/formSlice'

const makeStore = () => configureStore({
  reducer: {
    selectedProduct: selectedProductReducer,
    cart: cartReducer,
    products: productsReducer,
    form: formReducer 
  }
})

export const wrapper = createWrapper(makeStore)