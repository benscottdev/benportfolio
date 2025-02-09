import { Link } from "react-router-dom";
import gsap from "gsap";
import { useState } from "react";

function Navigation() {
  let [navState, setNavState] = useState(true);
  const body = document.querySelector("body");

  const closeNav = (e) => {
    const portfolio = document.querySelector(".portfolio"); // Moved inside the function
    if (portfolio) {
      gsap.to(portfolio, { scale: 1, duration: 0.5, overflow: "visible" });
    }
  };

  const openNav = () => {
    const close = document.querySelectorAll(".close");
    const navLinks = document.querySelector(".navigationLinks");
    let links = document.querySelectorAll(".link");
    const navWrapper = document.querySelector(".navWrapper");

    if (navWrapper.style.display !== "block") {
      const portfolio = document.querySelector(".portfolio");
      const tl = gsap.timeline();
      setNavState(false);
      tl.fromTo(portfolio, { scale: 1 }, { scale: 0.9, duration: 0.5, overflow: "hidden" });
      tl.to(navWrapper, { display: "block", duration: 0.5 }, "-=0.5");
      tl.fromTo(navWrapper, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, "-=0.5");
      tl.to(navLinks, { display: "block", duration: 0.5 }, "-=0");
      tl.fromTo(links, { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.35, duration: 0.2, ease: "power1.in" }, "-=0.4");
      gsap.to(close, { opacity: 1, duration: 0.5, delay: 0.2, stagger: 0.25 });
    } else {
      const portfolio = document.querySelector(".portfolio");
      const tl = gsap.timeline();
      setNavState(true);
      tl.to(portfolio, { scale: 1, duration: 0.5, overflow: "visible" });
      tl.to(links, { autoAlpha: 0, stagger: 0.05, duration: 1, ease: "power1.out" }, "-=0.5");
      tl.to(navLinks, { display: "none" }, "-=0.5");
      tl.to(navWrapper, { autoAlpha: 0 }, "-=0.5");
      tl.to(navWrapper, { display: "none" }, "-=0.5");
      gsap.to(close, { opacity: 0, stagger: 0.25 });
    }
  };

  const navEnter = (e) => {
    gsap.to(e.target.querySelector(".first"), { yPercent: -100, duration: 0.01, ease: "power1.inOut" });
    gsap.to(e.target.querySelector(".second"), { yPercent: -100, duration: 0.01, ease: "power1.inOut" });
  };

  const navLeave = (e) => {
    gsap.to(e.target.querySelector(".first"), { yPercent: 0, duration: 0.01, ease: "power1.inOut" });
    gsap.to(e.target.querySelector(".second"), { yPercent: 0, duration: 0.01, ease: "power1.inOut" });
  };

  let navs = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "WORK", path: "/work" },
    { name: "CONNECT", path: "/chat" },
  ];

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
        <div className="navigationLinks">
          <div className="links">
            {navs.map((link) => (
              <Link className="link" to={link.path} onMouseEnter={navEnter} onMouseLeave={navLeave} onClick={closeNav}>
                <span className="first">{link.name}</span>
                <span className="second">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
