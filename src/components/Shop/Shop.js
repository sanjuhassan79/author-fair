import React, { useEffect,useState } from 'react';
import Product from '../Author/Author';
import Cart from '../Cart/Cart'




const Shop = () => {
// Load Prodact Item
const [Products,setProducts]=useState([])
const [cart, setCart] = useState([])
useEffect(() => {
   fetch('./products.JSON')
   .then(res=>res.json())
   .then(data=>setProducts(data))
}, []);

// add event handle

const addToCartHandle=(product)=>{
console.log('hi');
    const newCart=[...cart,product]
    setCart(newCart)
}




    return (
        <div className="container-fluid">
          <div className="row">
              <div className="col-lg-10">
              <div className="row row-cols-1 row-cols-md-3 g-4">
          {
Products.map(product=><Product
key={product.id}
product={product}
addToCartHandle={addToCartHandle}


></Product>)


          }

           </div>
              </div>
              <div className="col-lg-2">
              <div className="Card">
               <Cart
               key={cart.id}
               
               cart={cart}
               ></Cart>
           </div>
              </div>








          </div>

           
        </div>
    );
};

export default Shop;