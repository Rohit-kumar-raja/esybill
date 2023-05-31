import {configureStore} from "@reduxjs/toolkit"
import registrationSlice from "./registrationSlice"
import loginSlice from "./loginSlice"
import propertySlice from "./propertySlice"
export const store = configureStore({
    reducer:{
        register:registrationSlice,
        login:loginSlice,
        property:propertySlice
    }
}) 