import React from "react";
import "./designContent.css";
import FadeInSection from "../FadeInSection";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import floorMattress from "../../assets/images/Graphic/floorMattress.webp";
import seaLeg from "../../assets/images/Graphic/seaLeg.webp";
import fashionIcon from "../../assets/images/Graphic/fashionIcon.webp";
import notLooking from "../../assets/images/Graphic/notLooking.webp";
import funghi from "../../assets/images/Graphic/funghi.webp";
import closeEnough from "../../assets/images/Graphic/closeEnough.webp";
import mourning from "../../assets/images/Graphic/mourning.webp";
import loveAdvice from "../../assets/images/Graphic/loveAdvice.webp";
import somethingBorrowed from "../../assets/images/Graphic/somethingBorrowed.webp";
import rosePasta from "../../assets/images/Graphic/rosePasta.webp";
import horoscopes from "../../assets/images/Graphic/horoscopes.webp";
import romaceAlive from "../../assets/images/Graphic/romaceAlive.webp";
import dancingDark from "../../assets/images/Graphic/dancingDark.webp";
import GRWM from "../../assets/images/Graphic/GRWM.webp";
import horoscopes2025 from "../../assets/images/Graphic/horoscopes2025.webp";
import innerFem from "../../assets/images/Graphic/innerFem.webp";
import magicOrdinary from "../../assets/images/Graphic/magicOrdinary.webp";
import notConcept from "../../assets/images/Graphic/notConcept.webp";
import rehabilitation from "../../assets/images/Graphic/rehabilitation.webp";
import sporeyHouse from "../../assets/images/Graphic/sporeyHouse.webp";
import theEdit from "../../assets/images/Graphic/theEdit.webp";
import biAlliance from "../../assets/images/Graphic/biAlliance.webp";

const images = [
  biAlliance,
  innerFem,
  loveAdvice,
  seaLeg,
  fashionIcon,
  somethingBorrowed,
  funghi,
  notLooking,
  mourning,
  floorMattress,
  dancingDark,
  rosePasta,
  horoscopes,
  romaceAlive,
  closeEnough,
  horoscopes2025,
  GRWM,
  magicOrdinary,
  notConcept,
  theEdit,
  sporeyHouse,
  rehabilitation,
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
