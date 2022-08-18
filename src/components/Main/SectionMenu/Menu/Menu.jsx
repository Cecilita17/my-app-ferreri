import React from 'react'
import "./Menu.scss"
import StartersSide from './StartersSide/StartersSide'
import Pizza from './Pizza/Pizza'

const Menu = () => {
  return (
      <div className='divMenu'>
          <StartersSide/>
          <Pizza/>
    </div>
  )
}

export default Menu