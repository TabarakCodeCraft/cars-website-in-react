import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quikLinks = [
  { path: "/about", display: "About" },
  { path: "/#", display: "Privacy Policy" },
  { path: "/cars", display: "Car Listing" },
  { path: "/blog", display: "Blog" },
  { path: "/contact", display: "Contact" },
];

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-3">
                  <i class="ri-car-line"></i>
                  <span>
                    Rent Car <br />
                    Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
               This is website for all lover cars <br />
               you can take the project code from my github @TaabarakCodCraft and make some changed if you want.
              
            
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quikLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb__4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">123 Tabarak, Erbil | Iraq</p>
              <p className="office__info">Phone: +123-456-789-11</p>
              <p className="office__info">Email: carlover@gmail.com</p>
              <p className="office__info">Office Time: 10Am-7Pm</p>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe Our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='12'>
          <div className="footer__bottom">
            <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4 ">
              <li class="ri-copyright-line"></li>Copyright By Programmer Tota 2024. All rights reserved
            </p>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
