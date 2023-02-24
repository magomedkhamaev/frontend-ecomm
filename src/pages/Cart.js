import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, Navigate } from "react-router-dom";
import Container from "../components/Container";
import {useDispatch, useSelector} from "react-redux";
import { fetchCart } from "../redux/slices/cart";
import ProductCart from "../components/ProductCart";
import axios from "../utils/axios";
import { fetchCreateOrder } from "../redux/slices/order";

const Cart = () => {
  const dispatch = useDispatch();
  const {cart, status} = useSelector((state)=> state.cart);
  // const isLoading = status === 'loading';
  const [data, setData] = useState();
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get(`/user/cart`).then((res) => {
      setData(res.data);
      setLoading(false);
    }).catch((err) => {
      console.warn(err);
      alert('mistake on get arcticle');
    });
  }, []);
  
  const BuyItNow = async () => {
    const orderItem = {
      "COD": true
    }
    dispatch(fetchCreateOrder(orderItem))
  }
  // console.log(data);
  // if(!data) {
  //   return <>Load...</>
  // }
  if (isLoading) {
    return <ProductCart isLoading={isLoading}/>;
   }

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {/* {(isLoading ? [...Array(5)] : cart).map((obj, index) =>  
           isLoading ? (
           <ProductCart key={index}/>
           ) : (
            <ProductCart
              id={obj._id}
              cartTotal={obj.cartTotal}
               //imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
              imageUrl={`http://localhost:4444${obj.imageUrl}`}
              orderby={obj.orderby}
              createdAt={obj.createAt}
              products={obj.products}
              // commentsCount={obj.commentsCount}
              // text={obj.text}
              // tags={obj.tags}
              // isEditable={userData?._id === obj.user._id}
            />
          ),
          )}; */}
          {/* {data.map((obj) => ( 
         <ProductCart key={obj._id} {...obj}/>
      ))} */}
            <ProductCart 
            id={data._id}
            cartTotal={data.cartTotal}
            orderby={data.orderby}
            products={data.products}
            />
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ {data.cartTotal}</h4>
                <p>Taxes and shipping calculated at checkout</p>
                {/* <Link to="/checkout" className="button">
                  Checkout
                </Link> */}
                <button onClick={BuyItNow} className="button">
                  Buy it now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
