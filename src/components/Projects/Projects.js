import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Customized Taxi Booking Service"
              description="Designed and Developed a customized taxi booking service to 
allow users to book seats in cabs. Utilised NextJs for frontend, used GoogleMaps API, Stripe for 
the payment and Clerk for Authentication services"
              ghLink="https://github.com/utkarshsp206/MyTaxi"
              demoLink="https://my-taxi-rouge.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TRIPTI - Food Waste Management & Redistribution"
              description="Implemented machine learning algorithms to predict surplus 
food, facilitating efficient redistribution to the needy with 
over 93% accuracy "
              ghLink="https://github.com/utkarshsp206/TriptiDevCreate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="RWA Management System"
              description="Created a Web application using the MERN stack to digitalize 
society activities such as gate entry, complaint registration, 
and maintenance collection"
              ghLink="https://github.com/utkarshsp206/societySquare"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Brainspark Website"
              description="This website is developed for a technology based startup which provides various tech services to multiple business across worlwide. Services provided are proofreading, Subject Matter Expert, Web Designing, etc."
              ghLink="https://github.com/utkarshsp206/brainspark-website"
              demoLink="https://utkarshsp206.github.io/brainspark-website/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
