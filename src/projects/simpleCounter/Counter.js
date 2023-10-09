import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./simpleCounterSlice";
import "./Counter.css"

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section>
      <h1>{count}</h1>
      <div>
        <button className="button" onClick={() => dispatch(increment())}>+</button>
        <button className="button" onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
};

export default Counter;
