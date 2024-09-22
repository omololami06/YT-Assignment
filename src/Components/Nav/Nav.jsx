import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import img from "../../assets/img.svg";
import search from "../../assets/search.svg";
import favorite from "../../assets/favorite.svg";
import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";
import CartSlider from "../Slider/CartSlider";
const Nav = () => {
  let [show, setShow] = useState(false);
  return (
    <nav>
      <ol className="flex items-center justify-between px-[60px] py-[29px]">
        <li>
          <img src={logo} alt="logo" />
        </li>

        <li className="flex items-center gap-[50px]  font-poppins">
          <Link className="text-base " to="/">
            Home
          </Link>
          <Link className="text-base " to="Shop">
            Shop
          </Link>
          <Link className="text-base " to="About">
            About
          </Link>
          <Link className="text-base " to="Contact">
            Contact
          </Link>
          <Link className="text-base " to="Blog">
            Blog
          </Link>
        </li>

        <li className="flex items-center gap-[30px] cursor-pointer">
          <img src={img} alt="" />
          <img src={search} alt="" />
          <img src={favorite} alt="" />
          <img onClick={() => setShow((prev) => !prev)} src={cart} alt="cart" />
        </li>
      </ol>

      <CartSlider show={show} setShow={setShow} />
    </nav>
  );
};

export default Nav;
