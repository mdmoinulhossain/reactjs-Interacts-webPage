import React from "react";
import watch from "../img/test.jpg";
import ReactImageMagnify from "react-image-magnify";
import Header from "./Header";

const Magnify = () => {
  return (
    <div>
      <Header />
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            src: watch,
            width: 400,
            height: 400,
          },
          largeImage: {
            src: watch,
            width: 1200,
            height: 1800,
          },
        }}
      />
      {/* <img src={watch} alt="Watch" /> */}
    </div>
  );
};

export default Magnify;
