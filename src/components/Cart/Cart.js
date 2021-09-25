import React from 'react';

const Cart = (props) => {
    
const {cart}=props;
const total=cart.reduce((previousValue, currentValue) => previousValue + currentValue.book_price,0);

const allTotal=total;

    return (
        <div>

        <h1 className="text-center">Author Added</h1>
        <p className="card-text detail"> <span className="text-uppercase"> Price</span> : {total.toFixed(2)}</p>
        <p className="card-text detail"> <span className="text-uppercase">Total Book Price</span> : {allTotal.toFixed(2)}</p>




            <div className="card" style={{width: "18 rem"}}>
            
                <ul className="list-group list-group-flush">
               {
                    cart.map(name=><li className="list-group-item">{name.name}</li>)
               }
                </ul>
            </div>
        </div>
    );
};

export default Cart;