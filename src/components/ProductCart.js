import React, { useState } from "react";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";

const ProductCart = ({id,cartTotal, orderby, products,isLoading}) => {
    const [value, setValue] = useState();
    if(isLoading) {
        return <>LOADDD...</>
    }
    console.log(products[0]);
    return <>
    <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} className="img-fluid" alt="product image" />
                </div>
                <div className="w-75">
                  <p>{products[0].product.title}</p>
                  <p>Size: {products[0].product.size}</p>
                  <p>Color: {products[0].product.color}</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ {products[0].product.price}</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  {/* <input
                    className="form-control"
                    type="number"
                    name=""
                    value={products[0].count}
                    onChange={(e) => setValue(e.target.value)}
                    min={1}
                    max={10}
                    id=""
                  /> */}
                  <p className="form-control">{products[0].count}</p>
                </div>
                {/* <div>
                  <AiFillDelete className="text-danger " />
                </div> */}
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ {products[0].product.price * products[0].count }</h5>
              </div>
            </div>
    </>
}

export default ProductCart;