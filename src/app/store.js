import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../projects/simpleCounter/simpleCounterSlice";
import postReducer from "../projects/simplePost/simplePostSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
});
