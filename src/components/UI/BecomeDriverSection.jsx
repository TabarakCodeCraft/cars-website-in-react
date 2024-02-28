import React from "react";
import "../../styles/BecomeDriverSection.css";
import { Container, Row, Col } from "reactstrap";
import img from "../../assets/all-images/cars-img/toyota-offer-2.png";

export const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <img src={img} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn with Us? So Dont Be Late
            </h2>
            <button className="btn become__driver-btn mt-4">
              Become a Driver
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
