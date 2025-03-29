import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface PizzaState {
  pizzaBase: number;
}

const initialState: PizzaState = {
  pizzaBase: 100,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    orderPizza: (state) => {
      state.pizzaBase--;
    },
  },
});

export const { orderPizza } = pizzaSlice.actions;
// Selector
export const selectPizzaState = (state: RootState) => state.pizzaSlice;
export default pizzaSlice.reducer;
