import React from "react";
import { CommonAbout } from "../components/UI/CommonAbout";
import Helmet from "../components/Helmet/Helmet";
import { AboutSection } from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import { BecomeDriverSection } from "../components/UI/BecomeDriverSection";
import driveImg from "../assets/all-images/drive.jpg";
import { OurMember } from "../components/UI/OurMember";
function About() {
  return (
    <Helmet title="About">
      <CommonAbout title="About Us" />
      <AboutSection  className='about__section'/>
      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We are committed to provied safe ride solutions
                </h2>
                <p className="section__desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam inventore molestiae dolore corporis perspiciatis vel
                  labore necessitatibus sunt maxime, doloribus, repellendus
                  tempore quod laborum nemo autem voluptas at. Pariatur,
                  perferendis!
                </p>

                <p className="section__desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam inventore molestiae dolore corporis perspiciatis vel
                  labore necessitatibus sunt maxime, doloribus, repellendus
                  tempore quod laborum nemo autem voluptas at. Pariatur,
                  perferendis!
                </p>
              </div>
              <div className=" d-flex align-items-center gap-3 mt-4">
                <span className="fs-4">
                  <i className="ri-phone-line"></i>
                </span>
                <div>
                  <h6 className="section__subtitle">Need Any Help ?</h6>
                  <h4>+012345678910</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle"> Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMember />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default About;
