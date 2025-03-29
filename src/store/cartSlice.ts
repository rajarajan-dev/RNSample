import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../appTypes/Products";
import { RootState } from "./store";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalQuantity += 1;
      }

      state.totalPrice = Number(
        (state.totalPrice + action.payload.price).toFixed(2)
      );
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        const removedItem = state.items[itemIndex];

        if (removedItem.quantity > 1) {
          removedItem.quantity -= 1;
        } else {
          --state.totalQuantity;
          state.items.splice(itemIndex, 1);
        }
        state.totalPrice = Number(
          Math.max(0, state.totalPrice - removedItem.price).toFixed(2)
        );
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
// Selector
export const selectCartState = (state: RootState) => state.cartSlice;
export default cartSlice.reducer;
