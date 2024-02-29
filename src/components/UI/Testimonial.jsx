import React from "react";
import Slider from "react-slick";
import ava1 from "../../assets/all-images/ava-1.jpg";
import ava2 from "../../assets/all-images/ava-2.jpg";
import ava3 from "../../assets/all-images/ava-3.jpg";
import ava4 from "../../assets/all-images/ava-4.jpg";
// import ava5 from '../../assets/all-images/ava-5.jpg';

export const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slidesToShow: 3, // Corrected property name
    slidesToScroll: 1, // Corrected property name
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. officiis obcaecati nostrum voluptatum
          doloribus natus laborum assumenda dicta qui laudantium omnis
          repellendus. Error, veniam alias?
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava1} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
      <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. officiis obcaecati nostrum voluptatum
          doloribus natus laborum assumenda dicta qui laudantium omnis
          repellendus. Error, veniam alias?
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava2} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
      <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. officiis obcaecati nostrum voluptatum
          doloribus natus laborum assumenda dicta qui laudantium omnis
          repellendus. Error, veniam alias?
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava3} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
      <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. officiis obcaecati nostrum voluptatum
          doloribus natus laborum assumenda dicta qui laudantium omnis
          repellendus. Error, veniam alias?
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava4} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};
