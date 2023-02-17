import React from 'react'
import { Link } from 'react-router-dom'
import './Model.css'
const Model = () => {
  return (
        <div className="model">
            <div className="div1">
                <Link to='/deepcleaning'>Deep Cleaning</Link><br/><br/>
                <Link to='/pestcontrols'>Pest Control</Link><br/><br/>
                <Link to='/homeapp'>Home Appliance Repair</Link>
            </div>
            <div className="div2">
                <Link to='/waterproofing'>Water Proofing</Link><br/><br/>
                <Link to='/interiordesign'>Interior Design</Link><br/><br/>
                <Link to='/gardening'>Gardening</Link>
            </div>
            <div className="div3">
                <Link to='/saftynets'>Safety Nets</Link><br/><br/>
                <Link to='/handyman'>Handyman Services</Link><br/><br/>
                <Link to='/security'>Security Systems</Link>
            </div>
            <div className="div3">
                <Link to='/event'>Event Management</Link>
            </div>
        </div>
    )
}

export default Model