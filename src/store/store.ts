import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

// RootState & AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
