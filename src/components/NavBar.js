import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/logo1.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleExperienceClick = () => {
    localStorage.setItem('projectTab', 'experience');
    setActiveLink('experience');
  };

  const handleProjectClick = () => {
    localStorage.setItem('projectTab', 'projects');
    setActiveLink('projects');
  };

  return (
    <Navbar expand="md" fixed="top" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <HashLink
              smooth
              to="#home"
              className={
                activeLink === 'home' ? 'active navbar-link nav-link' : 'navbar-link nav-link'
              }
              onClick={() => setActiveLink('home')}
            >
              Home
            </HashLink>

            <HashLink
              smooth
              to="#skills"
              className={
                activeLink === 'skills' ? 'active navbar-link nav-link' : 'navbar-link nav-link'
              }
              onClick={() => setActiveLink('skills')}
            >
              Skills
            </HashLink>

            <HashLink
              smooth
              to="#projects"
              className={
                activeLink === 'experience' ? 'active navbar-link nav-link' : 'navbar-link nav-link'
              }
              onClick={handleExperienceClick}
            >
              Experience
            </HashLink>

            <HashLink
              smooth
              to="#projects"
              className={
                activeLink === 'projects' ? 'active navbar-link nav-link' : 'navbar-link nav-link'
              }
              onClick={handleProjectClick}
            >
              Projects
            </HashLink>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/adarsh-singh-sengar-894b54188/"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/Adarshsengar1431">
                <img src={navIcon4} alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/adarshsinghrajput.samarth/"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/adarshsingh_1431/"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>

            <HashLink smooth to="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
