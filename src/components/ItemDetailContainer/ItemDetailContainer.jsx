import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Data from "../../stock.json";

const ItemDetailContainer = () => {
  const { idd } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
    promise.then(setItem(Data.find((el) => el.id === idd)));
  }, [idd]);

  return <>{Object.keys(item).length && <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
