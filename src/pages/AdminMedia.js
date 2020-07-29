import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Container, Row, Col, Modal, Form } from "react-bootstrap";
import moment from "moment";
import Loader from "react-loader-spinner";

function AdminMedia() {
  const [originalList, setOriginalList] = useState(null);
  const [mediaList, setMediaList] = useState(null);
  const [form, setForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [operation, setOperation] = useState("creating");

  const openForm = () => setForm(true);
  const closeForm = () => setForm(false);

  const getFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loadMedia = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/media`;
    const data = await fetch(url);
    const result = await data.json();

    setMediaList(result);
    setOriginalList(result);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_BACKEND_URL}/media`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 201) {
      loadMedia();
    } else {
      alert("Something went wrong");
    }
  };

  const editMedia = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/media/${formData.id}`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      loadMedia();
    } else {
      alert("Something went wrong");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((operation === "creating")) {
      submitForm(e);
    } else if ((operation === "editing")) {
      editMedia();
    }

    closeForm();
  };

  const searchByKeyword = (keyword) => {
    if (keyword === "") {
      setMediaList(originalList);
      return;
    }

    let filteredList = mediaList.filter((media) =>
      media.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setMediaList(filteredList);
  };

  const deleteVideo = async (id) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/media/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    loadMedia();
  };

  useEffect(() => {
    loadMedia();
  }, []);

  if (mediaList === null) {
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
    <div className="adminMediaMain">
      <AdminNavbar />

      <div className="adminMedia">
        <Container>
          <Row>
            <Col>
              <button
                className="createVideoBtn"
                onClick={() => {
                  setOperation("creating");
                  setFormData({});
                  openForm();
                }}
              >
                ADD VIDEO
              </button>

              <Modal show={form} onHide={closeForm}>
                <Modal.Header>Add Video</Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit} onChange={getFormData}>
                    <Form.Group>
                      <Form.Control
                        name="title"
                        type="text"
                        value={formData.title}
                        placeholder="Video title"
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        name="videoId"
                        placeholder="YouTube video ID"
                        value={formData.videoId}
                        required
                      />
                    </Form.Group>
                    <button
                      className="closeFormBtn"
                      type="button"
                      onClick={closeForm}
                    >
                      CLOSE
                    </button>
                    <button className="saveFormBtn" type="submit">
                      SAVE
                    </button>
                  </Form>
                </Modal.Body>
              </Modal>
            </Col>
            <Col className="adminSearch">
              <i className="fas fa-search"></i>
              <input
                type="search"
                placeholder="Search"
                onChange={(e) => searchByKeyword(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="adminMediaListHeader">
            <Col md={2}>Date</Col>
            <Col md={2}>ID</Col>
            <Col md={5}>Title</Col>
            <Col md={3}>Options</Col>
          </Row>

          {mediaList.map((item) => {
            return (
              <Row className="adminMediaList">
                <Col md={2}>{moment(item.createdAt).format("L")}</Col>
                <Col md={2}>{item.videoId}</Col>
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
                    onClick={() => deleteVideo(item.id)}
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

export default AdminMedia;
