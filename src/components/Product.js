import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const Product = ({id, title, desc, color,price,brand, ratings, isLoading, images}) => {
  let location = useLocation();
//  console.log(images);
 if(!images) {
  return <>Images loading...</>
 }
  if(isLoading) {
    return <>Load...</>
  }
    return <>
    <div
        // className={` ${
        //   location.pathname == "/product" ? `gr-${grid}` : "col-3"
        // } `}
      >
        <Link
          // to={`${
          //   location.pathname == "/"
          //     ? "/product/:id"
          //     : location.pathname == "/product/:id"
          //     ? "/product/:id"
          //     : ":id"
          // }`}
          to={`${id}`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch2} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">{brand}</h6>
            <h5 className="product-title">
              {title}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={ratings}
              edit={false}
              activeColor="#ffd700"
            />
            <p 
            // className={`description ${grid === 12 ? "d-block" : "d-none"}`}
            >
              {desc}
            </p>
            <p className="price">${price}</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        // className={` ${
        //   location.pathname == "/product" ? `gr-${grid}` : "col-3"
        // } `}
      >
        {/* <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch2} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">{brand}</h6>
            <h5 className="product-title">
              {title}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p 
            // className={`description ${grid === 12 ? "d-block" : "d-none"}`}
            >
              {desc}
            </p>
            <p className="price">${price}</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link> */}
      </div>
    </>
}

export default Product;