import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1110.jpg";
// import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img222.png";
// import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img111.png";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Online Job Portal",
      description: "React JS+Vite, Tailwind CSS, Node JS, Firebase",
      imgUrl: projImg1,
      projectLink: "https://github.com/Adarshsengar1431/online-job-portal",
    },
    {
      title: "Online Blood Bank Management System",
      description: "HTML, CSS, JS, SQL",
      imgUrl: projImg2,
      projectLink: "https://github.com/Adarshsengar1431/Blood-bank",
    },
    {
      title: "Portfolio",
      description: "React JS, Bootstrap, Node JS",
      imgUrl: projImg3,
      projectLink: "https://github.com/Adarshsengar1431/Adarsh-Portfolio",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  Creating Seamless Web Experiences, Building Robust Applications and Transforming User Experience:
                   Full Stack Java Development and Innovative UI/UX Design<br/>
                  </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      

                      <p>Hello My Name Is Adarsh S Sengar</p>

                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">


                      <p>Hello My Name Is Adarsh S Sengar</p>
                      

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
