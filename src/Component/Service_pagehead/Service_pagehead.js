import React from 'react'
import './Service_pagehead.css'
const Service_pagehead = (props) => {
  return (
    <div className="maindiv">
      <div className="heading">
        <h1>{props.heading}</h1>
      </div>
      <div className="para">
        <p>{props.p1}</p><br/>
        <p>{props.p2}</p><br/>
        <p>{props.p3}</p><br/>
        <p>{props.p4}</p><br/>
        <p>{props.p5}</p>
      </div>
    </div>
  )
}

export default Service_pagehead