import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import moment from "moment";
import Loader from "react-loader-spinner"

function NewsDetails() {
  const [newsDetails, setNewsDetails] = useState(null);
  const { id } = useParams();

  const loadNewsDetails = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/news/${id}`;
    const data = await fetch(url);
    const result = await data.json();

    setNewsDetails(result.data);
  };

  useEffect(() => {
    loadNewsDetails();
  }, []);

  if (newsDetails === null) {
    return (
      <div className="loaderBg">
        <Loader
          type="Audio"
          color="#0382A6"
          height={100}
          width={100}
          timeout={5000} //3 secs
        />
      </div>
    );
  }

  console.log(newsDetails);

  return (
    <div>
      <Navbar />

      <div className="newsDetailsMain">
        <div className="newsDetailsImg">
          <img src={`${newsDetails.news.imageUrl}`} width="100%" />
        </div>
        <Container>
          <div className="newsDetailsInfo">
            <h2>{newsDetails.news.title}</h2>
            <h6>{moment(newsDetails.news.createdAt).format("LL")}</h6>
            <p>{newsDetails.news.description}</p>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default NewsDetails;
