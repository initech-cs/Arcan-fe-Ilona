import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Events() {
  const [upcomingNumber, setUpcomingNumber] = useState(4);
  const [pastNumber, setPastNumber] = useState(4);
  const [upcomingList, setUpcomingList] = useState(null);
  const [pastList, setPastList] = useState(null);

  const history = useHistory();

  const loadPastEvents = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/events/past`;
    const data = await fetch(url);
    const result = await data.json();

    setPastList(result);
  };

  const loadUpcomingEvents = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/events/upcoming`;
    const data = await fetch(url);
    const result = await data.json();

    setUpcomingList(result);
    loadPastEvents();
  };

  useEffect(() => {
    loadUpcomingEvents();
  }, []);

  if (upcomingList === null || pastList === null) {
    return <div>Loading...</div>;
  }

  const events = upcomingList.slice(0, upcomingNumber).map((i) => {
    const eventSelect = () => {
      history.push(`/events/${i.id}`);
    };

    return (
      <Col md={3} className="upcomingCol" onClick={() => eventSelect()}>
        <div>
          <img src={`${i.imageUrl}`} height="100%" />
        </div>
        <h6>{i.title}</h6>
      </Col>
    );
  });

  const pastEvents = pastList.slice(0, pastNumber).map((i) => {
    const eventSelect = () => {
      history.push(`/events/${i.id}`);
    };

    return (
      <Col md={3} className="pastEventsCol" onClick={() => eventSelect()}>
        <div>
          <img src={`${i.imageUrl}`} height="100%" />
        </div>
        <h6>{i.title}</h6>
      </Col>
    );
  });

  return (
    <div>
      <Navbar />

      <div className="calendar">
        <Calendar />
      </div>

      <div className="homeUpcoming">
        <div>
          <h2>UPCOMING</h2>
        </div>
        <div className="homeUpcomingList">
          <Container>
            <Row>{events}</Row>
            {upcomingList.length > upcomingNumber ? (
              <button
                className="pinkBtn"
                onClick={() => setUpcomingNumber(upcomingNumber + 4)}
              >
                SHOW MORE
              </button>
            ) : (
              <div></div>
            )}
          </Container>
        </div>
      </div>

      <div className="pastEvents">
        <div>
          <h2>PAST</h2>
        </div>
        <div className="pastEventsList">
          <Container>
            <Row>{pastEvents}</Row>
            {pastList.length > pastNumber ? (
              <button
                className="blueBtn"
                onClick={() => setPastNumber(pastNumber + 4)}
              >
                SHOW MORE
              </button>
            ) : (
              <div></div>
            )}
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
