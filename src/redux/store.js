import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import selectedProductReducer from './slices/selectedProductSlice'

const makeStore = () => configureStore({
  reducer: {
    selectedProduct: selectedProductReducer
  }
})

export const wrapper = createWrapper(makeStore)