//rafce
import React from 'react'
import "./Navbar.scss"
import "./CartWidget"
import CartWidget from './CartWidget';


function Navbar() {
  
  const navbarItem = [
    {
      name: "Home",
      icon: "fa-solid fa-angle-down"
    },
    {
      name: "About",
    },
    {
      name: "Our Menu",
      icon: "fa-solid fa-angle-down"
    },
    {
      name: "Contact",
    },
    {
      name: "Shop",
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
        name: "Order online"
        
      },
      ];

  return (
    <>
    <div className='divNav'>
      <nav>
        <ul>
          {navbarItem.map((item, index) => (
            <li key={index}> <a href="#"> {item.name} <i className={item.icon}></i></a></li>
          ))}
        </ul>
      </nav>

      <p className="logo">L.</p>

      <nav className="navSocial">
                <ul>
                  <CartWidget icon='fa-solid fa-bag-shopping'/>
                  {navSocialItem.map((item, index) =>(
                    <li key={index} className={item.class ? item.class : undefined}><a href={item.link} target="blank">{item.name}</a>{item.icon && <i className={item.icon}></i>}</li>
                  ))}
                </ul>
      </nav>
    </div>
    
    </>
  )
}

export default Navbar