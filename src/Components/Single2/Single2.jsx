import React from "react";
import { Image } from "cloudinary-react";
import { images } from "./single2Data.json";

const Single2 = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-center gap-[52px] text-gray-500 mb-9 font-poppins text-2xl">
        <div className="hover:text-black hover:font-semibold">Description</div>
        <div className="hover:text-black hover:font-semibold">
          Additional Information
        </div>
        <div className="hover:text-black hover:font-semibold">Reviews [5]</div>
      </div>

      <div className="w-[1000px] m-auto font-poppins text-gray-500 mb-9">
        <p className="mb-8">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>

        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      <div className="flex items-center justify-center gap-6">
        <div>
          <Image
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.Group_106_pp1l42.url}
            className=""
          />
        </div>
        <div>
          <Image
            loading="lazy"
            cloudName={images.cloudName}
            publicId={images.Group_106_pp1l42.url}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Single2;
