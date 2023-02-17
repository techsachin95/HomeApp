import React from 'react'
import { Link } from 'react-router-dom'
import ReadMore from '../ReadMore/ReadMore'
import './Our_serviceGrid9app.css'
import bimg1 from '../../Assets/Bookimage/air.jpg'
import bimg2 from '../../Assets/Bookimage/lal.jpg'
import bimg3 from '../../Assets/Bookimage/topi.jpg'
import bimg4 from '../../Assets/Bookimage/purifire.jpg'
import bimg5 from '../../Assets/Bookimage/man.jpg'
import bimg6 from '../../Assets/Bookimage/kit.jpg'
import bimg7 from '../../Assets/Bookimage/tv.jpg'
import bimg8 from '../../Assets/Bookimage/wire.jpg'
import bimg9 from '../../Assets/Bookimage/micro.jpg'

const Our_serviceGrid9app = (props) => {
  return (
        <div className="servicediv1">
            <div className="heading">
                <h1>OUR SERVICES</h1>
            </div> 
            <div className="servicegrid">
                <Link to={'/book'} state={{
                bimg1:bimg1,
                bheading:"Ac Repair and Services",
                p1:"Homapp Offers AC Repair services in Hyderabad provides AC routine, repair, and maintenance services for all PIN codes. With Homapp, you're connected to experienced technicians who provide reliable AC service in Hyderabad. Fill out the above form with some basic details if you need experts to repair your air conditioner. Trusted service providers from your area will get in touch with you with a quote. If you want your AC repaired by a professional, you should be able to shortlist the providers based on their rating, their services, and their charges",
                p2:"In case you have AC troubleshooting problems, a blown circuit breaker or a lack of power can lead to this. When this happens, the circuit breaker must be reset or the blown fuse must be replaced. Possibly, the problem could be caused by a thermostat issue, a loose wire, or even a broken thermostat.",
                p3:"Homapp offers a comprehensive range of Ac services near me, including air conditioner repair, air conditioner installation/uninstallation, air conditioner servicing, air conditioner gas filling charges, leakage repair, advanced piping, and more at affordable and transparent rates.",
                p4:"There are times when you have to deal with water spillage when owning an air conditioner. The indoor AC unit needs to be quickly fixed if water spills from it. The indoor evaporator curls and the suction line sweats, so it is always enclosed in dark protection. Damaged protection layers can cause trickling and are difficult to fix. In addition, the evaporator may remove a lot of stickiness from the air and deliver a lot of water, which runs outside into a dish with a channel. Drains or the ground may be the destination of the channel.",
                p5:"Furthermore, we offer AC services that you can book from the comfort of your own home. Simply give us a call or send us an email to book our AC repair services near me in Hyderabad within minutes.",
                p6:"Whether the issue is big or small, our professionals will provide doorstep repair services on time. Our 30 day service warranty further assures you that you’ll get the best value for your money."
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img1} alt="img1" />
                    </div>
                    <h1>{props.heading1}</h1>
                    <p>{props.p1}</p>
                    <div className="servicelinks">
                        <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg1,
                bheading:"Ac Repair and Services",
                p1:"Homapp Offers AC Repair services in Hyderabad provides AC routine, repair, and maintenance services for all PIN codes. With Homapp, you're connected to experienced technicians who provide reliable AC service in Hyderabad. Fill out the above form with some basic details if you need experts to repair your air conditioner. Trusted service providers from your area will get in touch with you with a quote. If you want your AC repaired by a professional, you should be able to shortlist the providers based on their rating, their services, and their charges",
                p2:"In case you have AC troubleshooting problems, a blown circuit breaker or a lack of power can lead to this. When this happens, the circuit breaker must be reset or the blown fuse must be replaced. Possibly, the problem could be caused by a thermostat issue, a loose wire, or even a broken thermostat.",
                p3:"Homapp offers a comprehensive range of Ac services near me, including air conditioner repair, air conditioner installation/uninstallation, air conditioner servicing, air conditioner gas filling charges, leakage repair, advanced piping, and more at affordable and transparent rates.",
                p4:"There are times when you have to deal with water spillage when owning an air conditioner. The indoor AC unit needs to be quickly fixed if water spills from it. The indoor evaporator curls and the suction line sweats, so it is always enclosed in dark protection. Damaged protection layers can cause trickling and are difficult to fix. In addition, the evaporator may remove a lot of stickiness from the air and deliver a lot of water, which runs outside into a dish with a channel. Drains or the ground may be the destination of the channel.",
                p5:"Furthermore, we offer AC services that you can book from the comfort of your own home. Simply give us a call or send us an email to book our AC repair services near me in Hyderabad within minutes.",
                p6:"Whether the issue is big or small, our professionals will provide doorstep repair services on time. Our 30 day service warranty further assures you that you’ll get the best value for your money."
                }} className='book'>Book Now</Link>
                    </div>
                </div>
                </Link>
                <Link to={'/book'} state={{
                bimg1:bimg2,
                bheading:"Washing Machine Repair Service",
                p1:"Are you looking for washing machine service in Hyderabad if your washing machine isn't working at home or at work? You're in the right place, just fill out the form or call us. We'll do the rest for you. In comparison to other washing machine service providers in Hyderabad, our inspection charges are very low. As a washing machine service provider, we are committed to making you feel comfortable and reliable.",
                p2:"Our lives have been made easier by the invention of washing machines. Initially, people had semi-automatic washing machines. Today, however, fully automatic washing machines have completely changed the game.",
                p3:"If you're looking for a washing machine repair service near me in Hyderabad or washing machine services in Hyderabad, Homapp provides the best washing machine repair services in Hyderabad.",
                p4:"In Hyderabad, we offer the best washing machine service for all areas, and we respond to calls within two hours. Upon placing a service request, you will receive a notification via SMS with details of the order along with a technician's mobile number.",
                p5:"We have a very secure and convenient service request system for washing machines. We will guarantee that our customer service will continue to provide you with the best support in future follow-ups so that we can truly care for your washing machine units.",
                p6:"We only use genuine and trusted washing machine spare parts. The technicians at our company provide 100% customer satisfaction. Customer-friendly professionals are well-trained and qualified. All types and brands of washing machines are covered by our services. We are a one-stop-shop for all problems related to washing machines.",
                p7:"We only use genuine and trusted washing machine spare parts. The technicians at our company provide 100% customer satisfaction. Customer-friendly professionals are well-trained and qualified. All types and brands of washing machines are covered by our services. We are a one-stop-shop for all problems related to washing machines.",
                p8:"The best course of action in Homapp is to select professional services due to:",
                p9:"Experts with years of experience providing all types of washing machine repair services. A focused and unique service delivered by professionals. The service providers provide enticing packages, additional bonuses, and massive seasonal specials.",
                p10:"Homapp enables you to save time without exerting much effort by connecting users with the appropriate washing machine repair specialists. Home equipment like washing machines has developed into a necessary component of people's ever-evolving daily lives. Expert service providers in Hyderabad with Homapp have experience with all types of washing machine repair services.",
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img2} alt="img2" />
                    </div>
                    <h1>{props.heading2}</h1>
                    <p>{props.p2}</p>
                    <div className="servicelinks">
                    <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg2,
                bheading:"Washing Machine Repair Service",
                p1:"Are you looking for washing machine service in Hyderabad if your washing machine isn't working at home or at work? You're in the right place, just fill out the form or call us. We'll do the rest for you. In comparison to other washing machine service providers in Hyderabad, our inspection charges are very low. As a washing machine service provider, we are committed to making you feel comfortable and reliable.",
                p2:"Our lives have been made easier by the invention of washing machines. Initially, people had semi-automatic washing machines. Today, however, fully automatic washing machines have completely changed the game.",
                p3:"If you're looking for a washing machine repair service near me in Hyderabad or washing machine services in Hyderabad, Homapp provides the best washing machine repair services in Hyderabad.",
                p4:"In Hyderabad, we offer the best washing machine service for all areas, and we respond to calls within two hours. Upon placing a service request, you will receive a notification via SMS with details of the order along with a technician's mobile number.",
                p5:"We have a very secure and convenient service request system for washing machines. We will guarantee that our customer service will continue to provide you with the best support in future follow-ups so that we can truly care for your washing machine units.",
                p6:"We only use genuine and trusted washing machine spare parts. The technicians at our company provide 100% customer satisfaction. Customer-friendly professionals are well-trained and qualified. All types and brands of washing machines are covered by our services. We are a one-stop-shop for all problems related to washing machines.",
                p7:"We only use genuine and trusted washing machine spare parts. The technicians at our company provide 100% customer satisfaction. Customer-friendly professionals are well-trained and qualified. All types and brands of washing machines are covered by our services. We are a one-stop-shop for all problems related to washing machines.",
                p8:"The best course of action in Homapp is to select professional services due to:",
                p9:"Experts with years of experience providing all types of washing machine repair services. A focused and unique service delivered by professionals. The service providers provide enticing packages, additional bonuses, and massive seasonal specials.",
                p10:"Homapp enables you to save time without exerting much effort by connecting users with the appropriate washing machine repair specialists. Home equipment like washing machines has developed into a necessary component of people's ever-evolving daily lives. Expert service providers in Hyderabad with Homapp have experience with all types of washing machine repair services.",
                }} className='book'>Book Now</Link>
                    </div>
                </div>
                </Link>
                <Link to={'/book'} state={{
                bimg1:bimg3,
                bheading:"Gas Geyser Repair and Installation Service",
                p1:"All types of water heaters are repaired and maintained at these water heater service centers in Hyderabad. Make sure your appliance is secure by using the latest technology and modern tools. Professionals with extensive experience are available to help you according to your needs at a reasonable rate. We guarantee 100% customer satisfaction. You can find a list of geyser service providers in Hyderabad here.",
                p2:"Homapp offers quality and high-level geyser services in Hyderabad. Our professionals quickly diagnose problems and provide the best geyser services in Hyderabad. However, geysers must be operated with the greatest care and safety. It could have been fatal to handle them without adequate care and safety. We provide superior and affordable geyser services at Homapp.",
                p3:"Geyser Service Center in Hyderabad- Hot water is essential, especially during the winter season, to avoid diseases. Drink more hot water, wash your clothes with hot water, and take a hot bath. Homapp is ready to assist and support you the same day",
                p4:"In cold weather, viruses may spread faster. Be careful from June to February, use hot water, stay warm yourself. For Geyser Repair Service Hyderabad, Homapp provides services for Electric Water Geyser/Instant Geyser, No Hot Water, Not Getting On, Tripping, Not Working, and Fitting/Installation/Refitting at your doorstep.",
                p5:"We have a large base of satisfied customers because we believe in delivering timely, reliable, affordable, and doorstep services.",
                p6:"We can simply install, repair, and provide maintenance for geysers of variousmakes, models, and capacities. Your geyser may have a variety of issues,including little or no hot water, a broken thermostat or an electric leather element, a leak in the water tank, or a short circuit in the socket. Geyser services can solve any issues you may have with a malfunctioning geyser. You may count on us if you're seeking the best geyser or water heater repair services in any area because we aim for 100% customer satisfaction. We are skilled in fixing every form of water heater, whether it is an electric water heater, gas geyser, solar water heater, or any other sort."
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img3} alt="img3" />
                    </div>
                    <h1>{props.heading3}</h1>
                    <p>{props.p3}</p>
                    <div className="servicelinks">
                    <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg3,
                bheading:"Gas Geyser Repair and Installation Service",
                p1:"All types of water heaters are repaired and maintained at these water heater service centers in Hyderabad. Make sure your appliance is secure by using the latest technology and modern tools. Professionals with extensive experience are available to help you according to your needs at a reasonable rate. We guarantee 100% customer satisfaction. You can find a list of geyser service providers in Hyderabad here.",
                p2:"Homapp offers quality and high-level geyser services in Hyderabad. Our professionals quickly diagnose problems and provide the best geyser services in Hyderabad. However, geysers must be operated with the greatest care and safety. It could have been fatal to handle them without adequate care and safety. We provide superior and affordable geyser services at Homapp.",
                p3:"Geyser Service Center in Hyderabad- Hot water is essential, especially during the winter season, to avoid diseases. Drink more hot water, wash your clothes with hot water, and take a hot bath. Homapp is ready to assist and support you the same day",
                p4:"In cold weather, viruses may spread faster. Be careful from June to February, use hot water, stay warm yourself. For Geyser Repair Service Hyderabad, Homapp provides services for Electric Water Geyser/Instant Geyser, No Hot Water, Not Getting On, Tripping, Not Working, and Fitting/Installation/Refitting at your doorstep.",
                p5:"We have a large base of satisfied customers because we believe in delivering timely, reliable, affordable, and doorstep services.",
                p6:"We can simply install, repair, and provide maintenance for geysers of variousmakes, models, and capacities. Your geyser may have a variety of issues,including little or no hot water, a broken thermostat or an electric leather element, a leak in the water tank, or a short circuit in the socket. Geyser services can solve any issues you may have with a malfunctioning geyser. You may count on us if you're seeking the best geyser or water heater repair services in any area because we aim for 100% customer satisfaction. We are skilled in fixing every form of water heater, whether it is an electric water heater, gas geyser, solar water heater, or any other sort."
                }} className='book'>Book Now</Link>
                    </div>
                </div>
                </Link>
                <Link to={'/book'} state={{
                bimg1:bimg4,
                bheading:"R.O Water Purifier Service",
                p1:"In today's world, water bodies are subjected to various pollutants, one of the most basic necessities for life. There is a high threat of disease, so water purifiers are vitally important. A water purifier purifies contaminated water and removes harmful contaminants. Most water purifiers that use RO and UV technology are usually serviced every three months by most service providers.",
                p2:"RO water purifier services are the most popular kitchen appliances in most households, particularly for those who care about the quality of their water. Diverse kinds of filters are used in water purifiers to remove contaminants. Purifiers remove suspended impurities from water, such as sediment and chemicals, in order to improve its taste and make it odorless.",
                p3:"Save time and effort by connecting with the right water purifier technician through Homapp. We will assist you with the services you require based on your requirements. We can better understand your needs if you fill out a simple form with your basic information. The water purifier service providers will be shortlisted based on your needs, and they will contact you to discuss price quotes and offers. Choosing the best experts for your needs is as simple as comparing, evaluating, and booking them.",
                p4:"Many people have argued that RO water purifiers lose minerals, but these arguments do not stand up to the fact that drinking water is not considered a source of daily minerals or supplements Water purifiers with RO repair technology provide purified, healthy, and clean water that far outweighs any criticism they may receive.",
                p5:"Through Homapp, you can connect with reputed water purifier services in Hyderabad. In Hyderabad, we provide users with a wide network of skilled and trained water purifier experts. Find out how to solve your water purifier issues and drink better quality water. There is a vast network of certified and qualified water filtration specialists in Hyderabad."
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img4} alt="img4" />
                    </div>
                    <h1>{props.heading4}</h1>
                    <p>{props.p4}</p>
                    <div className="servicelinks">
                    <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg4,
                bheading:"R.O Water Purifier Service",
                p1:"In today's world, water bodies are subjected to various pollutants, one of the most basic necessities for life. There is a high threat of disease, so water purifiers are vitally important. A water purifier purifies contaminated water and removes harmful contaminants. Most water purifiers that use RO and UV technology are usually serviced every three months by most service providers.",
                p2:"RO water purifier services are the most popular kitchen appliances in most households, particularly for those who care about the quality of their water. Diverse kinds of filters are used in water purifiers to remove contaminants. Purifiers remove suspended impurities from water, such as sediment and chemicals, in order to improve its taste and make it odorless.",
                p3:"Save time and effort by connecting with the right water purifier technician through Homapp. We will assist you with the services you require based on your requirements. We can better understand your needs if you fill out a simple form with your basic information. The water purifier service providers will be shortlisted based on your needs, and they will contact you to discuss price quotes and offers. Choosing the best experts for your needs is as simple as comparing, evaluating, and booking them.",
                p4:"Many people have argued that RO water purifiers lose minerals, but these arguments do not stand up to the fact that drinking water is not considered a source of daily minerals or supplements Water purifiers with RO repair technology provide purified, healthy, and clean water that far outweighs any criticism they may receive.",
                p5:"Through Homapp, you can connect with reputed water purifier services in Hyderabad. In Hyderabad, we provide users with a wide network of skilled and trained water purifier experts. Find out how to solve your water purifier issues and drink better quality water. There is a vast network of certified and qualified water filtration specialists in Hyderabad."
                }} className='book'>Book Now</Link>
                    </div>
                </div>
                </Link>
                <Link to={'/book'} state={{
                bimg1:bimg5,
                bheading:"Refrigerator Repair Service",
                p1:"In today's world, refrigerators are an inevitable part of the kitchen. A refrigerator is a necessity in every home. It is common for fridge repair because they are constantly cooling your stuff and they might be experiencing power fluctuations. At Homapp in Hyderabad, we can repair any refrigerator, whether it be a single door, double door, side by side, direct cool, or commercial refrigerators of any size. In the event that your refrigerator requires extensive maintenance, we will take it to our workshop for further repair. You can book refrigerator repair in Hyderabad at Homapp, as our service partners can handle all brands. Our doorstep refrigerator repair service in Hyderabad is more convenient, easy to book, and affordable.",
                p2:"As a leading refrigerator repair service company in Hyderabad, we offer reasonable rates for the service. You can book any brand's refrigerator repair service at a scheduled time on our website.",
                p3:"Homapp offers the best refrigerator repair service in Hyderabad for issues such as leaking from the freezer, leaking on the floor, and the consequences of food particles or other debris. So just visit the Homapp website and get a quick response to solve the issues and problems of your refrigerator. Homapp offers you a list of qualified and experienced refrigerator repair technicians at an affordable price. Homapp lets you book an engineer to repair your refrigerator.",
                p4:"Homapp employs Best Fridge Repair Near Me in Hyderabad and ensures that your refrigerator problems are resolved by highly skilled technicians. There are a large number of verified and skilled refrigerator repair service providers, affordable refrigerator repair service quotes, and attractive offers by reputed refrigerator repair professionals.",
                p5:"Using Homapp, you can find trained and verified refrigerator repair experts in your area. All you need to do is share your requirements and contact information.",
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img5} alt="img5" />
                    </div>
                    <h1>{props.heading5}</h1>
                    <p>{props.p5}</p>
                    <div className="servicelinks">
                    <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg5,
                bheading:"Refrigerator Repair Service",
                p1:"In today's world, refrigerators are an inevitable part of the kitchen. A refrigerator is a necessity in every home. It is common for fridge repair because they are constantly cooling your stuff and they might be experiencing power fluctuations. At Homapp in Hyderabad, we can repair any refrigerator, whether it be a single door, double door, side by side, direct cool, or commercial refrigerators of any size. In the event that your refrigerator requires extensive maintenance, we will take it to our workshop for further repair. You can book refrigerator repair in Hyderabad at Homapp, as our service partners can handle all brands. Our doorstep refrigerator repair service in Hyderabad is more convenient, easy to book, and affordable.",
                p2:"As a leading refrigerator repair service company in Hyderabad, we offer reasonable rates for the service. You can book any brand's refrigerator repair service at a scheduled time on our website.",
                p3:"Homapp offers the best refrigerator repair service in Hyderabad for issues such as leaking from the freezer, leaking on the floor, and the consequences of food particles or other debris. So just visit the Homapp website and get a quick response to solve the issues and problems of your refrigerator. Homapp offers you a list of qualified and experienced refrigerator repair technicians at an affordable price. Homapp lets you book an engineer to repair your refrigerator.",
                p4:"Homapp employs Best Fridge Repair Near Me in Hyderabad and ensures that your refrigerator problems are resolved by highly skilled technicians. There are a large number of verified and skilled refrigerator repair service providers, affordable refrigerator repair service quotes, and attractive offers by reputed refrigerator repair professionals.",
                p5:"Using Homapp, you can find trained and verified refrigerator repair experts in your area. All you need to do is share your requirements and contact information.",
                }} className='book'>Book Now</Link>
                    </div>
                </div>
                </Link>
                <Link to={'/book'} state={{
                bimg1:bimg6,
                bheading:"Kitchen Chimney Repair Service",
                p1:"Modern kitchens are incomplete without chimneys, and any household is likely to have one. If your chimney is broken, your cooking environment can be in a terrible state for the rest of the day. Fixing your kitchen chimney with Homapp is fast, simple, and hassle-free.",
                p2:"The purpose of chimney services is to safely remove combustion products from a fireplace or appliance to the outside of a building without harming the occupants. Because hot air rises and moves from high to low pressure, the chimney works. Running the appliance at a very slow rate or letting cold air into the flue will cool the gasses and affect the chimney's performance.",
                p3:"Chimney services are used to safely remove combustion products from fireplaces and appliances and to the outside of the building without harming the occupants. Chimneys work because hot air rises and moves from high to low pressure.",
                p4:"With Homapp, you can find a wide range of verified and experienced kitchen chimney service providers in Hyderabad. Take advantage of attractive offers and benefits when you hire Homapp experts. A kitchen chimney protects you from dust, smoke, oil residue, and heat, all of which contribute to a comfortable cooking experience. Additionally, it keeps your kitchen clean and presentable at all times. A chimney is an essential appliance in modern kitchens, and chimney technicians are everywhere, but not all chimney experts can fix all types, brands, and models",
                p5:"Homapp provides highly recommended and secured quality chimney repair and cleaning services with advanced and intuitive technology to give our customers better results every time. We provide different services such as: chimney installation, chimney repair, chimney sealing, chimney repair and rebuilding, chimney liner repair, chimney waterproofing, modular chimney repair, and more.",
                p6:"Homapp provides experienced and verified chimney repair professionals who will repair your chimney in minutes. Please fill out the following form to let us know what you think about the kitchen chimney. Based on your requirements and basic details, we will shortlist kitchen chimney repair experts who will contact you via telephone and SMS"
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img6} alt="img6" />
                    </div>
                    <h1>{props.heading6}</h1>
                    <p>{props.p6}</p>
                    <div className="servicelinks">
                    <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg6,
                bheading:"Kitchen Chimney Repair Service",
                p1:"Modern kitchens are incomplete without chimneys, and any household is likely to have one. If your chimney is broken, your cooking environment can be in a terrible state for the rest of the day. Fixing your kitchen chimney with Homapp is fast, simple, and hassle-free.",
                p2:"The purpose of chimney services is to safely remove combustion products from a fireplace or appliance to the outside of a building without harming the occupants. Because hot air rises and moves from high to low pressure, the chimney works. Running the appliance at a very slow rate or letting cold air into the flue will cool the gasses and affect the chimney's performance.",
                p3:"Chimney services are used to safely remove combustion products from fireplaces and appliances and to the outside of the building without harming the occupants. Chimneys work because hot air rises and moves from high to low pressure.",
                p4:"With Homapp, you can find a wide range of verified and experienced kitchen chimney service providers in Hyderabad. Take advantage of attractive offers and benefits when you hire Homapp experts. A kitchen chimney protects you from dust, smoke, oil residue, and heat, all of which contribute to a comfortable cooking experience. Additionally, it keeps your kitchen clean and presentable at all times. A chimney is an essential appliance in modern kitchens, and chimney technicians are everywhere, but not all chimney experts can fix all types, brands, and models",
                p5:"Homapp provides highly recommended and secured quality chimney repair and cleaning services with advanced and intuitive technology to give our customers better results every time. We provide different services such as: chimney installation, chimney repair, chimney sealing, chimney repair and rebuilding, chimney liner repair, chimney waterproofing, modular chimney repair, and more.",
                p6:"Homapp provides experienced and verified chimney repair professionals who will repair your chimney in minutes. Please fill out the following form to let us know what you think about the kitchen chimney. Based on your requirements and basic details, we will shortlist kitchen chimney repair experts who will contact you via telephone and SMS"
                }} className='book'>Book Now</Link>
                    </div>
                </div>
                </Link>
                <Link to={'/book'} state={{
                bimg1:bimg7,
                bheading:"Tv Repair Service",
                p1:"With Homapp, you can connect with verified technicians who offer professional TV repair services. Experienced engineers can fix your TV and let you watch your favorite shows again. Since we offer a variety of TV repair services, Homapp has become the preferred choice of users who are looking for experts.",
                p2:"In our lives, TV plays a very important role, whether it is for entertainment, education, current affairs, or many other things. If the TV was in need of repair, we would all be worried, but not anymore! You can count on AtoZ service to solve your TV problem as soon as possible at your home in Hyderabad. You can get the best service from AtoZ Service in Hyderabad.",
                p3:"Homapp provides users with a list of TV repair service experts that offer professional services. To use the service, users must fill out a simple form with their basic information and requirements. You will be contacted by TV repair professionals via SMS and phone calls based on your requirements. They can discuss the required services, get a price quote, and schedule an expert for the appointment.",
                p4:"Are you looking for a high-quality and affordable TV repair service, home theater, or inverter service? The Homapp 24/7 TV service is your answer. Home theatre systems and televisions are among the most important items in modern life.",
                p5:"We provide service for a variety of brands. In addition, Homapp provides TV repair services at home, including LG LED TV Repair Near Me in Hyderabad; TV Repair Near Me in Hyderabad; TV Repair Service Near Me in Hyderabad; Repair Service Near Me in Hyderabad, and TV Technicians Near Me in Hyderabad. A Homapp specialist will come to your house at the time of your choosing to assess the inverter issue. We will provide you with a quote for the repair and start the work after receiving your approval.",
                p6:"If the problem is small, the inverter will be fixed right there on your property. To check the warranty, you must provide the Homapp technician access to the inverter's manual, such as the manual for the ceiling inverter. If not, it will be taken to the Homapp service facility for repair. All components will be 100% original. Your inverter will be delivered based on the nature of the issue and the accessibility of replacement components."
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img7} alt="img7" />
                    </div>
                    <h1>{props.heading7}</h1>
                    <p>{props.p7}</p>
                    <div className="servicelinks">
                    <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg7,
                bheading:"Tv Repair Service",
                p1:"With Homapp, you can connect with verified technicians who offer professional TV repair services. Experienced engineers can fix your TV and let you watch your favorite shows again. Since we offer a variety of TV repair services, Homapp has become the preferred choice of users who are looking for experts.",
                p2:"In our lives, TV plays a very important role, whether it is for entertainment, education, current affairs, or many other things. If the TV was in need of repair, we would all be worried, but not anymore! You can count on AtoZ service to solve your TV problem as soon as possible at your home in Hyderabad. You can get the best service from AtoZ Service in Hyderabad.",
                p3:"Homapp provides users with a list of TV repair service experts that offer professional services. To use the service, users must fill out a simple form with their basic information and requirements. You will be contacted by TV repair professionals via SMS and phone calls based on your requirements. They can discuss the required services, get a price quote, and schedule an expert for the appointment.",
                p4:"Are you looking for a high-quality and affordable TV repair service, home theater, or inverter service? The Homapp 24/7 TV service is your answer. Home theatre systems and televisions are among the most important items in modern life.",
                p5:"We provide service for a variety of brands. In addition, Homapp provides TV repair services at home, including LG LED TV Repair Near Me in Hyderabad; TV Repair Near Me in Hyderabad; TV Repair Service Near Me in Hyderabad; Repair Service Near Me in Hyderabad, and TV Technicians Near Me in Hyderabad. A Homapp specialist will come to your house at the time of your choosing to assess the inverter issue. We will provide you with a quote for the repair and start the work after receiving your approval.",
                p6:"If the problem is small, the inverter will be fixed right there on your property. To check the warranty, you must provide the Homapp technician access to the inverter's manual, such as the manual for the ceiling inverter. If not, it will be taken to the Homapp service facility for repair. All components will be 100% original. Your inverter will be delivered based on the nature of the issue and the accessibility of replacement components."
                }} className='book'>Book Now</Link>
                    </div>
                </div>
                </Link>
                <Link to={'/book'} state={{
                bimg1:bimg8,
                bheading:"Inverter Repair and Installation Service",
                p1:"Inverter installation and repair services are important for anyone who owns or uses a power inverter. A power inverter is a device that converts DC power into AC power, typically used to run electrical appliances and devices when there is no AC power available. While most inverters are relatively easy to install and use, there are some that require professional installation and repair services. These services can be found through companies that specialize in electrical repairs.",
                p2:"If you notice that your electrical system is not functioning properly, it is important to contact a professional inverter installer or repair service to get it back up and running again.",
                p3:"Looking for inverter repair in Hyderabad? Homapp can help you get your inverter repaired quickly and efficiently. Our team of experienced technicians are familiar with all makes and models of inverters, and can troubleshoot any issue you may be having. We understand the importance of having a working inverter, so we'll do our best to get it fixed as soon as possible. Contact us today to schedule a repair appointment.",
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img8} alt="img8" />
                    </div>
                    <h1>{props.heading8}</h1>
                    <p>{props.p8}</p>
                    <div className="servicelinks">
                    <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg8,
                bheading:"Inverter Repair and Installation Service",
                p1:"Inverter installation and repair services are important for anyone who owns or uses a power inverter. A power inverter is a device that converts DC power into AC power, typically used to run electrical appliances and devices when there is no AC power available. While most inverters are relatively easy to install and use, there are some that require professional installation and repair services. These services can be found through companies that specialize in electrical repairs.",
                p2:"If you notice that your electrical system is not functioning properly, it is important to contact a professional inverter installer or repair service to get it back up and running again.",
                p3:"Looking for inverter repair in Hyderabad? Homapp can help you get your inverter repaired quickly and efficiently. Our team of experienced technicians are familiar with all makes and models of inverters, and can troubleshoot any issue you may be having. We understand the importance of having a working inverter, so we'll do our best to get it fixed as soon as possible. Contact us today to schedule a repair appointment.",
                }} className='book'>Book Now</Link>
                    </div>
                </div>
                </Link>
                <Link to={'/book'} state={{
                bimg1:bimg9,
                bheading:"Microwave Repair Services",
                p1:"We will have someone in our home who either enjoys eating food or cooking food, so a microwave repair oven would be a useful appliance. Besides boiling milk, making chips, steaming vegetables, caramelizing, cooking, making cookies, and making our favorite junk foods like pizza, hamburgers, and sandwiches, we use it to make our favorite junk foods as well.",
                p2:"It is inevitable that there will be a problem with the oven on bad days. After thinking about which would be the best oven repair service center in our area, we went to the local service center with the heavy oven, and he was able to repair it within a few days thanks to the spare part he used in the damaged area.",
                p3:"Homapp takes care of your microwave oven's repair, so you never have to worry about it breaking down. We will be able to help you with the installation, repairs, preventive maintenance, and defence of your property's electronic equipment",
                p4:"Having a unique customer service support staff who understand devices and provide quick and immediate solutions is what you can expect around Hyderabad. The best option would be to call Homapp, the company that provides doorstep repair service. We will send one of our technicians to your home at your scheduled time to repair your appliance without you having to carry it to any repair shop.",
                p5:"Our wide range of specialists will assist you with all of your electrical expert requirements, from a shining switch to a wiring wire at the best market price.",
                p6:"Finding the right expert for your home machine can consume a tonne of your valuable time and exertion. Homapp assists you with tracking down certified microwave repair specialists close to you. Search through a huge number of checked specialists recorded with us and get numerous proposals in no time. We will waitlist the right specialists by breaking down your given prerequisites, and you can book the help by choosing your preferred general setting."
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img9} alt="img9" />
                    </div>
                    <h1>{props.heading9}</h1>
                    <p>{props.p9}</p>
                    <div className="servicelinks">
                    <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg9,
                bheading:"Microwave Repair Services",
                p1:"We will have someone in our home who either enjoys eating food or cooking food, so a microwave repair oven would be a useful appliance. Besides boiling milk, making chips, steaming vegetables, caramelizing, cooking, making cookies, and making our favorite junk foods like pizza, hamburgers, and sandwiches, we use it to make our favorite junk foods as well.",
                p2:"It is inevitable that there will be a problem with the oven on bad days. After thinking about which would be the best oven repair service center in our area, we went to the local service center with the heavy oven, and he was able to repair it within a few days thanks to the spare part he used in the damaged area.",
                p3:"Homapp takes care of your microwave oven's repair, so you never have to worry about it breaking down. We will be able to help you with the installation, repairs, preventive maintenance, and defence of your property's electronic equipment",
                p4:"Having a unique customer service support staff who understand devices and provide quick and immediate solutions is what you can expect around Hyderabad. The best option would be to call Homapp, the company that provides doorstep repair service. We will send one of our technicians to your home at your scheduled time to repair your appliance without you having to carry it to any repair shop.",
                p5:"Our wide range of specialists will assist you with all of your electrical expert requirements, from a shining switch to a wiring wire at the best market price.",
                p6:"Finding the right expert for your home machine can consume a tonne of your valuable time and exertion. Homapp assists you with tracking down certified microwave repair specialists close to you. Search through a huge number of checked specialists recorded with us and get numerous proposals in no time. We will waitlist the right specialists by breaking down your given prerequisites, and you can book the help by choosing your preferred general setting."
                }} className='book'>Book Now</Link>                        
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Our_serviceGrid9app