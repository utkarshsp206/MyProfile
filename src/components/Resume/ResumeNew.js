import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ExperienceCard";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/40.png";
import emotion from "../../Assets/Projects/5.png";
import editor from "../../Assets/Projects/3.png";
import chatify from "../../Assets/Projects/1.png";
import suicide from "../../Assets/Projects/4.png";
import bitsOfCode from "../../Assets/Projects/2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are some of my past experiences.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title1="Open Source Contributor"
              title2="Hacktoberfest"
              title3="September, 2023 - October, 2023"
              description="-> Designed the interface of various web pages, employing modern design principles and user-centered approaches to create visually appealing and intuitive layouts.
              -> Implemented different user interactive seamless functionalities, such as dynamic content loading, drag-and-drop features, and real-time updates, to enhance user engagement and usability across the websites."
              ghLink="https://github.com/sujanrupu/teamMeet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title1="Open Source Contributor"
              title2="GirlScript Summer of Code"
              title3="May 2023 -- August 2023"
              description="-> Developed frontend components and UI/UX elements for multiple gaming websites, ensuring seamless user interactions and captivating visual experiences.
              -> Implemented responsive design principles to ensure compatibility across various devices, enhancing accessibility and user engagement."
              ghLink="https://github.com/sujanrupu/Blog_application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title1="Data Analyst Intern"
              title2="CodeClause"
              title3="June 2023 -- July 2023"
              description="

              -> Developed a diverse range of data analysis models utilizing machine learning and statistical techniques to extract insights from complex datasets, encompassing predictive analytics, classification, clustering, and regression tasks.
              -> Achieved an impressive 85% accuracy rate across the implemented models, demonstrating robust performance in tasks."
              ghLink="https://github.com/sujanrupu/Job_seeking_application"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title1="Web Development Intern "
              title2="Oasis Infobyte"
              title3="Jan 2023 -- Feb 2023"
              description="->  As a member of the software development team, I actively contributed to designing websites across multiple frameworks.

              ->  Working from scratch, I participated in the design and development process of websites using various frameworks, ensuring adherence to best practices and standards while customizing functionalities to meet client needs. "
              ghLink="https://github.com/sujanrupu/Paraphrase_detection"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
