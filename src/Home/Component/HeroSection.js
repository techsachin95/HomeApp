import React from 'react'
import img1 from '../../Assets/home page/homewallpaper.png'
const HeroSection = () => {
    return (
        <div className="hero">
            <div className="div1">
                <div className="gt">
                    <div className="ghar">
                        <img src={img1} alt="ghar" />
                    </div>
                    <div className="heading">
                        <h1>Home Maintenance Simplified</h1>
                        <p className='para'>Your Complete Home Maintenance will be taken care of by Homapp.
                            We provide services in 80+ categories with 1000+ skilled professionals vendor based.
                            Just whatsapp us or call us for booking @ 9030924381</p><br /><br /><br />
                        <div className="branch">
                            <div className="city">
                                <h2>4</h2>
                                <p>CITIES</p>
                            </div>
                            <div className="trust">
                                <h2>450<span>&nbsp;+</span></h2>
                                <p>TRUSTED PROFESSIONAL</p>
                            </div>
                            <div className="customer">
                                <h2>750<span>&nbsp;+</span></h2>
                                <p>HAPPY CUSTOMERS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection