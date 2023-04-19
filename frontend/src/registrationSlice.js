import { createSlice } from "@reduxjs/toolkit";

const registrationSlice = createSlice({
    name:'register',
    initialState:{
        userDetails:[]
    },
    reducers:{
        addUser:(state, action) => {
            state = state.userDetails.splice(0,1,action.payload)
         },
         addProperty:(state, action) => {
             state.userDetails.push(action.payload)
         },
    }
})

export const {addUser, addProperty} = registrationSlice.actions 
export default registrationSlice.reducer