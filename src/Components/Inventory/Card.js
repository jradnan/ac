import React from 'react'

const Card = (props) => {
  return (
    <div className='inventory-card'>   
    <div style={{ 
      backgroundImage: `url(${props.image})` 
    }} className='inv-image'></div>
    {/* image end  */}
    <p>Name : {props.name}</p>
    <p>Suplier : {props.suplier}</p>
    <p>Price : {props.price}</p>
    <p>Quantity : {props.quantity}</p>
    <p>{props.desc.slice(0 , 110)} </p>
    </div>
  )
}

export default Card