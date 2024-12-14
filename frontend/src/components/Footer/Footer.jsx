import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png';
import facebook_icon from '../../assets/facebook_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import linkedin_icon from '../../assets/linkedin_icon.png';


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={logo} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas modi ducimus quisquam iure! Ut commodi, nesciunt dolorem ducimus omnis rem deleniti tempora voluptatibus</p>
            <div className="footer-social-icons">
                <img src={facebook_icon} alt="" />
                <img src={twitter_icon} alt="" />
                <img src={linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-121-212-3212</li>
                <li>contact@savory.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'> &copy; 2025 Savory. All rights reserved.</p>
    </div>
  )
}

export default Footer
