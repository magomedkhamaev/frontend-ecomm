import React from "react";

const WishProd = ({title, price, totalrating}) => {
    // if (isLoading) {
		// return <>WWWWW...</>;
	  // }
    
    return <>
    <div className="col-3">
            <div className="wishlist-card position-relative">
              {/* <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              /> */}
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                {title} 
                </h5>
                 <h6 className="price">$ {price}</h6>
              </div>
            </div>
          </div>
    </>
}

export default WishProd;