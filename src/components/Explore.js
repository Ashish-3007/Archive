import React from "react";
import { Link } from "react-router-dom";
import Articlecard from '../components/Articlecard';
import '../css/Explore.css'

const Explore = () => {

  const articles = [
    {
      image: require('../images/Property 1=Technology.png'),
      time: '8am IST',
      date: '16th Febraury 2024',
      data: 'Lorem ipsum dolor montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac sit amet consectetur. Hendrerit malesuada sollicitudin mattis montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac. Commodo aliquet sit eget nulla Vestibulum integer et enim nibh mi  sem massa tellus. Facilisis felis massa arcu momi massa hac ......... Read more',
      author: 'Author',
      category: 'Category',
    },
    {
      image: require('../images/Property 1=Technology.png'),
      time: '8am IST',
      date: '16th Febraury 2024',
      data: 'Lorem ipsum dolor montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac sit amet consectetur. Hendrerit malesuada sollicitudin mattis montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac. Commodo aliquet sit eget nulla Vestibulum integer et enim nibh mi  sem massa tellus. Facilisis felis massa arcu momi massa hac ......... Read more',
      author: 'Author',
      category: 'Category',
    },
    {
      image: require('../images/Property 1=Technology.png'),
      time: '8am IST',
      date: '16th Febraury 2024',
      data: 'Lorem ipsum dolor montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac sit amet consectetur. Hendrerit malesuada sollicitudin mattis montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac. Commodo aliquet sit eget nulla Vestibulum integer et enim nibh mi  sem massa tellus. Facilisis felis massa arcu momi massa hac ......... Read more',
      author: 'Author',
      category: 'Category',
    },
    {
      image: require('../images/Property 1=Technology.png'),
      time: '8am IST',
      date: '16th Febraury 2024',
      data: 'Lorem ipsum dolor montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac sit amet consectetur. Hendrerit malesuada sollicitudin mattis montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac. Commodo aliquet sit eget nulla Vestibulum integer et enim nibh mi  sem massa tellus. Facilisis felis massa arcu momi massa hac ......... Read more',
      author: 'Author',
      category: 'Category',
    },
    {
      image: require('../images/Property 1=Technology.png'),
      time: '8am IST',
      date: '16th Febraury 2024',
      data: 'Lorem ipsum dolor montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac sit amet consectetur. Hendrerit malesuada sollicitudin mattis montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac. Commodo aliquet sit eget nulla Vestibulum integer et enim nibh mi  sem massa tellus. Facilisis felis massa arcu momi massa hac ......... Read more',
      author: 'Author',
      category: 'Category',
    },
    {
      image: require('../images/Property 1=Technology.png'),
      time: '8am IST',
      date: '16th Febraury 2024',
      data: 'Lorem ipsum dolor montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac sit amet consectetur. Hendrerit malesuada sollicitudin mattis montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac. Commodo aliquet sit eget nulla Vestibulum integer et enim nibh mi  sem massa tellus. Facilisis felis massa arcu momi massa hac ......... Read more',
      author: 'Author',
      category: 'Category',
    },
    {
      image: require('../images/Property 1=Technology.png'),
      time: '8am IST',
      date: '16th Febraury 2024',
      data: 'Lorem ipsum dolor montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac sit amet consectetur. Hendrerit malesuada sollicitudin mattis montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac. Commodo aliquet sit eget nulla Vestibulum integer et enim nibh mi  sem massa tellus. Facilisis felis massa arcu momi massa hac ......... Read more',
      author: 'Author',
      category: 'Category',
    },
    {
      image: require('../images/Property 1=Technology.png'),
      time: '8am IST',
      date: '16th Febraury 2024',
      data: 'Lorem ipsum dolor montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac sit amet consectetur. Hendrerit malesuada sollicitudin mattis montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac. Commodo aliquet sit eget nulla Vestibulum integer et enim nibh mi  sem massa tellus. Facilisis felis massa arcu momi massa hac ......... Read more',
      author: 'Author',
      category: 'Category',
    },
    {
      image: require('../images/Property 1=Technology.png'),
      time: '8am IST',
      date: '16th Febraury 2024',
      data: 'Lorem ipsum dolor montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac sit amet consectetur. Hendrerit malesuada sollicitudin mattis montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac. Commodo aliquet sit eget nulla Vestibulum integer et enim nibh mi  sem massa tellus. Facilisis felis massa arcu momi massa hac ......... Read more',
      author: 'Author',
      category: 'Category',
    },
    {
      image: require('../images/Property 1=Technology.png'),
      time: '8am IST',
      date: '16th Febraury 2024',
      data: 'Lorem ipsum dolor montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac sit amet consectetur. Hendrerit malesuada sollicitudin mattis montes integer id iaculis. Vestibulum integer et enim nibh mi massa hac. Commodo aliquet sit eget nulla Vestibulum integer et enim nibh mi  sem massa tellus. Facilisis felis massa arcu momi massa hac ......... Read more',
      author: 'Author',
      category: 'Category',
    }

  ]

  return (
    <section className="explore-section">
      <h1 className="title">Explore</h1>
      <div className="search-host">
        <input type="text" placeholder="Search..." name="search"  className="search"></input>
      </div>
      <div className="home-body">
        {articles.map((article, index) => (
          <Articlecard key={index} Articledata={article} />
        ))}
      </div>
    </section>
  );
}

export default Explore;