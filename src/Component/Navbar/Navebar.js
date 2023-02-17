import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/home page/homapplogo.png'
import whatsuplogo from '../../Assets/home page/whatsapp.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import ScrollToLink from '../../Home/Component/ScrollToElement'
import './Navbar.css'
import Model from './Model'
const Navebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }


  const [click1, setClick1] = useState(false);
  const addmodel = () => {
    setClick1(!click1)
  }
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <Link to={'/'}><img src={logo} alt="logo" height={40} width={160} /></Link>
        </div>
        <div className={click ? "navbar links" : "links active"} id='scroll'>
        <ScrollToLink id="member">Membership</ScrollToLink>
          <Link to={'/'}>Home</Link>
          <Link onClick={addmodel}>Services</Link>
        </div>
        <div className="whatsup">
          <Link><img src={whatsuplogo} alt="whatsuplogo" height={30} width={30} /></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={'/'}>7053737227</Link>
          {/* onClick={window.open('tel:7053737227')} target='_block' */}
        </div>
        <div className="hamberg" onClick={handleClick}>
          {
            click ? <FaTimes/> : <FaBars/>
          }
        </div>
      </div>
      {
        click1 && <Model/>
      }
    </nav >
  )
}

export default Navebar