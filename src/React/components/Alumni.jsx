import React, { useState, useEffect } from "react";
import alumniData from "../../Json/Alumni.json";
import alumniImage from "../../../public/alumni-image.svg";
import dots from "../../../public/dots.svg";

function AlumniCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const alumniLength = alumniData.alumni.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % alumniLength);
    }, 3000); // change every 3 seconds
    return () => clearInterval(intervalId);
  }, [activeIndex, alumniLength]);

  const handlePrev = () => {
    setActiveIndex((activeIndex + alumniLength - 1) % alumniLength);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % alumniLength);
  };

  return (
    <>
    <section className="sub-title sub-title-carousel">
    <img src={dots} alt="dots" />
    <h2>Alumni</h2>
  </section>
  <h4> Learn from our <span className="GT-Super">students</span></h4>
    <div className="carousel"
    style={{
        backgroundImage: `linear-gradient(180deg, rgba(23, 27, 55, 0.8) 26.56%, rgba(10, 15, 57, 0) 100%), url(${alumniData.alumni[activeIndex].background})`
      }}>
      <div className="carousel__prev" onClick={handlePrev}></div>

        <div className="carousel__content">
          <img src={alumniImage} alt={alumniData.alumni[activeIndex].name} />
          <h2>{alumniData.alumni[activeIndex].name}</h2>
          <p>{alumniData.alumni[activeIndex].description}</p>
        </div>

  
      <div className="carousel__next" onClick={handleNext}></div>
    </div>
    </>
  );
}

export default AlumniCarousel;




