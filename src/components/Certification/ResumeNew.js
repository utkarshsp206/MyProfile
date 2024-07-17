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
              title1="Generative AI: Prompt Engineering Basics"
              title2="IBM"
              title3="Feb 2024"
              ghLink="https://www.coursera.org/account/accomplishments/verify/DEHS546345ZD?trk=public_profile_see-credential"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title1="Introduction to Microsoft Azure Cloud Services"
              title2="Microsoft"
              title3="Feb 2024"
              ghLink="https://www.coursera.org/account/accomplishments/verify/WCYPQ4WQSH26?trk=public_profile_see-credential"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title1="Cybersecurity for Everyone"
              title2="University of Maryland"
              title3="Jan 2024"
              ghLink="https://www.coursera.org/account/accomplishments/verify/VP579D9KDDT9?trk=public_profile_see-credential"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title1="Data Science Professional Certificate"
              title2="IBM"
              title3="Sep 2023"
              ghLink="https://www.coursera.org/account/accomplishments/professional-cert/6VAEYF9TXPYA?trk=public_profile_see-credential"
            />
          </Col>

          {/* Render the last two certificates without buttons */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title1="Oracle Cloud Infrastructure 2023"
              title2="Oracle"
              title3="Dec 2023"
              ghLink="https://drive.google.com/file/d/1LXezi7rytcU-y0UeGREypn4indwDSZsE/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title1="Azure AI Fundamentals"
              title2="Microsoft"
              title3="Jul 2023"
              ghLink="https://drive.google.com/file/d/1R6iG57otXRtZPehoKR5OCqSsjSxBjwIu/view"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
