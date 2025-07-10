import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null
}

export const userslice = createSlice({
    name : 'user',
    initialState,
    reducers :{
        setUser : (state,action)=>{
            state.user = action.payload
        },
        cleanUser : (state)=>{
            state.user = null
        }
    }
})

export const {setUser,cleanUser} = userslice.actions
export default userslice.reducer