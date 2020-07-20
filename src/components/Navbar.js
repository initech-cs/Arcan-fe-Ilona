import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navBar">
      <img src="/arcanLogo.png" className="logo" width="62" />
      <Row className="navRow">
        <Col className="navCol" md={6}>
          <ul className="navList">
            <li className="mr60">
              <div className="navDrop">
                <span>
                  About<i className="fas fa-chevron-right"></i>
                </span>
                <ul>
                  <li>Arcan</li>
                  <li>Menu</li>
                  <li>Residents</li>
                </ul>
              </div>
            </li>
            <li className="linkUnder mr60">
              <Link className="links" to="/news">News</Link>
            </li>
            <li className="linkUnder">
              <Link className="links" to="/events">
                Events
              </Link>
            </li>
          </ul>
        </Col>
        <Col className="navCol" md={6}>
          <ul className="navList">
            <li className="linkUnder mr60">
              <Link className="links" to="/tickets">
                Tickets
              </Link>
            </li>
            <li className="mr60">
              <div className="navDrop">
                <span>
                  Gallery<i className="fas fa-chevron-right"></i>
                </span>
                <ul>
                  <li>Photos</li>
                  <li>Videos</li>
                </ul>
              </div>
            </li>
            <li className="linkUnder mr60">
              <Link className="links" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <i className="fas fa-shopping-cart"></i>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
