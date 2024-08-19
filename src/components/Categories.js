import React from "react";
import { Link } from "react-router-dom";
import '../css/Categories.css'
import Categoriescard from "./Categoriescard";

const Categories = () => {

  const category = [
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    },
    {
      categoryimage: require('../images/Categoriess.png')
    }
  ]

  return (
    <section className="categories-cotainer">
      <h1 className="title">Categories</h1>
      <div className="categories-body">
      {category.map((article, index) => (
          <Categoriescard key={index} Categorydata={article} />
        ))}
      </div>
    </section>
  );
} 

export default Categories;