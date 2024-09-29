import React from "react";
import { Image } from "cloudinary-react";
import { images } from "../../../data/Shop1.json";
import "./shop1.scss";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";
import { useNavigate } from "react-router-dom";
import { products } from "./shopProduct.json";
import { useState } from "react";

const Shop1 = () => {
  // State to keep track of the cart count
  const [cartCount, setCartCount] = useState(0);

  // Function to handle adding to cart
  const handleAddToCart = () => {
    // Increment the cart count
    setCartCount(cartCount + 1);
  };

  const navigate = useNavigate();
  // Navigate to the compare page with the product's ID
  const handleComparison = () => {
    navigate(`/comparison/${products.id}`); // Add product ID for navigation
  };

  return (
    <div id="Shop1">
      <div className="flex flex-col items-center p-10 mx-auto max-w-screen-xl">
        <h2 className="text-[36px] font-bold"></h2>
        <ul className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-poppins">
          {products.map((each) => (
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

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
                <div className="text-center space-y-4">
                  <button
                    className="bg-white text-yellow-600 font-bold py-2 px-6 rounded-lg"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>

                  <div className="flex space-x-4 text-white">
                    <button className="hover:underline">Share</button>
                    <button
                      className="hover:underline"
                      onClick={handleComparison}
                    >
                      Compare
                    </button>
                    <button className="hover:underline">Like</button>
                  </div>
                </div>
              </div>
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

      {/* <Pagination itemsPerPage={4} /> */}
      {/* <SingleProduct /> */}
    </div>
  );
};

export default Shop1;
