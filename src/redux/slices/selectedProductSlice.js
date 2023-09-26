import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: '',
  productName: '',
  productImage: '',
  productPrice: '',
  productStock: 0,
  productDescription: '',
  productType: ''
}

const selectedProductSlice = createSlice({
  name: 'selectedProduct',
  initialState,
  reducers:{
    selectProduct: (state, { payload }) => {
      state.id = payload.id;
      state.productName = payload.productName;
      state.productImage = payload.productImage;
      state.productPrice = payload.productPrice;
      state.productStock = payload.productStock;
      state.productDescription = payload.productDescription;
      state.productType = payload.productType;
    }
  }
})


export const { selectProduct } = selectedProductSlice.actions

export const selectedProduct = state => state.selectedProduct

export default selectedProductSlice.reducer