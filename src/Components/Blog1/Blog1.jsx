import React from "react";
import { Image } from "cloudinary-react";
import { images } from "./blog1Data.json";
import search from "../../assets/search.svg";
import admin from "../../assets/admin.svg";
import date from "../../assets/date.svg";
import wood from "../../assets/wood.svg";

const Blog1 = () => {
  return (
    <div className="min-h-screen mt-[106px] p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-2/3">
            <Image
              loading="lazy"
              cloudName={images.cloudName}
              publicId={images.Rectangle_68_gdfxhp.url}
              className="w-full h-auto object-cover"
            />

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3 space-x-2 text-sm text-gray-600">
                <span className="flex gap-2">
                  <img src={admin} alt="" /> Admin
                </span>
                <span className="flex gap-2">
                  <img src={date} alt="" /> 14 Oct 2022
                </span>
                <span className="flex gap-2">
                  <img src={wood} alt="" /> Wood
                </span>
              </div>
            </div>
          </div>

          <div className="w-[393px] md:w-1/3 p-4">
            <div className="  flex items-center justify-between w-[311px] h-[58px] mt-6 mb-[43px] shadow rounded pr-3">
              <input type="text" placeholder="" />
              <img
                className="w-[19px] h-[19px] text-center"
                src={search}
                alt=""
              />
            </div>
            <div className="text-lg font-semibold mb-4 p-5">Categories</div>
            <ul className=" w-[251px] text-center p-5">
              <li className="flex justify-between mb-5">
                <span>Crafts</span>
                <span>2</span>
              </li>
              <li className="flex justify-between mb-5">
                <span>Design</span>
                <span>8</span>
              </li>
              <li className="flex justify-between mb-5">
                <span>Handmade</span>
                <span>7</span>
              </li>
              <li className="flex justify-between mb-5">
                <span>Interior</span>
                <span>1</span>
              </li>
              <li className="flex justify-between mb-5">
                <span>Wood</span>
                <span>6</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
