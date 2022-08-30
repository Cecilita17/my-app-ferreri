import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Data from "../../stock.json";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Data.find((el) => el.id == id));
      }, 2000);
    });
    promise.then((data) => {
      setItem(data);
    });
  }, [id]);

  return <>{<ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
