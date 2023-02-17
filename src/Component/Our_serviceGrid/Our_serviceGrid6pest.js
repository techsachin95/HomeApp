import React from 'react'
import { Link } from 'react-router-dom'
import Book from '../Book/Book'
import ReadMore from '../ReadMore/ReadMore'
import bimg1 from '../../Assets/Bookimage/cockroch.jpg'
import bimg2 from '../../Assets/Bookimage/mos.jpg'
import bimg3 from '../../Assets/Bookimage/termite.jpg'
import bimg4 from '../../Assets/Bookimage/bedpugs.jpg'
import bimg5 from '../../Assets/Bookimage/virus.jpg'
import bimg6 from '../../Assets/Bookimage/commercialcleaning.jpg'

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
                        bheading:'Cockroach Pest Control Services',
                        p1:"There are cockroaches everywhere, and it's a common problem most domestic households face today. You may not be harmed by cockroaches, but you will face more nuisances as a result of their presence. There are always cockroaches in your house looking for shelter, food, and water. By spreading bacteria, they cause social embarrassment, affect personal comfort and cause disease.",
                        p2:'Infections can spread quickly, even before you realise your home is infested with cockroaches, since they are nocturnal creatures adept at hiding. The only solution to rid your home of unwanted and menacing cockroaches is a cockroaches control service',
                        p3:"Cockroach pest control services are crucial as they carry a variety of serious diseases. As they are in search of food, cockroaches are probably one of the worst household pests to deal with since they hide themselves well enough to not be seen until a good number of them are present. Additionally,cockroaches are a major source of powerful allergens, causing asthma, allergies, and eczema, especially in urban areas. Health risks are particularly high in homes with children, the elderly, or sick people.",
                        p4:'Our cockroach pest control services include a pest management service, kitchen drain cleaning, and 100% biodegradable bags with a mint fragrance that are fool-proof against cockroaches. Inspection, cockroach killers, application, monitoring, and recommendations on sanitation and proofing are all part of our service. Whether you have a few or a whole family of roaches invading your home, the roach experts will develop a plan that eliminates the cockroaches and prevents them from reestablishing themselves. Find the top-rated cockroach control services at your desired price with Homapp!',
                        p5:'Homapp is a completely fool-proof cockroach pest control service, and we hire cockroach exterminators who are needed to keep our homes clean and control health risks and high-risk pests. Our trained professionals perform pest control services following all safety measures and standards.'
                        }} >
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img1} alt="img1" />
                        </div>
                        <h1>{props.heading1}</h1>
                        <p>{props.p1}</p>
                        <div className="servicelinks">
                        <Link><ReadMore /></Link><Link to={'/book'}  state={{
                        bimg1:bimg1,
                        bheading:'Cockroach Pest Control Services',
                        p1:"There are cockroaches everywhere, and it's a common problem most domestic households face today. You may not be harmed by cockroaches, but you will face more nuisances as a result of their presence. There are always cockroaches in your house looking for shelter, food, and water. By spreading bacteria, they cause social embarrassment, affect personal comfort and cause disease.",
                        p2:'Infections can spread quickly, even before you realise your home is infested with cockroaches, since they are nocturnal creatures adept at hiding. The only solution to rid your home of unwanted and menacing cockroaches is a cockroaches control service',
                        p3:"Cockroach pest control services are crucial as they carry a variety of serious diseases. As they are in search of food, cockroaches are probably one of the worst household pests to deal with since they hide themselves well enough to not be seen until a good number of them are present. Additionally,cockroaches are a major source of powerful allergens, causing asthma, allergies, and eczema, especially in urban areas. Health risks are particularly high in homes with children, the elderly, or sick people.",
                        p4:'Our cockroach pest control services include a pest management service, kitchen drain cleaning, and 100% biodegradable bags with a mint fragrance that are fool-proof against cockroaches. Inspection, cockroach killers, application, monitoring, and recommendations on sanitation and proofing are all part of our service. Whether you have a few or a whole family of roaches invading your home, the roach experts will develop a plan that eliminates the cockroaches and prevents them from reestablishing themselves. Find the top-rated cockroach control services at your desired price with Homapp!',
                        p5:'Homapp is a completely fool-proof cockroach pest control service, and we hire cockroach exterminators who are needed to keep our homes clean and control health risks and high-risk pests. Our trained professionals perform pest control services following all safety measures and standards.'
                        }} 
                        className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg3,
                        bheading:'Termites Control Services',
                        p1:'Termites eat wood surfaces or wooden structures or cellulose-laden substances and ruin so many household or office items. Although termites are small in size, they can cause significant damage to structures and furniture, especially wood.',
                        p2:'Termites cause terrible damage to our homes, resulting in frustrating and expensive repairs. Anything made from cellulose, such as wood, can be eaten by them. Woodworms tunnel through the bottom, then work their way up to make a shelter from it. The human race is highly proficient in terms of survival skills and highly adaptable in the most challenging situations. Infestations of termites might already be too late by the time you discover them since they reproduce rapidly. As a result, you should hire a professional pest control company to perform your termite treatment.',
                        p3:"Homapp's termite treatment services are among the best in the termite control industry, so it's a bestseller in Indian markets. The Drill-Fill-Seal termite control technique has proven fool-proof so far in eradicating termite colonies. The damage caused by these insects is very expensive to repair, so don't wait too long before you call for termite control if you have a termite infestation at home. Rather than letting white ants and termites ruin your home, contact Homapp and we'll inspect it for you.",
                        p4:'Any type of infestation can be solved by professional termite pest control services in Hyderabad, including mosquitoes, bed bugs, termites, cockroaches, spiders, rodents, house flies, rats, ants, lizards, wood borers, and other creepy crawlies. There are tons of options for termite control , but the most important thing to remember is that every property is different, so your solution should be tailored accordingly.',
                        p5:'However, there is controversy in the air that termite treatment requires spraying and planting pesticides inside furrows that should be left to professionals. With Homapp, you can receive termite pest control in Hyderabad in a matter of hours. Our experienced termite exterminator ensures that all termite problems are resolved and effectively eradicates termite problems from your surroundings.',
                        p6:'Homapp termite control offers preventative and professional termite control services across the country. Rest assured that we can handle any termite problem you may have! Our certified service technicians are well trained and equipped with the knowledge and experience needed to resolve your termite problem.'
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
                        bheading:'Termites Control Services',
                        p1:'Termites eat wood surfaces or wooden structures or cellulose-laden substances and ruin so many household or office items. Although termites are small in size, they can cause significant damage to structures and furniture, especially wood.',
                        p2:'Termites cause terrible damage to our homes, resulting in frustrating and expensive repairs. Anything made from cellulose, such as wood, can be eaten by them. Woodworms tunnel through the bottom, then work their way up to make a shelter from it. The human race is highly proficient in terms of survival skills and highly adaptable in the most challenging situations. Infestations of termites might already be too late by the time you discover them since they reproduce rapidly. As a result, you should hire a professional pest control company to perform your termite treatment.',
                        p3:"Homapp's termite treatment services are among the best in the termite control industry, so it's a bestseller in Indian markets. The Drill-Fill-Seal termite control technique has proven fool-proof so far in eradicating termite colonies. The damage caused by these insects is very expensive to repair, so don't wait too long before you call for termite control if you have a termite infestation at home. Rather than letting white ants and termites ruin your home, contact Homapp and we'll inspect it for you.",
                        p4:'Any type of infestation can be solved by professional termite pest control services in Hyderabad, including mosquitoes, bed bugs, termites, cockroaches, spiders, rodents, house flies, rats, ants, lizards, wood borers, and other creepy crawlies. There are tons of options for termite control , but the most important thing to remember is that every property is different, so your solution should be tailored accordingly.',
                        p5:'However, there is controversy in the air that termite treatment requires spraying and planting pesticides inside furrows that should be left to professionals. With Homapp, you can receive termite pest control in Hyderabad in a matter of hours. Our experienced termite exterminator ensures that all termite problems are resolved and effectively eradicates termite problems from your surroundings.',
                        p6:'Homapp termite control offers preventative and professional termite control services across the country. Rest assured that we can handle any termite problem you may have! Our certified service technicians are well trained and equipped with the knowledge and experience needed to resolve your termite problem.'
                        }}  className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg2,
                        bheading:'Mosquitoes Control Services',
                        p1:"There are many diseases spread by mosquitoes, including malaria, dengue fever, cerebral malaria, and filariasis. Mosquito control services are highly recommended if you have an infestation of mosquitoes in your neighborhood or house. Are your homes and offices infested with mosquitoes, which hide in every corner? In order to prevent any serious consequences in the future, mosquito control services and eradicating them quickly are essential.",
                        p2:"Mosquitoes are very fatal and dangerous because their risks are very high, especially in India and humid areas. Mosquitoes transmit a variety of diseases that can be deadly at worst. The most common mosquito-borne diseases in India are malaria, dengue, chikungunya, and Japanese B encephalitis.",
                        p3:'Mosquito control services are the fastest and most effective way to eliminate mosquitoes and other flying insects from your home, office, and surrounding areas. Insects like house flies, wasps, bees, and other problematic insects can be eliminated by this method when done effectively.',
                        p4:'Depending on the target area, the frequency of fogging will vary, and the chemicals used are eco-friendly and virtually odorless. Prior to fumigation, check with the company about the brand and ingredients of the chemicals. A majority of fumigation processes are safe for humans, leave no toxic residue, pollute the environment, leave the area smelling unpleasant, and are 100% guaranteed.',
                        p5:'Contact Homapp for mosquito control services and prevention if you want to rid your home or office property of mosquitoes. We offer you the best mosquito control services in Hyderabad, and our mosquito pest control services will help you maintain a clean and healthy environment.',
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
                        bheading:'Mosquitoes Control Services',
                        p1:"There are many diseases spread by mosquitoes, including malaria, dengue fever, cerebral malaria, and filariasis. Mosquito control services are highly recommended if you have an infestation of mosquitoes in your neighborhood or house. Are your homes and offices infested with mosquitoes, which hide in every corner? In order to prevent any serious consequences in the future, mosquito control services and eradicating them quickly are essential.",
                        p2:"Mosquitoes are very fatal and dangerous because their risks are very high, especially in India and humid areas. Mosquitoes transmit a variety of diseases that can be deadly at worst. The most common mosquito-borne diseases in India are malaria, dengue, chikungunya, and Japanese B encephalitis.",
                        p3:'Mosquito control services are the fastest and most effective way to eliminate mosquitoes and other flying insects from your home, office, and surrounding areas. Insects like house flies, wasps, bees, and other problematic insects can be eliminated by this method when done effectively.',
                        p4:'Depending on the target area, the frequency of fogging will vary, and the chemicals used are eco-friendly and virtually odorless. Prior to fumigation, check with the company about the brand and ingredients of the chemicals. A majority of fumigation processes are safe for humans, leave no toxic residue, pollute the environment, leave the area smelling unpleasant, and are 100% guaranteed.',
                        p5:'Contact Homapp for mosquito control services and prevention if you want to rid your home or office property of mosquitoes. We offer you the best mosquito control services in Hyderabad, and our mosquito pest control services will help you maintain a clean and healthy environment.',
                        }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg4,
                        bheading:'Bed bugs Pest Control Services',
                        p1:"A bedbug is a small, wingless insect that feeds exclusively on warm-blooded animals' blood. In both cases, humans are the preferred hosts.",
                        p2:"Are you fed up with bed bugs, and do you want to get rid of the bed bug problems at your home and your work places?You have come to the right place if you're looking for bed bug treatment and bed bug control services in Hyderabad. As a result, you can live bug-free with Homapp's bed bug control services in Hyderabad. However, bed bugs can cause a great deal of anxiety and restless nights, even if they don't usually require serious medical attention.",
                        p3:"We have a professional bed bug treatment to inspect and examine the major targets for bedbugs, such as beds, mattresses, furniture, etc. Depending on the infestation level and the customer's requirements, we suggest treating bed bugs. We provide herbal treatments as well as eco-friendly chemical treatments for bed bug treatments in Hyderabad that are odourless and odour free. In addition to how many bed bugs you have, how much clutter you have for hiding places, whether your neighbors have bed bugs, and whether all the residents of the building will participate, your chances of success depend on a number of factors.",
                        p4:"We are also concerned and make every effort to keep pets and family members safe. With bed bug treatment services in Hyderabad, we deliver the maximum benefits in a safe and effective manner. Visit Homapp's website to learn more about bed bug treatments and their services. If you find bedbugs in your home, call a professional immediately and do not try to resolve the infestation yourself. Clothing can spread bed bugs from room to room, and removing them yourself can often make matters worse.",
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
                        bheading:'Bed bugs Pest Control Services',
                        p1:"A bedbug is a small, wingless insect that feeds exclusively on warm-blooded animals' blood. In both cases, humans are the preferred hosts.",
                        p2:"Are you fed up with bed bugs, and do you want to get rid of the bed bug problems at your home and your work places?You have come to the right place if you're looking for bed bug treatment and bed bug control services in Hyderabad. As a result, you can live bug-free with Homapp's bed bug control services in Hyderabad. However, bed bugs can cause a great deal of anxiety and restless nights, even if they don't usually require serious medical attention.",
                        p3:"We have a professional bed bug treatment to inspect and examine the major targets for bedbugs, such as beds, mattresses, furniture, etc. Depending on the infestation level and the customer's requirements, we suggest treating bed bugs. We provide herbal treatments as well as eco-friendly chemical treatments for bed bug treatments in Hyderabad that are odourless and odour free. In addition to how many bed bugs you have, how much clutter you have for hiding places, whether your neighbors have bed bugs, and whether all the residents of the building will participate, your chances of success depend on a number of factors.",
                        p4:"We are also concerned and make every effort to keep pets and family members safe. With bed bug treatment services in Hyderabad, we deliver the maximum benefits in a safe and effective manner. Visit Homapp's website to learn more about bed bug treatments and their services. If you find bedbugs in your home, call a professional immediately and do not try to resolve the infestation yourself. Clothing can spread bed bugs from room to room, and removing them yourself can often make matters worse.",
                        }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg5,
                        bheading:'Disinfection and sanitization services',
                        p1:"To ensure the safety of you and your family, Homapp has introduced, for the first time in the city, sanitization services . In addition to being skin-friendly and food-safe, disinfectant solutions have been approved by the WHO as one of the most effective no-contact disinfectant measures against coronavirus.",
                        p2:"Surfaces and the air inside the house may appear to be clean and odorless. Unfortunately, it can occasionally be contaminated with airborne and viral diseases caused by harmful microorganisms. contagious and spreads in a variety of ways, including:Inhaling airborne droplets from an infected individual, Insects such as mosquitoes, ticks, and rats may indirectly transmit the disease. Virus-contaminated food or water Regular disinfection is recommended for your safety to prevent the spread of disease. Cross-contamination of surfaces with viruses",
                        p3:"It was a wise decision to hire a capable company like Homapp after the Corona Virus for sanitization services in Hyderabad. Sanitizing service providers provide trained technicians with world-class equipment to thoroughly disinfect your home or office. With sanitization services, not only is dirt cleaned, but germs, bacteria, and viruses are also eliminated. By reducing microorganisms in space, contamination and harmful effects of unseen pathogens are avoided. Sanitization services ensure a hygienic and safe environment for your customers, employees, loved ones, and yourself.",
                        p4:'Sanitizing spaces has become increasingly important due to the recent pandemic situation and the increase in COVID-19 cases across the country. Employees and customers would want to ensure that your premises were safe before returning to work and visiting if they had shut down during the lockdown. Because viruses can spread quickly through contaminated surfaces and the air, treating your business or home requires comprehensive sanitization of both.',
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
                        bheading:'Disinfection and sanitization services',
                        p1:"To ensure the safety of you and your family, Homapp has introduced, for the first time in the city, sanitization services . In addition to being skin-friendly and food-safe, disinfectant solutions have been approved by the WHO as one of the most effective no-contact disinfectant measures against coronavirus.",
                        p2:"Surfaces and the air inside the house may appear to be clean and odorless. Unfortunately, it can occasionally be contaminated with airborne and viral diseases caused by harmful microorganisms. contagious and spreads in a variety of ways, including:Inhaling airborne droplets from an infected individual, Insects such as mosquitoes, ticks, and rats may indirectly transmit the disease. Virus-contaminated food or water Regular disinfection is recommended for your safety to prevent the spread of disease. Cross-contamination of surfaces with viruses",
                        p3:"It was a wise decision to hire a capable company like Homapp after the Corona Virus for sanitization services in Hyderabad. Sanitizing service providers provide trained technicians with world-class equipment to thoroughly disinfect your home or office. With sanitization services, not only is dirt cleaned, but germs, bacteria, and viruses are also eliminated. By reducing microorganisms in space, contamination and harmful effects of unseen pathogens are avoided. Sanitization services ensure a hygienic and safe environment for your customers, employees, loved ones, and yourself.",
                        p4:'Sanitizing spaces has become increasingly important due to the recent pandemic situation and the increase in COVID-19 cases across the country. Employees and customers would want to ensure that your premises were safe before returning to work and visiting if they had shut down during the lockdown. Because viruses can spread quickly through contaminated surfaces and the air, treating your business or home requires comprehensive sanitization of both.',
                        }}  className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg6,
                        bheading:'Commercial pest Control Services',
                        p1:"The goal of commercial pest management is to control pests before they damage your business' reputation. All over Hyderabad, we provide reliable commercial pest control services.",
                        p2:"As part of Homapp, you can find professional pest control services under different categories offered by service providers. Our services include general pest control, termite control, bed bug control, cockroach control, rodent/mice/rat control, ant control, mosquitoes/flies control, snake catching, beehive removal, and viral protection sanitizing. Customers can receive a free inspection when they avail of pest control services under any of the given categories. Professionals who provide a wide range of services at affordable rates are trained and verified by the service providers.",
                        p3:"Homapp provides the best commercial pest control services in Hyderabad. It also provides the best types of commercial services in different categories, such as for schools near me and pest control services for offices.",
                        p4:"As the city's largest commercial pest control company, Homapp is able to protect its brand reputation and operations from unwanted pests. We offer public and global clients the most significant levels of chance administration, confirmation, and responsiveness across multi-site and single-site tasks. Through customized bug the executive programs, we aim to assist your organization in meeting stringent guidelines for wellbeing, security, and cleanliness.",
                        p5:"By using the most recent advances, we help to protect your staff and customers from the dangers of irritation-borne ailments and diminish our effect on the climate with eco-accommodating vermin executives' techniques.",
                        p6:"The customer must share their requirements in order to choose the appropriate pest treatment, and then a professional service provider will be contacted. Multiple quotes will be provided to clients once their requirements are matched with the most qualified professionals. By doing so, they can compare the costs of various treatment options and hire the most appropriate professional. Additionally, the service providers offer post-extermination services. An exterminator will search for the entry point for the pests. It could be a dirty pool of water, trash, or even a sewer.",

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
                        bheading:'Commercial pest Control Services',
                        p1:"The goal of commercial pest management is to control pests before they damage your business' reputation. All over Hyderabad, we provide reliable commercial pest control services.",
                        p2:"As part of Homapp, you can find professional pest control services under different categories offered by service providers. Our services include general pest control, termite control, bed bug control, cockroach control, rodent/mice/rat control, ant control, mosquitoes/flies control, snake catching, beehive removal, and viral protection sanitizing. Customers can receive a free inspection when they avail of pest control services under any of the given categories. Professionals who provide a wide range of services at affordable rates are trained and verified by the service providers.",
                        p3:"Homapp provides the best commercial pest control services in Hyderabad. It also provides the best types of commercial services in different categories, such as for schools near me and pest control services for offices.",
                        p4:"As the city's largest commercial pest control company, Homapp is able to protect its brand reputation and operations from unwanted pests. We offer public and global clients the most significant levels of chance administration, confirmation, and responsiveness across multi-site and single-site tasks. Through customized bug the executive programs, we aim to assist your organization in meeting stringent guidelines for wellbeing, security, and cleanliness.",
                        p5:"By using the most recent advances, we help to protect your staff and customers from the dangers of irritation-borne ailments and diminish our effect on the climate with eco-accommodating vermin executives' techniques.",
                        p6:"The customer must share their requirements in order to choose the appropriate pest treatment, and then a professional service provider will be contacted. Multiple quotes will be provided to clients once their requirements are matched with the most qualified professionals. By doing so, they can compare the costs of various treatment options and hire the most appropriate professional. Additionally, the service providers offer post-extermination services. An exterminator will search for the entry point for the pests. It could be a dirty pool of water, trash, or even a sewer.",
                    }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Our_serviceGrid6