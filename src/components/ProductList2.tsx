import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductList2 = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/product1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0"
          />
          <Image
            src="https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">product.name</span>
          <span className="font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500"></div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-pinky hover:text-white">
          Add to Cart
        </button>
      </Link>
      
      <Link href="/product1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0"
          />
          <Image
            src="https://images.pexels.com/photos/210143/pexels-photo-210143.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">product.name</span>
          <span className="font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500"></div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-pinky hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link href="/product1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0"
          />
          <Image
            src="https://images.pexels.com/photos/1005617/pexels-photo-1005617.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">product.name</span>
          <span className="font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500"></div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-pinky hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link href="/product1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0"
          />
          <Image
            src="https://images.pexels.com/photos/164654/pexels-photo-164654.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">product.name</span>
          <span className="font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500"></div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-pinky hover:text-white">
          Add to Cart
        </button>
      </Link>
      
    </div>
  );
};

export default ProductList2;
