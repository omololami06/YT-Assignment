import React from "react";
import cartbag from "../../assets/cartbag.svg";
import classNames from "classnames";
import { useLinkClickHandler } from "react-router-dom";

const CartSlider = ({ show, setShow }) => {
  let handleClose = (e) => {
    setShow((prev) => !prev);
  };
  return (
    <div
      className={classNames(
        "fixed top-0 left-0 w-[100%] min-h-[3107px] inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300",
        { hidden: !show }
      )}
    >
      <div className=" fixed top-0 right-0 w-[417px] min-h-[600px] bg-white text-black ">
        <div className=" flex items-center justify-between space-y-4 mt-7 font-poppins font-bold text-[30px]">
          <div>
            <h4>Shopping Cart</h4>
          </div>
          <div onClick={handleClose}>
            <img className="cursor-pointer" src={cartbag} alt="cart bag" />
          </div>

          <hr />
        </div>

        <div className="mt-[108px]">
          <h6>Subtotal</h6>
        </div>

        <hr />

        <div className="flex items-center justify-around  text-black mt-[188px]">
          <button className="border-2 border-black rounded-full  p-2 ">
            Cart
          </button>
          <button className="border-2 border-black rounded-full  p-2 ">
            Checkout
          </button>
          <button className="border-2 border-black rounded-full  p-2 ">
            Comparison
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSlider;
