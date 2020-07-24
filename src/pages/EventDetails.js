import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import moment from "moment";

function EventDetails() {
  const [eventDetails, setEventDetails] = useState(null);
  const { id } = useParams();

  const loadEventDetails = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/events/${id}`;
    const data = await fetch(url);
    const result = await data.json();

    setEventDetails(result.data.event);
  };

  useEffect(() => {
    loadEventDetails();
  }, []);

  if (eventDetails === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />

      <div className="detailsMain">
        <Container>
          <Row>
            <Col>
              <img src={`${eventDetails.imageUrl}`} width="100%" />
            </Col>
            <Col>
              <div className="detailsInfo">
                <h2>{eventDetails.title}</h2>
                <ul className="detailsGenresList">
                  {eventDetails.genres.map((item) => {
                    return (
                      <li>
                        <div className="genreBadge">{item.toUpperCase()}</div>
                      </li>
                    );
                  })}
                </ul>
                <ul className="detailsList">
                  <li className="eventDetail mr20">
                    <div>
                      <i class="fas fa-calendar-alt"></i>Date
                    </div>
                    <div className="eventDetailInfo">
                      {moment(eventDetails.date).format("LL")}
                    </div>
                  </li>
                  <li className="eventDetail mr20">
                    <div>
                      <i class="fas fa-clock"></i>Time
                    </div>
                    <div className="eventDetailInfo">
                      {eventDetails.startTime} - {eventDetails.endTime}
                    </div>
                  </li>
                  <li className="eventDetail">
                    <div>
                      <i class="fas fa-ticket-alt"></i>Entrance Fee
                    </div>
                    <div className="eventDetailInfo">
                      {eventDetails.entrance} VND
                    </div>
                  </li>
                </ul>
                <h4>Artists</h4>
                <p>
                  {eventDetails.artists.map((item) => {
                    return (
                      <span className="eventDetailInfo">
                        {item.toUpperCase()} |{" "}
                      </span>
                    );
                  })}
                </p>
                <h4>Description</h4>
                <p>{eventDetails.description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default EventDetails;
