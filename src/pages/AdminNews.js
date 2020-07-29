import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Container, Row, Col, Modal, Form } from "react-bootstrap";
import moment from "moment";
import Loader from "react-loader-spinner";

function AdminNews() {
  const [originalList, setOriginalList] = useState(null);
  const [newsList, setNewsList] = useState(null);
  const [form, setForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [operation, setOperation] = useState("creating");

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

    if (response.status === 201) {
      loadNews();
    } else {
      alert("Something went wrong");
    }
  };

  const editNews = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/news/${formData.id}`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      loadNews();
    } else {
      alert("Something went wrong");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (operation === "creating") {
      submitForm(e);
    } else if (operation === "editing") {
      editNews();
    }

    closeForm();
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

  console.log(operation);
  console.log(formData);

  useEffect(() => {
    loadNews();
  }, []);

  if (newsList === null) {
    return (
      <div className="loaderBg">
        <Loader
          type="Audio"
          color="#0382A6"
          height={100}
          width={100}
          timeout={5000}
        />
      </div>
    );
  }

  return (
    <div className="adminNewsMain">
      <AdminNavbar />

      <div className="adminNews">
        <Container>
          <Row>
            <Col>
              <button
                className="createNewsBtn"
                onClick={() => {
                  setOperation("creating");
                  setFormData({});
                  openForm();
                }}
              >
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
                onSubmit={handleSubmit}
              >
                <Form.Group>
                  <Form.Control
                    name="title"
                    type="text"
                    value={formData.title}
                    placeholder="Add news headline"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control name="category" as="select" value={formData.category} required>
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
                    value={formData.description}
                    rows="5"
                    placeholder="Enter description"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    name="imageUrl"
                    type="url"
                    value={formData.imageUrl}
                    placeholder="Image URL"
                    required
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
                  <button
                    className="editBtn"
                    onClick={() => {
                      setOperation("editing");
                      setFormData({ ...item });
                      // setFormData(item)
                      openForm();
                    }}
                  >
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
