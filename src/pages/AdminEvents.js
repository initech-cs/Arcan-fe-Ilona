import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Container, Modal, Row, Col, Form } from "react-bootstrap";
import moment from "moment";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function AdminEvents() {
  const [originalList, setOriginalList] = useState(null);
  const [eventList, setEventList] = useState(null);
  const [form, setForm] = useState(false);
  const [operation, setOperation] = useState("creating");
  const [formData, setFormData] = useState({ date: new Date() });

  const selectEventDate = (date) => setFormData({ ...formData, date: date });

  const openForm = () => setForm(true);
  const closeForm = () => setForm(false);

  const getFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loadEvents = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/events`;
    const data = await fetch(url);
    const result = await data.json();

    setEventList(result);
    setOriginalList(result);
  };

  const searchByKeyword = (keyword) => {
    if (keyword === "") {
      setEventList(originalList);
      return;
    }

    let filteredList = eventList.filter((event) =>
      event.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setEventList(filteredList);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let body = { ...formData };
    body.artists = body.artists.split(", ");
    body.genres = body.genres.split(", ");
    const url = `${process.env.REACT_APP_BACKEND_URL}/events`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    loadEvents();
  };

  const editEvent = async () => {
    let body = { ...formData };
    body.artists = body.artists.split(", ");
    body.genres = body.genres.split(", ");
    const url = `${process.env.REACT_APP_BACKEND_URL}/events/${formData.id}`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    loadEvents();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (operation === "creating") {
      submitForm(e);
    } else if (operation === "editing") {
      editEvent();
      console.log("editing");
      console.log(formData);
    }

    closeForm();
  };

  const deleteEvent = async (id) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/events/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    loadEvents();
  };

  useEffect(() => {
    loadEvents();
  }, []);

  if (eventList === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="adminEventsMain">
      <AdminNavbar />

      <div className="adminEvent">
        <Container>
          <Row>
            <Col>
              <button
                className="createEventBtn"
                onClick={() => {
                  setOperation("creating");
                  openForm();
                }}
              >
                CREATE EVENT
              </button>
            </Col>
            <Col className="adminSearch">
              <i class="fas fa-search"></i>
              <input
                type="search"
                placeholder="Search"
                onChange={(e) => searchByKeyword(e.target.value)}
              />
            </Col>
          </Row>
          <Modal show={form} onHide={closeForm}>
            <Modal.Header>Create an Event</Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit} onChange={getFormData}>
                <Form.Group>
                  <Form.Control
                    name="title"
                    type="text"
                    placeholder="Add an event name"
                  />
                </Form.Group>
                <Form.Row className="mb20">
                  <Col>
                    <Form.Control name="category" as="select">
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
                    <DatePicker
                      className="eventFormDateSelect"
                      selected={formData.date}
                      onChange={selectEventDate}
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
                        name="entrance"
                        type="number"
                        placeholder="Entrance Fee"
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Group>
                  <Form.Control
                    name="artists"
                    type="text"
                    placeholder="Enter artist name(s)"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control name="genres" placeholder="Enter genre(s)" />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    name="description"
                    as="textarea"
                    rows="5"
                    placeholder="Enter description"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    name="imageUrl"
                    type="url"
                    placeholder="Paste image URL here"
                  />
                </Form.Group>
                <button className="closeFormBtn" onClick={closeForm}>
                  CLOSE
                </button>
                <button className="saveFormBtn" type="submit">
                  SAVE
                </button>
              </Form>
            </Modal.Body>
          </Modal>
          <Row className="adminEventListHeader">
            <Col md={2}>DATE</Col>
            <Col md={2}>CATEGORY</Col>
            <Col md={4}>TITLE</Col>
            <Col md={4}>OPTIONS</Col>
          </Row>
          {eventList.map((item) => {
            return (
              <Row className="adminEventList">
                <Col md={2}>{moment(item.date).format("L")}</Col>
                <Col md={2}>{item.category}</Col>
                <Col md={4}>{item.title}</Col>
                <Col md={4}>
                  <button
                    className="editBtn"
                    onClick={() => {
                      setOperation("editing");
                      // setFormData(item)
                      openForm();
                    }}
                  >
                    <i className="fas fa-pen"></i>Edit
                  </button>
                  <button
                    className="deleteBtn"
                    onClick={() => deleteEvent(item.id)}
                  >
                    <i className="fas fa-trash-alt"></i>Delete
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
