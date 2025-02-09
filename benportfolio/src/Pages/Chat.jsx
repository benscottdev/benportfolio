import React from "react";
import Navigation from "../Components/Navigation";

function Chat() {
  return (
    <div className="chat">
      <Navigation />
      <div className="chatContainer">
        <p>
          Ready to collaborate and bring your ideas to life online? Count me in. Whether you've got questions, bursts of creativity, or you're just eager to chat about the latest web trends, I'm all ears. Let's roll up our sleeves and create something awesome together!
          <br />
          <br />
          Chat soon,{" "}
          <span className="coloured">
            <b>Ben Scott</b>
          </span>
          .
          <br />
          <br />
          phone: 0498 095 622 <br />
          email: <a href="mailto: benscott.dev@gmail.com">benscott.dev@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default Chat;
