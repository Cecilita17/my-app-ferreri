//rafce
import React from "react";
import "./Navbar.scss";
import "./CartWidget";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown"


function Navbar() {
  const navbarItem = [
    {
      name: "Home",
      icon: "fa-solid fa-angle-down",
      linkTo: "/",
    },
    {
      name: "About",
      linkTo: "/about",
    },
    {
      name: "Our Menu",
      ourMenu: "ourMenu",
      icon: "fa-solid fa-angle-down",
      linkTo: "/menu",
    },
    {
      name: "Contact",
      linkTo: "/contact",
    },
    {
      name: "Shop",
      linkTo: "/shop",
    },
  ];

  const navSocialItem = [
    {
      link: "https://www.instagram.com/",
      icon: "fa-brands fa-instagram",
    },
    {
      link: "https://www.facebook.com/",
      icon: "fa-brands fa-facebook-f",
    },
    {
      link: "https://www.whatsapp.com/",
      icon: "fa-brands fa-whatsapp",
    },
    {
      link: "https://www.tiktok.com/",
      icon: "fa-brands fa-tiktok",
    },

    {
      class: "ordeneOl",
      link: "#",
      icon: false,
      name: "Order online",
    },
  ];

  return (
    <>
      <div className="divNav">
        <nav>
          <ul>
            {navbarItem.map((item, index) => (
              <Link to={`${item.linkTo}`}>
                {item.ourMenu ? <Dropdown/> : <li key={index}>
                  {" "}
                  <a href="#">
                    {" "}
                    {item.name} <i className={item.icon}></i>
                  </a>
                </li>}
                
              </Link>
            ))}
          </ul>
        </nav>

        <Link to={`/`} className='linkStyles'><p className="logo">L.</p></Link>

        <nav className="navSocial">
          <ul>
            <CartWidget icon="fa-solid fa-bag-shopping" />
            {navSocialItem.map((item, index) => (
              <li key={index} className={item.class ? item.class : undefined}>
                <a href={item.link} target="blank">
                  {item.name}
                </a>
                {item.icon && <i className={item.icon}></i>}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
