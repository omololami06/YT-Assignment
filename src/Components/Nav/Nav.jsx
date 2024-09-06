import React from "react";
import logo from "../../assets/logo.svg";
import img from "../../assets/img.svg";
import search from "../../assets/search.svg";
import favorite from "../../assets/favorite.svg";
import cart from "../../assets/cart.svg";
const Nav = () => {
  return (
    <nav>
      <ol className="flex items-center justify-between px-[60px] py-[29px]">
        <li>
          <img src={logo} alt="logo" />
        </li>

        <li className="flex items-center gap-[50px]  font-poppins">
          <a className="text-base " href="">
            Home
          </a>
          <a className="text-base " href="">
            Shop
          </a>
          <a className="text-base " href="">
            About
          </a>
          <a className="text-base " href="">
            Contact
          </a>
        </li>

        <li className="flex items-center gap-[30px]">
          <img src={img} alt="" />
          <img src={search} alt="" />
          <img src={favorite} alt="" />
          <img src={cart} alt="" />
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
