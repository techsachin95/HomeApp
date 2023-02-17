import React from 'react'
import { Link } from 'react-router-dom'
import Book from '../Book/Book'
import ReadMore from '../ReadMore/ReadMore'
import bimg1 from '../../Assets/Bookimage/homeCleaning.jpg'
import bimg2 from '../../Assets/Bookimage/commercialcleaning.jpg'
import bimg3 from '../../Assets/Bookimage/watertank.jpg'
import bimg4 from '../../Assets/Bookimage/party.jpg'
import bimg5 from '../../Assets/Bookimage/facade.jpg'
import bimg6 from '../../Assets/Bookimage/furniturecleaning.jpg'

import './Our_serviceGrid6.css'
const Our_serviceGrid6 = (props) => {
    
    return (
        <div className="servicediv1">
            <div className="heading">
                <h1>OUR SERVICES</h1>
            </div>
            <div className="servicegrid">
                <Link to={'/book'} state={{
                        bimg1:bimg1,
                        bheading:'Home Deep Cleaning',
                        p1:'Everyone likes to have a neat and tidy home to lead a happier and healthier life. Homapp provides the best and professional house keeping and cleaning services, and deep cleaning services near me along with a home sanitization process for all your rooms with best strategies.',
                        p2:'Spend your off day relaxing with your family, rather than spending it cleaning the entire house. Homapp provides the best house keeping, home cleaning services in Hyderabad, so you can look forward to an incredibly fulfilling experience.',
                        p3:"The process of dealing with multiple chores and cleaning your home in Hyderabad can leave you exhausted. With home deep cleaning services near me, you can relax while the professionals keep your space clean and hygienic. It's important to keep your environment clean, and it makes your house look and smell better as well.",
                        p4:'The home cleaning services you receive thoroughly clean every part of your home, including the disposal of wastes, cleaning grimy surfaces, tidying and vacuuming, removing leaves from the garden, cleaning drainage, clearing doormats, disinfecting the air and surfaces, and washing the windows. In order to maintain the freshness and beauty of our home, we should deep clean it at least twice a year. The floors can stain, limescale can build up on taps, smirch can appear on glass surfaces, shape will develop in moist zones, dust frames will appear on surfaces, and pests will be a constant worry.Make your house look and feel better by hiring a professional cleaner NOW',
                        p5:'Homapp provides h cleaning services in Hyderabad, and our trained Professional team will reach out to you to understand your expectations and deliver the best services accordingly. We use eco-friendly cleaning products and cleaning Machines Homapp guarantee the most reliable deep cleaning services with 100% satisfaction at a reasonable price. For more information, call us.'
                        }} >
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img1} alt="img1" />
                        </div>
                        <h1>{props.heading1}</h1>
                        <p>{props.p1}</p>
                        <div className="servicelinks">
                        <Link><ReadMore /></Link><Link to={'/book'} state={{
                        bimg1:bimg1,
                        bheading:'Home Deep Cleaning',
                        p1:'Everyone likes to have a neat and tidy home to lead a happier and healthier life. Homapp provides the best and professional house keeping and cleaning services, and deep cleaning services near me along with a home sanitization process for all your rooms with best strategies.',
                        p2:'Spend your off day relaxing with your family, rather than spending it cleaning the entire house. Homapp provides the best house keeping, home cleaning services in Hyderabad, so you can look forward to an incredibly fulfilling experience.',
                        p3:"The process of dealing with multiple chores and cleaning your home in Hyderabad can leave you exhausted. With home deep cleaning services near me, you can relax while the professionals keep your space clean and hygienic. It's important to keep your environment clean, and it makes your house look and smell better as well.",
                        p4:'The home cleaning services you receive thoroughly clean every part of your home, including the disposal of wastes, cleaning grimy surfaces, tidying and vacuuming, removing leaves from the garden, cleaning drainage, clearing doormats, disinfecting the air and surfaces, and washing the windows. In order to maintain the freshness and beauty of our home, we should deep clean it at least twice a year. The floors can stain, limescale can build up on taps, smirch can appear on glass surfaces, shape will develop in moist zones, dust frames will appear on surfaces, and pests will be a constant worry.Make your house look and feel better by hiring a professional cleaner NOW',
                        p5:'Homapp provides h cleaning services in Hyderabad, and our trained Professional team will reach out to you to understand your expectations and deliver the best services accordingly. We use eco-friendly cleaning products and cleaning Machines Homapp guarantee the most reliable deep cleaning services with 100% satisfaction at a reasonable price. For more information, call us.'
                        }} 
                        className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg3,
                        bheading:'WaterTank Cleaning',
                        p1:'Homapp offers the best water tank cleaning services in Hyderabad for commercial and residential customers. We hire professionals for housekeeping, house cleaning, and water tank cleaning services that help us drink fresh drinkable water and enjoy clean with complete satisfaction of drinking.',
                        p2:'The importance of water to the body is equal to that of blood. 60% of diseases caused by humans are caused by contaminated water. The illness is believed to be caused by water stored in tanks. The importance of cleaning it regularly therefore cannot be overstated.',
                        p3:'Children are also most likely to contract waterborne illnesses since 60% of illnesses are waterborne. As a result of drinking contaminated water, children under the age of 5 are more likely to get sick. In addition, water storage tanks that are unkempt without regular cleaning or that are cleaned through inappropriate methods by taking the help of a plumber or sweeper are common sources of contact with contaminated water.',
                        p4:'Homapp Water tank cleaning services will maintain the quality of stored water. House cleaning services are important to avoid germ growth, infection of skin problems, algae growth, and contamination of water that causes illness.',
                        p5:'Our water tank cleaning services are available to residential societies, domestics, hotels, and for different clients in Hyderabad. We ensure the delivery of the highest standards of supplies through effective tools and techniques using superior quality processes. Some of the tools that we use are hand brushes, vacuum cleaners, anti-bacterial sprays, etc.',
                        p6:'With years of experience in the field, Homapp water cleaning company has always applied modern scientific techniques to carry out the entire process. By following an organized methodology, we ensure that the entire water in the tank has been purified without leaving traces or room for contamination.'
                        }} >
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img2} alt="img2" />
                        </div>
                        <h1>{props.heading2}</h1>
                        <p>{props.p2}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                        bimg1:bimg3,
                        bheading:'WaterTank Cleaning',
                        p1:'Homapp offers the best water tank cleaning services in Hyderabad for commercial and residential customers. We hire professionals for housekeeping, house cleaning, and water tank cleaning services that help us drink fresh drinkable water and enjoy clean with complete satisfaction of drinking.',
                        p2:'The importance of water to the body is equal to that of blood. 60% of diseases caused by humans are caused by contaminated water. The illness is believed to be caused by water stored in tanks. The importance of cleaning it regularly therefore cannot be overstated.',
                        p3:'Children are also most likely to contract waterborne illnesses since 60% of illnesses are waterborne. As a result of drinking contaminated water, children under the age of 5 are more likely to get sick. In addition, water storage tanks that are unkempt without regular cleaning or that are cleaned through inappropriate methods by taking the help of a plumber or sweeper are common sources of contact with contaminated water.',
                        p4:'Homapp Water tank cleaning services will maintain the quality of stored water. House cleaning services are important to avoid germ growth, infection of skin problems, algae growth, and contamination of water that causes illness.',
                        p5:'Our water tank cleaning services are available to residential societies, domestics, hotels, and for different clients in Hyderabad. We ensure the delivery of the highest standards of supplies through effective tools and techniques using superior quality processes. Some of the tools that we use are hand brushes, vacuum cleaners, anti-bacterial sprays, etc.',
                        p6:'With years of experience in the field, Homapp water cleaning company has always applied modern scientific techniques to carry out the entire process. By following an organized methodology, we ensure that the entire water in the tank has been purified without leaving traces or room for contamination.'
                        }}  className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg2,
                        bheading:'Commercial Cleaning',
                        p1:"Business organizations, industries, offices, shops, factories, bars, hotels, and restaurants must maintain a clean and hygienic work environment to thrive. Generally, every company wants to reach its business targets and get more business projects.",
                        p2:"A well-groomed commercial space in apple-pie order will make an immense fortune for a business. Professional office cleaning services are available in Hyderabad to help you overcome this challenge. When you hire office cleaning services, you can be assured that your work environment will be sparkling, sleek, and clean. Commercial cleaning services such as of the carpet, wiping off the desk tops, and janitorial services are just some of the many services provided by the outstanding office cleaning services. Through Homapp, you can connect with a comprehensive network of professional office cleaning services. Our commercial cleaners are highly skilled and experienced and provide an aesthetic appeal to your office or commercial space.",
                        p3:"Cleanliness plays a vital role in a person's health. In addition to keeping the home and its premises dust-free and germ-free, it is also necessary to keep the working areas clean and hygienic. Homapp is the best choice if you want commercial cleaning services in your city.",
                        p4:'As an industry leader in cleaning commercial spaces, Homapp has developed a standard procedure to ensure we meet all compliance requirements and only use chemicals and machines approved by the industry. We offer commercial cleaning services for offices, showrooms, hospitals, and other commercial spaces. We specialize in partition glass cleaning, façade cleaning, dry-foam carpet cleaning, and chair cleaning.',
                        p5:'Homapp offers the best commercial cleaning services in Hyderabad and has commercial cleaners for offices, factories, malls, showrooms at reasonable price with 100% satisfaction.',
                        p6:'As a leading Facade cleaning company in Hyderabad, we have the right expertise to complete the job correctly. Additionally, we have specialized tools that can assist in facade cleaning. We have the right crew members who understand the technical know-how and have vast experience under their belts, which is the best part of our agency. Glass cleaning services are provided by Homapp for residential buildings, commercial businesses, schools, and medical facilities.',
                        }}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img3} alt="img3" />
                        </div>
                        <h1>{props.heading3}</h1>
                        <p>{props.p3}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                        bimg1:bimg2,
                        bheading:'Commercial Cleaning',
                        p1:"Business organizations, industries, offices, shops, factories, bars, hotels, and restaurants must maintain a clean and hygienic work environment to thrive. Generally, every company wants to reach its business targets and get more business projects.",
                        p2:"A well-groomed commercial space in apple-pie order will make an immense fortune for a business. Professional office cleaning services are available in Hyderabad to help you overcome this challenge. When you hire office cleaning services, you can be assured that your work environment will be sparkling, sleek, and clean. Commercial cleaning services such as of the carpet, wiping off the desk tops, and janitorial services are just some of the many services provided by the outstanding office cleaning services. Through Homapp, you can connect with a comprehensive network of professional office cleaning services. Our commercial cleaners are highly skilled and experienced and provide an aesthetic appeal to your office or commercial space.",
                        p3:"Cleanliness plays a vital role in a person's health. In addition to keeping the home and its premises dust-free and germ-free, it is also necessary to keep the working areas clean and hygienic. Homapp is the best choice if you want commercial cleaning services in your city.",
                        p4:'As an industry leader in cleaning commercial spaces, Homapp has developed a standard procedure to ensure we meet all compliance requirements and only use chemicals and machines approved by the industry. We offer commercial cleaning services for offices, showrooms, hospitals, and other commercial spaces. We specialize in partition glass cleaning, façade cleaning, dry-foam carpet cleaning, and chair cleaning.',
                        p5:'Homapp offers the best commercial cleaning services in Hyderabad and has commercial cleaners for offices, factories, malls, showrooms at reasonable price with 100% satisfaction.',
                        p6:'As a leading Facade cleaning company in Hyderabad, we have the right expertise to complete the job correctly. Additionally, we have specialized tools that can assist in facade cleaning. We have the right crew members who understand the technical know-how and have vast experience under their belts, which is the best part of our agency. Glass cleaning services are provided by Homapp for residential buildings, commercial businesses, schools, and medical facilities.',
                        }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg4,
                        bheading:'After party cleaning',
                        p1:"Homapp Team provides after party cleaning services in Hyderabad, helping to clean up the mess and providing complete customer satisfaction. Whether it's a commercial event menu or a home menu, we're there to help. At reasonable prices, we provide the highest standards of party cleaning services in Hyderabad. There are the best-party cleaners in Hyderabad who have expertise and experience in handling all different types of cleaning requirements, such as stained walls, dirty glass doors or windows, entire kitchens, and all floors. In a stipulated period of time, we will make your space flawlessly clean at an affordable price.",
                        p2:"Making parties is everyone's favorite pastime. On different occasions, you and your friends celebrate - your career promotion or birthday. Even though you're having a great time during the whole night, nobody usually cares what happens the next morning. The empty bottles and glasses, the remaining food, and the beverage spills are still around after all of the visitors have left.",
                        p3:"With Homapp, you can keep things clean after parties in Hyderabad and enjoy peace of mind and happiness. We provide and maintain the highest standards of after party cleaning in Hyderabad at a reasonable price with satisfaction after every party, whether they are parties, commercial event venues, or at home.",
                        p4:"Don't worry if you're too tired to clean up after the best party ever! Take the time to enjoy the good memories from the night before and leave the cleaning to us. You won't regret it! We will make your home sparkling clean and tidy once more with our motivated and well-trained cleaners. Our party cleaners in Hyderabad are the best in the industry and are experts at handling all sorts of cleaning needs, such as stains, messy glass doors, kitchens, and overall floors. In a stipulated period of time, we aim to make a space perfectly clean at an affordable price.",
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
                        bheading:'After party cleaning',
                        p1:"Homapp Team provides after party cleaning services in Hyderabad, helping to clean up the mess and providing complete customer satisfaction. Whether it's a commercial event menu or a home menu, we're there to help. At reasonable prices, we provide the highest standards of party cleaning services in Hyderabad. There are the best-party cleaners in Hyderabad who have expertise and experience in handling all different types of cleaning requirements, such as stained walls, dirty glass doors or windows, entire kitchens, and all floors. In a stipulated period of time, we will make your space flawlessly clean at an affordable price.",
                        p2:"Making parties is everyone's favorite pastime. On different occasions, you and your friends celebrate - your career promotion or birthday. Even though you're having a great time during the whole night, nobody usually cares what happens the next morning. The empty bottles and glasses, the remaining food, and the beverage spills are still around after all of the visitors have left.",
                        p3:"With Homapp, you can keep things clean after parties in Hyderabad and enjoy peace of mind and happiness. We provide and maintain the highest standards of after party cleaning in Hyderabad at a reasonable price with satisfaction after every party, whether they are parties, commercial event venues, or at home.",
                        p4:"Don't worry if you're too tired to clean up after the best party ever! Take the time to enjoy the good memories from the night before and leave the cleaning to us. You won't regret it! We will make your home sparkling clean and tidy once more with our motivated and well-trained cleaners. Our party cleaners in Hyderabad are the best in the industry and are experts at handling all sorts of cleaning needs, such as stains, messy glass doors, kitchens, and overall floors. In a stipulated period of time, we aim to make a space perfectly clean at an affordable price.",
                        }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg5,
                        bheading:'Facade Cleaning',
                        p1:"A facade is a very fragile material, and if left unattended for a long time, it can sustain permanent damage. Besides this, the facade's surface is highly susceptible to scratches and can attract a lot of dust, making it hard to clean.",
                        p2:"During extreme weather conditions, Hyderabad's facade can be strained by dust, wind, and rain. It can be a very time-consuming and dangerous task to clean a facade. However, if proper maintenance is not performed, the facade's condition can deteriorate over time. Consequently, Homapp provides affordable and high-quality facade cleaning services in Hyderabad.",
                        p3:"There is quite a bit of specialized work involved in facade cleaning, so it needs to be handled properly. Facade cleaning companies in your area often use the same tools to clean the facade, resulting in the destruction of the top layer.",
                        p4:'Our façade and window cleaning service are recommended for maintaining a clean exterior. Maintaining building materials and maintaining property value requires regular cleaning and maintenance. Visitors are also left with a positive impression when a facade is sparkling clean.',
                        p5:'In the long run, unattended facades can suffer permanent damage if they are left unattended for a long period of time. Providing professional facade cleaning services in Hyderabad, we have the right expertise to get the job done right. Homapp glass cleaning service provider specializes in residential buildings, commercial businesses, schools, and medical facilities.',
                        p6:'As a leading Facade cleaning company in Hyderabad, we have the right expertise to complete the job correctly. Additionally, we have specialized tools that can assist in facade cleaning. We have the right crew members who understand the technical know-how and have vast experience under their belts, which is the best part of our agency. Glass cleaning services are provided by Homapp for residential buildings, commercial businesses, schools, and medical facilities.',
                        }}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img5} alt="img5" />
                        </div>
                        <h1>{props.heading5}</h1>
                        <p>{props.p5}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                        bimg1:bimg5,
                        bheading:'Facade Cleaning',
                        p1:"A facade is a very fragile material, and if left unattended for a long time, it can sustain permanent damage. Besides this, the facade's surface is highly susceptible to scratches and can attract a lot of dust, making it hard to clean.",
                        p2:"During extreme weather conditions, Hyderabad's facade can be strained by dust, wind, and rain. It can be a very time-consuming and dangerous task to clean a facade. However, if proper maintenance is not performed, the facade's condition can deteriorate over time. Consequently, Homapp provides affordable and high-quality facade cleaning services in Hyderabad.",
                        p3:"There is quite a bit of specialized work involved in facade cleaning, so it needs to be handled properly. Facade cleaning companies in your area often use the same tools to clean the facade, resulting in the destruction of the top layer.",
                        p4:'Our façade and window cleaning service are recommended for maintaining a clean exterior. Maintaining building materials and maintaining property value requires regular cleaning and maintenance. Visitors are also left with a positive impression when a facade is sparkling clean.',
                        p5:'In the long run, unattended facades can suffer permanent damage if they are left unattended for a long period of time. Providing professional facade cleaning services in Hyderabad, we have the right expertise to get the job done right. Homapp glass cleaning service provider specializes in residential buildings, commercial businesses, schools, and medical facilities.',
                        p6:'As a leading Facade cleaning company in Hyderabad, we have the right expertise to complete the job correctly. Additionally, we have specialized tools that can assist in facade cleaning. We have the right crew members who understand the technical know-how and have vast experience under their belts, which is the best part of our agency. Glass cleaning services are provided by Homapp for residential buildings, commercial businesses, schools, and medical facilities.',
                        }}  className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg6,
                        bheading:'Furniture Cleaning',
                        p1:"Our goal at Homapp Furniture cleaning services is to provide you with the highest level of customer service. To provide our customers with a highly recommended and secure quality of services that can provide more efficiency and capability, we utilize advanced and intuitive technology. Homapp service partners offer superior and affordable sofa cleaning services,Carpet cleaning . Our goal is to deliver good quality services at times that are convenient for our customers.",
                        p2:"The furniture in the living room Like Sofa cleaning , carpet cleaning is one of the most essential and important parts, so it is very important that you keep it clean and shiny. Homapp understands the aspects of this and provides the services at an affordable price. Homapp is the best choice for furniture cleaning services in Hyderabad at a very low price. We guarantee 100% customer satisfaction.",
                        p3:"An environment that is neat and clean gives a positive vibe to a place, whether it is a work space or a living area. Professional cleaning services are essential for creating such an ambiance. A wide range of cleaning services are provided by Homapp's expert service providers. It is possible to choose their services for a safe and clean environment.",
                        p4:"You can't imagine life without your couch after a long day at work. There is nothing better than sitting back by yourself and unwinding. Your pet jumps in with you, and you take comfort in a quiet night. If you are looking for couch cleaning services in Hyderabad for furniture cleaning services, then please contact us through email or phone and we will be more than happy to assist you. As certified, top-rated professionals, we provide top-quality furniture cleaning services in your area. Our furniture cleaning process is gentle and eco-friendly. To maintain clean and hygienic furniture, you must keep it clean and dirt-free.",
                        }}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img6} alt="img6" />
                        </div>
                        <h1>{props.heading6}</h1>
                        <p>{props.p6}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                        bimg1:bimg6,
                        bheading:'Furniture Cleaning',
                        p1:"Our goal at Homapp Furniture cleaning services is to provide you with the highest level of customer service. To provide our customers with a highly recommended and secure quality of services that can provide more efficiency and capability, we utilize advanced and intuitive technology. Homapp service partners offer superior and affordable sofa cleaning services,Carpet cleaning . Our goal is to deliver good quality services at times that are convenient for our customers.",
                        p2:"The furniture in the living room Like Sofa cleaning , carpet cleaning is one of the most essential and important parts, so it is very important that you keep it clean and shiny. Homapp understands the aspects of this and provides the services at an affordable price. Homapp is the best choice for furniture cleaning services in Hyderabad at a very low price. We guarantee 100% customer satisfaction.",
                        p3:"An environment that is neat and clean gives a positive vibe to a place, whether it is a work space or a living area. Professional cleaning services are essential for creating such an ambiance. A wide range of cleaning services are provided by Homapp's expert service providers. It is possible to choose their services for a safe and clean environment.",
                        p4:"You can't imagine life without your couch after a long day at work. There is nothing better than sitting back by yourself and unwinding. Your pet jumps in with you, and you take comfort in a quiet night. If you are looking for couch cleaning services in Hyderabad for furniture cleaning services, then please contact us through email or phone and we will be more than happy to assist you. As certified, top-rated professionals, we provide top-quality furniture cleaning services in your area. Our furniture cleaning process is gentle and eco-friendly. To maintain clean and hygienic furniture, you must keep it clean and dirt-free.",
                        }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Our_serviceGrid6