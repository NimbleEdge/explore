import logo from "./logo.svg";
import "./App.css";
import Homepage from "./presentation/homepage/homepage";
import React from "react";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={60}
        color="100,100,100"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2.25}
        showSystemCursor={false}
        trailingSpeed={8}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Homepage />
    </div>
  );
}

export default App;
