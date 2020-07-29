import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Modal, Row, Col } from "react-bootstrap";
import Loader from "react-loader-spinner"

function Media() {
  const [videoNumber, setVideoNumber] = useState(4);
  const [video, setVideo] = useState(false);
  const [mediaList, setMediaList] = useState(null);
  const [selectedVid, setSelectedVid] = useState("");

  const showVideo = (vid) => {
    setVideo(true);
    setSelectedVid(vid);
  };
  const hideVideo = () => setVideo(false);

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
    <div>
      <Navbar />
      <Modal
        className="mediaModal"
        size="lg"
        centered="true"
        show={video}
        onHide={hideVideo}
      >
        <iframe
          height="420"
          src={`https://www.youtube.com/embed/${selectedVid}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Modal>

      <div className="mediaHeader">
        <Container>
          <h1>MEDIA</h1>
        </Container>
      </div>

      <div className="mediaVideoList">
        <Container>
          <Row>
            {mediaList.map((item) => {
              return (
                <Col md={4}>
                  <div
                    className="mediaVideo"
                    onClick={() => showVideo(item.videoId)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                      width="100%"
                    />
                    <h5>{item.title}</h5>
                  </div>
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
