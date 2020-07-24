import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div className="landMain">
        <Navbar />

        <div className="landVisual">
          <video
            className="landVideo"
            width="100%"
            height="100%"
            autoPlay
            loop="loop"
            muted
          >
            <source src="/videos/mainVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="landMainCont">
            <div>
              <h5>Asian Rave Connection Ltd.</h5>
              <img src="/images/arcanLogoText.png" height={80} />
              <h1>#1 Event Space in Saigon</h1>
              <Link to="/bookings">
                <button className="bookBtn">BOOK THE VENUE</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="landAbout">
          <p classname="landAboutText">
            Arcan is a Bar, Club and Rooftop located in Binh Thanh. Three
            different floors, three different vibes to go from enjoying a live
            band festival or a clubbing event. Every Friday and Saturday.
          </p>
        </div>

        <div className="landVenue">
          <Container>
            <ul className="landVenueLogos">
              <li>
                <img src="/images/barLogo.png" width={200} />
              </li>
              <li>
                <img src="/images/clubLogo.png" width={200} />
              </li>
              <li>
                <img src="/images/rooftopLogo.png" width={200} />
              </li>
            </ul>
          </Container>
        </div>

        <div className="landAff">
          <div className="landAffTitle">
            <h2>COLLABORATORS</h2>
          </div>
          <Container>
            <ul className="affLogos">
              <li>
                <img src="/images/madCircusLogo.png" height={70} />
              </li>
              <li>
                <img src="/images/bitisLogo.png" height={70} />
              </li>
              <li>
                <img src="/images/hazardLogo.png" height={70} />
              </li>
              <li>
                <img src="/images/wereLoudLogo.png" height={70} />
              </li>
              <li>
                <img src="/images/tigerLogo.png" height={70} />
              </li>
            </ul>
            <ul className="affLogos">
              <li>
                <img src="/images/crowLogo.png" width={70} />
              </li>
              <li>
                <img src="/images/pioneerLogo.png" width={70} />
              </li>
              <li>
                <img src="/images/uwsLogo.png" width={70} />
              </li>
              <li>
                <img src="/images/mcHouseLogo.png" width={70} />
              </li>
              <li>
                <img src="/images/teteLogo.png" height={70} />
              </li>
            </ul>
          </Container>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
