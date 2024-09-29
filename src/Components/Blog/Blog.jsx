import React from "react";
import logo2 from "../../assets/logo2.svg";
import pointer from "../../assets/pointer.svg";
import "./blog.scss";
import Blog1 from "../Blog1/Blog1";
import Blog2 from "../Blog2/Blog2";
import Blog3 from "../Blog3/Blog3";
import Topfooter from "../Topfooter/Topfooter";

const Blog = () => {
  return (
    <div id="Blog">
      <div className="section1 h-[316px]">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-[61px]">
            <img src={logo2} alt="logo" />
          </div>
          <div className="w-[107px] h-[72px] font-poppins font-semibold text-[48px] flex flex-col items-center justify-center">
            <h3>Blog</h3>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-2 mt-3">
          <div> Home</div>
          <div className="w-[14px] h-2">
            <img src={pointer} alt="" />
          </div>
          <div>Blog</div>
        </div>
      </div>

      <Blog1 />
      <Blog2 />
      <Blog3 />
      <Topfooter />
    </div>
  );
};

export default Blog;
