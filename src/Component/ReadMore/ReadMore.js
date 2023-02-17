import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom'
import {FaAngleUp,FaAngleDown} from 'react-icons/fa';
import './ReadMore.css'
const ReadMore = () => {
    const [readMore,setReadMore]=useState(false);
    const extraContent=<div>
        <p className="extra-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
          porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
          commodi officia aliquam! Maxime.
        </p>
    </div>
    const linkName=readMore?<pre className='readless'>ReadLess<sub><FaAngleUp/></sub></pre>:<pre>ReadMore<sub><FaAngleDown/></sub></pre> 
    return (
      <div className="App">
        <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
        {readMore && extraContent}
      </div>
    );
  }


export default ReadMore