import React, { useEffect, useState } from "react";
import "./Pizza.scss";
import Data from "../../../../../menu.json";


const Pizza = () => {
  const [data, setData] = useState([]);
  
    useEffect(() => {
      const task = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Data);
        }, 2000);
      })
      .then((result) => result.slice(5, 11))
        .then((result) => setData(result))
        .catch((err) => console.log(err));
    }, []);
  
  return (
    <div className="divPpizza">
      <h5>Pizzas</h5>
      {data.length < 1 ? ( <h2>Loading...</h2>): (
        data.map((item, key) => (
          <div class="menuItem">
            <img className="menuImg" src={item.url} alt="" />
            <div>
              <p> {item.title} </p>
              <span></span> <p className="price"> $ {item.priceRegular} </p>
            </div>
          </div>
        ))
      )
        }
    </div>
  );
};

export default Pizza;
