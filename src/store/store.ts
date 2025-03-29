import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import { thunk } from "redux-thunk";
import reactotron from "../../ReactotronConfig";

export const store = configureStore({
  reducer: {
    productsSlice: productsSlice,
    cartSlice: cartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  enhancers: (getDefaultEnhancers) => {
    const reactotronEnhancer = __DEV__ ? [reactotron.createEnhancer!()] : [];
    return getDefaultEnhancers().concat(reactotronEnhancer);
  },
});

// RootState & AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
