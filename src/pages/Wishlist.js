import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import WishProd from "../components/WishProd";
import {useDispatch, useSelector} from "react-redux";
import { fetchWish } from "../redux/slices/wish";

const Wishlist = () => {
  const dispatch = useDispatch();
  const {items, status} = useSelector((state) => state.wish.productWish);
  const load = status === 'loading';
  // const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
   dispatch(fetchWish())
  //  setLoading(false);
  }, [])
  // console.log(items);
  // console.log(wish, 'hhh');
  if (load) {
    return <>lOAD...</>
}
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        
         
          {/* {(check ? [...Array(5)] : items &&)( 
           check ? (
           <WishProd key={index}/>
           ) : (
            <WishProd
              id={obj._id}
              title={obj.title}
               //imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
              imageUrl={`http://localhost:5000${obj.imageUrl}`}
              desc={obj.desc}
              brand={obj.brand}
              quantity={obj.quantity}
              color={obj.color}
              ratings={obj.totalrating}
              category={obj.category}
              price={obj.price}
              // isEditable={userData?._id === obj.user._id}
            />
          ),
          )}  */}
          {/* {check ? [...Array(5)] : <WishProd items={items} />} */}
          {items.wishlist.map((obj) => ( 
         <WishProd key={obj._id} {...obj}/>
      ))}
          {/* <WishProd/>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          {/* <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div> */}
        
      </Container>
    </>
  );
};

export default Wishlist;
