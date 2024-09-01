"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/3429783/pexels-photo-3429783.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(1);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt="product image"
          fill
          sizes="25vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-row justify-between gap-4 mt-8">
        {images.map((image,i) => (
          <div key={image.id} className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" onClick={()=>setIndex(i)}>
            <Image
              src={image.url}
              alt="product image"
              fill
              sizes="25vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
     
      </div>
    </div>
  );
};

export default ProductImages;
