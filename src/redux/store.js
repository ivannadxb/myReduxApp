import { configureStore } from "@reduxjs/toolkit";
import perfumes from './perfumesSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
     perfumes,
     cart
    },
  })
  