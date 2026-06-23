import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState(null);

  const onFormUpdate = (field, value) => {
    setFormDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    if (!formDetails.firstName.trim()) return 'Name is required';
    if (!formDetails.email.match(/^\S+@\S+\.\S+$/)) return 'Valid email required';
    if (formDetails.phone.length < 8) return 'Valid phone required';
    if (!formDetails.message.trim()) return 'Message cannot be empty';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setStatus({ success: false, message: error });
      return;
    }

    setButtonText('Sending...');

    try {
      const templateParams = {
        firstName: formDetails.firstName,
        lastName: formDetails.lastName,
        email: formDetails.email,
        phone: formDetails.phone,
        message: formDetails.message,
      };

      const response = await emailjs.send(
        'service_mmlqxui', // Replace with your EmailJS Service ID
        'template_dwp59is', // Replace with your EmailJS Template ID
        templateParams,
        '1qQQd_-xXwTC2BZ_w' // Replace with your EmailJS Public Key
      );

      if (response.status === 200) {
        setStatus({ success: true, message: 'Message sent successfully 👍' });
        setFormDetails(formInitialDetails);
      } else {
        throw new Error();
      }
    } catch (err) {
      setStatus({ success: false, message: 'Failed to send message. Try again.' });
    }

    setButtonText('Send');
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? 'animate__animated animate__zoomIn' : ''}
                  src={contactImg}
                  alt="contact illustration"
                />
              )}
            </TrackVisibility>
          </Col>

          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Contact Me</h2>

                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={formDetails.firstName}
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                      </Col>

                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={formDetails.lastName}
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                      </Col>

                      <Col sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email"
                          value={formDetails.email}
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                      </Col>

                      <Col sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Phone"
                          maxLength={13}
                          value={formDetails.phone}
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>

                      <Col xs={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          value={formDetails.message}
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        />
                        <button type="submit" disabled={buttonText !== 'Send'}>
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                      {status && (
                        <Col>
                          <p className={status.success ? 'success' : 'danger'}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
