import React from 'react'

const ItemDetail = ({ itemdetail }) => {
  const { id, title, clase, description, priceRegular, priceMedium, url } = itemdetail;
  return (
    <div>
      <h1>{title}</h1>
      <img src={url} alt="" />
      <h3>{price}</h3>
    </div>
  )
}

export default ItemDetail