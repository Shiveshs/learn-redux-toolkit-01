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
    reset: (state) => {
        state.count = 0;
    },
    countByValue: (state, payload) => {
        console.log(typeof(payload.payload))
        state.count = state.count + payload.payload;
    },
  },
});

export const { increment, decrement, reset, countByValue } = SimpleCounterSlice.actions;
export default SimpleCounterSlice.reducer;
