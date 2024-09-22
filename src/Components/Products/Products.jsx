import React from "react";
import cafe from "../../assets/cafe.svg";
import chair from "../../assets/chair.svg";
import big from "../../assets/big.svg";
import bar from "../../assets/bar.svg";
import grifo from "../../assets/grifo.svg";
import muggo from "../../assets/muggo.svg";
import ping from "../../assets/ping.svg";
import potty from "../../assets/potty.svg";
import "./products.scss";
import { useNavigate } from "react-router-dom";

const Products = () => {
  let redir = useNavigate();
  return (
    <div id="Products">
      <section className=" flex flex-col items-center justify-center mt-[56px]">
        <div className="mb-8 text-[40px] font-poppins font-bold">
          <h2>Our Products</h2>
        </div>

        <div>
          <div className="flex flex-row items-center justify-center gap-8 mb-8  ">
            <div className="relative">
              <img src={cafe} alt="chair" />
              <div className="absolute top-6 bg-red-400 text-white px-3 py-4 rounded-full w-12 h-12 text-xs text-center ">
                <h5>-30%</h5>
              </div>

              <div>
                <h3>Syltherine</h3>
                <p>Stylish cafe chair</p>
                <div className="flex gap-3">
                  <h4>Rp 2.500.000</h4>
                  <div>
                    <h6 className="line-through">Rp 3.500.000</h6>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
                <div className="text-center space-y-4">
                  <button className="bg-white text-yellow-600 font-bold py-2 px-6 rounded-lg">
                    Add to Cart
                  </button>

                  <div className="flex space-x-4 text-white">
                    <button className="hover:underline">Share</button>
                    <button className="hover:underline">Compare</button>
                    <button className="hover:underline">Like</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={chair} alt="chair" />

              <div>
                <h3>Leviosa</h3>
                <p>Stylish cafe chair</p>
                <h4>Rp 2.500.000</h4>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
                <div className="text-center space-y-4">
                  <button className="bg-white text-yellow-600 font-bold py-2 px-6 rounded-lg">
                    Add to Cart
                  </button>

                  <div className="flex space-x-4 text-white">
                    <button className="hover:underline">Share</button>
                    <button className="hover:underline">Compare</button>
                    <button className="hover:underline">Like</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={big} alt="chair" />
              <div className="absolute top-6 bg-red-400 text-white px-3 py-4 rounded-full w-12 h-12 text-xs text-center ">
                <h5>-50%</h5>
              </div>

              <div>
                <h3>Lolito</h3>
                <p>Luxury big sofa</p>
                <div className="flex gap-3">
                  <h4>Rp 7.000.000</h4>
                  <div>
                    <h6 className="line-through">Rp 14.000.000</h6>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
                <div className="text-center space-y-4">
                  <button className="bg-white text-yellow-600 font-bold py-2 px-6 rounded-lg">
                    Add to Cart
                  </button>

                  <div className="flex space-x-4 text-white">
                    <button className="hover:underline">Share</button>
                    <button className="hover:underline">Compare</button>
                    <button className="hover:underline">Like</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={bar} alt="chair" />
              <div className="absolute top-6 bg-green-300 text-white px-3 py-4 rounded-full w-12 h-12 text-xs text-center ">
                <h5>New</h5>
              </div>

              <div>
                <h3>Respira</h3>
                <p>Outdoor bar table and stool</p>
                <h4>Rp 500.000</h4>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
                <div className="text-center space-y-4">
                  <button className="bg-white text-yellow-600 font-bold py-2 px-6 rounded-lg">
                    Add to Cart
                  </button>

                  <div className="flex space-x-4 text-white">
                    <button className="hover:underline">Share</button>
                    <button className="hover:underline">Compare</button>
                    <button className="hover:underline">Like</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8">
            <div className="relative">
              <img src={grifo} alt="chair" />

              <div>
                <h3>Grifo</h3>
                <p>Night lamp</p>
                <h4>Rp 1.500.000</h4>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
                <div className="text-center space-y-4">
                  <button className="bg-white text-yellow-600 font-bold py-2 px-6 rounded-lg">
                    Add to Cart
                  </button>

                  <div className="flex space-x-4 text-white">
                    <button className="hover:underline">Share</button>
                    <button className="hover:underline">Compare</button>
                    <button className="hover:underline">Like</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={muggo} alt="chair" />
              <div className="absolute top-6 bg-green-300 text-white px-3 py-4 rounded-full w-12 h-12 text-xs text-center ">
                <h5>New</h5>
              </div>

              <div>
                <h3>Muggo</h3>
                <p>Small mug</p>
                <h4>Rp 150.000</h4>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
                <div className="text-center space-y-4">
                  <button className="bg-white text-yellow-600 font-bold py-2 px-6 rounded-lg">
                    Add to Cart
                  </button>

                  <div className="flex space-x-4 text-white">
                    <button className="hover:underline">Share</button>
                    <button className="hover:underline">Compare</button>
                    <button className="hover:underline">Like</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={ping} alt="chair" />
              <div className="absolute top-6 bg-red-400 text-white px-3 py-4 rounded-full w-12 h-12 text-xs text-center ">
                <h5>-50%</h5>
              </div>

              <div>
                <h3>Pingky</h3>
                <p>Cute bed set</p>
                <div className="flex gap-3">
                  <h4>Rp 7.000.000</h4>
                  <div>
                    <h6 className="line-through">Rp 14.000.000</h6>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
                <div className="text-center space-y-4">
                  <button className="bg-white text-yellow-600 font-bold py-2 px-6 rounded-lg">
                    Add to Cart
                  </button>

                  <div className="flex space-x-4 text-white">
                    <button className="hover:underline">Share</button>
                    <button className="hover:underline">Compare</button>
                    <button className="hover:underline">Like</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={potty} alt="chair" />
              <div className="absolute  top-6 text-wrap bg-green-400 text-white px-3 py-4 rounded-full w-12 h-12 text-xs text-center ">
                <h5 className="flex items-center justify-center">New</h5>
              </div>

              <div>
                <h3>Potty</h3>
                <p>Minimalist flower pot</p>
                <h4>Rp 500.000</h4>

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
                  <div className="text-center space-y-4">
                    <button className="bg-white text-yellow-600 font-bold py-2 px-6 rounded-lg">
                      Add to Cart
                    </button>

                    <div className="flex space-x-4 text-white">
                      <button className="hover:underline">Share</button>
                      <button className="hover:underline">Compare</button>
                      <button className="hover:underline">Like</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-2 border-yellow-600 w-[240px] text-center mb-3">
          <button className="font-poppins p-4 font-semibold">Show More</button>
        </div>

        {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
          <div className="text-center space-y-4">
            <button className="bg-white text-yellow-600 font-bold py-2 px-6 rounded-lg">
              Add to Cart
            </button>

            <div className="flex space-x-4 text-white">
              <button className="hover:underline">Share</button>
              <button className="hover:underline">Compare</button>
              <button className="hover:underline">Like</button>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Products;
