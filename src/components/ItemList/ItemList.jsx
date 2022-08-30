import React from 'react';
import Item from '../Item/Item';
import './ItemList.scss';

const ItemList = ({products}) => {
  return (
      <div className='sectionPizza'>
          {products.map((item, index) => (
              <Item key = {index} products = {products} id={item.id} title = {item.title} clase = {item.clase} description = {item.description} priceRegular = {item.priceRegular} priceMedium = {item.priceMedium} url = {item.url} />
          ))}
    </div>
  )
}

export default ItemList