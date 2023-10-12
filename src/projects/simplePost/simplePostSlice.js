import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: "1", title: "new Post", details: "details" }];

const SimplePostSlice = createSlice({
  name: "simplePost",
  initialState,
  reducers: {
    addPost: (state, post) => {
      state.posts.push(post);
    },
  },
});

export const { addPost } = SimplePostSlice.actions;
export default SimplePostSlice.reducer;
