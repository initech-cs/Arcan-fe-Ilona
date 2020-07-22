import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Form, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

function Bookings() {
  const [eventDate, setEventDate] = useState(new Date());
  const [eventDateSec, setEventDateSec] = useState(new Date());
  const [formData, setFormData] = useState(null);

  const selectEventDate = (date) => setEventDate(date);
  const selectEventDateSec = (date) => setEventDateSec(date);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_BACKEND_URL}/book`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
  };

  console.log(formData);

  return (
    <div>
      <Navbar />

      <div className="bookHeader">
        <Container>
          <h1>BOOKINGS</h1>
        </Container>
      </div>

      <div className="bookMain">
        <div className="bookFormDiv">
          <Container>
            <Form
              className="bookForm"
              onChange={handleChange}
              onSubmit={handleSubmit}
            >
              <Form.Group>
                <Form.Control name="name" type="text" placeholder="Full Name" />
              </Form.Group>
              <Form.Group>
                <Form.Control name="email" type="email" placeholder="Email" />
              </Form.Group>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Control name="phone" placeholder="Phone Number" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      name="organization"
                      type="text"
                      placeholder="Name of Organization"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group>
                <Form.Control
                  name="pageUrl"
                  type="url"
                  placeholder="Website/Facebook Page URL"
                />
              </Form.Group>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <span>Date (Option 1):</span>
                    <DatePicker
                      name="dateOne"
                      selected={eventDate}
                      onChange={selectEventDate}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <span>Date (Option 2):</span>
                  <DatePicker
                    name="dateTwo"
                    selected={eventDateSec}
                    onChange={selectEventDateSec}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      name="startTime"
                      className="timeSelect"
                      as="select"
                    >
                      <option selected disabled>
                        Start Time
                      </option>
                      <option>1AM</option>
                      <option>2AM</option>
                      <option>3AM</option>
                      <option>4AM</option>
                      <option>5AM</option>
                      <option>6AM</option>
                      <option>7AM</option>
                      <option>8AM</option>
                      <option>9AM</option>
                      <option>10AM</option>
                      <option>11AM</option>
                      <option>12PM</option>
                      <option>1PM</option>
                      <option>2PM</option>
                      <option>3PM</option>
                      <option>4PM</option>
                      <option>5PM</option>
                      <option>6PM</option>
                      <option>7PM</option>
                      <option>8PM</option>
                      <option>9PM</option>
                      <option>10PM</option>
                      <option>11PM</option>
                      <option>12AM</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      name="endTime"
                      className="timeSelect"
                      as="select"
                    >
                      <option selected disabled>
                        End Time
                      </option>
                      <option>1AM</option>
                      <option>2AM</option>
                      <option>3AM</option>
                      <option>4AM</option>
                      <option>5AM</option>
                      <option>6AM</option>
                      <option>7AM</option>
                      <option>8AM</option>
                      <option>9AM</option>
                      <option>10AM</option>
                      <option>11AM</option>
                      <option>12PM</option>
                      <option>1PM</option>
                      <option>2PM</option>
                      <option>3PM</option>
                      <option>4PM</option>
                      <option>5PM</option>
                      <option>6PM</option>
                      <option>7PM</option>
                      <option>8PM</option>
                      <option>9PM</option>
                      <option>10PM</option>
                      <option>11PM</option>
                      <option>12AM</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      name="capacity"
                      type="number"
                      placeholder="Expected No. of People"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group>
                <Form.Control
                  name="eventName"
                  type="text"
                  placeholder="Event Title"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  name="description"
                  rows="5"
                  placeholder="Event description"
                />
              </Form.Group>
              <button type="submit">Send</button>
            </Form>
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Bookings;
