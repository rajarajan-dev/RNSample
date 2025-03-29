import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import { thunk } from "redux-thunk";
import reactotron from "../../ReactotronConfig";
import pizzaSlice from "../feature/pizzaSlice";
import burgerSlice from "../feature/burgerSlice";

export const store = configureStore({
  reducer: {
    productsSlice: productsSlice,
    cartSlice: cartSlice,
    pizzaSlice: pizzaSlice,
    burgerSlice: burgerSlice,
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
