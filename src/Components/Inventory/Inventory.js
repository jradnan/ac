import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Inventory.css'
const Inventory = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then(res => res.json())
      .then(json => setProduct(json))
  }, []);
  const deliver =(id)=>{
    // const url = `http://localhost:5000/product/${id}`;
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify('data')
    //     })
    //     .then(res=> res.json())
    //     .then(result =>{
    //         console.log(result);
    //     } )
  }
  return (
    <div className='container mt-5'>
      <div className="">
        {
          product.map(prod => <div>
          <div className='manage-inv'>
           
            <div className="group d-flex">
            <img src={prod.image} alt="" />
            <h5>Name : {prod.name}</h5>
             <h5>Price : {prod.price}</h5>
             <h5>Quantity : {prod.quantity}</h5>
            </div>
             <div className='btn-group'>
             <button onClick={() => deliver(prod._id)} className='btn btn-success'>Deliver</button>
             
             <button className='btn btn-primary'>Update</button>
             <button className='btn btn-danger'>Delete</button>
             </div>
          </div>
          </div>


          )
        }
      </div>
    </div>
  )
}

export default Inventory