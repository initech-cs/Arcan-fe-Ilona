import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Col, Row } from "react-bootstrap";
import moment from "moment";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

function News() {
  const [numberOfNews, setNumberOfNews] = useState(4);
  const [newsList, setNewsList] = useState(null);

  const loadNews = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/news`;
    const data = await fetch(url);
    const result = await data.json();

    setNewsList(result);
  };

  const history = useHistory();

  useEffect(() => {
    loadNews();
  }, []);

  if (newsList === null) {
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

  const news = newsList.slice(0, numberOfNews).map((i) => {
    const newsSelect = () => {
      history.push(`/news/${i.id}`);
    };

    return (
      <Col md={3} className="newsCard mb20" onClick={() => newsSelect()}>
        <img src={i.imageUrl} width="100%" />
        <h5>{i.title}</h5>
        <h6>{moment(i.createdAt).fromNow()}</h6>
      </Col>
    );
  });

  return (
    <div>
      <Navbar />

      <div className="newsHeader">
        <Container>
          <h1>NEWS</h1>
        </Container>
      </div>
      <div className="newsList">
        <Container className="newsListCont">
          <Row>{news}</Row>
        </Container>
        {newsList.length > numberOfNews ? (
          <button
            className="showMoreNewsBtn"
            onClick={() => setNumberOfNews(numberOfNews + 4)}
          >
            SHOW MORE
          </button>
        ) : (
          <div></div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default News;
