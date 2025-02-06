import React, { useEffect, useRef } from "react";
import Navigation from "../Components/Navigation";
import Loader from "../Components/Loader";
import Logo from "../Components/Logo";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

function Home() {
  const paragraphRef = useRef(null);

  useEffect(() => {
    if (paragraphRef.current) {
      gsap.to(paragraphRef.current, {
        duration: 2,
        delay: 0.4,
        text: "Web Design <br /> Web Development <br /> AfterEffects <br /> 3D ",
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="homePage">
      {/* <Loader /> */}
      <Navigation />
      <div className="homePageContainer">
        <div className="homePageCopy third">
          <p className="copy" ref={paragraphRef}></p>
        </div>
        <div className="logoContainer threeQuarter">
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default Home;
