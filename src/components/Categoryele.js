// Categoryele.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Articlecard from '../components/Articlecard';
import '../css/Categoryele.css';

const Categoryele = () => {
  const location = useLocation();
  const { Categorydata } = location.state || {}; // Fallback to empty object if state is undefined

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
    <section className="section">
      <h1 className="title">{Categorydata ? Categorydata.categoryName : "(Category Name)"}</h1>
      <div className="home-body">
        {articles.map((article, index) => (
          <Articlecard key={index} Articledata={article} />
        ))}
      </div>
    </section>
  );
}

export default Categoryele;