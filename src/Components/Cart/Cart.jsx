import React from "react";
import logo2 from "../../assets/logo2.svg";
import pointer from "../../assets/pointer.svg";
import "./cart.scss";
import { Image } from "cloudinary-react";
import { images } from "../../../data/Shop1.json";
import Topfooter from "../Topfooter/Topfooter";

const Cart = () => {
  return (
    <div id="Cart">
      <div className="section1 h-[316px]">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-[61px]">
            <img src={logo2} alt="logo" />
          </div>
          <div className="w-[107px] h-[72px] font-poppins font-semibold text-[48px] flex flex-col items-center justify-center">
            <h3>Cart</h3>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-2 mt-3">
          <div> Home</div>
          <div className="w-[14px] h-2">
            <img src={pointer} alt="" />
          </div>
          <div>Cart</div>
        </div>
      </div>

      <div className="  mx-auto flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-[80px]">
          <div className="space-y-8">
            <div className="bg-[#F9F1E7] flex items-center justify-around h-[55px] ">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>

            <div className=" flex items-center justify-around mt-[62px]">
              <span>
                <Image
                  className="w-[111px] h-[90px] bg-[#F9F1E7]"
                  loading="lazy"
                  cloudName={images.cloudName}
                  publicId={images.Asgaardsofa3.url}
                />
              </span>
              <span>Asgaard sofa</span>
              <span>RS 250,000.00</span>
              <span>1</span>
              <span>RS 250,000.00</span>
            </div>
          </div>

          <div className="w-[393px] bg-[#F9F1E7] flex flex-col items-center justify-center py-5">
            <h2 className="text-[32px] mb-[61px] font-bold">Cart Totals</h2>

            <div className="flex items-center gap-7 mb-[31px]">
              <span className="font-semibold">Subtotal</span>
              <span className="text-gray-400">RS 250,000.00</span>
            </div>
            <div className="mb-[42px] flex items-center gap-7">
              <span className="font-semibold">Total</span>
              <span className="text-[#B88E2F] text-[25px]">RS 250,000.00</span>
            </div>

            <div className="w-[222px] h-[50px] text-center border border-black rounded-full p-3 font-poppins font-bold text-[20px]">
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>

      <Topfooter />
    </div>
  );
};

export default Cart;
