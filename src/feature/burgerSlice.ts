import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { orderPizza } from "./pizzaSlice";

interface BurgerState {
  burgerBuns: number;
}

const initialState: BurgerState = {
  burgerBuns: 50,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    orderBurger: (state) => {
      state.burgerBuns--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(orderPizza, (state) => {
      state.burgerBuns--;
    });
  },
});

export const { orderBurger } = burgerSlice.actions;
// Selector
export const selectBurgerSlice = (state: RootState) => state.burgerSlice;
export default burgerSlice.reducer;
