import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './Crousel.css'
const Crousel = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    buttonsVisibility: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    loop:false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="service">
      <div className="service_header">
        <h2>{props.heading}</h2>
      </div>
      <div className="crousel">
        <Slider {...settings}>
          <div className='cdiv1'>
            <Link to={props.to}><img src={props.img1} alt="img1" /></Link>
            <p>{props.h1}</p>
          </div>
          <div className='cdiv1'>
          <Link to={props.to}><img src={props.img2} alt="img2" /></Link>
            <p>{props.h2}</p>
          </div>
          <div className='cdiv1'>
          <Link to={props.to}><img src={props.img3} alt="img3" /></Link>
            <p>{props.h3}</p>
          </div>
          <div className='cdiv1'>
          <Link to={props.to}><img src={props.img4} alt="img4" /></Link>
            <p>{props.h4}</p>
          </div>
          <div className='cdiv1'>
          <Link to={props.to}><img src={props.img5} alt="img5" /></Link>
            <p>{props.h5}</p>
          </div>
          <div className='cdiv1'>
          <Link to={props.to}><img src={props.img6} alt="img6" /></Link>
            <p>{props.h6}</p>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Crousel