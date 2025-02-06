import React, { useEffect } from "react";
import gsap from "gsap";
import SongworksImage from "../assets/images/songworks.png";
import BenScottImage from "../assets/images/benscott.png";
import ClaudiaImage from "../assets/images/claudia.png";

function WorkItems() {
  useEffect(() => {
    const items = document.querySelectorAll(".item-pic");

    items.forEach((el) => {
      const image = el.querySelector("img");

      el.addEventListener("mouseenter", () => {
        gsap.to(image, { autoAlpha: 1, duration: 0.3 });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(image, { autoAlpha: 0, duration: 0.3 });
      });

      el.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        gsap.to(image, { x: clientX - el.offsetLeft - 250, y: clientY - el.offsetTop - 0 });
      });
    });
  }, []);

  return (
    <div className="workItems">
      <div className="workItemsContainer">
        <ul>
          <li className="item-pic">
            <a href="https://songworks.com.au" target="_blank" className="workItemText">
              SongWorks
            </a>
            <img src={SongworksImage} alt="SongWorks" className="itemImg" style={{ opacity: 0, position: "absolute" }} />
          </li>

          <li className="item-pic">
            <a href="https://claudiabluespoint.com/home" target="_blank">
              Claudia's
            </a>
            <img src={ClaudiaImage} alt="Example" className="itemImg" style={{ opacity: 0, position: "absolute" }} />
          </li>

          <li className="item-pic">
            <a href="/" target="_blank">
              Ben Scott
            </a>
            <img src={BenScottImage} alt="Example" className="itemImg" style={{ opacity: 0, position: "absolute" }} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WorkItems;
