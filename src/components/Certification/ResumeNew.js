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
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my certifications.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title1="Data Structures and Performance"
              title2="UCSanDiego"
              title3="June 2024"
              ghLink="https://www.coursera.org/account/accomplishments/verify/G7MVNT5JC8KM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title1="Full Stack Software Developer Assessment"
              title2="IBM"
              title3="April 2024"
              ghLink="https://www.coursera.org/account/accomplishments/verify/67ZYGJCMLDHM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title1="Hands-on Introduction to Linux Commands and Shell Scripting"
              title2="IBM"
              title3="April 2024"
              ghLink="https://www.coursera.org/account/accomplishments/verify/JRMTB2ZFWT4C"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title1="Introduction to Agile Development and Scrum"
              title2="IBM"
              title3="March 2024"
              ghLink="https://www.coursera.org/account/accomplishments/verify/TVQRUDBTGZMP"
            />
          </Col>

          {/* Render the last two certificates without buttons */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title1="JavaScript Programming with React, Node & MongoDB"
              title2="IBM"
              title3="March 2024"
              ghLink="https://www.coursera.org/account/accomplishments/specialization/T23E9KBF2856"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
