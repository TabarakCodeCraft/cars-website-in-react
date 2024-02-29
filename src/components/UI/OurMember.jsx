import React from "react";
import "../../styles/OurMember.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
// import ava04 from '../../assets/all-images/ava-4.jpg';

const Our_Members = [
  {
    name: "Ali Ahmed",
    experiencs: "5 years of experiencs",
    twitUrl: "#",
    imgUrl: ava01,
    facbook: "#",
    limkedinUrl: "#",
    instaUrl: "#",
  },
  {
    name: "Noor Ali",
    experiencs: "5 years of experiencs",
    twitUrl: "#",
    imgUrl: ava02,
    facbook: "#",
    limkedinUrl: "#",
    instaUrl: "#",
  },
  {
    name: "Husam Ayhem",
    experiencs: "5 years of experiencs",
    twitUrl: "#",
    facbook: "#",
    imgUrl: ava03,
    limkedinUrl: "#",
    instaUrl: "#",
  },
  {
    name: "Mohammed Ali",
    experiencs: "5 years of experiencs",
    twitUrl: "#",
    facbook: "#",
    imgUrl: ava01,
    limkedinUrl: "#",
    instaUrl: "#",
  },
];
export const OurMember = () => {
  return Our_Members.map((item, index) => (
    <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
      <div className="single__member">
        <div className="single__member-img">
          <img src={item.imgUrl} alt="" className="w-100"/>
          <div className="single__member-social">
            <Link to={item.facbook}>
              <i class="ri-facebook-line"></i>
            </Link>
            <Link to={item.twitUrl}>
              <i class="ri-twitter-line"></i>
            </Link>
            <Link to={item.limkedinUrl}>
              <i class="ri-linkedin-line"></i>
            </Link>
            <Link to={item.instaUrl}>
              <i class="ri-instagram-line"></i>
            </Link>
          </div>
        </div>
        <h6 className="text-center mb-0 mt-3">{item.name}</h6>
        <p className="section__description text-center">{item.experiencs}</p>
      </div>
    </Col>
  ));
};
