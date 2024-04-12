import React from 'react'
import './Footer.css'
import Footerlogo from '../../assets/footerlogo.png'
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { TfiLinkedin } from "react-icons/tfi";

function Footer() {
  return (
    <div className='footer'>
      <div className="foot-up">
        <div className="logo">
          <img src={Footerlogo} alt="company logo" className="footer-logo" />
          <div className="socials">
            <a href="https://instagram.com/prajapati0841?igshid=NzZlODBkYWE4Ng==" target='_blank'><FaInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=100047653715123&mibextid=ZbWKwL" target='_blank'><RiFacebookFill /></a>
            <a href="https://www.linkedin.com/in/deepu-prajapati-49683a23b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><TfiLinkedin /></a>
          </div>
        </div>

        <div className="foot-links">
          <ul>
            <p className='foot-title'>Expertise</p>
            <li><a href="#">Design</a></li>
            <li><a href="#">Special Expertise</a></li>
            <li><a href="#">Commercial Advice</a></li>
            <li><a href="#">Traffic & Transport</a></li>
          </ul>
        </div>
        <div className="foot-links">
          <ul>
            <p className='foot-title'>Sectors</p>
            <li><a href="#">Road</a></li>
            <li><a href="#">Tunner</a></li>
            <li><a href="#">Bridge</a></li>
            <li><a href="#">Other+</a></li>
          </ul>
        </div>
        <div className="foot-links">
          <ul>
            <p className='foot-title'>Our Buisness</p>
            <li><a href="#">Work With Us</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>
        <div className="foot-links">
          <ul>
            <p className='foot-title'>Our Capabilities</p>
            <li><a href="#">Engineers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-down">
        <div><p className='copyright'>© 2024 Case International. All rights reserved by - Deepu prajapati</p></div>
        <div>
          <a href="#" className='bottom-link'>Terms & Conditions</a>
          <a href="#" className='bottom-link'>Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
