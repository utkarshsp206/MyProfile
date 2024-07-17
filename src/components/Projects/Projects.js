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
              title="Team-Meet"
              description="This Project is like Gmeet where we can organise a meeting on a particular date and time, And this application will notify you by sending email on the account by which you have logged in, to join the Meet and in the meeting there will be a chatting option and also a whiteboard feature for all the participants."
              ghLink="https://github.com/sujanrupu/teamMeet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blog App"
              description="A personal blog built with MERN stack, leveraging MongoDB for data storage, Express.js for backend logic, and React for frontend rendering. It supports markdown-based content, dark mode, and offers an easy writing experience. 
              The blog dynamically fetches content from markdown files, enabling seamless updates and customization."
              ghLink="https://github.com/sujanrupu/Blog_application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Job Application"
              description="Developed a comprehensive job-seeking web application using the MERN stack, encompassing MongoDB for database management, Express.js for server-side logic, React for dynamic frontend interfaces, and Node.js for seamless integration. The application facilitates job seekers in searching, applying."
              ghLink="https://github.com/sujanrupu/Job_seeking_application"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Paraphrase Detection"
              description="Paraphrase detection involves analyzing text passages to determine their similarity while preserving meaning, using methods like neural networks and machine learning. It's crucial for tasks like plagiarism detection and question answering systems, enhancing understanding and information extraction from textual data by recognizing equivalent expressions and language variations."
              ghLink="https://github.com/sujanrupu/Paraphrase_detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Notion Component"
              description="Crafted a homepage prototype with React, inspired by Notion's design language. Leveraging React's component-based approach, the page offers a dynamic and user-friendly interface akin to Notion's intuitive layout. It seamlessly integrates various components and widgets, providing a versatile and customizable user experience for organizing and accessing information efficiently."
              ghLink="https://github.com/sujanrupu/Notion_home_react"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Video Manager - Chrome Extension"
              description="Developed a Chrome extension enabling users to control YouTube video settings like brightness, contrast, playback speed, rotation, and more. Utilizing JavaScript and Chrome's extension API, it offers a seamless interface for adjusting video parameters, enhancing viewing experience and customization options directly within the YouTube player. The extension empowers users to tailor their video playback environment."
              ghLink="https://github.com/sujanrupu/VideoManager-ChromeExtension"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
