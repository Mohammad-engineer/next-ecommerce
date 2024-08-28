"use Client";

import Image from "next/image";

const CartModal = () => {

  const cartItems = true;

  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 ring-0 flexf flex-col gap-6 z-20">
      {cartItems ? (
        <div className="">
          <Image
            src="https://images.pexels.com/photos/27584196/pexels-photo-27584196/free-photo-of-cane-straw-chair-in-room-with-clay-vases.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            //src=''
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div className="">
            {/* TOP */}
            <div>
            {/* TITLE */}
            <div>
                <h3>product name</h3>
                <div className=""> $49</div>
            </div>

            </div>
            {/* DESC */}
            <div className="">
                available
            </div>
            {/* BOTTOM */}

          </div>
        </div>
      ) : (
        <div>Cart is Empty</div>
      )}
    </div>
  );
};

export default CartModal;
