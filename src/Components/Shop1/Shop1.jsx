import React from "react";
import { Image } from "cloudinary-react";
import { images } from "../../../data/Shop1.json";
import "./shop1.scss";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";
import { useNavigate } from "react-router-dom";

const Shop1 = () => {
  const navigate = useNavigate();

  const handleCompareClick = () => {
    navigate("/SingleProduct");
  };

  return (
    <div id="Shop1">
      <div className="flex flex-row items-center justify-center gap-8 mb-8 ">
        <div className="relative font-poppins">
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image1.url}
          />
          <div className="absolute top-6 bg-red-400 text-white px-3 py-4 rounded-full w-12 h-12 text-xs  ">
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
                {/* <Link to="/SingleProduct"> */}
                <button
                  onClick={handleCompareClick}
                  className="hover:underline"
                >
                  Compare
                </button>
                {/* </Link> */}
                <button className="hover:underline">Like</button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image2.url}
          />
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
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image3.url}
          />
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
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image4.url}
          />
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
      <div className="flex flex-row items-center justify-center gap-8 mb-8">
        <div className="relative">
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image1.url}
          />
          <div className="absolute top-6 bg-red-400 text-white px-3 py-4 rounded-full w-12 h-12 text-xs  ">
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
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image2.url}
          />
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
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image3.url}
          />
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
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image4.url}
          />
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
      <div className="flex flex-row items-center justify-center gap-8 mb-8">
        <div className="relative">
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image1.url}
          />
          <div className="absolute top-6 bg-red-400 text-white px-3 py-4 rounded-full w-12 h-12 text-xs  ">
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
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image2.url}
          />
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
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image3.url}
          />
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
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image4.url}
          />
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
      <div className="flex flex-row items-center justify-center gap-8 mb-8">
        <div className="relative">
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image1.url}
          />
          <div className="absolute top-6 bg-red-400 text-white px-3 py-4 rounded-full w-12 h-12 text-xs  ">
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
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image2.url}
          />
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
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image3.url}
          />
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
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.image4.url}
          />
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
        {/* <Pagination /> */}
        {/* <SingleProduct /> */}
      </div>
    </div>
  );
};

export default Shop1;
