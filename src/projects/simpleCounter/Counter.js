import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  countByValue,
} from "./simpleCounterSlice";
import "./Counter.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const [payload, setPayload] = useState(0);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    e.preventDefault();
    const payloadValue = Number(e.target.value);
    if (!isNaN(payloadValue)) setPayload(payloadValue);
    else setPayload(0);
  };
  const onResetHandler = () => {
    dispatch(reset());
    setPayload(0);
  };
  return (
    <section>
      <h1>{count}</h1>
      <div>
        <button className="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button className="button" onClick={() => onResetHandler()}>
          Reset
        </button>
        <input
          type="text"
          onChange={(e) => onChangeHandler(e)}
          value={payload}
        />
        <button
          className="button"
          onClick={() => dispatch(countByValue(payload))}
        >
          Add Me
        </button>
      </div>
    </section>
  );
};

export default Counter;
