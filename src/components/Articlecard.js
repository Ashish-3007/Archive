import React from "react";
import { Link } from "react-router-dom";
import '../css/Articlecard.css';

const Articlecard = ({ Articledata }) => {
  const { image, time, date, data, author, category } = Articledata;

  return (
    <Link to="/content" className="card-link">
      <section className="card-section">
        <div className="card-img-section">
          <img src={image} alt="Article" className="card-img" />
        </div>
        <div className="content">
          <div className="in-container">
            <div className="inner-content">
              <div>{time}</div>
              <div>{date}</div>
            </div>
            <div className="line"></div>
          </div>
          <div className="main-content">{data}</div>
          <div className="in-container">
            <div className="line"></div>
            <div className="inner-content">
              <div>{author}</div>
              <div>{category}</div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}

export default Articlecard;
