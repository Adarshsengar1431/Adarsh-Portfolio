import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">
              © {new Date().getFullYear()} Adarsh S. Sengar. All Rights Reserved.
            </p>
          </Col>

          <Col md={6} className="text-center text-md-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/adarsh-singh-sengar-894b54188/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/Adarshsengar1431"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon4} alt="GitHub" />
              </a>

              <a
                href="https://www.facebook.com/adarshsinghrajput.samarth/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Facebook" />
              </a>

              <a
                href="https://www.instagram.com/adarshsingh_1431/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
