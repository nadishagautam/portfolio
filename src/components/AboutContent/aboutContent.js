import "./aboutContent.css";
import React from "react";
import Nadisha from "../../assets/images/AboutNadisha.gif";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutContent = () => {
  return (
    <div className="about-container">
      <div className="row">
        <div className="aboutGrid">
          <div className="column-1">
            <p className="bold">NADISHA GAUTAM</p>
            <p>INNOVATIVE, VERSATILE & CREATIVE</p>
          </div>

          <div className="column-2">
            <div className="spacers"> </div>
            <div className="about-me">
              <p>
                {" "}
                Nadisha is a Toronto-based Creative and Software Developer. She
                graduated from Queen’s University with a degree in Computer
                Science (AI specialization) and Economics. With a unique blend
                of technical expertise and creative vision, she thrives in
                building innovative software solutions and leading design-driven
                projects.{" "}
              </p>
            </div>

            <div className="tech-heading">
              <p className="bold">Technologies & Tools</p>
            </div>
            <p>
              Programming Languages: Java, Python, C, C++, SQL, JavaScript,
              HTML/CSS
            </p>
            <p>
              {" "}
              Frameworks & Libraries: Flask, QML, AWS Cloud9, Amazon SageMaker,
              React
            </p>
            <p>
              Developer Tools: Git, Visual Studio Code, PyCharm, Qt Creator{" "}
            </p>
            <p>
              {" "}
              Design Tools: Adobe Illustrator, Adobe Photoshop, Adobe InDesign,
              Figma, Webflow, Squarespace
            </p>
          </div>

          <div className="column-3"></div>

          <div className="column-4">
            <LazyLoadImage src={Nadisha} effect="blur" />

            <div className="socials">
              <a href="mailto:nadishagautam@gmail.com">EMAIL →</a>
              <a href="https://www.linkedin.com/in/nadisha-gautam/">
                LINKEDIN →
              </a>
              <a href="https://github.com/nadishagautam">GITHUB →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
