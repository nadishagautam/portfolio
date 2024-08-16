import React from "react";
import "./landing.css";
import nadishaGif from "../../assets/images/Nadisha.GIF";

const Landing = () => {
  return (
    <div className="container">
      <img src={nadishaGif} className="nadisha-gif" />
    </div>
  );
};

export default Landing;
