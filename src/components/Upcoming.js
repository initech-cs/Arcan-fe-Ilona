import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";

function Upcoming() {
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
      <Col md={3} className="upcomingCol">
        <div>
          <img src={`${i.imageUrl}`} height="100%" />
        </div>
        <h6>{i.title}</h6>
      </Col>
    );
  });

  return (
    <div className="homeUpcoming">
      <div>
        <h2>UPCOMING</h2>
      </div>
      <div className="homeUpcomingList">
        <Container>
          <Row>{events}</Row>
          <Link to="/events">
            <button className="pinkBtn">CALENDAR</button>
          </Link>
        </Container>
      </div>
    </div>
  );
}

export default Upcoming;
