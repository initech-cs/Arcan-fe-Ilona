import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { Container } from "react-bootstrap";

function Tickets() {
  return (
    <div>
      <Navbar />

      <div>
        <div className="ticketsHeader">
          <Container>
            <h1>TICKETS</h1>
          </Container>
        </div>
        <div className="ticketSearchBar">
          <i className="fas fa-search ticketSearchIcon"></i>
          <input type="search" placeholder="Search by Title" />
        </div>
        <div className="ticketEventList">
            <Container className="ticketEventCont">
                <div className="ticketEvent">
                    <img src="/backgroundSample.jpg" width="100%" />
                </div>
                <div className="ticketEvent">
                    <img src="/backgroundSample.jpg" width="100%" />
                </div>
                <div className="ticketEvent">
                    <img src="/backgroundSample.jpg" width="100%" />
                </div>
                <div className="ticketEvent">
                    <img src="/backgroundSample.jpg" width="100%" />
                </div>
            </Container>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Tickets;
