import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { Container } from "react-bootstrap";
import moment from "moment";
import { useHistory } from "react-router-dom";

function News() {
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
    return <div>Loading...</div>;
  }

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
          {newsList.map((item) => {
            const newsSelect = () => {
              history.push(`/news/${item.id}`);
            };
            return (
              <div className="newsCard" onClick={() => newsSelect()}>
                <img src={item.imageUrl} width="100%" />
                <h4>{item.title}</h4>
                <h6>{moment(item.createdAt).fromNow()}</h6>
              </div>
            );
          })}
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default News;
