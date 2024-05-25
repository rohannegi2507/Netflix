import { createSlice } from "@reduxjs/toolkit";

export type USER = {
    userInfo: {email:string, password:string, name:string | null, photoURL: string | null } | null
}
const initialState = { userInfo: null } 

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser: (state, action) => {
            state.userInfo =  action.payload
        },
        removeUser: (state) => {
            state.userInfo =  null
        }
    }
})


export const {addUser, removeUser} =  userSlice.actions

export default userSlice.reducer;