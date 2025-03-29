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
    orderPizza: (state, action) => {
      if (action.payload) {
        state.pizzaBase -= action.payload;
      }
    },
  },
});

export const { orderPizza } = pizzaSlice.actions;
// Selector
export const selectPizzaState = (state: RootState) => state.pizzaSlice;
export default pizzaSlice.reducer;
