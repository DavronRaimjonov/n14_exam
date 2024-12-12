import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shop-slice";
export const store = configureStore({
  reducer: {
    shopSlice,
  },
});
