import React from 'react'
import { Link } from 'react-router-dom'
import ReadMore from '../ReadMore/ReadMore'
import './Our_serviceGrid5.css'

const Our_serviceGrid5 = (props) => {
    return (
        <div className="servicediv1">
            <div className="heading">
                <h1>OUR SERVICES</h1>
            </div>
            <div className="servicegrid">
                <Link to={'/book'}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img1} alt="img1" />
                        </div>
                        <h1>{props.heading1}</h1>
                        <p>{props.p1}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img2} alt="img2" />
                        </div>
                        <h1>{props.heading2}</h1>
                        <p>{props.p2}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img3} alt="img3" />
                        </div>
                        <h1>{props.heading3}</h1>
                        <p>{props.p3}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img4} alt="img4" />
                        </div>
                        <h1>{props.heading4}</h1>
                        <p>{props.p4}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img5} alt="img5" />
                        </div>
                        <h1>{props.heading5}</h1>
                        <p>{props.p5}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Our_serviceGrid5