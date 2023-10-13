import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: "1", title: "new Post", details: "details" }];

const SimplePostSlice = createSlice({
  name: "simplePost",
  initialState,
  reducers: {
    addPost: (state, { payload }) => {
      state.push(payload);
    },
    removePost: (state) => {
      state.pop();
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { addPost, removePost } = SimplePostSlice.actions;
export default SimplePostSlice.reducer;
