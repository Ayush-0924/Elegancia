import {createSlice} from "@reduxjs/toolkit";

const ItemSlice = createSlice({
  name : 'item',
  initialState: [],
  reducers:{
     addinitialitem :(state,action)=>{
      return action.payload;
     }
  }
})
export const ItemsAction=ItemSlice.actions;
export default ItemSlice;