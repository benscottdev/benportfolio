import React from "react";
import logoImage from "../assets/images/logo.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrambleTextPlugin } from "../plugins/ScrambleTextPlugin";
gsap.registerPlugin(ScrambleTextPlugin);

function Logo() {
  const textRef = useRef(null);

  // useEffect(() => {
  //   const logoText = document.querySelector(".logoText");
  //   if (textRef.current) {
  //     gsap.to(textRef.current, {
  //       duration: 1,
  //       scrambleText: {
  //         text: "_BEN_SCOTT",
  //         chars: "$/@*<>-__28#🧌",
  //         revealDelay: 0.3,
  //         speed: 1,
  //       },
  //     });

  //     if (logoText) {
  //       const fontArray = ["Times", "Trebuchet MS", "Brush Script MT", "Comic Sans"];

  //       logoText.addEventListener("click", () => {
  //         logoText.style.fontFamily = fontArray[Math.floor(Math.random() * 5)];
  //         gsap.to(logoText, {
  //           duration: 1,
  //           scrambleText: {
  //             text: "_BEN_SCOTT",
  //             revealDelay: 0.3,
  //             chars: "$/@*<>-__28#🧌",
  //             speed: 1,
  //             newClass: "wrapper",
  //           },
  //         });
  //       });
  //     }
  //   }
  // }, []);

  return (
    <div className="Logo logoWrapper">
      {/* <svg className="arrow" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.31 146.25">
        <rect className="cls-1 rect" width="20.58" height="20.89" />
        <rect className="cls-1 rect" x="20.58" y="20.89" width="20.58" height="20.89" />
        <rect className="cls-1 rect" x="41.16" y="41.79" width="20.58" height="20.89" />
        <rect className="cls-1 rect" x="61.74" y="62.68" width="20.58" height="20.89" />
        <rect className="cls-1 rect" x="41.16" y="83.57" width="20.58" height="20.89" />
        <rect className="cls-1 rect" x="20.58" y="104.46" width="20.58" height="20.89" />
        <rect className="cls-1 rect" y="125.36" width="20.58" height="20.89" />
      </svg> */}
      <h1 className="logoText" ref={textRef}>
        <img src={logoImage} alt="logo" />
      </h1>
    </div>
  );
}

export default Logo;
