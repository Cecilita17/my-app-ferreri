import React, { useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  function onAdd(count) {
    console.log("soy onAdd y el valor del contador es:", count);
  }
  const add = () => {
    count > initial && setCount(count - 1);
  };

  const subtract = () => {
    count < stock && setCount(count + 1);
  };

  return (
    <div className="itemCount">
      <div>
        <button className="addButton" onClick={() => onAdd(count)}>Add</button>
      </div>
      <div className="amount">
        <button className="buttonCount" onClick={add}>
          -
        </button>
        <div className="buttonCount">{count}</div>
        <button className="buttonCount" onClick={subtract}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

{
  /* <button onClick={()=>{setCount(count-1)}}disabled={count === initial}></button> */
}
