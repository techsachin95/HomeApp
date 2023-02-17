import React from 'react'
import Footer from '../Footer/Footer'
import Navebar from '../Navbar/Navebar'
import './Book.css'
import { useLocation } from 'react-router-dom'

const Book = () => {
    const location = useLocation();
    const { bimg1, bheading, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 } = location.state
    return (
        <>
            <Navebar />
            <div className="mdiv">
                <div className="firstdiv">
                    <div className="image">
                        <img src={bimg1} alt="book image" />
                    </div>
                    <div className="form">
                        <form action="">
                            <h1>Book Your Services</h1>
                            <input type="text" placeholder='Name*' required /><br />
                            <input type="text" placeholder='Mobile Number*' required /><br />
                            <input type="email" placeholder='Email(optional)' /><br />
                            <input type="text" placeholder='Address(optional)' /><br />
                            <input type="textarea" placeholder='Your Message' required className='textarea' /><br />
                            <input type="submit" className='submit'/>
                        </form>
                    </div>
                </div>
                <div className="seconddiv">
                    <div className="bheading">
                        <h1>{bheading}</h1>
                    </div>
                    <div className="content">
                        <p>{p1}</p><br />
                        <p>{p2}</p><br />
                        <p>{p3}</p><br />
                        <p>{p4}</p><br />
                        <p>{p5}</p><br />
                        <p>{p6}</p><br />
                        <p>{p7}</p><br />
                        <p>{p8}</p><br />
                        <p>{p9}</p><br />
                        <p>{p10}</p><br />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Book