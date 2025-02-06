import React from "react";
import Navigation from "../Components/Navigation";
import Portrait from "../assets/images/stockportrait.jpg";

function About() {
  return (
    <div className="about">
      <Navigation />
      <div className="aboutContainer">
        <div className="gridItem gridOne">
          <img src={Portrait} alt="" />
        </div>
        <div className="gridItem gridTwo">
          <p>
            Hey, I’m <b className="coloured">Ben Scott</b>, a self-taught web developer based in <b>Sydney</b>. <br />
            <br />
            <b>4 years ago</b> I began this self-taught journey, now I’ve been working at a marketing agency for the past year, building websites, optimizing user experiences, and handling everything from front-end design to back-end development. But I don’t just stick to coding—I’ve also dived headfirst into 3D modeling, 3D animation, and 2D animation, all self-taught. I love mixing tech with creativity and constantly pushing myself to learn new things. When I’m not glued to my screen working, I’m probably printing something cool on my 3D printer, gaming, or just chilling at the beach.
          </p>
          <br />
          <p>
            I work with a bunch of different tools and languages, including <b>JavaScript</b>, <b>HTML & CSS</b>, <b>PHP</b>, <b>React</b>, <b>WordPress</b>, and <b>SQL</b> for web development. On the creative side, I use <b>Blender</b>, <b>After Effects</b>, <b>FreeCAD</b>, <b>Photoshop</b>, <b>Illustrator</b>, and <b>Figma</b> to bring ideas to life, whether it’s designing, animating, or prototyping. I’m always looking for new challenges and ways to combine my skills, whether it’s coding something slick, creating animations, or experimenting with new tech. If you’re working on something cool and need a developer who loves both the technical and creative side of things,{" "}
            <b>
              <a href="/chat">let’s chat!</a>
            </b>
          </p>
        </div>
        <div className="gridItem gridThree">
          <h2>FUN FACTS</h2>
          <br />
          <p className="funFact">
            <b>Favourite Emoji:</b> 🧌
          </p>
          <p className="funFact">
            <b>Dream Car:</b> 1979 RWB Porche 911 🏎️
          </p>
          <p className="funFact">
            <b>Favourite European Region:</b> Tuscany 🌎
          </p>
          <p className="funFact">
            <b>Smell I like:</b> The air just before rain ☔️
          </p>
          <p className="funFact">
            <b>Movie of choice:</b> Fear & Loathing in Las Vegas 🎬
          </p>
          <p className="funFact">
            <b>Favourite Song (right now):</b> Protect the Cross - JPEGMAFIA 🎵
          </p>
          <p className="funFact">
            <b>Most disliked gym day:</b> Back (idk why) 🏋🏼
          </p>
          <p className="funFact">
            <b>Food craving right now: </b> Greasyyyy burgerrrr 🍔
          </p>
          <p className="funFact">
            <b>What I wanted to be when I grew up: </b> Chef 🧑🏼‍🍳
          </p>
          <p className="funFact">
            <b>Favourite Keyboard Shortcut: </b> CMD + F (goated) 🔍
          </p>
          <p className="funFact">
            <b>Best Video Game: </b> Portal 1 + were unbeatable 👾
          </p>
          <p className="funFact">
            <b>Favourite Sport: </b> Mountain Biking 🚵🏼
          </p>
          <p className="funFact">
            <b>Confused About: </b> Space, I dont get it 🔭
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
