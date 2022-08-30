import React from "react";
import "../Item/Item.scss";
import { Link } from "react-router-dom";

const Item = ({
  id,
  title,
  clase,
  description,
  priceRegular,
  priceMedium,
  url
}) => {
  return (
    <div className={clase}>
      <div className="imgPizza animation">
        <img src={url} alt="first pizza" />
      </div>

      <div className="pizzaDescript animationLetra">
        <h4 className="pizzasT"> {title} </h4>
        <p> {description} </p>
        <p>
          <span className="rectangle">Regular size</span> {priceRegular}
        </p>
        <p>
          <span className="rectangle2">Medium size</span> {priceMedium}
        </p>
        <Link to={`/item/${id}`}>
          <p>View more</p>
        </Link>
      </div>
    </div>
  );
};

export default Item;
