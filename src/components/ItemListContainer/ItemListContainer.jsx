import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Data from "../../stock.json";
import "../ItemListContainer/ItemListContainer.scss";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const { categoryid } = useParams();
  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
    task.then((productos) => {
      let productsFiltered = [];
      setProducts(
        (productsFiltered = categoryid
          ? productos.filter((el) => el.category == categoryid)
          : productos)
      );
    });
  }, [categoryid]);

  return (
    <div className={props.clase}>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
