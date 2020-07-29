import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import moment from "moment";
import Loader from "react-loader-spinner"

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

      <div className="detailsMain">
        <Container>
          <Row>
            <Col>
              <img src={`${eventDetails.imageUrl}`} width="100%" />
            </Col>
            <Col>
              <div className="detailsInfo">
                <h1>{eventDetails.title}</h1>
                <ul className="detailsGenresList mb20">
                  {eventDetails.genres.map((item) => {
                    return (
                      <li>
                        <div className="genreBadge">{item.toUpperCase()}</div>
                      </li>
                    );
                  })}
                </ul>
                <ul className="detailsList mb20">
                  <li className="eventDetail">
                    <div className="eventDetailTitle">
                      <i class="fas fa-calendar-alt"></i>Date
                    </div>
                    <div>{moment(eventDetails.date).format("LL")}</div>
                  </li>
                  <li className="eventDetail">
                    <div className="eventDetailTitle">
                      <i class="fas fa-clock"></i>Time
                    </div>
                    <div>
                      {eventDetails.startTime} - {eventDetails.endTime}
                    </div>
                  </li>
                  <li className="eventDetail">
                    <div className="eventDetailTitle">
                      <i class="fas fa-ticket-alt"></i>Entrance Fee
                    </div>
                    <div>{eventDetails.entrance.toLocaleString()} VND</div>
                  </li>
                </ul>
                <div className="mb20">
                  <h5>Artists</h5>
                  <p>
                    {eventDetails.artists.map((item) => {
                      if (
                        item ===
                        eventDetails.artists[eventDetails.artists.length - 1]
                      ) {
                        return (
                          <span className="eventDetailInfo">
                            {item.toUpperCase()}
                          </span>
                        );
                      } else {
                        return (
                          <span className="eventDetailInfo">
                            {item.toUpperCase()} |{" "}
                          </span>
                        );
                      }
                    })}
                  </p>
                </div>
                <div>
                  <h5>Description</h5>
                  <p>{eventDetails.description}</p>
                </div>
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
