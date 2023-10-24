import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import selectedProductReducer from './slices/selectedProductSlice'
import cartReducer from './slices/cartSlice'
import productsReducer from './slices/productSlice'
import formReducer from './slices/formSlice'
<<<<<<< HEAD
import usersReducer from './slices/usersSlice'
=======
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656

const makeStore = () => configureStore({
  reducer: {
    selectedProduct: selectedProductReducer,
    cart: cartReducer,
    products: productsReducer,
<<<<<<< HEAD
    form: formReducer,
    users: usersReducer
=======
    form: formReducer 
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
  }
})

export const wrapper = createWrapper(makeStore)