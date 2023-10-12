import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./simplePostSlice";
import simplePostSlice from "./simplePostSlice";

const SimplePost = () => {
  const [post, setPost] = useState("");

  const newPost = { id: "2", title: "new Post2", details: "details2" };

  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <li>{posts[0].id}</li>
        <li>{posts[0].title}</li>
      </ul>
    </div>
  );
};

export default SimplePost;
