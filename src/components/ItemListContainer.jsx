import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
  function onAdd(count) {
    console.log("soy onAdd y el valor del contador es:" , count );
  }
  return (
    <div className={props.clase}> {props.msg}
    <ItemCount stock={7} initial = {1} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer