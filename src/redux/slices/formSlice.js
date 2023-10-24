import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPassword: ''
<<<<<<< HEAD
  },
  deliveryForm:{
    orderEmail: '',
    orderCountry: '',
    orderFirstName: '',
    orderLastName: '',
    orderAddress: '',
    orderCity: '',
    orderPostcode: '',
    orderPhone: '',
=======
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656
  }
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeForm: (state, { payload }) => {
      const {name, value} = payload
      state.form = {
        ...state.form,
        [name]: value
      }
    },
<<<<<<< HEAD
    changeDeliveryForm: (state, { payload }) => {
      const {name, value} = payload
      state.deliveryForm = {
        ...state.deliveryForm,
        [name]: value
      }
  }
}
})
  
export const { changeForm, changeDeliveryForm } = formSlice.actions
=======
  }
})
  
export const { changeForm } = formSlice.actions
>>>>>>> f9f2c2662b8b9a89429ca188bb31e14d50709656

export const form = state => state.form

export default formSlice.reducer