import React from 'react'

const ItemListContainer = (props) => {
  return (
    <div className={props.clase}> {props.msg} </div>
  )
}

export default ItemListContainer