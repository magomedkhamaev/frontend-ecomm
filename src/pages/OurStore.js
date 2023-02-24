import React, { useCallback, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import ShopCategories from '../components/ShopCategories';
import FilterBy from "../components/FilterBy";
import { useDispatch, useSelector } from "react-redux";
import ProductTags from "../components/ProductTags";
import RandomProducts from "../components/RandomProduct";
import SortProduct from "../components/SortProduct";
import { fetchProducts } from "../redux/slices/product";
import Product from "../components/Product";

const OurStore = () => {
  const dispatch = useDispatch();
  const {items,status} = useSelector((state) => state.products.products)
 const {value, price, color, sSize, mSize, sort} = useSelector((state) => state.filter)
  // const gt = useSelector((state) => state.filter)
  const check = status === 'loading'; 
   
  const getProducts = async () => {
    const priceFrom = value  ? `price[gte]=${value}` : '';
    const priceTo = price  ? `&price[lte]=${price}` : '';
    const setColor = color ? `&color=${color}` : '';
    const fSize = sSize ? `&size=${sSize}` : '';
    const secSize = mSize ? `&size=${mSize}` : '';
    const sortBy = sort ? `&sort=${sort}` : '';

    dispatch(fetchProducts({priceFrom, priceTo,setColor, secSize, fSize, sortBy}))
   }
 
   React.useEffect(() => {
     getProducts();
   }, [value,price, color, sSize,mSize,sort])
   console.log(items);
  // const FetchProd = useCallback(()=> {
  //   getProducts();
  // }, [priceStart])
  // console.log(items);
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
           {/* <ShopCategories/> */}
           <FilterBy/>
            {/* <ProductTags/> */}
            <RandomProducts/>
          </div>
          <div className="col-9">
            <SortProduct/>
          <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
              {(check ? [...Array(5)] : items).map((obj, index) =>  
           check ? (
           <Product key={index} isLoaiding={true}/>
           ) : (
            <Product
              id={obj._id}
              title={obj.title}
               //imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
              //  images={`http://localhost:5000${obj.images}`}
              images={obj.images}
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
          )}
              </div>
            </div>
            </div>
          {/* <SortProduct/> */}
          
        </div>
      </Container>
    </>
  );
};

export default OurStore;
