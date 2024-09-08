import React from "react";
import "./background.scss";
import image from "../../assets/image.png";

const Background = () => {
  return (
    <div id="Background">
      <section className=" bg-cover bg-center h-screen flex items-center justify-end  ">
        <div className="h-[360px] p-8 rounded-lg shadow-lg max-w-lg mr-[75px] mt-[150px]">
          <p className="text-sm uppercase text-gray-500">New Arrival</p>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Discover Our New Collection
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg mt-12">
            Buy Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Background;
