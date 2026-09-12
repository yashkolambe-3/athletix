import { createSlice } from "@reduxjs/toolkit";

// Helper function to keep cart totals in sync
const recalc = (items) => ({
  totalQuantity: items.reduce((sum, item) => sum + item.quantity, 0),
  totalPrice: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
});

const initialState = { items: [], totalQuantity: 0, totalPrice: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      // Unique key handles same product but different sizes
      const key = `${product.id}-${product.size || "standard"}`;
      const existing = state.items.find((i) => i.key === key);

      if (existing) {
        existing.quantity += product.quantity || 1;
      } else {
        state.items.push({
          ...product,
          key,
          quantity: product.quantity || 1,
        });
      }

      // Update global totals
      Object.assign(state, recalc(state.items));
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.key !== action.payload);
      Object.assign(state, recalc(state.items));
    },
    increaseQuantity(state, action) {
      const item = state.items.find((i) => i.key === action.payload);
      if (item) item.quantity += 1;
      Object.assign(state, recalc(state.items));
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((i) => i.key === action.payload);
      // Prevent quantity from dropping below 1
      if (item) item.quantity = Math.max(1, item.quantity - 1);
      Object.assign(state, recalc(state.items));
    },
    clearCart(state) {
      // Reset everything to default state
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;