import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row className="footerCompanyInfo">
          <Col md={1}>
            <img className="footerLogo" src="/images/arcanLogoWithText.png" width={60} />
          </Col>
          <Col md={3}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1771134527107!2d106.70601581406848!3d10.797743192307083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529ac4a14df47%3A0xc24741c361686865!2sARCAN!5e0!3m2!1sen!2s!4v1595004841348!5m2!1sen!2s"
              width="220"
              height="220"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Col>
          <Col md={5}>
            <ul className="companyDetailsList">
              <li className="companyDetail">
                <div>
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  236/29/2H Điện Biên Phủ, Phường 17, Bình Thạnh, Hồ Chí Minh
                </div>
              </li>
              <li className="companyDetail">
                <div>
                  <i class="fas fa-phone"></i>
                </div>
                <div>+84 (0) 77 500 6786</div>
              </li>
              <li className="companyDetail">
                <div>
                  <i class="fas fa-envelope"></i>
                </div>
                <div>josselin.ferruzza@arcltd.net</div>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="footerMediaIconList">
              <li className="footerMediaIcon mr10">
                <a href="https://www.facebook.com/ArcanSaigon" target="_blank">
                  <i className="fab fa-facebook-square footerIcon"></i>
                </a>
              </li>
              <li className="footerMediaIcon mr10">
                <a href="https://www.instagram.com/arcansaigon" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="footerMediaIcon mr10">
                <a href="https://soundcloud.com/arcansaigon" target="_blank">
                  <i className="fab fa-soundcloud"></i>
                </a>
              </li>
              <li className="footerMediaIcon">
                <a
                  href="https://www.youtube.com/channel/UCZcNZgpHozpp-354GP6oyDg"
                  target="_blank"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footerCopyrights">
        <span>
          © 2018 Asian Rave Connection Company Limited. All Rights Reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
