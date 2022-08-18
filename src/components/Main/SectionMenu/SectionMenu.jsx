import React from 'react'
import "./SectionMenu.scss"
import Menu from './Menu/Menu';

const SectionMenu = () => {
  return (
    <section className="sectionMenu">
      <div className="divTitle">
        <p className="aboveMenu">
          <span>The full menu</span>
        </p>
        <h4 className="menuTitle">À la carte</h4>
      </div>
      <Menu/>
    </section>
  );
}

export default SectionMenu