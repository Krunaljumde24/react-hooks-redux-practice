import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
  },
});

const counterReducer = counterSlice.reducer;

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const { increment, decrement } = counterSlice.actions;
