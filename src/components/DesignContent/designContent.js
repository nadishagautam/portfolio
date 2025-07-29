import React from "react";
import "./designContent.css";
import FadeInSection from "../FadeInSection";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import floorMattress from "../../assets/images/Graphic/floorMattress.png";
import seaLeg from "../../assets/images/Graphic/seaLeg.jpg";
import fashionIcon from "../../assets/images/Graphic/fashionIcon.png";
import notLooking from "../../assets/images/Graphic/notLooking.png";
import funghi from "../../assets/images/Graphic/funghi.png";
import closeEnough from "../../assets/images/Graphic/closeEnough.png";
import mourning from "../../assets/images/Graphic/mourning.png";
import motherhood from "../../assets/images/Graphic/motherhood.png";
import loveAdvice from "../../assets/images/Graphic/loveAdvice.png";
import somethingBorrowed from "../../assets/images/Graphic/somethingBorrowed.png";
import takeVideo from "../../assets/images/Graphic/takeVideo.png";
import cookies from "../../assets/images/Graphic/cookies.png";
import faceOfHero from "../../assets/images/Graphic/faceOfHero.png";
import rosePasta from "../../assets/images/Graphic/rosePasta.png";
import shirleyTemple from "../../assets/images/Graphic/shirleyTemple.png";
import sangria from "../../assets/images/Graphic/sangria.png";
import horoscopes from "../../assets/images/Graphic/horoscopes.png";
import romaceAlive from "../../assets/images/Graphic/romaceAlive.jpg";
import dancingDark from "../../assets/images/Graphic/dancingDark.jpg";
import GRWM from "../../assets/images/Graphic/GRWM.jpg";
import horoscopes2025 from "../../assets/images/Graphic/horoscopes2025.jpg";
import innerFem from "../../assets/images/Graphic/innerFem.jpg";
import magicOrdinary from "../../assets/images/Graphic/magicOrdinary.jpg";
import notConcept from "../../assets/images/Graphic/notConcept.jpg";
import rehabilitation from "../../assets/images/Graphic/rehabilitation.jpg";
import sporeyHouse from "../../assets/images/Graphic/sporeyHouse.jpg";
import theEdit from "../../assets/images/Graphic/theEdit.jpg";
import biAlliance from "../../assets/images/Graphic/biAlliance.jpg";

const images = [
  biAlliance, innerFem, loveAdvice, seaLeg, fashionIcon, somethingBorrowed, funghi, notLooking,
  mourning, floorMattress, dancingDark, rosePasta, shirleyTemple, 
  horoscopes, romaceAlive, closeEnough, horoscopes2025, GRWM, magicOrdinary, notConcept, 
  theEdit,
  sporeyHouse, rehabilitation
];

const GraphicDesignContent = () => {
  return (
    <div className="graphic-grid">
      {images.map((img, index) => (
        <FadeInSection key={index}>
          <LazyLoadImage src={img} alt={`Graphic ${index}`} effect="blur" />
        </FadeInSection>
      ))}
    </div>
  );
};

export default GraphicDesignContent;
