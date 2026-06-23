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
      description:
        "React Native + Expo Router, MongoDB, Cloudinary, JWT, Node.js",
      imgUrl: projImg6,
      projectLink:
        "https://github.com/Adarshsengar1431/MERN-Storyworm-React-Native-Expo",
    },
    {
      title: "Swiggy Clone",
      description: "React JS, Tailwind CSS, Node JS, Express JS",
      imgUrl: projImg7,
      projectLink:
        "https://github.com/Adarshsengar1431/Swiggy-Clone",
    },
    {
      title: "Online Job Portal",
      description: "React JS + Vite, Tailwind CSS, Node JS, Firebase",
      imgUrl: projImg1,
      projectLink:
        "https://github.com/Adarshsengar1431/online-job-portal",
    },
    {
      title: "Online Blood Bank Management System",
      description: "HTML, CSS, JS, SQL",
      imgUrl: projImg2,
      projectLink:
        "https://github.com/Adarshsengar1431/Blood-bank",
    },
    {
      title: "IMDB Clone",
      description: "React JS, Node JS, Tailwind CSS",
      imgUrl: projImg3,
      projectLink:
        "https://github.com/Adarshsengar1431/IMDBCLONE-master",
    },
    {
      title: "Search GitHub Profile",
      description: "HTML, CSS, JS",
      imgUrl: projImg4,
      projectLink:
        "https://github.com/Adarshsengar1431/Search-Github-Profile",
    },
    {
      title: "Password Generator",
      description: "HTML, CSS, JS",
      imgUrl: projImg5,
      projectLink:
        "https://github.com/Adarshsengar1431/Password-Generator",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Creating Seamless Web Experiences, Building Robust
                    Solutions & Transformative Design 🚀
                  </p>

                  <Tab.Container defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="justify-content-center mb-5"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Projects
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          About Me
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Experience
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      {/* PROJECTS */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* ABOUT ME */}
                      <Tab.Pane eventKey="second">
                        <div className="experience-card">
                          <h3>About Me</h3>

                          <p>
                            I'm <strong>Adarsh S Sengar</strong>, a
                            passionate{" "}
                            <strong>Full Stack Developer</strong> with
                            <strong> 1.5+ years of experience</strong>
                            building scalable, enterprise-grade web and
                            mobile applications.
                          </p>

                          <p>
                            My expertise includes
                            <strong>
                              {" "}
                              React.js, React Native, FastAPI,
                              Node.js, AWS, PostgreSQL, MongoDB,
                              Docker, and CI/CD
                            </strong>
                            . I specialize in creating high-performance
                            user interfaces, developing robust backend
                            services, and delivering end-to-end software
                            solutions.
                          </p>

                          <p>
                            Currently working at
                            <strong> Web Synergies</strong> for
                            <strong> Schreiber Foods</strong>,
                            contributing to enterprise platforms
                            including <strong>Happy Farmer</strong> and
                            <strong>
                              {" "}
                              Freight Invoice Management System (FMS)
                            </strong>
                            .
                          </p>

                          <p>
                            I am passionate about clean architecture,
                            reusable component design, performance
                            optimization, cloud technologies, and
                            building products that solve real-world
                            business challenges.
                          </p>

                          <p>
                            <strong>Core Technologies:</strong>
                            React.js, React Native, FastAPI, Python,
                            Node.js, AWS, PostgreSQL, MongoDB, Docker,
                            Kubernetes, Terraform, Material UI,
                            Tailwind CSS, GitHub, Jira, Agile
                            Development, and CI/CD.
                          </p>
                        </div>
                      </Tab.Pane>

                      {/* EXPERIENCE */}
                      <Tab.Pane eventKey="third">
                        <div className="experience-card">
                          <h3>Professional Experience</h3>

                          <h4>Full Stack Developer</h4>

                          <h5>
                            Web Synergies Pvt. Ltd. | Client:
                            Schreiber Foods
                            <span> (May 2025 – Present)</span>
                          </h5>

                          <p>
                            <strong>Projects:</strong> Happy Farmer
                            Platform & Freight Invoice Management
                            System (FMS)
                          </p>

                          <ul>
                            <li>
                              Developed scalable enterprise-grade web
                              applications using
                              <strong>
                                {" "}
                                React.js, FastAPI, PostgreSQL, and AWS
                              </strong>
                              , delivering production-ready solutions
                              across logistics, veterinary reports, BMC
                              testing, transport agreements, reporting,
                              and freight management modules.
                            </li>

                            <li>
                              Improved application performance by
                              resolving UI rendering bottlenecks,
                              eliminating redundant API calls,
                              optimizing asynchronous state handling,
                              and reducing page load issues by nearly
                              <strong> 30%</strong>.
                            </li>

                            <li>
                              Implemented centralized loading
                              management, reusable React components,
                              and responsive Material UI interfaces
                              across <strong>50+ screens</strong>,
                              improving maintainability and user
                              experience.
                            </li>

                            <li>
                              Built secure document and image upload
                              workflows using
                              <strong> AWS S3</strong>, Base64
                              processing, and containerized
                              <strong> AWS Lambda</strong> functions
                              with Docker.
                            </li>

                            <li>
                              Engineered core Freight Management System
                              modules including dynamic CRUD
                              operations, approval workflows,
                              intelligent filtering, invoice
                              processing, validation-driven business
                              rules, and reporting solutions.
                            </li>

                            <li>
                              Implemented
                              <strong>
                                {" "}
                                Role-Based Access Control (RBAC)
                              </strong>
                              , optimized REST API integrations,
                              enhanced logging mechanisms, and
                              strengthened application security and
                              reliability.
                            </li>

                            <li>
                              Developed advanced search functionality,
                              reusable custom hooks, DataGrid
                              optimizations, Excel export features, and
                              reporting utilities to improve
                              operational efficiency.
                            </li>

                            <li>
                              Contributed to PostgreSQL schema
                              discussions, code reviews, GitHub pull
                              requests, CI/CD pipelines, and
                              multi-environment deployments from
                              Development → Test → UAT → Production
                              using FlexDeploy.
                            </li>

                            <li>
                              Developed cross-platform mobile
                              applications using
                              <strong>
                                {" "}
                                React Native (Expo)
                              </strong>
                              , managed SDK upgrades, navigation
                              architecture, dependency resolutions, and
                              release workflows using Expo EAS Build.
                            </li>

                            <li>
                              Collaborated with business analysts, QA
                              teams, designers, and product owners in
                              Agile/Scrum environments to deliver
                              high-quality enterprise software
                              solutions.
                            </li>
                          </ul>

                          <p>
                            <strong>Tech Stack:</strong> React.js,
                            React Native (Expo), FastAPI, Python,
                            Node.js, PostgreSQL, MongoDB, AWS (S3,
                            EC2, Lambda, CloudWatch), Docker,
                            Kubernetes, Terraform, Material UI,
                            Tailwind CSS, GitHub, Jira, CI/CD,
                            FlexDeploy.
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

      <img
        className="background-image-right"
        src={colorSharp2}
        alt=""
      />
    </section>
  );
};