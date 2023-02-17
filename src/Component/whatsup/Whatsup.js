import React from 'react'
import './Whatsup.css'
import img1 from '../../Assets/home app/whatsup.png'
import { Link } from 'react-router-dom'
const whatsup = () => {
  return (
    <Link to={''}>
    <div className="whatsup1">
        <img src={img1} alt="whatsup" />
    </div>
    </Link>
    )
}

export default whatsup