import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Modal, Form } from "react-bootstrap";
import moment from "moment";

function AdminNews() {
  const [newsList, setNewsList] = useState(null);
  const [form, setForm] = useState(false);
  const [formData, setFormData] = useState(false);

  const openForm = () => setForm(true);
  const closeForm = () => setForm(false);

  const loadNews = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/news`;
    const data = await fetch(url);
    const result = await data.json();

    setNewsList(result);
  };

  const getFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_BACKEND_URL}/news`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const dt = await response.json();
  };

  const history = useHistory();

  useEffect(() => {
    loadNews();
  }, []);

  if (newsList === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="adminNewsMain">
      <AdminNavbar />

      <div className="adminNewsList">
        <Container>
          <Row>
            <Col>
              <button onClick={openForm}>Create News</button>
            </Col>
            <Col>
              <i class="fas fa-search"></i>
              <input type="search" placeholder="Search by title" />
            </Col>
          </Row>
          <Modal show={form} onHide={closeForm}>
            <h2>Create News</h2>
            <Form onChange={getFormData} onSubmit={submitForm}>
              <Form.Group>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Add news headline"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control name="category" as="select">
                  <option selected disabled>
                    Select Category
                  </option>
                  <option>Artists</option>
                  <option>Blog</option>
                  <option>Events</option>
                  <option>Fashion</option>
                  <option>Music</option>
                  <option>Tech</option>
                </Form.Control>
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
                  placeholder="Image URL"
                />
              </Form.Group>
              <button type="submit">Publish</button>
            </Form>
          </Modal>
          <Row>
            <Col md={2}>Date</Col>
            <Col md={1}>Category</Col>
            <Col md={5}>Title</Col>
            <Col md={4}>Options</Col>
          </Row>
          {newsList.map((item) => {
            return (
              <Row>
                <Col md={2}>{moment(item.createdAt).format("LL")}</Col>
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

export default AdminNews;
