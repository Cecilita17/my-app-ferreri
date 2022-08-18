import React from 'react'
import "./StartersSide.scss";

const StartersSide = () => {
    const starters = [
        {
            name: "Lorem ipsum dolor",
            price: "36",
            url:"https://drive.google.com/uc?&export=download&id=1fi3h5uU8i6v-nfEe-FVVVDjOhZqOOWQ5",
        },
        {
            name: "Lorem ipsum",
            price: "30",
            url:"https://drive.google.com/uc?&export=download&id=1XkEVT6sir67YRM8GLQ0t_Ko-mRva8pHT",
        },
        {
            name: "Lorem",
            price: "33",
            url:"https://drive.google.com/uc?&export=download&id=1jD7WO1AGssEIezHJrfrqRdeGCueL1UVQ",
        },
    ]

    const sides = [
        {
            name: "Green mexican salad",
            price: "13",
            url:"https://drive.google.com/uc?&export=download&id=1jD7WO1AGssEIezHJrfrqRdeGCueL1UVQ",
        },
        {
            name: "Roasted vegetables",
            price: "13",
            url:"https://drive.google.com/uc?&export=download&id=1XkEVT6sir67YRM8GLQ0t_Ko-mRva8pHT",
        },
    ]

  return (
    <div className="divSP">
      <div className="divStartersSides">
        <h5>Starters</h5>
        {starters.map((item, index) => (
          <div key={index} className="menuItem">
            <img className="menuImg" src={item.url} alt="pizza1" />
            <div>
              <p>{item.name}</p> <span> </span>{" "}
              <p className="price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="divStartersSides">
              <h5>Sides</h5>
              {sides.map((item, index) => (
                  <div key={index} className="menuItem">
                  <img className="menuImg" src= {item.url} alt=""/>
                  <div>
                    <p> {item.name} </p><span></span> <p className="price">$ {item.price} </p>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
}

export default StartersSide