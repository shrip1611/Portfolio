import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../Assets/min-logo.png";
import Navbar from "react-bootstrap/Navbar";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="3" className="footer-copywright">
        <Navbar.Brand href="/" className="d-flex items-center">
         <img src={logo} alt="logo" className="w-25" />
         </Navbar.Brand>
        </Col>
        <Col md="3" className="footer-copywright">
          <h3>Designed and Developed by Shriram Pandav</h3>
        </Col>
        <Col md="3" className="footer-copywright">
          <h3>Copyright @ {year}</h3>
        </Col>
        <Col md="3" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/shrip1611"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/shriram-pandav-446976270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/shriram_pandav_1611?igsh=anE4bGE5YXNrdDN2"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
