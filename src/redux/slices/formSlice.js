import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPassword: '',
    orderEmail: '',
    orderCountry: '',
    orderFirstName: '',
    orderLastName: '',
    orderAddress: '',
    orderCity: '',
    orderPostcode: '',
    orderPhone: '',
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
  }
})
  
export const { changeForm } = formSlice.actions

export const form = state => state.form

export default formSlice.reducer