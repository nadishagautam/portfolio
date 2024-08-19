import React, { useEffect } from "react";
import "./landing.css";
import nadishaGif from "../../assets/images/Nadisha.GIF";

const Landing = () => {
  useEffect(() => {
    document.body.classList.add("landing-page");

    return () => {
      document.body.classList.remove("landing-page");
    };
  }, []);

  return (
    <div className="container">
      <img src={nadishaGif} className="nadisha-gif" />
    </div>
  );
};

export default Landing;
