import React from 'react'
import { Link } from 'react-router-dom'
import ReadMore from '../ReadMore/ReadMore'
import './Our_serviceGrid4sec.css'
import bimg1 from '../../Assets/Bookimage/cctv.jfif'
import bimg2 from '../../Assets/Bookimage/interance.jpg'
import bimg3 from '../../Assets/Bookimage/fire.jpg'
import bimg4 from '../../Assets/Bookimage/bio.jpg'
const Our_serviceGrid4sec = (props) => {
    return (
        <div className="servicediv1">
            <div className="heading">
                <h1>OUR SERVICES</h1>
            </div>
            <div className="servicegrid" style={props.a}>
                <Link to={'/book'} state={{
                    bimg1:bimg1,
                    bheading:"CCTV Camera Installation and Repair Services",
                    p1:"Cctv camera Installation services can be a very important part of security for any home or business. They allow you to have a visual on what is happening in and around your property. This can help to deter crime, as well as give you the information needed to identify and apprehend any criminals. There are many different types and styles of CCTV cameras available in cctv camera shops, so it is important to do some research to find the one that best suits your needs and call us our Professional CCTV camera installation Technicians near you.",
                    p2:"If you're looking for reliable and professional CCTV camera installation services Near Hyderabad, look no further than Homapp. Our team of experts will ensure that your CCTV system is installed properly and works effectively to keep your property safe. We understand the importance of security, so we'll take the time to assess your needs and recommend the best solution for you.",
                    p3:"We can install CCTV cameras at strategic locations inside and outside your premises. This will help you keep an eye on activities taking place around your property. Our team of experts can also help you choose the right type of cameras and recording devices to suit your specific needs.Contact us today to learn more about our CCTV camera installation or repair services.",
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
                    bheading:"CCTV Camera Installation and Repair Services",
                    p1:"Cctv camera Installation services can be a very important part of security for any home or business. They allow you to have a visual on what is happening in and around your property. This can help to deter crime, as well as give you the information needed to identify and apprehend any criminals. There are many different types and styles of CCTV cameras available in cctv camera shops, so it is important to do some research to find the one that best suits your needs and call us our Professional CCTV camera installation Technicians near you.",
                    p2:"If you're looking for reliable and professional CCTV camera installation services Near Hyderabad, look no further than Homapp. Our team of experts will ensure that your CCTV system is installed properly and works effectively to keep your property safe. We understand the importance of security, so we'll take the time to assess your needs and recommend the best solution for you.",
                    p3:"We can install CCTV cameras at strategic locations inside and outside your premises. This will help you keep an eye on activities taking place around your property. Our team of experts can also help you choose the right type of cameras and recording devices to suit your specific needs.Contact us today to learn more about our CCTV camera installation or repair services.",
                }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                    bimg1:bimg2,
                    bheading:"Entrance control",
                    p1:"Door entrance control systems are used to regulate who can enter a building. This is usually done through an electronic keypad that requires a code to be entered in order to gain entry. The code can be changed at any time, making it a very secure system. Often, these systems are used in combination with CCTV cameras to further improve security.",
                    p2:"There are many types of door entrance control systems available on the market. Each type of system has its own set of features and benefits. The most popular type of system is the electronic keypad entry system. This system allows the user to enter a code to unlock the door. It is a very simple and convenient way to control access to a room or building. Another type of system is the fingerprint reader system. This system uses fingerprint recognition technology to identify the user and grant them access to the room or building.",
                    p3:"Homapp is one of the best commercial door entry control systems installers in Hyderabad . Our door entry systems are installed by professionals in Hyderabad who know exactly how to get the job done right. Homapp Door Entry Systems are designed to provide security and peace of mind for businesses and their employees. We offer a variety of different systems depending on your needs, including CCTV, card access, and fingerprint scanners.",
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
                    bheading:"Entrance control",
                    p1:"Door entrance control systems are used to regulate who can enter a building. This is usually done through an electronic keypad that requires a code to be entered in order to gain entry. The code can be changed at any time, making it a very secure system. Often, these systems are used in combination with CCTV cameras to further improve security.",
                    p2:"There are many types of door entrance control systems available on the market. Each type of system has its own set of features and benefits. The most popular type of system is the electronic keypad entry system. This system allows the user to enter a code to unlock the door. It is a very simple and convenient way to control access to a room or building. Another type of system is the fingerprint reader system. This system uses fingerprint recognition technology to identify the user and grant them access to the room or building.",
                    p3:"Homapp is one of the best commercial door entry control systems installers in Hyderabad . Our door entry systems are installed by professionals in Hyderabad who know exactly how to get the job done right. Homapp Door Entry Systems are designed to provide security and peace of mind for businesses and their employees. We offer a variety of different systems depending on your needs, including CCTV, card access, and fingerprint scanners.",
                }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                    bimg1:bimg3,
                    bheading:"Fire Alarm",
                    p1:"Fire safety alarms are important for any home or business. They can alert people to a fire before it gets out of control, giving them time to evacuate the area. Many fire safety alarms also have sensors that can detect smoke, heat, or carbon monoxide levels. This allows them to activate even if there are no flames present. Some higher-end models also include a strobe light to help people with hearing impairments.",
                    p2:"There are many different types of fire safety alarms available on the market. Some are designed to be used in residential homes, while others are made for commercial buildings. Smoke detectors are the most common type of fire alarm, but there are also heat detectors and combination units that detect both smoke and heat. Most fire alarms run on battery power, but some also have a backup power source in case of a power outage.",
                    p3:"If you're looking for a fire alarm system installation in Hyderabad, Homapp is the company to call. We specialize in the installation of fire alarm systems, and we're equipped to handle any size project. Our team is highly trained and experienced, and we'll make sure that your fire alarm system is installed correctly and up to code. We're dedicated to providing our clients with the best possible service, and we'll work with you to ensure that your fire alarm system meets all of your needs. Contact us today to get started on your project.",
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
                    bheading:"Fire Alarm",
                    p1:"Fire safety alarms are important for any home or business. They can alert people to a fire before it gets out of control, giving them time to evacuate the area. Many fire safety alarms also have sensors that can detect smoke, heat, or carbon monoxide levels. This allows them to activate even if there are no flames present. Some higher-end models also include a strobe light to help people with hearing impairments.",
                    p2:"There are many different types of fire safety alarms available on the market. Some are designed to be used in residential homes, while others are made for commercial buildings. Smoke detectors are the most common type of fire alarm, but there are also heat detectors and combination units that detect both smoke and heat. Most fire alarms run on battery power, but some also have a backup power source in case of a power outage.",
                    p3:"If you're looking for a fire alarm system installation in Hyderabad, Homapp is the company to call. We specialize in the installation of fire alarm systems, and we're equipped to handle any size project. Our team is highly trained and experienced, and we'll make sure that your fire alarm system is installed correctly and up to code. We're dedicated to providing our clients with the best possible service, and we'll work with you to ensure that your fire alarm system meets all of your needs. Contact us today to get started on your project.",
                }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                    bimg1:bimg4,
                    bheading:"BioMetric Device Installation",
                    p1:"Biometric Attendance device are systems that use human body measurements to identify individuals. There are many different types of biometric measurements, including fingerprints, iris patterns, and hand geometry. BioMetric device are used for security purposes, such as to gain access to buildings or computers. They can also be used for timekeeping, to track employee productivity, or to monitor attendance at events.",
                    p2:"These systems can all be used to control access to a specific area or building. BioMetric device are becoming increasingly common, as they offer a high level of security. Card readers are also popular, as they can be used to track employees or customers as they enter and exit a building. Keypads are a more basic option, but can still be used to control access to an area.",
                    p3:"Homapp biometric attendance machines are becoming increasingly popular in Hyderabad. These machines use your fingerprint or iris scan to identify you and track your attendance. This is a much more secure way of tracking attendance than traditional methods like sign-in sheets, which can be easily forged. Biometric attendance machines also make it easier to track employee hours, as they can automatically calculate how long someone has been working. This can be a valuable tool for managing payroll and ensuring that employees are getting paid for the hours they've worked.",
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
                    bheading:"BioMetric Device Installation",
                    p1:"Biometric Attendance device are systems that use human body measurements to identify individuals. There are many different types of biometric measurements, including fingerprints, iris patterns, and hand geometry. BioMetric device are used for security purposes, such as to gain access to buildings or computers. They can also be used for timekeeping, to track employee productivity, or to monitor attendance at events.",
                    p2:"These systems can all be used to control access to a specific area or building. BioMetric device are becoming increasingly common, as they offer a high level of security. Card readers are also popular, as they can be used to track employees or customers as they enter and exit a building. Keypads are a more basic option, but can still be used to control access to an area.",
                    p3:"Homapp biometric attendance machines are becoming increasingly popular in Hyderabad. These machines use your fingerprint or iris scan to identify you and track your attendance. This is a much more secure way of tracking attendance than traditional methods like sign-in sheets, which can be easily forged. Biometric attendance machines also make it easier to track employee hours, as they can automatically calculate how long someone has been working. This can be a valuable tool for managing payroll and ensuring that employees are getting paid for the hours they've worked.",
                }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Our_serviceGrid4sec