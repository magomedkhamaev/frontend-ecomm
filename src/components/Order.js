import React from 'react';
import watch from "../images/watch.jpg";
const Order = ({orderStatus, orderby, products, paymentIntent}) => {
  // console.log();
    return <>
    <div className="col-12">
    <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-75">
                  <img src={watch} className="img-fluid" alt="product image" />
                </div>
                <div className="w-75">
                  <p>{products[0].product.title}</p>
                  {/* <p>Size: {products[0].product.size}</p>
                  <p>Color: {products[0].product.color}</p> */}
                </div>
              </div>
              <div className="cart-col-1">
                <h5 className="price">$ {products[0].product.price}</h5>
              </div>
              <div className="cart-col-1 d-flex align-items-center gap-15">
              {products[0].count}
              </div>
              <div className="cart-col-1">
                <h5 className="price">{orderStatus}</h5>
              </div>
              <div className="cart-col-1">
                <h5 className="price">{paymentIntent.status}</h5>
              </div>
              <div className="cart-col-1">
                <h5 className="price">{orderby.firstname}</h5>
                <h5 className="price">{orderby.lastname}</h5>
              </div>
              <div className="cart-col-1">
                <h5 className="price">{paymentIntent.amount}</h5>
              </div>
            </div>
            </div>
    </>
}
export default Order;