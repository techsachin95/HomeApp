import React from 'react'
import img1 from '../../Assets/deep cleaning/commercial11.png'
import img2 from '../../Assets/deep cleaning/commerical22.png'
import img3 from '../../Assets/deep cleaning/commercial33.png'
import img4 from '../../Assets/deep cleaning/commercial44.png'
import img5 from '../../Assets/deep cleaning/commercial55.png'
import img6 from '../../Assets/deep cleaning/commerical66.png'
import './Experties.css'
const Experties = (props) => {
  return (
        <div className="expert">
            <div className="head">
                <p>Areas of expertise in</p>
                <h1>{props.heading}</h1>
            </div>
            <div className="images">
                <div className="img1">
                    <img src={img1} alt="img1" />
                    <h2>Offices</h2>
                </div>
                <div className="img1">
                    <img src={img2} alt="img2" />
                    <h2>Hospitals & Clinics</h2>
                </div>
                <div className="img1">
                    <img src={img3} alt="img3" />
                    <h2>Restaurants</h2>
                </div>
                <div className="img1">
                    <img src={img4} alt="img4" />
                    <h2>Hotels & Resorts</h2>
                </div>
                <div className="img1">
                    <img src={img5} alt="img5" />
                    <h2>Grocery & Shopping Marts</h2>
                </div>
                <div className="img1">
                    <img src={img6} alt="img6" />
                    <h2>Warehouse</h2>
                </div>
            </div>
        </div>
    )
}

export default Experties