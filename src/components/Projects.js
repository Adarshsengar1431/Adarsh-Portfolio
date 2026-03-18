import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img-3.gif";
import projImg4 from "../assets/img/project-img-4.png";
import projImg5 from "../assets/img/project-img-5.png";
import projImg6 from "../assets/img/project-img-6.png";
import projImg7 from "../assets/img/project-img-7.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {

  const projects = [
    {
      title: "Story Worm Book App",
      description: "React Native + Expo Router, MongoDB, Cloudinary, JWT, Node.js",
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
      description: "React JS + Vite, Tailwind CSS, Node JS, Firebase",
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
      title: "IMDB Clone",
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
      projectLink: "https://github.com/Adarshsengar1431/Password-Generator",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                  <h2>Projects</h2>
                  <p>
                    Creating Seamless Web Experiences, Building Robust Solutions &
                    Transformative Design 🚀
                  </p>

                  <Tab.Container defaultActiveKey="first">

                    <Nav variant="pills" className="justify-content-center mb-5">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="second">About Me</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="third">Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                      {/* PROJECTS */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* ABOUT */}
                      <Tab.Pane eventKey="second">
                        <div className="experience-card">
                          <h3>About Me</h3>

                          <p>
                            I’m <strong>Adarsh S Sengar</strong>, a passionate
                            <strong> Full Stack Developer</strong> focused on building
                            scalable web and mobile applications.
                          </p>

                          <p>
                            Skilled in <strong>React.js, React Native, FastAPI,
                            Node.js</strong> and modern SQL/NoSQL databases.
                            I enjoy solving real-world problems with clean,
                            maintainable and high-performance code.
                          </p>

                          <p>
                            Currently working on enterprise-level applications,
                            contributing across the full software development lifecycle
                            from UI design to deployment and production support.
                          </p>
                        </div>
                      </Tab.Pane>

                      {/* EXPERIENCE */}
                      <Tab.Pane eventKey="third">
                        <div className="experience-card">

                          <h3>Professional Experience</h3>

                          <h4>Full Stack Developer</h4>
                          <h5>
                            Web Synergies · Client: Schreiber Foods
                            <span> (May 2025 – Present)</span>
                          </h5>

                          <p>
                            <strong>Projects:</strong> Happy Farmer, Freight Invoice Management System (FMS)
                          </p>

                          <ul>
                            <li>
                              Designed and developed scalable enterprise-grade
                              <strong> React.js </strong> applications integrated with
                              <strong> FastAPI </strong> backend services delivering
                              production-ready features across multiple business modules.
                            </li>

                            <li>
                              Improved frontend performance and application stability by
                              fixing rendering issues, eliminating redundant API calls and
                              optimizing payload handling.
                            </li>

                            <li>
                              Enhanced UI/UX across <strong>50+ screens</strong> by implementing
                              centralized loaders, responsive layouts and pixel-perfect
                              <strong> Material UI </strong> components based on Figma designs.
                            </li>

                            <li>
                              Developed core modules for <strong>Freight Management System</strong>
                              including dynamic CRUD workflows, drawer-based forms, intelligent
                              filtering, approval pipelines and automated business rule validations.
                            </li>

                            <li>
                              Built secure file upload workflows integrated with
                              <strong> AWS S3 </strong> and developed containerized
                              <strong> AWS Lambda </strong> functions using Docker for scalable
                              backend processing.
                            </li>

                            <li>
                              Implemented <strong>Role-Based Access Control (RBAC)</strong>,
                              improved REST API performance and strengthened logging &
                              error-handling strategies for stable production releases.
                            </li>

                            <li>
                              Developed reusable React components, custom hooks,
                              advanced search features and optimized DataGrid rendering
                              to improve maintainability and development speed.
                            </li>

                            <li>
                              Collaborated in <strong>Agile/Scrum</strong> sprints using
                              GitHub & Jira, supported CI/CD releases and handled
                              multi-environment deployments (Dev → QA → UAT → Production).
                            </li>
                          </ul>

                          <p>
                            <strong>Tech Stack:</strong> React.js, React Native,
                            FastAPI, Node.js, PostgreSQL, MongoDB, AWS (S3, EC2, Lambda),
                            Docker, Material UI, Tailwind CSS, GitHub, Jira, CI/CD
                          </p>

                        </div>
                      </Tab.Pane>

                    </Tab.Content>

                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};