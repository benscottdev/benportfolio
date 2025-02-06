import { Link } from "react-router-dom";
import gsap from "gsap";
import { useState } from "react";

function Navigation() {
  let [navState, setNavState] = useState(true);

  // const openNav = () => {
  //   if (navState === true) {
  //     setNavState(false);

  //     const tl = gsap.timeline();
  //     tl.to(nav, { display: "block", duration: 0.5 });
  //     tl.fromTo(nav, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, "-=.5");
  //     tl.fromTo(links, { xPercent: -100 }, { xPercent: 0, stagger: 0.1, duration: 1, ease: "power1.in" }, "-=1");
  //     gsap.to(close, { opacity: 1, duration: 0.5, delay: 0.2, stagger: 0.25 });
  //   } else {
  //     setNavState(true);

  //     const tl = gsap.timeline();
  //     tl.fromTo(links, { xPercent: 0 }, { xPercent: -100, stagger: 0.05, duration: 1, ease: "power1.out" });
  //     tl.fromTo(nav, { autoAlpha: 1 }, { autoAlpha: 0, duration: 1 }, "-=1");
  //     tl.to(nav, { display: "none" }, "-=0.5");
  //     gsap.to(close, { opacity: 0, stagger: 0.25 });
  //   }

  const openNav = () => {
    const close = document.querySelectorAll(".close");
    const squares = document.querySelectorAll(".loaderCube");
    const navLinks = document.querySelector(".navigationLinks");
    const navWrapper = document.querySelector(".navWrapper");
    const links = document.querySelectorAll(".link");

    if (navState === true) {
      const tl = gsap.timeline();
      setNavState(false);
      tl.to(navWrapper, { display: "block", duration: 0.5 });
      tl.to(navLinks, { display: "block", duration: 0.5 });
      tl.fromTo(squares, { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, stagger: 0.01, duration: 0.5 }, "-=1");
      tl.fromTo(links, { xPercent: -100 }, { xPercent: 0, stagger: 0.1, duration: 1, ease: "power1.in" }, "-=1");
      gsap.to(close, { opacity: 1, duration: 0.5, delay: 0.2, stagger: 0.25 });
    } else {
      const tl = gsap.timeline();
      setNavState(true);
      tl.fromTo(links, { xPercent: 0 }, { xPercent: -100, stagger: 0.05, duration: 1, ease: "power1.out" });
      tl.to(squares, { scale: 1, autoAlpha: 0, stagger: 0.01, duration: 0.1 }, "-=1");
      tl.to(navLinks, { display: "none" }, "-=0.5");
      tl.to(navWrapper, { display: "none" }, "-=0.5");
      gsap.to(close, { opacity: 0, stagger: 0.25 });
    }
  };

  return (
    <div className="navigation">
      <a className="navigationButton" onClick={openNav}>
        <svg id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54">
          <rect class="cls-2" x="36" y="0" width="18" height="18" />
          <rect class="cls-2" y="36" width="18" height="18" />
          <rect class="cls-2" x="18" y="18" width="18" height="18" />
          <rect class="cls-2 close" x="0" y="0" width="18" height="18" transform="translate(0 18) rotate(-90)" />
          <rect class="cls-2 close" x="36" y="36" width="18" height="18" transform="translate(0 90) rotate(-90)" />
        </svg>
      </a>

      <div className="navWrapper">
        <svg id="squares" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
          <rect class="cls-3 loaderCube" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1080" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1200" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1320" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1440" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1560" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1680" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1800" width="120" height="120" />
          <rect class="cls-3 loaderCube" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="120" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="240" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="360" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="480" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="600" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="720" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="840" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="960" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1080" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1200" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1320" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1440" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1560" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1680" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1800" y="120" width="120" height="120" />
          <rect class="cls-3 loaderCube" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="120" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="240" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="360" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="480" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="600" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="720" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="840" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="960" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1080" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1200" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1320" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1440" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1560" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1680" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1800" y="240" width="120" height="120" />
          <rect class="cls-3 loaderCube" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="120" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="240" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="360" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="480" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="600" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="720" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="840" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="960" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1080" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1200" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1320" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1440" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1560" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1680" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1800" y="360" width="120" height="120" />
          <rect class="cls-3 loaderCube" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="120" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="240" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="360" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="480" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="600" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="720" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="840" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="960" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1080" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1200" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1320" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1440" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1560" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1680" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1800" y="480" width="120" height="120" />
          <rect class="cls-3 loaderCube" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="120" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="240" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="360" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="480" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="600" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="720" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="840" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="960" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1080" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1200" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1320" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1440" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1560" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1680" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1800" y="600" width="120" height="120" />
          <rect class="cls-3 loaderCube" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="120" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="240" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="360" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="480" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="600" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="720" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="840" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="960" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1080" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1200" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1320" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1440" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1560" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1680" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1800" y="720" width="120" height="120" />
          <rect class="cls-3 loaderCube" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="120" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="240" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="360" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="480" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="600" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="720" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="840" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="960" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1080" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1200" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1320" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1440" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1560" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1680" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1800" y="840" width="120" height="120" />
          <rect class="cls-3 loaderCube" y="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="120" y="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="240" y="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="360" y="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="480" y="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="600" y="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="720" y="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="840" y="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="960" y="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1080" y="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1200" y="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1320" y="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1440" y="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1560" y="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1680" y="960" width="120" height="120" />
          <rect class="cls-3 loaderCube" x="1800" y="960" width="120" height="120" />
        </svg>

        <div className="navigationLinks">
          <div className="links">
            <Link className="link" to="/">
              HOME
            </Link>
            <Link className="link" to="/about">
              ABOUT
            </Link>
            <Link className="link" to="/work">
              WORK
            </Link>
            <Link className="link" to="/chat">
              CHAT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
