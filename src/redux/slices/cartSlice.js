import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], 
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart = [
        ...state.cart,
        payload
      ]
    },
<<<<<<< HEAD
    removeFromCart: (state, action) => {
      const { productName, productSize } = action.payload;
      state.cart = state.cart.filter(item => (
        item.productName !== productName || item.productSize !== productSize
      ));
    }
  }
})
  
export const { addToCart, removeFromCart } = cartSlice.actions
=======
  }
})
  
export const { addToCart } = cartSlice.actions
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656

export const cart = state => state.cart

export default cartSlice.reducer
<<<<<<< HEAD




=======
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
