import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishList: (state, action) => {
      state.push(action.payload);
    },
    removeFromWishList: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});

export const WishListAction = WishListSlice.actions;
export const { addToWishlist, removeFromWishlist } = WishListSlice.actions;
export default WishListSlice;
