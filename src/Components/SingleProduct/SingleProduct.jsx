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

const SingleProduct = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <img src={outdoorsofa} alt="sofa" />
          </div>
          <div>
            <img src={outdoor2} alt="sofa" />
          </div>
          <div>
            <img src={stuart} alt="sofa" />
          </div>
          <div>
            <img src={maya} alt="sofa" />
          </div>
        </div>
        <div>
          <Image
            className="h-[301px]"
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.Asgaardsofa3.url}
          />
        </div>
      </div>

      <div>
        <h2>Asgaard sofa</h2>
        <h5>Rs. 250,000.00</h5>

        <div>
          <img src={star} alt="stars" />
          <div></div>
          <h6>5 Customer Review</h6>
        </div>

        <p>
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>

        <div>
          <p>Size</p>
          <div>
            <div>
              <p>L</p>
            </div>
            <div>
              <p>XL</p>
            </div>
            <div>
              <p>XS</p>
            </div>
          </div>
        </div>

        <div>
          <p>Color</p>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <button>- 1 +</button>
            </div>
            <div>
              <button>Add To Cart</button>
            </div>
            <div>
              <button>+ Compare</button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <span>SKU</span>
            <span>Category</span>
            <span>Tags</span>
            <span>Share</span>
          </div>

          <div>
            <span>:</span>
            <span>:</span>
            <span>:</span>
            <span>:</span>
          </div>

          <div>
            <span>SS001</span>
            <span>Sofas</span>
            <span>Sofa, Chair, Home, Shop</span>
            <span>
              <div>
                <img src={facebook} alt="facebook logo" />
              </div>
              <div>
                <img src={tweeter} alt="twitter logo" />
              </div>
              <div>
                <img src={linkedin} alt="linkedin logo" />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
