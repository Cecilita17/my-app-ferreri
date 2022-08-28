import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Data from "../../stock.json";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    })
      .then((res) => res.json)
      .then(setProducts(Data));
  }, []);

  function onAdd(count) {
    console.log("soy onAdd y el valor del contador es:", count);
  }

  return (
    <div className={props.clase} >
      <ItemList products={products}/>

    </div>
  );
};

export default ItemListContainer;
