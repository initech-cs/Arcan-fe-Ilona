import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import { Container, Modal, Row, Col, Form } from "react-bootstrap";
import moment from "moment";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function AdminEvents() {
  const [eventList, setEventList] = useState(null);
  const [form, setForm] = useState(false);
  const [eventDate, setEventDate] = useState(new Date());

  const openForm = () => setForm(true);
  const closeForm = () => setForm(false);

  const selectEventDate = (date) => setEventDate(date);

  const loadEvents = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/events`;
    const data = await fetch(url);
    const result = await data.json();

    setEventList(result);
  };

  const history = useHistory();

  useEffect(() => {
    loadEvents();
  }, []);

  if (eventList === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="adminEventsMain">
      <AdminNavbar />

      <div className="adminEventList">
        <Container>
          <Row>
            <Col>
              <button onClick={openForm}>Create Event</button>
            </Col>
            <Col>
              <i class="fas fa-search"></i>
              <input type="search" placeholder="Search by title" />
            </Col>
          </Row>
          <Modal show={form} onHide={closeForm}>
              <h2>Create an Event</h2>
            <Form>
              <Form.Group controlId="title">
                <Form.Control type="text" placeholder="Add an event name" />
              </Form.Group>
              <Form.Row>
                <Col>
                  <Form.Control as="select">
                    <option selected disabled>
                      Select Category
                    </option>
                    <option>Arts</option>
                    <option>Comedy</option>
                    <option>Film</option>
                    <option>Food</option>
                    <option>Music</option>
                    <option>Networking</option>
                    <option>Party</option>
                    <option>Performance</option>
                  </Form.Control>
                </Col>
                <Col>
                  <DatePicker selected={eventDate} onChange={selectEventDate} />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Control className="timeSelect" as="select">
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
                    <Form.Control className="timeSelect" as="select">
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
                    <Form.Control type="number" placeholder="Entrance Fee" />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group>
                <Form.Control type="text" placeholder="Enter artist name(s)" />
              </Form.Group>
              <Form.Group>
                  <Form.Control placeholder="Enter genre(s)" />
              </Form.Group>
              <Form.Group>
                  <Form.Control as="textarea" rows="5" placeholder="Enter description" />
              </Form.Group>
              <Form.Group>
                  <Form.Control type="url" placeholder="Paste image URL here" />
              </Form.Group>
              <button>Publish</button>
            </Form>
          </Modal>
          <Row>
            <Col md={2}>Date</Col>
            <Col md={1}>Category</Col>
            <Col md={5}>Title</Col>
            <Col md={4}>Options</Col>
          </Row>
          {eventList.map((item) => {
            return (
              <Row>
                <Col md={2}>{moment(item.date).format("LL")}</Col>
                <Col md={1}>{item.category}</Col>
                <Col md={5}>{item.title}</Col>
                <Col md={4}>
                  <button>
                    <i class="fas fa-pen"></i>Edit
                  </button>
                  <button>
                    <i class="fas fa-trash-alt"></i>Delete
                  </button>
                </Col>
              </Row>
            );
          })}
        </Container>
      </div>
    </div>
  );
}

export default AdminEvents;
