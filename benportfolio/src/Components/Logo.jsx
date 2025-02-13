import React, { useEffect } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(Draggable);

function Logo() {
  let mql = window.matchMedia("(max-width: 800px)"); // Mobile adjustment for under 800px wide

  useEffect(() => {
    const logoWrapper = document.querySelector(".logoWrapper");
    const logoText = document.querySelector(".logoText");
    const shadow = document.querySelector(".shadow");
    const highlight = document.querySelector(".highlights");

    if (mql.matches) {
      Draggable.create(logoText, {
        type: "x, y",
        bounds: { top: -100, left: -50, width: 1000, height: 500 },
        dragResistance: 0.8,
        allowContextMenu: false,
        onRelease: function () {
          gsap.to(this.target, { x: 0, y: 0, duration: 1, ease: "elastic.out(2, 0.2" });
        },
      });
    }

    if (!mql.matches) {
      const handleMouseMove = (e) => {
        const { clientX: x, clientY: y } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveX = (x - centerX) / 25;
        const moveY = (y - centerY) / 25;
        const skewX = (centerX - x) / 200;
        const skewY = (centerY - y) / 200;
        const rotateX = (centerX - x) / 20;
        const rotateY = (centerY - y) / 20;

        gsap.to(logoText, { x: moveX, y: moveY, skewX, skewY, rotateX: rotateX, rotateY: rotateY, duration: 0.25 });
        gsap.to(shadow, { x: moveX * 2.5, y: moveY * 2.5, skewX: skewX * 1.5, skewY: skewY * 1.5, rotateX, rotateY, duration: 0.3 });
      };

      document.body.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.body.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <div className="Logo logoWrapper">
      <h1 className="logoText">
        <span className="ben">BEN</span>
        <span className="scott">SCOTT</span>
      </h1>
      <div className="shadow">BENscott</div>
    </div>
  );
}

export default Logo;
