import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  users: [],
  user: {},
  loggedUser: {
    profile: {
      userEmail: "",
      userFirstName: "",
      userLastName: "",
      userRole: ""
    },
    token: ""
},
  error: null,
  status: 'idle'
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    listUsers: (state, { payload }) => {
      //console.log('state.products', state.products);
      state.users = payload
    },
    listSingleUser: (state, { payload }) => {
      state.user = payload
    },
    getLoggedUser: (state, { payload }) => {
      state.loggedUser = 
      {...state.loggedUser,
        ...payload
      }
    },
    setError: (state, { payload }) => {
      state.error = payload
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if(action.payload.users.error) {
        return state.error = action.payload.users.error
      }
  
      state.users = action.payload.users.users
      state.user = action.payload.users.user
    },
  },
})
  
export const { listUsers, listSingleUser, getLoggedUser } = usersSlice.actions

export const stateUsers = state => state.users

export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8080/api/users')
    const res = await response.json()
    dispatch(listUsers(res.data))

  } catch(error) {
      dispatch(setError(error.message))
  }
}

export const getSingleUser = (userId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/api/users/${userId}`)
    const res = await response.json()
    //console.log('singleProduct', res);
    dispatch(listSingleUser(res.data))

  } catch(error) {
      dispatch(setError(error.message))
  }
}


export default usersSlice.reducer