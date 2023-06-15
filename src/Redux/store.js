import { configureStore } from "@reduxjs/toolkit";
import fomReducer from "./formSlice"

const store= configureStore({
    reducer:{
        form:fomReducer
    }
})
export default store