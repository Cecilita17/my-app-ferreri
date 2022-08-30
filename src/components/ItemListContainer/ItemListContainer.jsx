import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Data from "../../stock.json";
import '../ItemListContainer/ItemListContainer.scss'

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

  

  return (
    <div className={props.clase}>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;
