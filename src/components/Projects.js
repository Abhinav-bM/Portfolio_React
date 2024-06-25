import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot 2024-06-22 124231.png";
import projImg2 from "../assets/img/Screenshot 2024-06-22 145314.png";
import projImg3 from "../assets/img/Screenshot 2024-06-22 150852.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  
  const projects = [
    {
      title: "Watchvista",
      description: "An ecommerce website for selling watches",
      imgUrl: projImg1,
    },
  ];

  const miniProjects = [
    {
      title: "Kanban-App",
      description:
        "A Kanban app is a visual tool for managing tasks and workflows, using a board and card system to track progress. It enhances productivity by providing clear visibility into task   status and progress.",
      imgUrl: projImg2,
    },
  ];

  const taskBased = [
    {
      title: "Survay form",
      description:`Created a survey form utilizing Zod for robust data validation, ensuring accurate and reliable user inputs. This project highlights my skills in form handling and validation in web development`,
      imgUrl: projImg3,
      link : "https://survay-form-react.vercel.app"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here you'll find a selection of my recent web development
                    projects, demonstrating my skills in creating dynamic,
                    responsive, and user-friendly applications. Each project
                    reflects my commitment to quality and innovation.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Main projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mini Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Task-Based Projects
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {miniProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {taskBased.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
