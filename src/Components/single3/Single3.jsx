import React from "react";
import { Image } from "cloudinary-react";
import { related } from "./single3Data.json";

const Single3 = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-10 mx-auto max-w-screen-xl">
        <h2 className="text-[36px] font-bold">Related Products</h2>
        <ul className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-poppins">
          {related.map((each) => (
            <div className="relative" key={each.id}>
              <Image
                cloudName={each.cloudName}
                publicId={each.publicId}
                loading="lazy"
                className="relative"
              />
              {each.discount && (
                <div className="absolute top-6 bg-red-400 text-white px-3 py-4 rounded-full w-12 h-12 text-xs  ">
                  <h5>{each.discount}</h5>
                </div>
              )}
              <div className="">
                <h3 className="font-semibold text-[25px]">{each.name}</h3>
                <p className="text-gray-500 text-sm"> {each.description}</p>
                <div className="flex gap-5">
                  <p className="font-semibold"> {each.price}</p>
                  <div>
                    <p className="line-through text-gray-500">
                      {each.oldPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Single3;
