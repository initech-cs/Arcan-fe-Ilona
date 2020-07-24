import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img src="/images/arcanLogo.png" className="logo" width="62" />
      </Link>
      <Row className="navRow">
        <Col className="navCol" md={6}>
          <ul className="navList">
            <li className="mr60 linkUnder">
              <Link className="links" to="/home">
                HOME
              </Link>
            </li>
            <li className="linkUnder mr60">
              <Link className="links" to="/news">
                NEWS
              </Link>
            </li>
            <li className="linkUnder">
              <Link className="links" to="/events">
                EVENTS
              </Link>
            </li>
          </ul>
        </Col>
        <Col className="navCol" md={6}>
          <ul className="navList">
            <li className="linkUnder mr60">
              <Link className="links" to="/bookings">
                BOOKINGS
              </Link>
            </li>
            <li className="linkUnder mr60">
              <Link className="links" to="/media">
                MEDIA
              </Link>
            </li>
            <li className="linkUnder mr60">
              <Link className="links" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
