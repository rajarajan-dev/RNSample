import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../appTypes/Products";
import { RootState } from "./store";

interface ProductsState {
  data: Product[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ProductsState = {
  data: [],
  loading: false,
  error: null,
};

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Selector
export const selectProductsState = (state: RootState) => state.productsSlice;

export default productsSlice.reducer;
