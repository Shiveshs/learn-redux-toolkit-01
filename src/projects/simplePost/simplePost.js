import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, removePost, selectAllPosts  } from "./simplePostSlice";
import simplePostSlice from "./simplePostSlice";
import "./simplePost.css";

const SimplePost = () => {
  const [post, setPost] = useState("");

  const newPost = { id: "2", title: "new Post2", details: "details2" };

  const posts = useSelector(selectAllPosts);
  console.log(posts);
  const dispatch = useDispatch();

  const postList = posts.map((post, index) => {
    return (
      <div className="post-tile">
        <ul key={index}>
          <li>{post.id}</li>
          <li>{post.title}</li>
          <li>{post.details}</li>
        </ul>
      </div>
    );
  });

  return (
    <>
      <div className="post-tile-parent">{posts && postList}</div>
      <button
        className="add-post"
        onClick={() => {
          dispatch(addPost(newPost));
        }}
      >
        Add Post
      </button>
      <button
        className="add-post"
        onClick={() => {
          dispatch(removePost());
        }}
      >
        Remove Post
      </button>
    </>
  );
};

export default SimplePost;
