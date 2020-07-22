import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Container, Row, Col, Modal, Form } from "react-bootstrap";
import moment from "moment";

function AdminMedia() {
  const [mediaList, setMediaList] = useState(null);
  const [form, setForm] = useState(false);
  const [formData, setFormData] = useState(null)

  const openForm = () => setForm(true);
  const closeForm = () => setForm(false);

  const getFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = async (e) => {
    e.preventDefault()
    const url = `${process.env.REACT_APP_BACKEND_URL}/media`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    const data = await response.json()
  }

  const loadMedia = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/media`;
    const data = await fetch(url);
    const result = await data.json();

    setMediaList(result);
  };

  useEffect(() => {
    loadMedia();
  }, []);

  if (mediaList === null) {
    return <div>Loading...</div>;
  }

  console.log(mediaList);

  return (
    <div className="adminMediaMain">
      <AdminNavbar />

      <div className="adminMediaList">
        <Container>
          <Row>
            <Col>
              <button onClick={openForm}>Add Video</button>

              <Modal show={form} onHide={closeForm}>
                <h1>Add Video</h1>
                <Form onChange={getFormData} onSubmit={submitForm}>
                  <Form.Group>
                    <Form.Control
                      name="title"
                      type="text"
                      placeholder="Video title"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control name="videoId" placeholder="YouTube video ID" />
                  </Form.Group>
                  <button type="submit">Publish</button>
                </Form>
              </Modal>
            </Col>
            <Col>
              <i class="fas fa-search"></i>
              <input type="search" placeholder="Search by title" />
            </Col>
          </Row>
          <Row>
            <Col md={2}>Date</Col>
            <Col md={1}>ID</Col>
            <Col md={5}>Title</Col>
            <Col md={4}>Options</Col>
          </Row>

          {mediaList.map((item) => {
            return (
              <Row>
                <Col md={2}>{moment(item.createdAt).format("LL")}</Col>
                <Col md={1}>{item.videoId}</Col>
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

export default AdminMedia;
