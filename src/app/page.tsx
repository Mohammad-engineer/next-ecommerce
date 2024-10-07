'use client'

// import CategoryList from "src/components/CategoryList";
import ProductList2 from "src/components/ProductList2";
//import ProductList from "src/components/ProductList";
import Slider from "src/components/Slider";
import SpecialCategory from '../components/special-category.jsx'
// import { WixClientContext } from "src/context/wixContext";
// import { useContext, useEffect } from "react";
import {CategoriesHeader, CategoriesCarousel} from 'src/sections/categories';
import TwoImage from 'src/sections/twoImage/twoImage.jsx'

const HomePage = () => {

  // const WixClient = useContext(WixClientContext);


  // useEffect(()=>{
  //   const getProducts = async()=>{
  //     const res = await WixClient.products.queryProducts().find();
  //     console.log({res})
  //   }
  //   getProducts()
  // },[WixClient])

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Feature Products</h1>
        <ProductList2 />
      </div>
      <div className="mt-36 ">
        {/* <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1> */}
        <CategoriesHeader />
        <CategoriesCarousel />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
        <TwoImage />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList2 />
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <SpecialCategory />
      </div>
    
    </div>
  );
};

export default HomePage;
