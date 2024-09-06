import React from "react";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
import "./inner.scss";

const Inner = () => {
  return (
    <div id="Inner">
      <section className="flex items-center justify-center px-[100px]">
        <div>
          <h2>50+ Beautiful rooms inspiration</h2>
          <p className="text-base text-gray-500 leading-6 mt-1 mb-6 w-[368px]">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <div className="border bg-yellow-600 w-[176px] text-center">
            <button className="text-white font-poppins py-2">
              Explore More
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <div className="mt-10">
            <img src={img1} alt="" />
          </div>
          <div className="mb-7">
            <img src={img2} alt="" />
          </div>
          <div className="mb-7">
            <img src={img3} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inner;
