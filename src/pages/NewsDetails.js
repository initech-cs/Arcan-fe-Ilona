import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import moment from "moment"

function NewsDetails() {
  const [newsDetails, setNewsDetails] = useState(null);
  const { id } = useParams();

  const loadNewsDetails = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/news/${id}`;
    const data = await fetch(url);
    const result = await data.json();

    setNewsDetails(result);
  };

  useEffect(() => {
    loadNewsDetails();
  }, []);

  if (newsDetails === null) {
    return <div>Loading...</div>;
  }

  console.log(newsDetails);
  return (
    <div>
      <Navbar />

      <div className="newsDetailsMain">
        <div className="newsDetailsImg">
          <img src={newsDetails.imageUrl} width="100%" />
        </div>
        <div className="newsDetailsInfo">
          <Container>
            <h2>{newsDetails.title}</h2>
            <h6>{moment(newsDetails.createdAt).format('LL')}</h6>
            <p>{newsDetails.description}</p>
          </Container>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default NewsDetails;
