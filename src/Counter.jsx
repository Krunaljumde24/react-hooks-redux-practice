import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store.js";

function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  
  return (
    <div>
      <h3>Counter : {count}</h3>
      <button
        type="button"
        className="btn btn-sm btn-primary"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <button
        type="button"
        className="btn btn-sm btn-warning"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
