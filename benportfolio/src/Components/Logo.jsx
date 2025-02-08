import React from "react";
import gsap from "gsap";
import { useEffect } from "react";
import { Draggable } from "gsap/all";
gsap.registerPlugin(Draggable);

function Logo() {
  useEffect(() => {
    const logoText = document.querySelector(".logoText");
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (centerX - x) / 10;
      const moveY = (centerY - y) / 10;
      const skewX = (centerX - x) / 50;

      gsap.to(logoText, { x: moveX, y: moveY, skewX: skewX, duration: 1 });
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="Logo logoWrapper">
      <h1 className="logoText">
        <span className="ben">BEN</span>
        <span className="scott">scott</span>
      </h1>
    </div>
  );
}

export default Logo;
