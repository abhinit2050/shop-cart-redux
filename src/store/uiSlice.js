import {createSlice} from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name:'ui',
    initialState:{
        cartisVisible:false
    },
    reducers:{
        toggle(state){
            state.cartisVisible = !state.cartisVisible
        }
    }
})

const uiActions = uiSlice.actions;

export default uiSlice;
export {uiActions};
