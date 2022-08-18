import React from 'react'
import "./SectionPizza.scss"

const SectionPizza = () => {
    const pizzas = [
        {
            title: "Mushrooms",
            class: "pizzaNro",
            description: "Tomato sauce, mushrooms, sausage and olives",
            priceRegular: "$30",
            priceMedium:"$36",
            url: "https://drive.google.com/uc?&export=download&id=1T_tzxGckwKQxYzbBW_4-fu3wnu1MUOno"
        },
        {
            title: "Mozzarella",
            class: "pizzaNro reverse",
            description: "Tomato sauce, mozzarella cheese, oregano, basil",
            priceRegular: "$31",
            priceMedium:"$36",
            url: "https://drive.google.com/uc?&export=download&id=1ohKgs0-3rkQ1icN4D9lxQNSphFEJiFwr"
        },
        {
            title: "Veggie",
            class: "pizzaNro",
            description: "Tomato sauce, broccoli, sliced tomato, mushrooms",
            priceRegular: "$29",
            priceMedium:"$33",
            url:"https://drive.google.com/uc?&export=download&id=1e4CobY7cyC7cmVA65B-V88UJYV0XyaF3"
        },
        {
            title: "Capricciosa",
            class: "pizzaNro reverse",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit",
            priceRegular: "$32",
            priceMedium:"$38",
            url:"https://drive.google.com/uc?&export=download&id=1OJI0fsTW9V8nlZqXUL_oMNufl87QjnFQ"
        },
    ]
    
  return (
    <section className="sectionPizza">
      {pizzas.map((item, index) => (
        <div key={index} className={item.class}>
          <div className="imgPizza animation">
            <img src={item.url} alt="first pizza" />
          </div>
          <div className="pizzaDescript animationLetra">
            <h4 className="pizzasT"> {item.title} </h4>
            <p> {item.description} </p>
            <p>
              <span className="rectangle">Regular size</span>{" "}
              {item.priceRegular}
            </p>
            <p>
              <span className="rectangle2">Medium size</span> {item.priceMedium}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SectionPizza