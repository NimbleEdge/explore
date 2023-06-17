import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import breathingShape from "../../assets/animations/breathing-shape.json";
import pulse from "../../assets/animations/pulsating.json";

function Homepage() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [triggerAnimation2, setTriggerAnimation2] = useState(false);
  const [triggerAnimation3, setTriggerAnimation3] = useState(false);
  const [triggerAnimation4, setTriggerAnimation4] = useState(false);

  useEffect(() => {
    if (triggerAnimation3) {
      var body = document.querySelector("body"),
        bar = document.querySelector(".progress-bar"),
        counter = document.querySelector(".count"),
        i = 0;

      (function draw() {
        if (i <= 100) {
          requestAnimationFrame(draw);
          bar.style.width = i + "%";
          counter.innerHTML = Math.round(i) + "%";

          i = i + 0.3;
        } else {
          bar.className += " done";
          setTimeout(() => {
            setTriggerAnimation4(true);
          }, 300);
        }
      })();
    }
  }, [triggerAnimation3]);

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
          className="link shiny-button-local z-20 text-secondaryTextColor text-lg absolute left-1/2 bottom-28 -translate-x-1/2 tracking-widest cursor-pointer"
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
          className={`${
            triggerAnimation2 ? "section-1" : "section-3"
          } bg-backgroundColor h-screen w-screen absolute top-0 left-0`}
        >
          <div className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 relative grid gap-2 grid-cols-2 grid-rows-2">
            <div
              className="link choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-end"
              onClick={() => {
                setTriggerAnimation2(true);
              }}
            >
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

      {triggerAnimation2 && (
        <section
          className={
            "section-2 w-screen h-screen bg-red-500 z-50 absolute top-0 left-0 rounded-3xl"
          }
        >
          <p className="text-6xl filler-title-local text-center m-40">
            <span>select the ML model to use</span>
          </p>
        </section>
      )}

      {triggerAnimation2 && (
        <section
          className={`${
            triggerAnimation3 ? "section-1" : "section-3"
          } bg-backgroundColor h-screen w-screen absolute top-0 left-0`}
        >
          <div className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 relative grid gap-2 grid-cols-2 grid-rows-2">
            <div
              className="link choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-end"
              onClick={() => setTriggerAnimation3(true)}
            >
              <img
                src="/assets/images/models/ml-model-1.jpg"
                className="w-full h-full rounded-2xl choice-cell-img"
              />
              <div className="choice-cell-hidden">
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-medium z-10">
                  Checkout
                  <br />
                  Recommendation
                </p>
                <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
              </div>
            </div>

            <div className="choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-start">
              <img
                src="/assets/images/models/ml-model-2.jpg"
                className="w-full h-full rounded-2xl choice-cell-img"
              />
              <div className="choice-cell-hidden">
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-medium z-10">
                  Discount
                  <br />
                  Matcher
                </p>
                <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
              </div>
            </div>

            <div className="choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-end">
              <img
                src="/assets/images/models/ml-model-3.jpg"
                className="w-full h-full rounded-2xl choice-cell-img"
              />
              <div className="choice-cell-hidden">
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-medium z-10">
                  Route
                  <br />
                  Picker
                </p>
                <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
              </div>
            </div>

            <div className="choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-start">
              <img
                src="/assets/images/models/ml-model-4.jpg"
                className="w-full h-full rounded-2xl choice-cell-img"
              />
              <div className="choice-cell-hidden">
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-semibold z-10">
                  Fraud
                  <br />
                  Detection
                </p>
                <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
              </div>
            </div>
          </div>
        </section>
      )}

      {triggerAnimation3 && (
        <section
          className={`${
            triggerAnimation4 ? "expand-to-emulator-screen" : "section-4"
          } bg-backgroundColor h-screen w-screen absolute top-0 left-0`}
        >
          <div className="progress-bar z-50"></div>
          <h1 className="count"></h1>
        </section>
      )}
    </div>
  );
}

export default Homepage;
