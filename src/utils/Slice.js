import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState :{
        items : []
    },
    reducers : {
        addItems : (state,action)=>{
            state.items.push(action.payload)
        },
        removItems : (state)=>{
            state.items.pop()
        },
        clearCart : (state)=>{
            state.items.length = 0
        }
    }
});


export default cartSlice.reducer;

export const {addItems,removItems,clearCart} = cartSlice.actions;