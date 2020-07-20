import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Form, Col } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_BACKEND_URL}/test`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const dt = await response.json();
  };

  return (
    <div>
      <Navbar />

      <div className="contactHeader">
        <Container>
          <h1>CONTACT US</h1>
        </Container>
      </div>

      <div className="contactMain">
        <div className="contactFormDiv">
          <Form
            className="contactForm"
            onChange={handleChange}
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <Form.Control
                type="text"
                name="name"
                placeholder="Full Name (Required)"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email Address (Required)"
              />
            </Form.Group>
            <Form.Row>
              <Col>
                <Form.Control as="select" name="category">
                  <option selected disabled>
                    Category:
                  </option>
                  <option>General</option>
                  <option>Promoter</option>
                  <option>Enterprise</option>
                </Form.Control>
              </Col>
            </Form.Row>
            <Form.Group>
              <Form.Control
                name="subject"
                type="text"
                placeholder="Subject (Required)"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="message"
                as="textarea"
                rows="5"
                placeholder="Message (Required)"
              />
            </Form.Group>
            <button type="submit">Send Message</button>
          </Form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
