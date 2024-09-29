import React from "react";
import { Image } from "cloudinary-react";
import { images } from "../../../data/Shop1.json";
import outdoorsofa from "../../assets/outdoorsofa.svg";
import outdoor2 from "../../assets/outdoor2.svg";
import stuart from "../../assets/stuart.svg";
import maya from "../../assets/maya.svg";
import star from "../../assets/star.svg";
import facebook from "../../assets/facebook.svg";
import tweeter from "../../assets/tweeter.svg";
import linkedin from "../../assets/linkedin.svg";
import pointer from "../../assets/pointer.svg";
import "./SingleProduct.scss";
import Single2 from "../Single2/Single2";
import Single3 from "../single3/Single3";

const SingleProduct = () => {
  return (
    <div id="SingleProduct">
      <div className="h-[100px] bg-[#F9F1E7] p-7 pl-[50px] mt-3">
        <div className=" flex items-center gap-3 mt-3">
          <div className="text-gray-400"> Home</div>
          <div className="w-[14px] h-2">
            <img src={pointer} alt="" />
          </div>
          <div className="text-gray-400">Shop</div>
          <div className="w-[14px] h-2">
            <img src={pointer} alt="" />
          </div>
          <div className="border-2 border-gray-400 h-7"></div>
          <div>Asgaard sofa</div>
        </div>
      </div>

      <div className="section1 mt-9 ">
        <div>
          <div>
            <div className="h-[80px]">
              <img
                className="bg-[#F9F1E7] mb-8 rounded-lg"
                src={outdoorsofa}
                alt="sofa"
              />
            </div>
            <div className="h-[80px]">
              <img
                className="bg-[#F9F1E7] mb-8 rounded-lg"
                src={outdoor2}
                alt="sofa"
              />
            </div>
            <div className="h-[80px]">
              <img
                className="bg-[#F9F1E7] mb-8 rounded-lg"
                src={stuart}
                alt="sofa"
              />
            </div>
            <div className="h-[80px]">
              <img
                className="bg-[#F9F1E7] mb-8 rounded-lg"
                src={maya}
                alt="sofa"
              />
            </div>
          </div>
        </div>

        <div>
          <Image
            className="h-[301px] bg-[#F9F1E7]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.Asgaardsofa3.url}
          />
        </div>

        <div className="w-[606px] ml-10">
          <h2 className="text-[42px] font-poppins font-semibold">
            Asgaard sofa
          </h2>
          <h5 className="text-2xl text-gray-500 mb-4">Rs. 250,000.00</h5>

          <div className="flex gap-2">
            <img src={star} alt="stars" />
            <div className="border-2 border-gray-400 h-5 mb-4"></div>
            <h6>5 Customer Review</h6>
          </div>

          <p className="w-[424px] font-poppins mb-6">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          <div>
            <p className="text-base text-gray-500 mb-3">Size</p>
            <div className="flex gap-3">
              <div className="w-7 rounded text-center bg-[#F9F1E7] hover:bg-yellow-600">
                <p>L</p>
              </div>
              <div className="w-7 rounded text-center bg-[#F9F1E7] hover:bg-yellow-600">
                <p>XL</p>
              </div>
              <div className="w-7 rounded text-center bg-[#F9F1E7] hover:bg-yellow-600">
                <p>XS</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-base text-gray-500 mt-3">Color</p>
            <div className="flex gap-3 h-6 mt-3 mb-8">
              <div className="w-6 rounded-full bg-purple-500"></div>
              <div className="w-6 rounded-full bg-black"></div>
              <div className="w-6 rounded-full bg-yellow-500"></div>
            </div>
          </div>

          <div>
            <div className="flex gap-4 mb-[60px]">
              <div className="w-[123px] border-2 border-black rounded-md text-center py-3 font-poppins text-lg cursor-pointer">
                <button>- 1 +</button>
              </div>
              <div className="w-[215px] border-2 border-black rounded-md text-center py-3 font-poppins text-lg cursor-pointer">
                <button>Add To Cart</button>
              </div>
              <div className="w-[215px] border-2 border-black rounded-md text-center py-3 font-poppins text-lg cursor-pointer">
                <button>+ Compare</button>
              </div>
            </div>
          </div>

          <hr />

          <div className=" flex gap-3 mt-8">
            <div className="flex flex-col">
              <span>SKU</span>
              <span>Category</span>
              <span>Tags</span>
              <span>Share</span>
            </div>

            <div className="flex flex-col">
              <span>:</span>
              <span>:</span>
              <span>:</span>
              <span>:</span>
            </div>

            <div className="flex flex-col">
              <span>SS001</span>
              <span>Sofas</span>
              <span>Sofa, Chair, Home, Shop</span>
              <span>
                <div className="flex gap-3">
                  <div>
                    <img src={facebook} alt="facebook logo" />
                  </div>
                  <div>
                    <img src={tweeter} alt="twitter logo" />
                  </div>
                  <div>
                    <img src={linkedin} alt="linkedin logo" />
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Single2 />
      <Single3 />
    </div>
  );
};

export default SingleProduct;
