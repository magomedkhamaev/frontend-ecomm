import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { fetchOrder } from "../redux/slices/order";
import Order from "../components/Order";
const User = () => {
    const dispatch = useDispatch();
    const {items, status} = useSelector((state) => state.order.order)
    const load = status === 'loading';
    React.useEffect(()=> {
     dispatch(fetchOrder());
    }, [])
    if (load) {
        return <>lOAD...</>
    }
    
    return <>
    <h2 style={{textAlign: 'center', marginTop: "14px"}}>Order Page</h2>
    {/* <div className="col-12"> */}
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-1">Price</h4>
              <h4 className="cart-col-1">Count</h4>
              <h4 className="cart-col-1">orderStatus</h4>
              <h4 className="cart-col-1">payment Intent</h4>
              <h4 className="cart-col-1">orderBy</h4>
              <h4 className="cart-col-1">amount</h4>
            </div>
            {/* <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} className="img-fluid" alt="product image" />
                </div>
                <div className="w-75">
                  <p>{items[4].products[0].product.title}</p>
                  <p>Size: {items[4].products[0].product.size}</p>
                  <p>Color: {items[4].products[0].product.color}</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ {items[4].products[0].product.price}</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
              {items[4].products[0].count}
              </div>
              <div className="cart-col-4">
                <h5 className="price">{items[4].orderStatus}</h5>
              </div>
              <div className="cart-col-5">
                <h5 className="price">{items[4].paymentIntent.status}</h5>
              </div>
              <div className="cart-col-6">
                <h5 className="price">{items[4].orderby.firstname}</h5>
                <h5 className="price">{items[4].orderby.lastname}</h5>
              </div>
            </div> */}
            {items.map((obj) => ( 
         <Order key={obj.id} {...obj}/>
      ))}
            {/* <ProductCart 
            id={data._id}
            cartTotal={data.cartTotal}
            orderby={data.orderby}
            products={data.products}
            /> */}
          {/* </div> */}
    </>
}

export default User;