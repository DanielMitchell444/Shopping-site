import React from 'react'



const Card = ({title, index, image, price, addToCart}) => {
 return (
 <div className= "card" data-id = {index}>
    <img src = {image} />
   <h1>{title}</h1>
   <h3>${price}</h3>
   <button onClick={() => addToCart({title, image, price})}>Add to Cart</button>
 </div>
 )
}

export default Card