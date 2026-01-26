import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’m a Frontend Developer focused on building reliable, scalable, and performant web interfaces. I enjoy working with modern frontend technologies to create intuitive, user-centric experiences that balance design and functionality.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                 HTML, CSS, JavaScript, React, Tailwind CSS and Bootstrap, API handling{" "}
                </b>
              </i>
              — and I enjoy working across frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  scalable frontend applications, interactive user interfaces,{" "}
                </b>
              </i>
              and building performant, user-centric web experiences.
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
