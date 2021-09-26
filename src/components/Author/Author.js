import React from 'react';

import './Author.css'

const Product = (props) => {
    // console.log(props.product);
    const {name,image,book_name,country,age,book_price}=props.product;
    // const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
             <div className="card cardextr">
                        <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="..."/>
                    </div>

                    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title  fw-bold"> <span className="text-uppercase">Name</span> :{name}</h5>
        <p className="card-text detail"> <span className="text-uppercase">Book Name</span> : {book_name}</p>
        <p className="card-text detail"> <span className="text-uppercase">Country</span> : {country}</p>
        <p className="card-text detail"> <span className="text-uppercase">Age</span> : {age}</p>
        <p className="card-text detail"> <span className="text-uppercase">Book Price</span> :$ {book_price}</p>
        <button onClick={()=>props.addToCartHandle(props.product)} type="button" className="btn btn-secondary"><i class="fas fa-shopping-cart"></i>  Add To Cart</button>
      </div>
    </div>
    </div>
        </div>
    );
};

export default Product;