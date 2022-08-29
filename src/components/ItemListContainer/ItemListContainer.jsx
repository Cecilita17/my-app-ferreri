import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Data from "../../stock.json";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
    task.then((task) => {
      setProducts(task);
    });
  }, []);

  function onAdd(count) {
    console.log("soy onAdd y el valor del contador es:", count);
  }

  return (
    <div className={props.clase}>
      <ItemList products={products} onAdd={onAdd}/>
    </div>
  );
};

export default ItemListContainer;
