import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  products: [],
  product: {},
  error: null,
  status: 'idle'
=======

const initialState = {
  products: [], 
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    listProducts: (state, { payload }) => {
      state.products = payload
    },
<<<<<<< HEAD
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

    dispatch(listSingleProduct(res.data))

  } catch(error) {
      dispatch(setError(error.message))
  }
}
=======
  }
})
  
export const { listProducts } = productsSlice.actions

export const products = state => state.products
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656

export default productsSlice.reducer
