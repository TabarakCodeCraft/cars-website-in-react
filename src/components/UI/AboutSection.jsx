import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import img from "../../assets/all-images/cars-img/bmw-offer.png";

export const AboutSection = () => {
  return (
    <section className="about__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                fugit doloribus vel voluptas sed veniam maxime perferendis
                recusandae! Cum, assumenda voluptatem facere enim ad illum
                debitis non, officia est, culpa dolorem aperiam corporis
                accusantium expedita ut officiis ab! Mollitia, ea?
              </p>
              <div className="about__section-item d-flex align-item-center">
                <p className="section__description d-flex align-item-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor, sit
                  amet
                </p>

                <p className="section__description d-flex align-item-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor, sit
                  amet
                </p>
              </div>

              <div className="about__section-item d-flex align-item-center">
                <p className="section__description d-flex align-item-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor, sit
                  amet
                </p>

                <p className="section__description d-flex align-item-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor, sit
                  amet
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={img} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
