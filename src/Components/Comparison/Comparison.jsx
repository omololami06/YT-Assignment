import React from "react";
import logo2 from "../../assets/logo2.svg";
import pointer from "../../assets/pointer.svg";
import "./comparison.scss";
import Compare1 from "../Compare1/Compare1";
import Topfooter from "../Topfooter/Topfooter";
import ComparisonGrid from "../Compare2/ComparisonGrid";

const Comparison = () => {
  return (
    <div id="Comparison ">
      <div className="section1 h-[316px]">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-[61px]">
            <img src={logo2} alt="logo" />
          </div>
          <div className="w-[107px] h-[72px] font-poppins font-semibold text-[48px] flex flex-col items-center justify-center">
            <h3>Comparison</h3>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-2 mt-3">
          <div> Home</div>
          <div className="w-[14px] h-2">
            <img src={pointer} alt="" />
          </div>
          <div>Comparison</div>
        </div>
      </div>

      <Compare1 />
      <ComparisonGrid />
      <Topfooter />
    </div>
  );
};

export default Comparison;
