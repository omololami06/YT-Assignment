import React from "react";
import { Image } from "cloudinary-react";
import { images } from "../../../data/Shop1.json";
import "./shop1.scss";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { products } from "./shopProduct.json";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { cartData } from "../Atoms/CartAtoms";
import { toast, ToastContainer } from "react-toastify";

const Shop1 = ({ show, setShow }) => {
  const handleShareClick = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    // Show toast message on success
    toast.success("URL Copied to Clipboard!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleLikeClick = (id) => {
    setLikedProducts((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // const [products, setProducts] = useState(ProductsData);
  const [showToast, setShowToast] = useState(false);
  const [likedProducts, setLikedProducts] = useState({});
  const [cart, setCart] = useRecoilState(cartData);
  const [viewedItems, setViewedItems] = useState([]);

  function handleAddToCart(data) {
    // Rename to avoid conflict with imported addToCartAction
    if (cart.find((x) => x.id === data.id)) {
      console.log("found");
    } else {
      console.log("not found");
      setCart([...cart, data]);
      setViewedItems([...viewedItems, data.id]);
    }
  }

  let handleClose = (e) => {
    setShow((prev) => !prev);
  };

  let redir = useNavigate();

  return (
    <div id="Shop1">
      <div className="flex flex-col items-center p-10 mx-auto max-w-screen-xl">
        <h2 className="text-[36px] font-bold"></h2>
        <ul className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-poppins">
          {products.map((products) => (
            <div className="relative" key={products.id}>
              <Image
                cloudName={products.cloudName}
                publicId={products.publicId}
                loading="lazy"
                className="relative"
              />
              {products.discount && (
                <div className="absolute top-6 bg-red-400 text-white px-3 py-4 rounded-full w-12 h-12 text-xs  ">
                  <h5>{products.discount}</h5>
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
                    <div>
                      <button
                        onClick={handleShareClick}
                        className="hover:underline"
                      >
                        Share
                      </button>
                    </div>

                    <div>
                      <button
                        className="hover:underline"
                        onClick={(e) => {
                          handleClose(e);
                          redir("/SingleProduct");
                        }}
                      >
                        Compare
                      </button>
                    </div>

                    <div onClick={() => handleLikeClick(products.id)}>
                      <button className="hover:underline">
                        {likedProducts[products.id] ? "Liked" : "Like"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <h3 className="font-semibold text-[25px]">{products.name}</h3>
                <p className="text-gray-500 text-sm"> {products.description}</p>
                <div className="flex gap-5">
                  <p className="font-semibold"> {products.price}</p>
                  <div>
                    <p className="line-through text-gray-500">
                      {products.oldPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>

      {/* {showToast && <div className="toast"></div>} */}

      {/* <Pagination itemsPerPage={4} /> */}
    </div>
  );
};

export default Shop1;
