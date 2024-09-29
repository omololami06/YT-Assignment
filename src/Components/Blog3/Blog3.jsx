import React from "react";
import { Image } from "cloudinary-react";
import { images } from "./blog3Data.json";
import admin from "../../assets/admin.svg";
import date from "../../assets/date.svg";
import wood from "../../assets/wood.svg";

const Blog3 = () => {
  return (
    <div className="min-h-screen mt-[-150px] p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-4">
              Exploring new ways of decorating
            </h1>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <a href="#" className="text-black-500 hover:underline">
              Read more
            </a>

            <Image
              loading="lazy"
              cloudName={images.cloudName}
              publicId={images.Rectangle_68_nsjk02.url}
              className="w-full h-auto object-cover mt-[66px]"
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

            <h1 className="text-3xl font-bold mb-4">
              Handmade pieces that took time to make
            </h1>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <a href="#" className="text-black-500 hover:underline">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
