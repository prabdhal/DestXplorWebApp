import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {

  return (
    <footer className="container-fluid bg-dark py-5">
      <div className="container py-3">
        <form className="row mx-auto" style={{ maxWidth: "500px" }}>
          <label className="input-header mb-3">Subscribe to our weekly newletter!</label>
          <span className="input-button-container">
            <input type="text" className="subscribe-input" placeholder="Email" />
            <button className="subscribe-button">Sign up</button>
          </span>
        </form>
      </div>
      <div className="container row py-5 mx-auto text-light" style={{ textAlign: "center" }}>
        <div className="footer-col">
          <h5 className="footer-header">Company</h5>
          <p><Link to="/about">Blog</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/about">Careers</Link></p>
          <p><Link to="/about">How we work</Link></p>
        </div>
        <div className="footer-col">
          <h5 className="footer-header">Destinations</h5>
          <p><Link to="/destinations">Mexico</Link></p>
          <p><Link to="/destinations">Amsterdam</Link></p>
          <p><Link to="/destinations">Tokyo</Link></p>
          <p><Link to="/destinations">France</Link></p>
        </div>
        <div className="footer-col">
          <h5 className="footer-header">Contact Us</h5>
          <p><Link to="/contact">Help/FAQ</Link></p>
          <p><Link to="/contact">Email</Link></p>
          <p><Link to="/contact">Location</Link></p>
          <p><Link to="/contact">Phone number</Link></p>
        </div>
        <div className="footer-col">
          <h5 className="footer-header">Social Media</h5>
          <div className="justify-content-even">
            <i className="fab fa-linkedin fa-3x mx-2"></i>
            <i className="fab fa-twitter fa-3x mx-2"></i>
            <i className="fab fa-facebook fa-3x mx-2"></i>
            <i className="fab fa-instagram fa-3x mx-2"></i>
          </div>
        </div>
      </div>
      <div className="container text-white">
        <p className="text-center">&copy; DestXplor {new Date().getFullYear()}</p>  
      </div>
    </footer>
  );
}

export default Footer;