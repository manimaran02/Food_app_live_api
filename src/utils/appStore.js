import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice";


const appStore = configureStore({
    reducer : {
        cart : cartReducer
    }

});



export default appStore;