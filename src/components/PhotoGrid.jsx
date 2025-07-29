import React, { useState, useRef, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import FadeInSection from "./FadeInSection";

const PhotoGrid = ({ images, smallScreenImages = null }) => {
  const [landscapeIndexes, setLandscapeIndexes] = useState([]);
  const landscapeIndexesRef = useRef([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsSmallScreen(window.innerWidth <= 768);
    checkSize(); // Run on mount
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const displayedImages = isSmallScreen && smallScreenImages
    ? smallScreenImages
    : images;

  const handleImageLoad = (e, index) => {
    const { naturalWidth, naturalHeight } = e.target;
    if (naturalWidth > naturalHeight && !landscapeIndexesRef.current.includes(index)) {
      landscapeIndexesRef.current.push(index);
      setLandscapeIndexes([...landscapeIndexesRef.current]);
    }
  };

  return (
    <div className="photo-grid">
      {displayedImages.map((img, i) => (
        <div
          key={i}
          className={`grid-item ${landscapeIndexes.includes(i) ? "span-2" : ""}`}
        >
          <FadeInSection>
            <LazyLoadImage
              src={img}
              alt={`Editorial Image ${i}`}
              effect="blur"
              onLoad={(e) => handleImageLoad(e, i)}
            />
          </FadeInSection>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
