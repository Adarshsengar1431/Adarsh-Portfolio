import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img-3.gif";
import projImg4 from "../assets/img/project-img-4.png"
import projImg5 from '../assets/img/project-img-5.png'
import projImg6 from '../assets/img/project-img-6.png'
import projImg7 from '../assets/img/project-img-7.gif'
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [

    {
      title: "Story Worm Book App",
      description: "React Native + Expo Router, Mongo DB, Cloudinary, JWT tokens, Node.Js",
      imgUrl: projImg6,
      projectLink: "https://github.com/Adarshsengar1431/MERN-Storyworm-React-Native-Expo",
    },
    {
      title: "Swiggy Clone",
      description: "React JS, Tailwind CSS, Node JS, Express JS",
      imgUrl: projImg7,
      projectLink: "https://github.com/Adarshsengar1431/Swiggy-Clone",
    },
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
      title: "IMDB Clone Master",
      description: "React JS, Node JS, Tailwind CSS",
      imgUrl: projImg3,
      projectLink: "https://github.com/Adarshsengar1431/IMDBCLONE-master",
    },
    {
      title: "Search GitHub Profile",
      description: "HTML, CSS, JS",
      imgUrl: projImg4,
      projectLink: "https://github.com/Adarshsengar1431/Search-Github-Profile",
    },
    {
      title: "Password Generator",
      description: "HTML, CSS, JS",
      imgUrl: projImg5,
      projectLink: "https://github.com/Adarshsengar1431/Password-Generator?tab=readme-ov-file",
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
                  Creating Seamless Web Experiences, Building Robust Solutions and Transformative Design🚀:
                   Full Stack Development and Innovative UI/UX Design<br/>
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
