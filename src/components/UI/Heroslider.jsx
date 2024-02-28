import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Container } from "reactstrap";
import "../../styles/hero-slider.css";

function Heroslider() {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinity: true,
    autoplay: true,
    slidesToshow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content">
            <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-light mb-3">Reserve Now and Get 50% off</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content">
            <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-light mb-3">Reserve Now and Get 50% off</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content">
            <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-light mb-3">Reserve Now and Get 50% off</h1>
            <button className="btn reserve__btn ">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-04 mt0">
        <Container>
          <div className="slider__content">
            <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-light mb-3">Reserve Now and Get 50% off</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
}

export default Heroslider;
