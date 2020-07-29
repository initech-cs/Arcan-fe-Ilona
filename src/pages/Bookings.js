import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Form, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

function Bookings() {
  // const [eventList, setEventList] = useState([]);
  const [formData, setFormData] = useState({
    dateOne: new Date(),
    dateTwo: new Date(),
  });

  // useEffect(() => {
  //   fetchEventList();
  // }, []);
  // const fetchEventList = async () => {
  //   const res = await fetch(process.env.REACT_APP_BACKEND_URL + "/events");
  //   const data = await res.json();
  //   setEventList(data);
  // };
  // console.log(eventList);

  const selectEventDate = (date) => setFormData({ ...formData, dateOne: date });
  const selectEventDateSec = (date) =>
    setFormData({ ...formData, dateTwo: date });

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

    if (response.status === 200) {
      setFormData({
        dateOne: new Date(),
        dateTwo: new Date(),
      });
      alert("The message has been sent");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="bookHeader">
        <Container>
          <h1>BOOKINGS</h1>
        </Container>
      </div>

      <div className="bookContactText">
        <Container>
          <p>
            In the past two years, we worked with local and international
            promoters hosting various events for live bands, performances, and
            DJs. We welcome any organization to contact us for an available date
            and host your event. If you would like to organize an event at
            Arcan, please fill out the form below.
          </p>
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
                <Form.Control
                  className="bookInput"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className="bookInput"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </Form.Group>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      className="bookInput"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      className="bookInput"
                      name="organization"
                      type="text"
                      placeholder="Name of Organization"
                      required
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group>
                <Form.Control
                  className="bookInput"
                  name="pageUrl"
                  type="url"
                  placeholder="Website/Facebook Page URL"
                  required
                />
              </Form.Group>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <span>Date (Option 1):</span>
                    <DatePicker
                      className="bookDateInput"
                      name="dateOne"
                      selected={formData.dateOne}
                      onChange={selectEventDate}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <span>Date (Option 2):</span>
                  <DatePicker
                    className="bookDateInput"
                    name="dateTwo"
                    selected={formData.dateTwo}
                    onChange={selectEventDateSec}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      name="startTime"
                      className="bookInput"
                      as="select"
                      required
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
                      className="bookInput"
                      as="select"
                      required
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
                      className="bookInput"
                      name="capacity"
                      type="number"
                      placeholder="No. of Guests"
                      required
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group>
                <Form.Control
                  className="bookInput"
                  name="title"
                  type="text"
                  placeholder="Event Title"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className="bookInput"
                  as="textarea"
                  name="description"
                  rows="5"
                  placeholder="Event description"
                  required
                />
              </Form.Group>
              <button className="pinkBtn mt10" type="submit">
                SUBMIT FORM
              </button>
            </Form>
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Bookings;
