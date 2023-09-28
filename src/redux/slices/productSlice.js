import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], 
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    listProducts: (state, { payload }) => {
      state.products = payload
    },
  }
})
  
export const { listProducts } = productsSlice.actions

export const products = state => state.products

export default productsSlice.reducer
