import React from "react";
import "./designContent.css";
import fashionIcon from "../../assets/images/Graphic/fashionIcon.png";
import mourning from "../../assets/images/Graphic/mourning.png";
import notLooking from "../../assets/images/Graphic/notLooking.png";
import funghi from "../../assets/images/Graphic/funghi.png";
import closeEnough from "../../assets/images/Graphic/closeEnough.png";
import faceOfHero from "../../assets/images/Graphic/faceOfHero.png";
import floorMattress from "../../assets/images/Graphic/floorMattress.png";
import motherhood from "../../assets/images/Graphic/motherhood.png";
import somethingBorrowed from "../../assets/images/Graphic/somethingBorrowed.png";
import takeVideo from "../../assets/images/Graphic/takeVideo.png";
import cookies from "../../assets/images/Graphic/cookies.png";
import rosePasta from "../../assets/images/Graphic/rosePasta.png";
import sangria from "../../assets/images/Graphic/sangria.png";
import shirleyTemple from "../../assets/images/Graphic/shirleyTemple.png";
import horoscopes from "../../assets/images/Graphic/horoscopes.png";
import loveAdvice from "../../assets/images/Graphic/loveAdvice.png";
import romaceAlive from "../../assets/images/Graphic/romaceAlive.jpg";
import seaLeg from "../../assets/images/Graphic/seaLeg.jpg";
import FadeInSection from "../FadeInSection";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const GraphicDesignContent = () => {
  return (
    <div className="graphic-design-container">
      <div className="designColumn">
        <FadeInSection>
          <LazyLoadImage src={floorMattress} alt="Floor Mattress" effect="blur" />
        </FadeInSection>
        <FadeInSection>
          <LazyLoadImage src={seaLeg} alt="Sea Leg" effect="blur" />
        </FadeInSection>
        <FadeInSection>
          <LazyLoadImage src={fashionIcon} alt="Fashion Icon" effect="blur" />
        </FadeInSection>
        <FadeInSection>
          <LazyLoadImage src={notLooking} alt="Not Looking" effect="blur" />
        </FadeInSection>
        <FadeInSection>
          <LazyLoadImage src={funghi} alt="Funghi" effect="blur" />
        </FadeInSection>
        <FadeInSection>
          <LazyLoadImage src={closeEnough} alt="Close Enough" effect="blur" />
        </FadeInSection>
      </div>

      <div className="designColumn">
        <FadeInSection>
          <LazyLoadImage src={mourning} alt="Mourning" effect="blur" />
        </FadeInSection>
        <FadeInSection>
          <LazyLoadImage src={motherhood} alt="Motherhood" effect="blur" />
        </FadeInSection>
        <FadeInSection>
          <LazyLoadImage src={loveAdvice} alt="Love Advice" effect="blur" />
        </FadeInSection>
        <FadeInSection>
          <LazyLoadImage src={somethingBorrowed} alt="Something Borrowed" effect="blur" />
        </FadeInSection>
        <FadeInSection>
          <LazyLoadImage src={takeVideo} alt="Take Video" effect="blur" />
        </FadeInSection>
        <FadeInSection>
          <LazyLoadImage src={cookies} alt="Cookies" effect="blur" />
        </FadeInSection>
      </div>

      <div className="designColumn">
        <FadeInSection>
          <LazyLoadImage src={faceOfHero} alt="Face of Hero" effect="blur" />
        </FadeInSection>
        <FadeInSection>
          <LazyLoadImage src={rosePasta} alt="Rose Pasta" effect="blur" />
        </FadeInSection>
        <FadeInSection>
          <LazyLoadImage src={shirleyTemple} alt="Shirley Temple" effect="blur" />
        </FadeInSection>
        <FadeInSection>
          <LazyLoadImage src={sangria} alt="Sangria" effect="blur" />
        </FadeInSection>
        <FadeInSection>
          <LazyLoadImage src={horoscopes} alt="Horoscopes" effect="blur" />
        </FadeInSection>
        <FadeInSection>
          <LazyLoadImage src={romaceAlive} alt="Romace Alive" effect="blur" />
        </FadeInSection>
      </div>
    </div>
  );
};

export default GraphicDesignContent;

