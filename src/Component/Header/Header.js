import React from 'react'
import './Header.css'
const Header = (props) => {
  return (
    <>
    <div className="header_img">
      <img src={props.img} alt="header-img"/>
    </div>
    </>
    )
}

export default Header