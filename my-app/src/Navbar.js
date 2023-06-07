import React from "react";
import "./navbar.css"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
    <nav className="main-nav">
      <div className="logo">
        <img src="./imgae.svg" alt="hi" width="50" height="45"></img>
      </div>
      <div className="menu-link">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#"> Hindi Moives</a>
          </li>
          <li>
            <a href="#"> English Movies</a>
          </li>
          <li>
            <a href="#"> Contact </a>
          </li>
          <li>
            <a href="#"> About us </a>
          </li>
        </ul>
      </div>

      {/* 3rd social media links */}
      <div className="social-media">
        <ul className="social-media-desktop">
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </nav>

    {/* hero section */}
    <section className="hero-section">
<p>Welcome to </p>
<h1>TrailerDaddy</h1>
    </section>

   </>
  );
//   hero section

};

export default Navbar;
