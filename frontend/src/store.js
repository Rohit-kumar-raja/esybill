import {configureStore} from "@reduxjs/toolkit"
import registrationSlice from "./registrationSlice"

export const store = configureStore({
    reducer:{
        register:registrationSlice
    }
}) 