import React from "react";
import "../../styles/servicesList.css";
import { Col } from "reactstrap";
import ServicesList from "../../assets/data/serviceData";

export const Serviceslist = () => {
  return ServicesList.map((item) => <ServicesItem item={item} key={item.id} />);
};

const ServicesItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item">
      <span className="mb-3 d-inline-block">
        <i class={item.icon} />
      </span>
      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
);
