import React from "react";
import dining from "../../assets/dining.svg";
import living from "../../assets/living.svg";
import bedroom from "../../assets/bedroom.svg";

const Range = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center mt-[56px]">
        <div>
          <h2 className="text-[32px] font-poppins font-bold text-center">
            Browse The Range
          </h2>
          <p className="text-center text-xl text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 mt-[62px]">
          <div className="same">
            <img src={dining} alt="" />
            <h4 className="text-center font-poppins text-2xl mt-8">Dining</h4>
          </div>
          <div className="same">
            <img src={living} alt="" />
            <h4 className="text-center font-poppins text-2xl mt-8">Living</h4>
          </div>
          <div className="same">
            <img src={bedroom} alt="" />
            <h4 className="text-center font-poppins text-2xl mt-8">Bedroom</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Range;
