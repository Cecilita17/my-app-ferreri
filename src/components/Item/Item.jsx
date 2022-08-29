import React from "react";
import "../Item/Item.scss";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'

const Item = ({id, title, clase, description, priceRegular, priceMedium, url, onAdd}) => {
  return (
    <div className= {clase} >
      <div className="imgPizza animation">
        <Link to={`/item/${id}`}> <img src={url} alt="first pizza"/> </Link>
      </div>
      <div className="pizzaDescript animationLetra">
        <h4 className="pizzasT"> {title} </h4>
        <p> {description} </p>
        <p>
          <span className="rectangle">Regular size</span>{" "}
          {priceRegular}
        </p>
        <p>
          <span className="rectangle2">Medium size</span> {priceMedium}
        </p>
        <ItemCount stock={7} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Item;
