import React from "react";
import Navigation from "../Components/Navigation";
import Portrait from "../assets/images/ben.jpg";
import Banner from "../Components/Banner";

import gsap from "gsap";
import ScrambleTextPlugin from "../plugins/ScrambleTextPlugin";
gsap.registerPlugin(ScrambleTextPlugin);

function About() {
  const questions = [
    {
      question: "Favourite HTML Tag?",
      answer: "<span>",
    },
    {
      question: "Favourite Dinosaur?",
      answer: "Obviously T-Rex 🦖",
    },
    {
      question: "More Doors or Wheels on Earth?",
      answer: "It's gotta be doors",
    },
    {
      question: "Favourite Childhood Cartoon",
      answer: "Phineas & Ferb easily",
    },
    {
      question: "Coffee Order",
      answer: "Cap 1 sugar please",
    },
    {
      question: "Favourite Colour?",
      answer: "British Racing Green",
    },
    {
      question: "Favourite Car?",
      answer: "1979 Porsche 911 RWB",
    },
    {
      question: "Favourite European Region?",
      answer: "Tuscany",
    },
    {
      question: "Favourite Smell?",
      answer: "The air just before rain",
    },
    {
      question: "Movie of choice?",
      answer: "Fear & Loathing in Las Vegas",
    },
    {
      question: "Favourite Song?",
      answer: "Protect the Cross - JPEGMAFIA",
    },
    {
      question: "Final meal?",
      answer: "Full Roast Dinner",
    },
    {
      question: "Favourite Keyboard Shortcut",
      answer: "CMD + F (🐐)",
    },

    {
      question: "Best Video Game?",
      answer: "Portal 2",
    },

    {
      question: "Favourite Sport?",
      answer: " Mountain Biking",
    },

    {
      question: "Confused About",
      answer: "Pyramids",
    },
  ];

  const generateFunFact = () => {
    const randomNum = Math.floor(Math.random() * questions.length);

    const factQuestion = document.querySelector(".factQuestion");
    const factAnswer = document.querySelector(".factAnswer");

    const changeQ = questions[randomNum].question;
    const changeA = questions[randomNum].answer;

    if (changeA === "British Racing Green") {
      factAnswer.style.color = "#004225";
    } else {
      factAnswer.style.color = "#202020";
    }

    const tl = gsap.timeline();
    tl.to(factQuestion, {
      duration: 0.5,
      scrambleText: {
        text: changeQ,
        chars: "!@#$%^&",
        speed: 0.3,
        newClass: "myClass",
      },
    });

    tl.to(factAnswer, {
      duration: 1,
      scrambleText: {
        text: changeA,
        chars: "ASDFGHY$%^&*(IUJ)-__---_",
        revealDelay: 0.5,
        speed: 0.5,
        newClass: "myClass",
      },
    });
  };

  return (
    <div className="about">
      <Navigation />
      <div className="aboutContainer">
        <div className="aboutItem">
          <img src={Portrait} alt="" />
          <p>
            Hey, I'm <b>Ben Scott</b>, a self-taught web developer based in Sydney. <br />
            <br />4 years ago I began this self-taught journey, now I've been working at a marketing agency for the past year, building websites, optimizing user experiences, and handling everything from front-end design to back-end development. But I don't just stick to coding—I've also dived headfirst into 3D modeling, 3D animation, and 2D animation.
            <br />
            <br />I love mixing tech with creativity and constantly pushing myself to learn new things. When I'm not glued to my screen working, I'm probably printing something cool on my 3D printer, gaming, or just chilling at the beach. I work with a bunch of different tools and languages, including <b>JavaScript</b>, <b>HTML & CSS</b>, <b>PHP</b>,<b>React</b>, <b>WordPress</b>, and <b>SQL</b> for web development. On the creative side, I use Blender, After Effects, FreeCAD, Photoshop, Illustrator, and Figma to bring ideas to life, whether it's designing, animating, or prototyping. I'm always looking for new challenges and ways to combine my skills, whether it's coding something slick, creating animations, or experimenting with new tech. <br />
            <br />
            If you're working on something cool and need a developer who loves both the technical and creative side of things, let's chat!
          </p>
        </div>
        {/* <Banner /> */}

        <div className="funFacts">
          <div className="funFactsWrapper">
            <span className="factQuestion">Favourite Emoji?</span>
            <span className="factAnswer">🧌</span>

            <button className="button" onClick={generateFunFact}>
              <span>FUN</span>fact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
