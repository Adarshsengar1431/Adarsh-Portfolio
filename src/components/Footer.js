import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo1.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          <Col size={12} sm={25} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/adarsh-singh-sengar-894b54188/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/adarshsinghrajput.samarth/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/adarshsingh_1431/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/Adarshsengar1431"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright.All Rights Reserved To Adarsh S Sengar</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
