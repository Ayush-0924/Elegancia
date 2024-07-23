import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import ItemSlice from "./Items";
import fetchStatusSlice from "./fetchstatusSlice";
import bagSlice from "./bagSlice";
import themeslice from "./themeslice";
import WishListSlice from "./WishList";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  item: ItemSlice.reducer,
  fetchStatus: fetchStatusSlice.reducer,
  bag: bagSlice.reducer,
  theme: themeslice.reducer,
  wishlist: WishListSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  blacklist: ["fetchStatus"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const ElengenciaStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(ElengenciaStore);
