import React from "react";
import trophy from "../../assets/trophy.svg";
import guarantee from "../../assets/guarantee.svg";
import shipping from "../../assets/shipping.svg";
import support from "../../assets/support.svg";

const Topfooter = () => {
  return (
    <div
      className="bg-[#FAF3EA] flex items-center justify-around mt-[200px] w-full h-[270px]
"
    >
      <div className="w-[337px] h-[70px]">
        <img className="float-left" src={trophy} alt="trophy" />
        <div>
          <h4 className="font-poppins font-bold text-[25px]">High Quality</h4>
          <div>
            <h5 className="text-[#898989] font-poppins text-5 ">
              crafted from top materials
            </h5>
          </div>
        </div>
      </div>

      <div className="w-[328px] h-[100px]">
        <img className="float-left" src={guarantee} alt="trophy" />
        <div>
          <h4 className="font-poppins font-bold text-[25px]">
            Warranty Protection
          </h4>
          <div>
            <h5 className="text-[#898989] font-poppins text-5 ">
              Over 2 years
            </h5>
          </div>
        </div>
      </div>

      <div className="w-[244px] h-[70px]">
        <img className="float-left" src={shipping} alt="trophy" />
        <div>
          <h4 className="font-poppins font-bold text-[25px]">Free Shipping</h4>
          <div>
            <h5 className="text-[#898989] font-poppins text-5 ">
              Order over 150 $
            </h5>
          </div>
        </div>
      </div>

      <div className="w-[259px] h-[70px]">
        <img className="float-left" src={support} alt="trophy" />
        <div>
          <h4 className="font-poppins font-bold text-[25px]">24 / 7 Support</h4>
          <div>
            <h5 className="text-[#898989] font-poppins text-5 ">
              Dedicated support
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topfooter;
