import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.scss";

const ItemDetail = ({ item, onAdd }) => {
  const { title, description, priceRegular, url } = item;
  return (
    <div className="detailWrapper">
      <div>
          <img className="detailImg" src={url} alt="" />
        </div>
        
        <div className="detailInfoWr">
        <h1>{title}</h1>
          <h2>{description}</h2>
          <h2>price:{priceRegular}</h2>
          <ItemCount
            className="detailCount"
            stock={7}
            initial={1}
            onAdd={onAdd}
          />
        </div>
    </div>
  );
};

export default ItemDetail;
