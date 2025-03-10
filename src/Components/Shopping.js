import React from 'react'
import Card from './Card'

const Shopping = ({product, addToCart}) => {
 return (
 <div className='cardContainer'>
 {product.map((item) => {
return (
  <Card 
  title={item.title}
  image = {item.image}
  price = {item.price}
  index = {item.index}
  addToCart = {addToCart}
  />
)
 })}
 </div>
 )
}

export default Shopping