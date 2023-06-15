import Lottie from "lottie-react";
import React from "react";
import breathingShape from "../../assets/animations/breathing-shape.json";
import pulse from "../../assets/animations/pulsating.json";

function Homepage() {
  return (
    <div className="bg-backgroundColorLottie relative">
      <div className="bg-backgroundColor absolute w-screen h-screen opacity-50 z-10"></div>
      <Lottie className="h-screen" animationData={breathingShape} loop={true} />

      <div className="">
        <div className="absolute center-absolute z-20">
          <p className="text-7xl text-white text-center font-extrabold leading-tight_no">
            SUPERCHARGE
            <br />
            YOUR APPS WITH
            <br />
            <span className="nimbleedge-gradient">NIMBLEEDGE</span>
          </p>
          <p className="text-sm text-secondaryTextColor text-center font-bold mt-8">
            Proceed to witness firsthand how Nimbleedge empowers applications to
            achieve maximum efficiency
          </p>
        </div>
        <p className="z-20 text-secondaryTextColor text-lg absolute left-1/2 bottom-28 -translate-x-1/2 tracking-widest cursor-pointer">
          PROCEED
        </p>
        <div className="absolute rotate-180 left-16 top-1/2 -translate-y-1/2">
          <Lottie className="h-8 w-8" animationData={pulse}></Lottie>
          <p
            style={{ writingMode: "vertical-rl" }}
            className="text-secondaryTextColor text-xs mx-auto"
          >
            Bandwidth available
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
