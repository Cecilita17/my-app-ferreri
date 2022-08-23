import React from 'react';
import Item from '../Item/Item';
import './ItemList.scss';

const ItemList = ({products, title, clase, description, priceRegular, priceMedium, url}) => {
  return (
      <div className='sectionPizza'>
          {products.map((item, index) => (
              <Item key = {index} products = {products} title = {item.title} clase = {item.clase} description = {item.description} priceRegular = {item.priceRegular} priceMedium = {item.priceMedium} url = {item.url} />
          ))}
    </div>
  )
}

export default ItemList