import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Shriram Pandav</span>{" "}
            from <span className="purple">Pune, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Frontend Developer</span> at{" "}
            <span className="purple">Thinkershub</span>.
            <br />I hold an Integrated M.Sc. (com.sci) from{" "}
            <span className="purple">SPPU</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Creating high-quality web experiences with modern technologies!"{" "}
          </p>
          <footer className="blockquote-footer">Shriram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
