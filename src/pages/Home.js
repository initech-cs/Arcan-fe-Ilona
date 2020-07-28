import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Upcoming from "../components/Upcoming";
import Loader from "react-loader-spinner";

function Home() {
  const [latestList, setLatestList] = useState(null);

  const loadLatestVideos = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/media`;
    const data = await fetch(url);
    const result = await data.json();

    setLatestList(result);
  };

  useEffect(() => {
    loadLatestVideos();
  }, []);

  if (latestList === null) {
    return (
      <div className="loaderBg">
        <Loader
          type="Audio"
          color="#0382A6"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }

  let numberOfVideos = 2;

  const videos = latestList.slice(0, numberOfVideos).map((i) => {
    return (
      <Col md={6}>
        <iframe
          height="315"
          width="100%"
          src={`https://www.youtube.com/embed/${i.videoId}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Col>
    );
  });

  return (
    <div>
      <Navbar />

      <Carousel className="homeCarousel">
        <Carousel.Item className="homeCarouselItem">
          <Link to="events/details">
            <img className="w-50" src="/images/bar2clubBg.jpg" />
            <Carousel.Caption className="homeCarouselCapt">
              <h1>BAR 2 CLUB</h1>
              <h5>Every 2nd Friday of the Month</h5>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item className="homeCarouselItem">
          <Link to="events/details">
            <img className="w-50" src="/images/gsDance.jpg" />
            <Carousel.Caption className="homeCarouselCaptOther">
              <h1>GS SUMMER CAMP</h1>
              <div>
                <h5>Hip &amp; Hype Party</h5>
              </div>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>

      <Upcoming />

      <div className="homeLatest">
        <div>
          <h2>LATEST</h2>
        </div>
        <div className="latestList">
          <Container>
            <Row>{videos}</Row>
          </Container>
        </div>
      </div>

      <div className="homeDrinksMenu">
        <div>
          <h2>MENU</h2>
        </div>
        <img src="/images/menu.jpg" width="100%" />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
