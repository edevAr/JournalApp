import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoUrl: null,
      errorMessage: null
   },
   reducers: {
       login: (state, {payload}) =>{
         state.status= 'authenticated',
         state.uid= payload.uid,
         state.email= payload.email,
         state.displayName= payload.displayName,
         state.photoUrl= payload.photoURL,
         state.errorMessage= null
       },
       logout: (state, {payload}) => {
         state.status= 'not-authenticated',
         state.uid= null,
         state.email= null,
         state.displayName= null,
         state.photoUrl= null,
         state.errorMessage= payload.errorMessage
       },
       checkingCredentials: (state) => {
         console.log(state.status);
         state.status = 'checking'
         console.log(state);
       }
   },
})


export const { login, logout, checkingCredentials} = authSlice.actions