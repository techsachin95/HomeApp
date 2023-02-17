import React from 'react'
import { Link } from 'react-router-dom'
import './PayNow.css'
import img1 from '../../Assets/paynow/inkprogicon.png'
import img4 from '../../Assets/paynow/logo.svg'
import img5 from '../../Assets/paynow/light_desktop.svg'
import img6 from '../../Assets/paynow/payment_method.png'

import { FaEnvelope, FaPhoneAlt,FaFlag } from 'react-icons/fa'
const PayNow = () => {
    return (
        <div className="paymaindiv">
            <div className="contentdiv">
                <div className="content1">
                    <div className="headdiv">
                        <div className="maindiv">
                        <div className="img"><img src={img1} alt="inkprog icon image" /></div>
                        <div className="product"><span>Inkprog Technologies</span></div>
                        </div>
                        <h2>Homapp Pro Membership</h2>
                        <div className='black'></div>
                    </div>
                    <div className="bottomdiv">
                        <h3>Contact Us:</h3><br />
                        <FaEnvelope />&nbsp;&nbsp;&nbsp;<Link>sales@inkprog.com</Link><br/>
                        <FaPhoneAlt />&nbsp;&nbsp;&nbsp;<Link>7053737227</Link><br /><br /><br /><br />
                        <h3>Terms & Conditions:</h3><br />
                        <p>You agree to share information entered on this page with<br/> Inkprog Technologies (owner of this page) and Razorpay,<br/> adhering to applicable laws.</p><br /><br /><br />
                        <hr/><br />
                        <img src={img4} alt="razorpay image" /><br />
                        <p className='endpara'>Want to create page like this for your Business? Visit <br /><Link>Razorpay Payment Pages</Link>to get started!</p>
                        <FaFlag/>&nbsp;&nbsp;<Link className='endlink'>Report Page</Link>
                    </div>
                    <div>
                        <div className="paymentdetails">
                            <p>Payment Details</p>
                            <div className="black2"></div>
                            <form action="">
                                <label>Amount</label><input type="text" placeholder='Rs 699.00' disabled className='amount' /><br />
                                <label>GST</label>&nbsp;&nbsp;<input type="text" placeholder='Rs 125.00' disabled /><br />
                                <label>Name</label><input type="text" required /><br />
                                <label>Email</label><input type="email" required /><br />
                                <label>Phone</label><input type="text" required className='amount2'/><br />
                            </form>
                        <div className="paymentbottomdiv">
                            <div className="paydiv">
                                <img src={img6} alt="" />
                            </div>
                            <div className="blackdiv">
                                <h2>Pay Rs 824.00</h2>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imagediv">
                <img src={img5} alt="background image" />
            </div>
        </div>

    )
}

export default PayNow