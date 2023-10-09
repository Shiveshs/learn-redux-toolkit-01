import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const SimpleCounterSlice = createSlice({
  name: "SimpleCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = SimpleCounterSlice.actions;
export default SimpleCounterSlice.reducer;
