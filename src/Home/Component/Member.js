import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../Assets/home page/memerbership.png'
import img2 from '../../Assets/home page/offer.png'

const Member = () => {
  return (
    <>
    <div id='member'>
        <div className="memberheading">
          <h1>Homapp Pro Membership</h1>
        </div>
        <div className="pay">
          <div className="membership">
            <img src={img1} alt="membership" />
          </div>
          <h2>Get Priority<br/>services and<br/>exclusive Benifits 1 year</h2>
          <div className="price">
            <img src={img2} alt="payment" /><br />
            <Link to={'/pay'}>Pay Now</Link>
          </div>
        </div>
        <div className="feature">
          <div className="div1"><p>2x Speed Service</p></div>
          <div className="div1"><p>Extra Discounts of up to 20% off</p></div>
          <div className="div1"><p>Free Inspection on all service</p></div>
          <div className="div1"><p>24/7 Emergency Assistance</p></div>
          <div className="div1"><p>Free rework</p></div>
        </div>
    </div>
    </>
    )
}

export default Member