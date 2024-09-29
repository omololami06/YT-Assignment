import React from "react";
import { Image } from "cloudinary-react";
import { images } from "./compare1.json";
import StarRating from "../Star/StarRating";
import pointer2 from "../../assets/pointer2.svg";

const Compare1 = () => {
  return (
    <div className="flex items-center justify-evenly mt-10">
      <div>
        <h2 className="w-[233px] text-3xl font-bold mb-4">
          Go to Product page for more Products
        </h2>
        <div>
          <button className="hover:underline text-[20px]">View More</button>
        </div>
      </div>

      <div className="w-[280px] ">
        <Image
          loading="lazy"
          cloudName={images.cloudName}
          publicId={images.Asgaardsofa3.url}
          className="w-[239px] bg-[#F9F1E7]"
        />

        <div className="p-4">
          <h1 className="text-lg font-bold mb-2">Asgaard Sofa</h1>
          <div className="text-2xl font-semibold text-gray-700 mb-1">
            Rs. 250,000.00
          </div>

          <div className="flex items-center gap-2">
            <div>
              <h3>4.7</h3>
            </div>
            <div>
              <StarRating rating={4.7} />
            </div>
            <div className="text-gray-600 mt-1">| 204 Reviews</div>
          </div>
        </div>
      </div>

      <div className="w-[280px]">
        <Image
          loading="lazy"
          cloudName={images.cloudName}
          publicId={images.Outdoor_sofa_set_1_gyymwo.url}
          className="w-[239px] bg-[#F9F1E7]"
        />

        <div className="p-4">
          <h1 className="text-lg font-bold mb-2">Outdoor Sofa Set</h1>
          <div className="text-2xl font-semibold text-gray-700 mb-1">
            Rs. 224,000.00
          </div>

          <div className="flex items-center gap-2">
            <div>
              <h3>4.2</h3>
            </div>
            <div>
              <StarRating rating={4.7} />
            </div>
            <div className="text-gray-600 mt-1">| 145 Reviews</div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-2xl">Add A Product</h2>

        <div className="flex items-center justify-around text-white bg-[#B88E2F] mt-3 rounded w-[242px] h-[39px]">
          <div>
            <button>choose a product</button>
          </div>

          <div>
            <img src={pointer2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare1;
