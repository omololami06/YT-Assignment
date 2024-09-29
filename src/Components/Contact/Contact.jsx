import React from "react";
import logo2 from "../../assets/logo2.svg";
import pointer from "../../assets/pointer.svg";
import "./contact.scss";
import Topfooter from "../Topfooter/Topfooter";
import ContactForm from "../Form/ContactForm";

const Contact = () => {
  return (
    <div id="Contact">
      <div className="section1 h-[316px]">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-[61px]">
            <img src={logo2} alt="logo" />
          </div>
          <div className="w-[107px] h-[72px] font-poppins font-semibold text-[48px] flex flex-col items-center justify-center">
            <h3>Contact</h3>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-2 mt-3">
          <div> Home</div>
          <div className="w-[14px] h-2">
            <img src={pointer} alt="" />
          </div>
          <div>Contact</div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-[98px] ">
        <h2 className="w-[575px] h-[54px] text-center font-poppins font-semibold text-4xl">
          Get In Touch With Us
        </h2>
        <p className="w-[644px] h-[48px] text-center text-base text-gray-400">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <ContactForm />
      <Topfooter />
    </div>
  );
};

export default Contact;
