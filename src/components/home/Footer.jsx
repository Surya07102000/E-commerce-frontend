import React from "react";
import styles from "./footer.module.css";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <div id={styles.fooTerdivs}>
      <div id={styles.fooTer}>
        <h1 className={styles.H1}>THE ULTIMATE STORE</h1>
        <div className={styles.footerGrid}>
          <div>
            <h4>CUSTOMERS SERVICE</h4>
            <p>
              <a href="/">Contact us</a>
            </p>
            <p>
              <a href="/">Track Order</a>
            </p>
            <p>
              <a href="/">Return Order</a>
            </p>
            <p>
              <a href="/">Cancel Order</a>
            </p>
          </div>
          <div>
            <h4>COMPANY</h4>
            <p>
              <a href="/">About us</a>
            </p>
            <p>
              <a href="/">We're Hiring</a>
            </p>
            <p>
              <a href="/">Terms & Conditions</a>
            </p>
            <p>
              <a href="/">Privacy Policy</a>
            </p>
            <p>
              <a href="/">Blog</a>
            </p>
          </div>
          <div>
      <h4>CONNECT WITH US</h4>
      <div id={styles.imgDivmain}>
        <a href="/https://www.facebook.com/suryakanta.nag.3">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/SuryaKantaNag3">
          <FaTwitter />
        </a>
    
        <a href="https://www.instagram.com/suryakantanag/">
          <FaInstagram /> 
        </a>
        <a href="https://www.linkedin.com/in/surya-kanta-nag-a492901bb/">
          <FaLinkedin />
        </a>
    
    </div>
    </div>

          <div>
            <h4>KEEP UP TO DATE</h4>
            <div className={styles.inpbtnFlex}>
              <input placeholder="Enter Email id" />
              <button className={styles.bTTn}>Subscribe</button>
            </div>
          </div>
          <div>
            <p>
              <a href="/">15 Days return policy</a>
            </p>
            <p>
              <a href="/">Cash on delivery*</a>
            </p>
          </div>
          
          <div>
            <h4>100% SECURE PAYMENT</h4>
            <div>
              <img
                src="https://images.bewakoof.com/web/secure-payments-image.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <hr />
        <div className={styles.footerGrid}>
          <div>
            <h4>OFFICE ADDRESS</h4>
            <p>
              <a href="/">Techno city, Garia</a>
            </p>
            <p>
              <a href="/">near Netaji Subhash Engineering College</a>
            </p>
            <p>
              <a href="/">Tripureswari Apartment, Block:A</a>
            </p>
            <p>
              <a href="/">Kolkata, West Bengal-700152</a>
            </p>
          </div>
          <div>
            <h4>FOR QUERY</h4>
            <p>
              <a href="/">E-MAIL:suryakantanag05@gmail.com</a>
            </p>
            <p>
              <a href="/">CONT:+91 7001375827</a>
            </p>
            
          </div>

        
          </div>
          
        
      </div>
      
    </div>
    
  );
};

export default Footer;
