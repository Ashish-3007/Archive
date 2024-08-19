import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Categories from './components/Categories';
import Explore from './components/Explore';
import Notification from './components/Notification';
import Footer from './components/Footer';
import Categoryele from './components/Categoryele';
import Content from './components/Content';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/categoryele" element={<Categoryele />} />
        <Route path="/content" element={<Content />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
