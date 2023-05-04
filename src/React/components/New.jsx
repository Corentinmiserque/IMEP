import React from "react";
import newsData from "../../Json/Articles.json";
import new1 from "../../../public/new1.svg";
import new2 from "../../../public/new2.svg";
import new3 from "../../../public/new3.svg";
import dots from "../../../public/dots.svg";

const NewCard = ({ news }) => (
  <div className="card" key={news.title}>
    <section className="news-img">
      {news.photo === "new1" && <img src={new1} alt={news.title} />}
      {news.photo === "new2" && <img src={new2} alt={news.title} />}
      {news.photo === "new3" && <img src={new3} alt={news.title} />}
    </section>
    <p className="tag">{news.tags}</p>
    <h3 className="news-title big">{news.title} <span className="GT-Super">{news.span}</span></h3>
    <p className="news-description small">{news.description}</p>
    <button className="all-button white-button">
      <a href={news.link}>Read more</a>
    </button>
  </div>
);

const News = () => {
  const newCards = newsData.news.map((news, index) => (
    <NewCard key={index} news={news} />
  ));

  return (
    <div className="news">
      <div className="banner">
        <section className="sub-title">
          <img src={dots} alt="dots" />
          <h2>news</h2>
        </section>
        <section className="article">
          <button className="all-button white-button">
            <a href="#">View all article</a>
          </button>
        </section>
      </div>
      <h4>
        Latest news from the Royal Music Academy:{" "}
        <span className="GT-Super">Stay informed!</span>
      </h4>
      <section className="horizontal-scroll">{newCards}</section>
    </div>
  );
};

export default News;
