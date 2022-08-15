import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
  return (
    <div className={props.clase}> {props.msg}
    <ItemCount stock={7} initial = {1} onAdd={null} />
    </div>
  )
}

export default ItemListContainer