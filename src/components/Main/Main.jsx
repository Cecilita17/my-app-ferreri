import React from 'react'
import "./Main.scss"
import SectionPizza from './SectionPizza/SectionPizza';
import SectionMenu from './SectionMenu/SectionMenu';

const Main = () => {
  return (
    <main>
      <div className="divRistorante">
        <h2> Ristorante </h2>
        <h3>
          <i className="fa-solid fa-star"></i> Pizza Menu
          <i className="fa-solid fa-star"></i>
        </h3>
        <h3> Our best selections </h3>
      </div>
      <SectionPizza />
      <SectionMenu />
    </main>
  );
}

export default Main