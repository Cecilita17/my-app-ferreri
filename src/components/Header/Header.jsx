import React from 'react'
import Navbar from './Navbar/Navbar'
import "./Header.scss"

const Header = () => {
  return (
    <header>
        <Navbar/>
        <div className='divTitle'>
                <p>  Welcome to </p>
                <h1>Loremtime Bistro</h1>
                <h2>Pizza. Burger. Roasted. Coffee. Wine.</h2>
                </div>
    </header>
    
  )
}

export default Header