import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Restroapp from "../../Assets/Projects/Restro-app.png";
import Portfolio from "../../Assets/Projects/Portfolio.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="Developed a personal portfolio website using React to showcase projects, technical skills, and professional information in a structured way. Implemented a projects section to display completed projects with descriptions, technologies used, and live project links. Used React component-based architecture to build reusable components. Created different sections such as Home, About, Projects, and Resume to present information clearly and improve navigation and also added download Functionality."
              ghLink="https://github.com/shrip1611/Portfolio"
              demoLink="https://shrip1611.github.io/Restro-app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Restroapp}
              isBlog={false}
              title="DocGrow"
              description="Developed UI components using React.js and modern JavaScript (ES6+). Integrated REST APIs with the frontend using Axios for data fetching and submission. Implemented Axios interceptors for handling request/response processing, headers, and global error handling. Added request and response encryption/decryption to ensure secure communication with backend APIs. Developed real-time features using Socket.IO for live data updates between frontend and backend. Implemented role-based access control and permission management to restrict features based on user roles. Built dynamic forms and validation logic for creating and updating application data."
              ghLink="https://github.com/itdocgrow/docgrow_react_dashboard/tree/dev"
            />
          </Col>
         
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Restroapp}
              isBlog={false}
              title="Restro-app"
              description="Designed an interactive and user-friendly interface to make navigation simple and improve the overall user experience. Developed a hero section with a clear Call-to-Action (CTA) button to guide users toward key sections of the website. Implemented a filter-based menu system where users can view food items by categories such as All, Veg, and Non-Veg. Created a offer banner section to highlight special restaurant offers and promotions. Implemented aform submission feature using a POST request with JSONPlaceholder API to simulate backend form data submission. Added pagination in the menu section to display menu cards efficiently and improve performance when handling multiple items. Designed the layout to be fully responsive."
              ghLink="https://github.com/shrip1611/Restro-app"
              demoLink="https://shrip1611.github.io/Restro-app/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
