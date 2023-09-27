import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: '',
  productName: '',
  productImage: '',
  productPrice: '',
  productStock: 0,
  productType: '',
  productSize: '',
  productCount: 1,
}

const selectedProductSlice = createSlice({
  name: 'selectedProduct',
  initialState,
  reducers:{
    selectProduct: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    },
    updateProductSize: (state, { payload }) => {
      const { productSize } = payload;
      return {
        ...state,
        productSize,
      };
    },
    updateProductCount: (state, { payload }) => {
      const { productCount } = payload;
      return {
        ...state,
        productCount,
      };
    },
    incrementCount: (state) => {
        state.productCount += 1
    },
    decrementCount: (state) => {
        state.productCount -= 1
    },
  }
})


export const { 
  selectProduct, 
  updateProductSize,
  updateProductCount,
  incrementCount,
  decrementCount
} = selectedProductSlice.actions

export const selectedProduct = state => state.selectedProduct

export default selectedProductSlice.reducer