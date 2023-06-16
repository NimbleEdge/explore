import Lottie from "lottie-react";
import React, { useState } from "react";
import breathingShape from "../../assets/animations/breathing-shape.json";
import pulse from "../../assets/animations/pulsating.json";

function Homepage() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  return (
    <div className="bg-slate-800 w-screen h-screen">
      <section
        className={`bg-backgroundColorLottie relative ${
          triggerAnimation ? "section-1" : ""
        }`}
      >
        <div className="bg-backgroundColor absolute w-screen h-screen opacity-50 z-10 rounded-3xl"></div>
        <Lottie
          className="h-screen"
          animationData={breathingShape}
          loop={true}
        />
        <div className="absolute container center-absolute z-20">
          <p className="title-local text-8xl text-white text-center font-bold leading-none">
            <span>SUPERCHARGE</span>
            <span>YOUR APPS WITH</span>
            <span className="nimbleedge-gradient">NIMBLEEDGE</span>
          </p>
          <p className="subtitle-local text-sm text-secondaryTextColor text-center font-bold leading-tight">
            <span className="mt-6">
              Proceed to witness firsthand how Nimbleedge empowers applications
              to achieve maximum efficiency
            </span>
          </p>
        </div>
        <p
          onClick={() => {
            setTriggerAnimation(true);
          }}
          className="shiny-button-local z-20 text-secondaryTextColor text-lg absolute left-1/2 bottom-28 -translate-x-1/2 tracking-widest cursor-pointer"
        >
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
      </section>

      {triggerAnimation && (
        <section
          className={
            "section-2 w-screen h-screen bg-red-500 z-50 absolute top-0 left-0 rounded-3xl"
          }
        >
          <p className="text-6xl filler-title-local text-center m-40">
            <span>select the usecase that fits the best</span>
          </p>
        </section>
      )}

      {triggerAnimation && (
        <section
          className={
            "section-3 bg-backgroundColor h-screen w-screen absolute top-0 left-0 "
          }
        >
          <div className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 relative grid gap-2 grid-cols-2 grid-rows-2">
            <div className="choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-end">
              <img
                src="/assets/images/ecom-usecase.jpg"
                className="w-full h-full rounded-2xl choice-cell-img"
              />
              <div className="choice-cell-hidden">
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-medium z-10">
                  E-COM
                </p>
                <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
              </div>
            </div>

            <div className="choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-start">
              <img
                src="/assets/images/gaming-usecase.jpg"
                className="w-full h-full rounded-2xl choice-cell-img"
              />
              <div className="choice-cell-hidden">
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-medium z-10">
                  GAMING
                </p>
                <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
              </div>
            </div>

            <div className="choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-end">
              <img
                src="/assets/images/media-usecase.jpg"
                className="w-full h-full rounded-2xl choice-cell-img"
              />
              <div className="choice-cell-hidden">
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-medium z-10">
                  MEDIA
                </p>
                <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
              </div>
            </div>

            <div className="choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-start">
              <img
                src="/assets/images/fintech-usecase.jpg"
                className="w-full h-full rounded-2xl choice-cell-img"
              />
              <div className="choice-cell-hidden">
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-semibold z-10">
                  FINTECH
                </p>
                <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Homepage;
