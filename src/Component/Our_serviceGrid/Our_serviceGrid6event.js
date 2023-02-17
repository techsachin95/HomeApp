import React from 'react'
import { Link } from 'react-router-dom'
import Book from '../Book/Book'
import ReadMore from '../ReadMore/ReadMore'
import bimg1 from '../../Assets/Bookimage/Decorations.jfif'
import bimg2 from '../../Assets/Bookimage/Photography.jfif'
import bimg3 from '../../Assets/Bookimage/watertank.jpg'
import bimg4 from '../../Assets/Bookimage/Wedding.jpg'
import bimg5 from '../../Assets/Bookimage/facade.jpg'
import bimg6 from '../../Assets/Bookimage/furniturecleaning.jpg'

import './Our_serviceGrid6event.css'
const Our_serviceGrid6event = (props) => {
    
    return (
        <div className="servicediv1">
            <div className="heading">
                <h1>OUR SERVICES</h1>
            </div>
            <div className="servicegrid">
                <Link to={'/book'} state={{
                        bimg1:bimg1,
                        bheading:'Event Decoration & Florist',
                        p1:"If you're looking for stage decoration for your wedding reception in Hyderabad, you've come to the right place. We are a leading provider of stage decoration for weddings and receptions.",
                        p2:"Homapp can provide you with a wide variety of options to choose from, so you can find the perfect one to match your style and budget. We also offer a variety of services to help you make your wedding day perfect. Our team of skilled workers will make sure that your stage is decorated beautifully and according to your specifications.At wedding receptions, it is important to have a beautiful stage that the bride and groom can be proud of. Many couples choose to use stage decorations that match their wedding theme.",
                        p3:"For example, if the couple's theme is beach-themed, the stage could be decorated with sand and sea shells. If the couple's theme is winter-themed, the stage could be decorated with snow and ice. No matter what theme the couple chooses, the stage should be decorated in a way that makes it look elegant and magical.",
                        p4:"stage decoration can really set the tone for the event. A well-decorated stage can make the reception feel more elegant and sophisticated. There are many stage decoration providers that can help you create the perfect look for your reception and choose to go with a simple yet elegant stage decoration for their reception. This can include things like white curtains, fairy lights, and flowers etc.."
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
                        bheading:'Event Decoration & Florist',
                        p1:"If you're looking for stage decoration for your wedding reception in Hyderabad, you've come to the right place. We are a leading provider of stage decoration for weddings and receptions.",
                        p2:"Homapp can provide you with a wide variety of options to choose from, so you can find the perfect one to match your style and budget. We also offer a variety of services to help you make your wedding day perfect. Our team of skilled workers will make sure that your stage is decorated beautifully and according to your specifications.At wedding receptions, it is important to have a beautiful stage that the bride and groom can be proud of. Many couples choose to use stage decorations that match their wedding theme.",
                        p3:"For example, if the couple's theme is beach-themed, the stage could be decorated with sand and sea shells. If the couple's theme is winter-themed, the stage could be decorated with snow and ice. No matter what theme the couple chooses, the stage should be decorated in a way that makes it look elegant and magical.",
                        p4:"stage decoration can really set the tone for the event. A well-decorated stage can make the reception feel more elegant and sophisticated. There are many stage decoration providers that can help you create the perfect look for your reception and choose to go with a simple yet elegant stage decoration for their reception. This can include things like white curtains, fairy lights, and flowers etc.."
                        }} 
                        className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg3,
                        bheading:'Corporate events',
                        p1:"Hyderabad is a city that is constantly buzzing with activity. There are always Corporate events taking place, and Homapp provides the best event planners to make sure that these events go off without a hitch.",
                        p2:"Our event planners have years of experience and are well-versed in the latest trends. They will work with you to create a Corporate events that meets your specific needs and budget. Homapp offers a team of experienced professionals committed to making your event a success. We work with you to understand your specific needs and requirements, then create a customized plan to ensure your Corporate events runs smoothly and is a success. Contact us today to discuss your event planning needs.",
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
                        bheading:'Corporate events',
                        p1:"Hyderabad is a city that is constantly buzzing with activity. There are always Corporate events taking place, and Homapp provides the best event planners to make sure that these events go off without a hitch.",
                        p2:"Our event planners have years of experience and are well-versed in the latest trends. They will work with you to create a Corporate events that meets your specific needs and budget. Homapp offers a team of experienced professionals committed to making your event a success. We work with you to understand your specific needs and requirements, then create a customized plan to ensure your Corporate events runs smoothly and is a success. Contact us today to discuss your event planning needs.",
                        }}  className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg2,
                        bheading:'Photography',
                        p1:"If you're looking for the best wedding photographers in Hyderabad, We provide the best photographers in the city who are experts in capturing beautiful moments.Among the best wedding photographers in Hyderabad, homapp consistently provides high-quality services.",
                        p2:"It has a team of experienced professionals who know how to capture the best moments of your big day. They use the latest equipment and techniques to ensure that your photos turn out perfect. You can trust homeapp to capture beautiful memories of your wedding day that you'll cherish for a lifetime. and our editing team will make sure that every detail is perfect. We know how important your wedding day is, and we'll do everything we can to make sure it's captured perfectly.",
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
                        bheading:'Photography',
                        p1:"If you're looking for the best wedding photographers in Hyderabad, We provide the best photographers in the city who are experts in capturing beautiful moments.Among the best wedding photographers in Hyderabad, homapp consistently provides high-quality services.",
                        p2:"It has a team of experienced professionals who know how to capture the best moments of your big day. They use the latest equipment and techniques to ensure that your photos turn out perfect. You can trust homeapp to capture beautiful memories of your wedding day that you'll cherish for a lifetime. and our editing team will make sure that every detail is perfect. We know how important your wedding day is, and we'll do everything we can to make sure it's captured perfectly.",
                        }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg4,
                        bheading:'Wedding Planner',
                        p1:"A wedding is the most special day in life which involves a lot of fun, frolic, Celebrations, rituals and holy ceremonies.Planning a wedding can feel pretty overwhelming at first because a lot of ideas, dreams and opinions intersect at one point. And we will be confused with all the balls in a single shot. While we will have an option to hire a wedding planner in Hyderabad or follow our heart desires in planning a beautiful wedding of our own ideas of mind.",
                        p2:"Hyderabad is a beautiful city in India that is known for its stunning architecture and rich culture. If you are planning a wedding in Hyderabad, you will want to make sure that you have the best wedding planner possible. Homapp can help you find the best wedding planner in Hyderabad who can make your dream wedding a reality. They will work with you to create a custom wedding plan that fits your budget and style.From finding the perfect venue to organizing the catering, they will take care of everything. And because they know all the best vendors in the city, you can be sure that you'll get the best deals on everything. So if you want your wedding to be perfect, don't hesitate to contact Homapp.",
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
                        bheading:'Wedding Planner',
                        p1:"A wedding is the most special day in life which involves a lot of fun, frolic, Celebrations, rituals and holy ceremonies.Planning a wedding can feel pretty overwhelming at first because a lot of ideas, dreams and opinions intersect at one point. And we will be confused with all the balls in a single shot. While we will have an option to hire a wedding planner in Hyderabad or follow our heart desires in planning a beautiful wedding of our own ideas of mind.",
                        p2:"Hyderabad is a beautiful city in India that is known for its stunning architecture and rich culture. If you are planning a wedding in Hyderabad, you will want to make sure that you have the best wedding planner possible. Homapp can help you find the best wedding planner in Hyderabad who can make your dream wedding a reality. They will work with you to create a custom wedding plan that fits your budget and style.From finding the perfect venue to organizing the catering, they will take care of everything. And because they know all the best vendors in the city, you can be sure that you'll get the best deals on everything. So if you want your wedding to be perfect, don't hesitate to contact Homapp.",
                        }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg5,
                        bheading:'Birthday Party Event',
                        p1:"Homapp birthday planners in Hyderabad who can help you surprise your loved ones on their special day.They can help plan Surprise birthday parties and make sure that everything goes smoothly.",
                        p2:"These planners can take care of everything from decoration to organizing games and activities. They will make all the arrangements for you so that you can enjoy your big day to the fullest. They will also make sure that the birthday cake is delicious and that there are enough gifts for everyone. Birthday planners in Hyderabad can help make your loved one's birthday truly special and memorable. We offer the most plausible associated confided in occasion organizers in Hyderabad. Our cluster of master occasion organizers can assist you in coordinating your appreciated themed birthday celebration cheap enough for you. forward that you are anticipating your child' 1st birthday celebration party, an impromptu get-together for your cherished one, a themed birthday celebration or facilitating a celebration gathering, our group will give their all to make sure that it's a terrific achievement. Being the foremost skilled and fastidious in our preparation, we have a tendency to lookout of the relative multitude of moment subtleties whether or not it's selecting and rising the best scene, coordinating tomfoolery games, photography, orchestrating the best come gifts so forth. Our cluster of specialists can assist you out with the foremost ideal thoughts.",
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
                        bheading:'Birthday Party Event',
                        p1:"Homapp birthday planners in Hyderabad who can help you surprise your loved ones on their special day.They can help plan Surprise birthday parties and make sure that everything goes smoothly.",
                        p2:"These planners can take care of everything from decoration to organizing games and activities. They will make all the arrangements for you so that you can enjoy your big day to the fullest. They will also make sure that the birthday cake is delicious and that there are enough gifts for everyone. Birthday planners in Hyderabad can help make your loved one's birthday truly special and memorable. We offer the most plausible associated confided in occasion organizers in Hyderabad. Our cluster of master occasion organizers can assist you in coordinating your appreciated themed birthday celebration cheap enough for you. forward that you are anticipating your child' 1st birthday celebration party, an impromptu get-together for your cherished one, a themed birthday celebration or facilitating a celebration gathering, our group will give their all to make sure that it's a terrific achievement. Being the foremost skilled and fastidious in our preparation, we have a tendency to lookout of the relative multitude of moment subtleties whether or not it's selecting and rising the best scene, coordinating tomfoolery games, photography, orchestrating the best come gifts so forth. Our cluster of specialists can assist you out with the foremost ideal thoughts.",
                        }}  className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg6,
                        bheading:'Catering Services',
                        p1:"At homapp, we offer the best catering services in Hyderabad. Our experienced and professional team of caterers will work with you to create a customized menu that will suit your event's needs.",
                        p2:"From corporate lunches to private parties, we have the perfect menu for your needs. We only use the freshest and highest quality ingredients to prepare our dishes, so you can be sure that your guests will enjoy amazing food. We also have a wide range of services that we can provide, from simple buffet setups to full-service catering. look no further than HomApp. We offer a wide range of catering services that are sure to meet your needs. Our experienced and professional staff will work with you to create a menu that is perfect for your event. We also offer a variety of package options so that you can find the perfect one for your budget.",
                        }}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img6} alt="img6" />
                        </div>
                        <h1>{props.heading6}</h1>
                        <p>{props.p6}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'}  state={{
                        bimg1:bimg6,
                        bheading:'Catering Services',
                        p1:"At homapp, we offer the best catering services in Hyderabad. Our experienced and professional team of caterers will work with you to create a customized menu that will suit your event's needs.",
                        p2:"From corporate lunches to private parties, we have the perfect menu for your needs. We only use the freshest and highest quality ingredients to prepare our dishes, so you can be sure that your guests will enjoy amazing food. We also have a wide range of services that we can provide, from simple buffet setups to full-service catering. look no further than HomApp. We offer a wide range of catering services that are sure to meet your needs. Our experienced and professional staff will work with you to create a menu that is perfect for your event. We also offer a variety of package options so that you can find the perfect one for your budget.",
                        }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Our_serviceGrid6event