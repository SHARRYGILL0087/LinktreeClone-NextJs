import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
}

export const loginSlice = createSlice({
    name : 'login',
    initialState,
    reducers :{
        logIn : (state)=>{
            state.isLoggedIn = true
        } ,
        logOut : (state)=>{
            state.isLoggedIn = false
        }
    }
}) 

export const { logIn , logOut } = loginSlice.actions
export default loginSlice.reducer

