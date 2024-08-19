// Categoriescard.js
import React from "react";
import { Link } from "react-router-dom";
import '../css/Categoriescard.css';

const Categoriescard = ({ Categorydata }) => {
  const { categoryimage } = Categorydata;

  return (
    <div className="categories-card">
      <Link to={{
        pathname: '/categoryele',
        state: { Categorydata }
      }}>
        <img className="card-imag" src={categoryimage} alt="Card image" />
      </Link>
    </div>
  );
}

export default Categoriescard;
