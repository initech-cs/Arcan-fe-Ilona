import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Modal, Row, Col } from "react-bootstrap";

function Media() {
  const [video, setVideo] = useState(false);
  const [mediaList, setMediaList] = useState(null);

  const showVideo = () => setVideo(true);
  const hideVideo = () => setVideo(false);

  const string = "Joke, DBP Basslines, Basara"
  const array = string.split(", ")
  console.log(array)

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

  console.log(mediaList)
  return (
    <div>
      <Navbar />

      <div className="mediaHeader">
        <Container>
          <h1>MEDIA</h1>
        </Container>
      </div>

      <div className="mediaVideo">
        <Container>
          <Row>
            {mediaList.map((item) => {
              return (
                <Col md={4}>
                  <div onClick={showVideo}>
                    <img
                      src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                      width="100%"
                    />
                    <h4>{item.title}</h4>
                  </div>

                  <Modal
                    className="mediaModal"
                    size="lg"
                    centered="true"
                    show={video}
                    onHide={hideVideo}
                  >
                    <iframe
                      height="420"
                      src={`https://www.youtube.com/embed/${item.videoId}`}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </Modal>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default Media;
