import React from 'react'
import img1 from '../../Assets/home page/engineer.png'
import img2 from '../../Assets/home page/award.png'
import img3 from '../../Assets/home page/settings.png'
import img4 from '../../Assets/home page/task-list.png'
import img5 from '../../Assets/home page/guarantee.png'

const Key_feature = () => {
  return (
    <div className="key">
        <div className="heading">
            <h1>KEY FEATURES</h1>
        </div>
        <div className="feature">
            <div className="div1">
                <div className="image"><img src={img1} alt="img1" /></div>
                <p>Adequate Manpower</p>
            </div>
            <div className="div1">
            <div className="image"><img src={img2} alt="img2" /></div>
                <p>Service Quality & Customer Satisfaction</p>
            </div>
            <div className="div1">
            <div className="image"><img src={img3} alt="img3" /></div>
                <p>Trained & Skilled professional</p>
            </div>
            <div className="div1">
            <div className="image"><img src={img4} alt="img4" /></div>
                <p>Pre & Post Work Evaluation</p>
            </div>
            <div className="div1">
            <div className="image"><img src={img5} alt="img5" /></div>
                <p>Warranty For Applicable Services</p>
            </div>
        </div>
    </div>
    )
}

export default Key_feature