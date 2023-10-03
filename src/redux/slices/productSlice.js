import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  products: [],
  product: {},
  error: null,
  status: 'idle'
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    listProducts: (state, { payload }) => {
      //console.log('state.products', state.products);
      state.products = payload
    },
    listSingleProduct: (state, { payload }) => {
      state.product = payload
    },
    setError: (state, { payload }) => {
      state.error = payload
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if(action.payload.products.error) {
        return state.error = action.payload.products.error
      }
  
      state.products = action.payload.products.products
  
      state.product = action.payload.products.product
    },
/*     [HYDRATE]: (state, action) => {
      if(action.payload.products.error) {
        return state.error = action.payload.products.error
      }
  
      state.product = action.payload.products.product
    } */
  },
  
})
  
export const { listProducts, listSingleProduct } = productsSlice.actions

export const stateProducts = state => state.products

export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8080/api/products')
    const res = await response.json()
    dispatch(listProducts(res.data))

  } catch(error) {
      dispatch(setError(error.message))
  }
}

export const getSingleProduct = (productId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/api/products/${productId}`)
    const res = await response.json()
    //console.log('singleProduct', res);
    dispatch(listSingleProduct(res.data))

  } catch(error) {
      dispatch(setError(error.message))
  }
}


export default productsSlice.reducer
