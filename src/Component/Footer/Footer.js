import React from 'react'
import { Link } from 'react-router-dom'
import gmail1 from '../../Assets/home page/gmail.png'
import mobileno1 from '../../Assets/home page/phone-call.png'
import facebook1 from '../../Assets/home page/facebook.png'
import instagram1 from '../../Assets/home page/instagram.png'
import linkedin1 from '../../Assets/home page/linkedin.png'
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className="mdiv">
        <div className="footer1">
          <div className="contact">
            <h3>Contact Us</h3>
            <span><img src={gmail1} alt="gmail" />&nbsp;&nbsp;&nbsp;<Link>sachinsinghkbs@gmail.com</Link></span><br /><br />
            <span className='contactspan'><img src={mobileno1} alt="contact no" />&nbsp;&nbsp;&nbsp;<Link>7053737227</Link></span>
          </div>
          <div className="links1">
            <div className="div1">
              <Link to={'/deepcleaning'}>Cleaning</Link>
              <Link to={'/gardening'}>Gardening</Link>
              <Link to={'/homeapp'}>Home Appliances</Link>
            </div>
            <div className="div2">
              <Link to={'/interiordesign'}>Iterior</Link>
              <Link to={'/pestcontrols'}>Pest Conrol</Link>
              <Link to={'/saftynets'}>Safety Nates</Link>
            </div>
            <div className="div3">
              <Link to={'/security'}>Security</Link>
              <Link to={'/waterproofing'}>Water Proofing</Link>
              <Link to={'/handyman'}>Handyman</Link>
            </div>
            <div className="div4">
              <Link to={'/event'}>Event Management</Link>
            </div>
          </div>
        </div>
        <div className="social">
          <Link to={'/'}><img src={instagram1} alt="instagram" /></Link>
          <Link to={'/'}><img src={facebook1} alt="facebook" /></Link>
          <Link to={'/'}><img src={linkedin1} alt="indeed" /></Link>
        </div>
        <div className="footer2">
          <Link>A Product of Inkprog</Link>
          <span className='span2'>Term and Condition | Privacy Policy | Cookie Policies</span>
          <span className='span3'>&copy; 2021.Homapp.All Rights Reserved.</span>
        </div>
      </div>
    </>
  )
}

export default Footer