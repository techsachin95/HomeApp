import React from 'react'
import './Why.css'
import img1 from '../../Assets/home app/icon.png'
const Why = () => {
  return (
        <div className="why">
            <div className="div1">
                <h1>WHY HOMAPP?</h1>
            </div>
            <div className="content">
                <img src={img1} alt="checkbox" /><span>Homapp has fair pricing and no additional charges are charged on the customer.</span><br /><br />
                <img src={img1} alt="checkbox" /><span>It hires only experienced people so that these sensitive green gardens are taken care of properly.</span><br /><br />
                <img src={img1} alt="checkbox" /><span>Homapp maintains transparency between management, customers and workers, which is a key aspect in any kind of service.</span><br /><br />
                <img src={img1} alt="checkbox" /><span>Homapp is obedient and respects its customers requirements and reviews which is why our customers are the happiest.</span><br /><br />
                <img src={img1} alt="checkbox" /><span>Homapp understands the busy schedule of yours and gives you suggestions for garden maintenance.</span>
            </div>
        </div>
        )
}

export default Why