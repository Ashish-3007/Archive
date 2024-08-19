import React from "react";
import { Link } from "react-router-dom";
import '../css/Profile.css'
import Articlecard from '../components/Articlecard';
import banner from '../images/Frame 18.png'
import profileimg from '../images/Ellipse 11.png'

const Profile = () => {

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
    <section className="profile-section">
      <img src={banner} className="profile-banner"/>
      <img src={profileimg} className="profile-image"/>
      <button className="profile-button"><h5>Edit Profile</h5></button>
      <div className="profile-mid">
        <div className="profile-mid-left">
          <div><h3>Name</h3></div>
          <div><h3>Username</h3></div>
          <div><h3>(Bio)Lorem ipsum dolor sit amet consectetur.</h3></div>
          <div><h3>Joined on 12th nov 2020</h3></div>
        </div>
        <div className="profile-mid-right">
          <div><h3>Followers</h3></div>
          <div><h3>Following</h3></div>
        </div>
      </div>
      <div className="profile-title"><h1>Articles</h1></div>
      <div className="home-body">
        {articles.map((article, index) => (
          <Articlecard key={index} Articledata={article} />
        ))}
      </div>
    </section>
  )
}

export default Profile