"use Client";

import Image from "next/image";
import { useRouter } from 'next/navigation'



const CartModal = () => {
  const cartItems = true;
  const router = useRouter()

  const checkoutHandler = ()=>{
    router.push('/product/checkout')
  }

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flexf flex-col gap-6 z-20">
      {cartItems ? (
        <>
          {/*  LIST */}
          <h2 className="text-xl mb-3">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/27584196/pexels-photo-27584196/free-photo-of-cane-straw-chair-in-room-with-clay-vases.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                //src=''
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm"> $49</div>
                  </div>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">available</div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty.2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/27584196/pexels-photo-27584196/free-photo-of-cane-straw-chair-in-room-with-clay-vases.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                //src=''
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm"> $49</div>
                  </div>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">available</div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty.2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/*  BOTTOM */}
          <div className="mt-5">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$98</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-2">
              Utilities for controlling the text color of an element.
            </p>
            <div className="flex justify-between text-sm mt-3">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                <button onClick={checkoutHandler} className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
            </div>
          </div>
        </>
      ) : (
        <div>Cart is Empty</div>
      )}
    </div>
  );
};

export default CartModal;
