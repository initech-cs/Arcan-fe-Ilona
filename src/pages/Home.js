import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [upcomingList, setUpcomingList] = useState(null);

  const loadUpcomingEvents = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/events/upcoming`;
    const data = await fetch(url);
    const result = await data.json();

    setUpcomingList(result);
  };

  useEffect(() => {
    loadUpcomingEvents();
  }, []);

  if (upcomingList === null) {
    return <div>Loading...</div>;
  }

  let numberOfEvents = 4;

  const events = upcomingList.slice(0, numberOfEvents).map((i) => {
    return (
      <Col>
        <img src={`${i.imageUrl}`} width={300} />
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
      </Carousel>

      <div className="homeUpcoming">
        <div>
          <h2>UPCOMING</h2>
        </div>
        <div>
          <Container>
            <Row>{events}</Row>
            <Link to="/events">
              <button>Calendar</button>
            </Link>
          </Container>
        </div>
      </div>

      <div className="homeDrinksMenu">
        <div>
          <h2>MENU</h2>
        </div>
        <img src="/images/menu.jpg" width="100%" />
      </div>

      <div className="homeLatest">
        <div>
          <h2>LATEST</h2>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
