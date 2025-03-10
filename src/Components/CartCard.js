import React from 'react'



const CartCard = ({title, image, price, index, removeItem}) => {
 return (
    <div className= "card" data-id = {index}>
    <img src = {image} />
   <h1>{title}</h1>
   <h3>${price}</h3>
   <button onClick={() => removeItem({title, price, image})} >Remove Item</button>
 </div>
 )
}

export default CartCard