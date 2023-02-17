import React from 'react'
import { Link } from 'react-router-dom'
import Book from '../Book/Book'
import ReadMore from '../ReadMore/ReadMore'
import bimg1 from '../../Assets/Bookimage/bird.jfif'
import bimg2 from '../../Assets/Bookimage/build1.jfif'
import bimg3 from '../../Assets/Bookimage/girl.jfif'
import bimg4 from '../../Assets/Bookimage/jali.jfif'
import bimg5 from '../../Assets/Bookimage/spick.jfif'
import bimg6 from '../../Assets/Bookimage/build.jfif'

import './Our_serviceGrid6sefty.css'
const Our_serviceGrid6sefty = (props) => {
    
    return (
        <div className="servicediv1">
            <div className="heading">
                <h1>OUR SERVICES</h1>
            </div>
            <div className="servicegrid">
                <Link to={'/book'} state={{
                        bimg1:bimg1,
                        bheading:'Bird Safety Nets',
                        p1:'Homapp provides Pigeon Net Solutions for Balcony Areas, Duct Areas in Apartments, Independent Buildings, and Commercial Places Homapp being the leading traders in hyderabad provides one such promising service of installing safety nets at any place with proper mechanism by the skilled people. It ensures that there is no harm to anyone using it',
                        p2:'The high quality bearing capacity and durability of pigeon safety nets make them the perfect choice for any type of site regardless of its shape or size. We offer transparent nets that are a permanent solution to pigeon menaces without harming or killing them. Whenever you need pigeon safety nets, call us right away.',
                        p3:"Our company is one of the best and most professional safety net providers in Hyderabad. Besides installing safety nets according to your requirements, our expert's team also manufactures safety nets for all types of needs, our safety nets are available in a variety of colours",
                        p4:'Using pigeon safety nets prevents pigeons from making poop or darting by creating an unhealthy environment. With transparent safety nets for a permanent solution for the balcony to rid of pigeon disturbance, these nets are highly durable, heavy-duty, good quality, and very capable of handling any type of site.',
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
                        bheading:'Bird Safety Nets',
                        p1:'Homapp provides Pigeon Net Solutions for Balcony Areas, Duct Areas in Apartments, Independent Buildings, and Commercial Places Homapp being the leading traders in hyderabad provides one such promising service of installing safety nets at any place with proper mechanism by the skilled people. It ensures that there is no harm to anyone using it',
                        p2:'The high quality bearing capacity and durability of pigeon safety nets make them the perfect choice for any type of site regardless of its shape or size. We offer transparent nets that are a permanent solution to pigeon menaces without harming or killing them. Whenever you need pigeon safety nets, call us right away.',
                        p3:"Our company is one of the best and most professional safety net providers in Hyderabad. Besides installing safety nets according to your requirements, our expert's team also manufactures safety nets for all types of needs, our safety nets are available in a variety of colours",
                        p4:'Using pigeon safety nets prevents pigeons from making poop or darting by creating an unhealthy environment. With transparent safety nets for a permanent solution for the balcony to rid of pigeon disturbance, these nets are highly durable, heavy-duty, good quality, and very capable of handling any type of site.',
                        }} 
                        className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg3,
                        bheading:'Children Safety Net',
                        p1:"Whether you want to keep your children indoors or outdoors, a safety net will keep them from harm. Anchor strips, nylon, and high resistance are the main components of these nets. A thin net with great radial resistance can be made using an anchoring system and high-quality materials. Generally, people search for reputed suppliers of children's safety nets.",
                        p2:"Our team can assist you if you are in need of quality children's safety nets. Our team is providing the best range of products. Our popularity increases as a result of offering high quality products. Also, we offer fine quality child safety net for the stairs, which are utilized to protect our kids from several problems. Even children safety nets also utilized to avoid birds and pigeons entry into our premises. Also quality material is used to design the nets that provide better production as well it is absolutely.",
                        p3:"Our lovely children should be safe in every moment of life. We are incomplete without our lovely children's and it's very important to give security to them, older ones, pets and items that may fall from height i.e. galleries, stairs, windows and so forth.",
                        p4:"We fulfill the needs of our clients, and we serve them accordingly. We have great experience in the installation of children's nets, and even our expert completes all jobs perfectly.",
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
                        bheading:'Children Safety Net',
                        p1:"Whether you want to keep your children indoors or outdoors, a safety net will keep them from harm. Anchor strips, nylon, and high resistance are the main components of these nets. A thin net with great radial resistance can be made using an anchoring system and high-quality materials. Generally, people search for reputed suppliers of children's safety nets.",
                        p2:"Our team can assist you if you are in need of quality children's safety nets. Our team is providing the best range of products. Our popularity increases as a result of offering high quality products. Also, we offer fine quality child safety net for the stairs, which are utilized to protect our kids from several problems. Even children safety nets also utilized to avoid birds and pigeons entry into our premises. Also quality material is used to design the nets that provide better production as well it is absolutely.",
                        p3:"Our lovely children should be safe in every moment of life. We are incomplete without our lovely children's and it's very important to give security to them, older ones, pets and items that may fall from height i.e. galleries, stairs, windows and so forth.",
                        p4:"We fulfill the needs of our clients, and we serve them accordingly. We have great experience in the installation of children's nets, and even our expert completes all jobs perfectly.",
                        }}  className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg2,
                        bheading:'Building Safety Nets',
                        p1:"Moreover, we guarantee that these glass safety nets can be customized according to client requirements. The main purpose of installing safety nets in glass buildings is to prevent accidents. It is impossible to overestimate the importance of eyes for human beings. There is a risk of people losing their eyes when cutting glass in the building. This will allow you to get a safety net installed on the glass building for your safety.",
                        p2:"Besides the glass building safety net, our team exports and manufactures a wide range of other safety nets for glass buildings. The base materials used in the manufacture of glass building safety nets are of high quality. Several colours and sizes of highly durable net are available from us.",
                        p3:"Our first priority is safety. It is important to protect everyone's lives! Building nets are high in quality and thereby offer best safety from unaware dangers. It is everyone's task to ensure that we should have safe environment. For any Building we should consider all events of how we can protect your employees in any area. Installing Building Safety Nets protection assures you that nothing injuries can happen to people.",
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
                        bheading:'Building Safety Nets',
                        p1:"Moreover, we guarantee that these glass safety nets can be customized according to client requirements. The main purpose of installing safety nets in glass buildings is to prevent accidents. It is impossible to overestimate the importance of eyes for human beings. There is a risk of people losing their eyes when cutting glass in the building. This will allow you to get a safety net installed on the glass building for your safety.",
                        p2:"Besides the glass building safety net, our team exports and manufactures a wide range of other safety nets for glass buildings. The base materials used in the manufacture of glass building safety nets are of high quality. Several colours and sizes of highly durable net are available from us.",
                        p3:"Our first priority is safety. It is important to protect everyone's lives! Building nets are high in quality and thereby offer best safety from unaware dangers. It is everyone's task to ensure that we should have safe environment. For any Building we should consider all events of how we can protect your employees in any area. Installing Building Safety Nets protection assures you that nothing injuries can happen to people.",
                        }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg4,
                        bheading:'Mosquitoes Mesh',
                        p1:"Many of the living organisms in the human residence are harmful or harmless. The permanent solutions for many of them have been found, but some, such as mosquitoes, insects, etc., are endless.",
                        p2:"Mosquito repellents like coils, creams, liquidators, etc., contain harmful chemicals that can harm our immune systems. The insect screens for windows and doors will keep mosquitoes and insects out of our homes and living spaces. Insects, flies, etc. Eco-friendly and good quality materials. Mosquito nets combine skilled workmanship, expert installation, easy maintenance and professional service to make them perfect for home, hospital use. There are colleges, resorts, factories, and food processing units. offices, etc.call us and book now.",
                        p3:"Children safety nets are helping to save our child from dropping out from terrace, balcony, staircase and window. These children safety nets will not tear continuously. Also sharp edges are not available in that net, so that net will protect our children. It is reliable, safe and well manufactured.",
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
                        bheading:'Mosquitoes Mesh',
                        p1:"Many of the living organisms in the human residence are harmful or harmless. The permanent solutions for many of them have been found, but some, such as mosquitoes, insects, etc., are endless.",
                        p2:"Mosquito repellents like coils, creams, liquidators, etc., contain harmful chemicals that can harm our immune systems. The insect screens for windows and doors will keep mosquitoes and insects out of our homes and living spaces. Insects, flies, etc. Eco-friendly and good quality materials. Mosquito nets combine skilled workmanship, expert installation, easy maintenance and professional service to make them perfect for home, hospital use. There are colleges, resorts, factories, and food processing units. offices, etc.call us and book now.",
                        p3:"Children safety nets are helping to save our child from dropping out from terrace, balcony, staircase and window. These children safety nets will not tear continuously. Also sharp edges are not available in that net, so that net will protect our children. It is reliable, safe and well manufactured.",
                        }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg5,
                        bheading:'Birds Spikes Safety Net',
                        p1:"In our places such as hospitals, factories, apartments, and hotels, we face several problems with birds/pigeons. Experts in our team specialize in manufacturing nets and installing staff. It is mandatory to install bird spikes on balconies since balconies are a popular place for relaxation. Laying eggs on balconies of apartments is how birds start their lives.",
                        p2:"There are birds that release a foul smell on balconies that make living in apartments unpleasant. As a result, humans suffer from lung diseases. In order to protect our homes, our lovely children, pets, as well as articles that may fall from height, overhangs are the best option.",
                        p3:"By installing Bird Spikes into your residence or workplace, Homapp Bird Safety Nets provide bird proofing. This is not harmful to birds at all, and that's the most important part. It is extremely eco-friendly and",
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
                        bheading:'Birds Spikes Safety Net',
                        p1:"In our places such as hospitals, factories, apartments, and hotels, we face several problems with birds/pigeons. Experts in our team specialize in manufacturing nets and installing staff. It is mandatory to install bird spikes on balconies since balconies are a popular place for relaxation. Laying eggs on balconies of apartments is how birds start their lives.",
                        p2:"There are birds that release a foul smell on balconies that make living in apartments unpleasant. As a result, humans suffer from lung diseases. In order to protect our homes, our lovely children, pets, as well as articles that may fall from height, overhangs are the best option.",
                        p3:"By installing Bird Spikes into your residence or workplace, Homapp Bird Safety Nets provide bird proofing. This is not harmful to birds at all, and that's the most important part. It is extremely eco-friendly and",
                        }}  className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg6,
                        bheading:'Construction Nets',
                        p1:"Our construction safety nets team has established underneath a work area to minimize the wounds in the case of someone or something falls.",
                        p2:"Our safety nets are manufactured specially from high standard nets quality because construction sites require loaded weighted nets and fully equipped nets. Our company nets are helpful and durable up to hold 500kg capacity at a time. We are providing construction safety nets with very much reasonable prices so don't miss this availability to get installed.",
                        p3:"Construction Safety nets are a mandatory feature for construction sites. These nets are required for workers to work efficiently at the point of each time. The coconut tree safety nets are used for multipurpose in buildings. These safety nets can avoid debris falling, people falling and precious things damaged.",
                        p4:"The safety of our employees is of the utmost importance to us. It is important to take care of everyone's life! By immersing themselves in quality, construction nets provide maximum protection against unaware dangers. It is the contractor's responsibility to ensure that employees are in a safe working environment. Construction companies should consider how they can protect their employees in all situations. By installing Construction Safety Nets protection, you can ensure that no injuries can be sustained by your employees. It is well known that prevention is better than cure, and that is why safety precautions are carefully implemented.",
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
                        bheading:'Construction Nets',
                        p1:"Our construction safety nets team has established underneath a work area to minimize the wounds in the case of someone or something falls.",
                        p2:"Our safety nets are manufactured specially from high standard nets quality because construction sites require loaded weighted nets and fully equipped nets. Our company nets are helpful and durable up to hold 500kg capacity at a time. We are providing construction safety nets with very much reasonable prices so don't miss this availability to get installed.",
                        p3:"Construction Safety nets are a mandatory feature for construction sites. These nets are required for workers to work efficiently at the point of each time. The coconut tree safety nets are used for multipurpose in buildings. These safety nets can avoid debris falling, people falling and precious things damaged.",
                        p4:"The safety of our employees is of the utmost importance to us. It is important to take care of everyone's life! By immersing themselves in quality, construction nets provide maximum protection against unaware dangers. It is the contractor's responsibility to ensure that employees are in a safe working environment. Construction companies should consider how they can protect their employees in all situations. By installing Construction Safety Nets protection, you can ensure that no injuries can be sustained by your employees. It is well known that prevention is better than cure, and that is why safety precautions are carefully implemented.",
                        }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Our_serviceGrid6sefty