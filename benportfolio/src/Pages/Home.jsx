import React, { useEffect, useRef } from "react";
import Navigation from "../Components/Navigation";
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
        text: "Web Design<br />Web Development<br />AfterEffects<br />3D",
      });
    }
  }, []);

  return (
    <div className="homePage">
      <Navigation />
      <div className="homePageContainer">
        <div className="logoContainer">
          <Logo />
        </div>
        <div className="homePageCopy">
          <p className="copy" ref={paragraphRef}></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
