import React, { useEffect, useState } from 'react'
import Header from './Header'
import Card from '../Inventory/Card'
import About from '../About/About';
const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then(res => res.json())
      .then(json => setProduct(json))
  }, []);
  
  return (
    <main className='home'>
      <Header />
      <About />
      <div className="container">
        <h1 className='text-center py-5'>Products</h1>
        <div className="grid-3-col">
          {
            product.slice(0,6).map(prod => <Card
            key={prod._id}
              desc={prod.description}
              image={prod.image}
              name={prod.name}
              suplier={prod.suplier}
              quantity={prod.quantity}
              price={prod.price}
              to={prod._id}
            />


            )
          }
        </div>
      </div>
    </main>
  )
}

export default Home