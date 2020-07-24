import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Container, Row, Col, Modal, Form } from "react-bootstrap";
import moment from "moment";

function AdminNews() {
  const [originalList, setOriginalList] = useState(null);
  const [newsList, setNewsList] = useState(null);
  const [form, setForm] = useState(false);
  const [formData, setFormData] = useState(null);

  const openForm = () => setForm(true);
  const closeForm = () => setForm(false);

  const loadNews = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/news`;
    const data = await fetch(url);
    const result = await data.json();

    setNewsList(result);
    setOriginalList(result);
  };

  const searchByKeyword = (keyword) => {
    if (keyword === "") {
      setNewsList(originalList);
      return;
    }

    let filteredList = newsList.filter((news) =>
      news.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setNewsList(filteredList);
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

    loadNews();
  };

  const deleteNews = async (id) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/news/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    loadNews();
  };

  useEffect(() => {
    loadNews();
  }, []);

  if (newsList === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="adminNewsMain">
      <AdminNavbar />

      <div className="adminNews">
        <Container>
          <Row>
            <Col>
              <button className="createNewsBtn" onClick={openForm}>
                CREATE NEWS
              </button>
            </Col>
            <Col className="adminSearch">
              <i class="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => searchByKeyword(e.target.value)}
              />
            </Col>
          </Row>
          <Modal show={form} onHide={closeForm}>
            <Modal.Header className="newsModalTitle">CREATE NEWS</Modal.Header>
            <Modal.Body>
              <Form
                className="newsForm"
                onChange={getFormData}
                onSubmit={submitForm}
              >
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
                <button className="closeFormBtn" onClick={closeForm}>
                  CLOSE
                </button>
                <button
                  className="saveFormBtn"
                  type="submit"
                  onClick={closeForm}
                  type="submit"
                >
                  SAVE
                </button>
              </Form>
            </Modal.Body>
          </Modal>
          <Row className="adminNewsListHeader">
            <Col md={2}>DATE</Col>
            <Col md={2}>CATEGORY</Col>
            <Col md={5}>TITLE</Col>
            <Col md={3}>OPTIONS</Col>
          </Row>
          {newsList.map((item) => {
            return (
              <Row className="adminNewsList">
                <Col md={2}>{moment(item.createdAt).format("L")}</Col>
                <Col md={2}>{item.category}</Col>
                <Col md={5}>{item.title}</Col>
                <Col md={3}>
                  <button className="editBtn">
                    <i className="fas fa-pen"></i>Edit
                  </button>
                  <button
                    className="deleteBtn"
                    onClick={() => deleteNews(item.id)}
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

export default AdminNews;
