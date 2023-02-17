import React from 'react'
import { Link } from 'react-router-dom'
import ReadMore from '../ReadMore/ReadMore'
import './Our_serviceGrid4handy.css'
import bimg1 from '../../Assets/Bookimage/nal.jfif'
import bimg2 from '../../Assets/Bookimage/electric.jfif'
import bimg3 from '../../Assets/Bookimage/carpenter.jfif'
import bimg4 from '../../Assets/Bookimage/painter.jfif'

const Our_serviceGrid4handy = (props) => {
    return (
        <div className="servicediv1">
            <div className="heading">
                <h1>OUR SERVICES</h1>
            </div>
            <div className="servicegrid" style={props.a}>
                <Link to={'/book'} state={{
                    bimg1:bimg1,
                    bheading:"Plumbing Works and Plumber Services",
                    p1:"Plumbers are an important part of keeping our homes and businesses running smoothly. They install and repair pipes and fixtures, ensuring that our water supply is safe and clean. Plumbers also play a vital role in preventing water damage by identifying and repairing leaks. When something goes wrong with our plumbing, we rely on plumbers to get things back on track.",
                    p2:"Homapp Plumbing Services in Hyderabad offers a wide range of plumbing services. We have a team of experienced and certified plumbers near who can handle all kinds of plumbing problems. We also use the latest technology and equipment to ensure that the job is done right the first time. Our services include repair and replacement of pipes, faucets, and fixtures. We also offer drain cleaning, sewer line repair and replacement, and water heater repair and installation. Contact us today to schedule a free consultation.",
                    p3:"If you're in need of a plumber, there's no need to look any further than your local community. Chances are, there's a qualified plumber near you who can take care of all your needs. When searching for a plumber, be sure to check their qualifications and experience to ensure they're the right person for the job. Once you've found a qualified plumber, you can rest assured that your plumbing needs will be taken care of in a prompt and professional manner.",
                }}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img1} alt="img1" />
                        </div>
                        <h1>{props.heading1}</h1>
                        <p>{props.p1}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                    bimg1:bimg1,
                    bheading:"Plumbing Works and Plumber Services",
                    p1:"Plumbers are an important part of keeping our homes and businesses running smoothly. They install and repair pipes and fixtures, ensuring that our water supply is safe and clean. Plumbers also play a vital role in preventing water damage by identifying and repairing leaks. When something goes wrong with our plumbing, we rely on plumbers to get things back on track.",
                    p2:"Homapp Plumbing Services in Hyderabad offers a wide range of plumbing services. We have a team of experienced and certified plumbers near who can handle all kinds of plumbing problems. We also use the latest technology and equipment to ensure that the job is done right the first time. Our services include repair and replacement of pipes, faucets, and fixtures. We also offer drain cleaning, sewer line repair and replacement, and water heater repair and installation. Contact us today to schedule a free consultation.",
                    p3:"If you're in need of a plumber, there's no need to look any further than your local community. Chances are, there's a qualified plumber near you who can take care of all your needs. When searching for a plumber, be sure to check their qualifications and experience to ensure they're the right person for the job. Once you've found a qualified plumber, you can rest assured that your plumbing needs will be taken care of in a prompt and professional manner.",
                }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                    bimg1:bimg2,
                    bheading:"Electrician Services",
                    p1:"Electrician repairs and installation services are important for keeping your home or office safe and functional. Electricians can repair electrical wiring, install new wiring, and even replace outdated or damaged electrical components. They can also provide you with advice on how to maintain your electrical system and make sure it is up to code. When choosing an electrician, be sure to ask about their experience, training, and licensing.",
                    p2:"Looking for electrician services in Hyderabad? Homapp is the best option for you. We provide professional and reliable electrician services at affordable prices. Our team of experienced and certified electricians are available 24/7 to help you with any electrical problems you may have. We also offer a 100% satisfaction guarantee on all of our services.",
                    p3:"We can help you with anything from wiring a new home to fixing an old, outdated electrical system. We're also available for emergency services, so if you have an electrical problem that needs to be fixed immediately, don't hesitate to call us. We're here to help you keep your home or office safe and running smoothly.",
                }}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img2} alt="img2" />
                        </div>
                        <h1>{props.heading2}</h1>
                        <p>{props.p2}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                    bimg1:bimg2,
                    bheading:"Electrician Services",
                    p1:"Electrician repairs and installation services are important for keeping your home or office safe and functional. Electricians can repair electrical wiring, install new wiring, and even replace outdated or damaged electrical components. They can also provide you with advice on how to maintain your electrical system and make sure it is up to code. When choosing an electrician, be sure to ask about their experience, training, and licensing.",
                    p2:"Looking for electrician services in Hyderabad? Homapp is the best option for you. We provide professional and reliable electrician services at affordable prices. Our team of experienced and certified electricians are available 24/7 to help you with any electrical problems you may have. We also offer a 100% satisfaction guarantee on all of our services.",
                    p3:"We can help you with anything from wiring a new home to fixing an old, outdated electrical system. We're also available for emergency services, so if you have an electrical problem that needs to be fixed immediately, don't hesitate to call us. We're here to help you keep your home or office safe and running smoothly.",
                }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                    bimg1:bimg3,
                    bheading:"Carpenter Services",
                    p1:"There are many reasons to hire a carpenter. If you need someone to help you with construction projects, a carpenter is the perfect person for the job. They have the skills and experience necessary to complete the project safely and efficiently. Carpenter services can also be helpful if you need repairs or modifications made to your home. A qualified carpenter will be able to make the changes you need while ensuring that your home remains structurally sound. When hiring a carpenter, it's important to find someone who is reputable and has a good track record. The best way to do this is to ask for recommendations from friends or family members.",
                    p2:"You can also check online reviews to get an idea of what past clients have thought of the carpenter's work Looking for a reliable and affordable carpenter in Hyderabad? Look no further than Homapp Carpenter Services. We offer a wide range of carpentry services, from small repairs to custom furniture making. We use only the highest quality materials and our experienced craftsmen take pride in their workmanship. Our goal is to provide our customers with the best possible service at a fair price. Contact us today to schedule a free consultation.",
                    p3:"If you're in need of a carpenter near you for any reason, you should definitely check out the services of a local carpenter. Carpenters near you are skilled professionals who can help you with any woodworking needs you may have. They can build custom furniture, install cabinets, and much more. If you have a specific project in mind, a carpenter near you can likely help you bring it to life. Be sure to get multiple quotes from different carpenters before making your final decision.",
                }}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img3} alt="img3" />
                        </div>
                        <h1>{props.heading3}</h1>
                        <p>{props.p3}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                    bimg1:bimg3,
                    bheading:"Carpenter Services",
                    p1:"There are many reasons to hire a carpenter. If you need someone to help you with construction projects, a carpenter is the perfect person for the job. They have the skills and experience necessary to complete the project safely and efficiently. Carpenter services can also be helpful if you need repairs or modifications made to your home. A qualified carpenter will be able to make the changes you need while ensuring that your home remains structurally sound. When hiring a carpenter, it's important to find someone who is reputable and has a good track record. The best way to do this is to ask for recommendations from friends or family members.",
                    p2:"You can also check online reviews to get an idea of what past clients have thought of the carpenter's work Looking for a reliable and affordable carpenter in Hyderabad? Look no further than Homapp Carpenter Services. We offer a wide range of carpentry services, from small repairs to custom furniture making. We use only the highest quality materials and our experienced craftsmen take pride in their workmanship. Our goal is to provide our customers with the best possible service at a fair price. Contact us today to schedule a free consultation.",
                    p3:"If you're in need of a carpenter near you for any reason, you should definitely check out the services of a local carpenter. Carpenters near you are skilled professionals who can help you with any woodworking needs you may have. They can build custom furniture, install cabinets, and much more. If you have a specific project in mind, a carpenter near you can likely help you bring it to life. Be sure to get multiple quotes from different carpenters before making your final decision.",
                }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                    bimg1:bimg4,
                    bheading:"Home Painting Services",
                    p1:"There are many painters in Hyderabad who can provide you with the best painting services. You can find them by searching online or by asking around. Make sure to get a few quotes before choosing a painter so that you can compare prices. You should also read reviews of the painters before making your decision.",
                    p2:"Looking for a painter in the Hyderabad area? Look no further than our trusted painters at Homapp. We provide top-quality House painting and Commercial Painting. Our painters are experienced and skilled in a variety of painting techniques. Whether you need exterior or interior painting, we can get the job done quickly and efficiently. We also offer a variety of color options to choose from, so you can find the perfect look for your home or business. Contact us today to schedule a consultation.",
                    p3:"Homapp professional Painters Near usually have a higher skill set than the average Painter. They know how to prepare a house for painting, what type of paint to use for different surfaces, and how to properly apply the paint so that it will look its best. Professional painters Near also have the necessary equipment to do the job right, such as ladders, scaffolding, and other tools.",
                }}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img4} alt="img4" />
                        </div>
                        <h1>{props.heading4}</h1>
                        <p>{props.p4}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                    bimg1:bimg4,
                    bheading:"Home Painting Services",
                    p1:"There are many painters in Hyderabad who can provide you with the best painting services. You can find them by searching online or by asking around. Make sure to get a few quotes before choosing a painter so that you can compare prices. You should also read reviews of the painters before making your decision.",
                    p2:"Looking for a painter in the Hyderabad area? Look no further than our trusted painters at Homapp. We provide top-quality House painting and Commercial Painting. Our painters are experienced and skilled in a variety of painting techniques. Whether you need exterior or interior painting, we can get the job done quickly and efficiently. We also offer a variety of color options to choose from, so you can find the perfect look for your home or business. Contact us today to schedule a consultation.",
                    p3:"Homapp professional Painters Near usually have a higher skill set than the average Painter. They know how to prepare a house for painting, what type of paint to use for different surfaces, and how to properly apply the paint so that it will look its best. Professional painters Near also have the necessary equipment to do the job right, such as ladders, scaffolding, and other tools.",
                }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Our_serviceGrid4handy