import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { useHistory } from "react-router-dom"

function Upcoming() {
  const [upcomingList, setUpcomingList] = useState(null);

  const history = useHistory()

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
    const eventSelect = () => {
      history.push(`/events/${i.id}`);
    };

    return (
      <Col md={3} className="upcomingCol mb40" onClick={() => eventSelect()}>
        <div>
          <img src={`${i.imageUrl}`} height="100%" />
        </div>
        <h5>{i.title}</h5>
        <h6>{moment(i.date).format("MMM Do, dddd")}</h6>
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
