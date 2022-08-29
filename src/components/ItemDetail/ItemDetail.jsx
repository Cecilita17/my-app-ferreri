import React from 'react'

const ItemDetail = ({ item }) => {
  const {title, priceRegular, url } = item;
  return (
    <div>
      <h1>{title}</h1>
      <img src={url} alt="" />
      <h3>{priceRegular}</h3>
    </div>
  )
}

export default ItemDetail