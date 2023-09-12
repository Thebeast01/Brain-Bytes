import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import footerLogo from '../../Assests/images/logo.jpg';
import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },

  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

  {
    display: "Purchases Guide",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  const iconStyle = {
    fontSize: '30px', // Adjust the size as needed
  };
  // const footerLogo ="../../assests/images/logo.jpg";
  return (
    <footer className="footer">
      {/* <Container> */}
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="">
              <div className="footer-logo">
        <img src={footerLogo} alt="Company Logo" />
      </div>
              </i>
            </h2>

            <div className="follows">
              <p className="mb-0"></p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line" style={iconStyle}></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line" style={iconStyle}></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line" style={iconStyle}></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line" style={iconStyle}></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Lucknow, INDIA</p>
            <p> Phone: +00 00000 00000</p>
            <p>Email: example@gmail.com</p>
          </Col>
        </Row>
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
