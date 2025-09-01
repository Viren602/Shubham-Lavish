import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRight,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next-arrow" onClick={onClick}>
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev-arrow" onClick={onClick}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </div>
  );
}

const MyCarousel = (props) => {
  const settings = {
    autoplay: false,
    dots: false,
    infinite: true,
    vertical: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 2,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  const slideRefs = useRef([]);

  useEffect(() => {
    const setEqualHeight = () => {
      let maxHeight = 0;
      slideRefs.current.forEach((slide) => {
        if (slide) {
          slide.style.height = "auto"; // Reset height to calculate correctly
          maxHeight = Math.max(maxHeight, slide.clientHeight);
        }
      });
      slideRefs.current.forEach((slide) => {
        if (slide) {
          slide.style.height = `${maxHeight}px`;
        }
      });
    };

    // Run once on mount and on testimonialList changes
    setEqualHeight();
    window.addEventListener("resize", setEqualHeight);

    return () => window.removeEventListener("resize", setEqualHeight);
  }, [props.testimonialList]);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {props.sliderFor === "Testimonials"
          ? props.testimonialList.map((details, key) => (
              <div
                key={key}
                className="slide"
                ref={(el) => (slideRefs.current[key] = el)}
              >
                <div className="testimonial-box">
                  <div className="quote-up">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </div>
                  <div className="quote-msg">
                    <p>{details.message}</p>
                  </div>
                  <div className="quote-user">
                    <span>{details.name}</span>
                    <span>{details.position}</span>
                  </div>
                  <div className="user-pic">
                    <img src={details.image} alt="user" />
                  </div>
                  <div className="quote-down">
                    <FontAwesomeIcon icon={faQuoteRight} />
                  </div>
                </div>
              </div>
            ))
          : null}
      </Slider>
    </div>
  );
};

export default MyCarousel;
