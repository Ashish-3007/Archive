import React from "react";
import { Link } from "react-router-dom";
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="about-us">
          <h2>About us</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Adipiscing nunc aliquet vitae quis interdum. Sed aliquam enim at morbi vulputate quis gravida. Parturient eu est cursus faucibus amet aliquam blandit pellentesque. Sit commodo pretium nam tellus laoreet felis mauris. Nunc quis sit rhoncus a facilisis. Fermentum id pharetra sit odio quam elit non enim. Sit egestas dignissim cursus odio etiam. Eu id molestie vehicula fringilla natoque venenatis vivamus. Egestas iaculis bibendum id diam lobortis faucibus pellentesque.</p>
        </div>
        <div className="links">
          <h2>Links</h2>
          <div className="link-container">
            <button className="link-button"><Link className="nav-link" to="/"><h3>Home</h3></Link></button>
            <button className="link-button"><Link className="nav-link" to="/categories"><h3>Categories</h3></Link></button>
            <button className="link-button"><Link className="nav-link" to="/explore"><h3>Explore</h3></Link></button>
            <button className="link-button"><Link className="nav-link" to="/profile"><h3>Profile</h3></Link></button>
          </div>
        </div>
        <div className="connect">
          <h2>Connect with us</h2>
          <p>+91 9876543210</p>
          <p>archive2024@gmail.com</p>
          <div className="social-icons">
            <Link to="#"><img src={"/Icons.png"} alt="Facebook" className="img"/></Link>
            <Link to="#"><img src={"/Icons-2.png"} alt="Instagram" className="img"/></Link>
            <Link to="#"><img src={"/Icons-3.png"} alt="Twitter" className="img"/></Link>
            <Link to="#"><img src={"/Icons-1.png"} alt="LinkedIn" className="img"/></Link>
            <Link to="#"><img src={"/pintrest.png"} alt="Pinterest" className="img"/></Link>
            <Link to="#"><img src={"/mage_playstore.png"} alt="PlayStore" className="img"/></Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Archive. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer