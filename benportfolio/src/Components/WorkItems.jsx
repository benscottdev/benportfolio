import React, { useEffect } from "react";
import gsap from "gsap";
import SongworksImage from "../assets/images/songworks.png";
import BenScottImage from "../assets/images/benscott.png";
import ClaudiaImage from "../assets/images/claudia.png";

function WorkItems() {
  let mql = window.matchMedia("(max-width: 800px)"); // Mobile adjustment for under 800px wide
  let work = [
    { name: "SongWorks", path: "https://songworks.com.au", image: SongworksImage },
    { name: "Claudia's", path: "https://claudiabluespoint.com/home", image: ClaudiaImage },
    { name: "Ben Scott", path: "/", image: BenScottImage },
  ];

  useEffect(() => {
    if (!mql.matches) {
      const items = document.querySelectorAll(".item-pic");

      items.forEach((el) => {
        const image = el.querySelector(".itemImg");

        el.addEventListener("mouseenter", () => {
          gsap.to(image, { autoAlpha: 1, duration: 0.3 });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(image, { autoAlpha: 0, duration: 0.3 });
        });

        el.addEventListener("mousemove", (e) => {
          const { clientX, clientY } = e;
          gsap.to(image, { x: clientX - el.offsetLeft - 0, y: clientY - el.offsetTop - 0 });
        });
      });
    }
  }, []);

  const hoverOn = (e) => {
    gsap.to(e.target.querySelector(".first"), { yPercent: -100, duration: 0.1, ease: "power1.inOut" });
    gsap.to(e.target.querySelector(".second"), { yPercent: -100, duration: 0.1, ease: "power1.inOut" });
  };

  const hoverOff = (e) => {
    gsap.to(e.target.querySelector(".first"), { yPercent: 0, duration: 0.1, ease: "power1.inOut" });
    gsap.to(e.target.querySelector(".second"), { yPercent: 0, duration: 0.1, ease: "power1.inOut" });
  };

  return (
    <div className="workItems">
      <div className="workItemsContainer">
        <ul>
          {work.map((i) => (
            <li className="item-pic" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
              <a href={i.path} target="_blank" className="workItemText">
                <span className="first">{i.name}</span>
                <span className="second">{i.name}</span>
              </a>
              <img src={i.image} alt={i.name} style={{ opacity: 0, position: "absolute" }} className="itemImg" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WorkItems;
