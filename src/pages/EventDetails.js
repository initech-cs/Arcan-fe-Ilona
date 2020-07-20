import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col, Badge } from "react-bootstrap";

function EventDetails() {
  return (
    <div>
      <Navbar />

      <div className="detailsMain">
        <Container>
          <Row>
            <Col>
              <img
                src="/backgroundSample.jpg"
                width="100%"
              />
            </Col>
            <Col>
              <div className="detailsInfo">
                <h2>Techno BANG!</h2>
                <ul className="detailsGenresList">
                  <li className="mr10">
                    <Badge pill variant="dark">
                      Techno
                    </Badge>
                  </li>
                  <li>
                    <Badge pill variant="dark">
                      Hard Techno
                    </Badge>
                  </li>
                </ul>
                <ul className="detailsList">
                  <li className="eventDetail mr20">
                    <div>
                      <i class="fas fa-calendar-alt"></i>Date
                    </div>
                    <div>July 10, 2020</div>
                  </li>
                  <li className="eventDetail mr20">
                    <div>
                      <i class="fas fa-clock"></i>Time
                    </div>
                    <div>9PM - 5AM</div>
                  </li>
                  <li className="eventDetail">
                    <div>
                      <i class="fas fa-ticket-alt"></i>Entrance Fee
                    </div>
                    <div>100,000 VND</div>
                  </li>
                </ul>
                <h4>Artists</h4>
                <p>MIT / JOKE / BASARA / ABI WASABI</p>
                <h4>Description</h4>
                <p>
                  New recruit for Techno BANG!, young Vietnamese DJ ABI WASABI
                  (Gãy) who quite killed it last Saturday.
                </p>
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
