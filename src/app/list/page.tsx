import Filter from "@/components/Filter";
import ProductList2 from "@/components/ProductList2";
import Image from "next/image";
import React from "react";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className=" bg-pink-50 p-4 flex md:flex-row flex-col justify-between md:h-64 sm:items-center sm:gap-20">
        <div className="md:w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">Grab up to 50% of on<br/> Selected Products</h1>
          <button className="rounded-3xl bg-pinky text-white w-max py-3 px-5 text-sm">buy now</button>
        </div>
        <div className="relative w-1/3 h-[inherit]">
          <Image
            src="/woman.png"
            alt="category list page"
            className="object-contain relative"
            fill
          />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">Shoes for you</h1>
      <ProductList2 />
    </div>
  );
};

export default ListPage;
