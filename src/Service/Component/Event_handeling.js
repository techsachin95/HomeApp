import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import Navebar from '../../Component/Navbar/Navebar'
import img from '../../Assets/event handelling/eventmanagemengt.JPG'
import Service_pagehead from '../../Component/Service_pagehead/Service_pagehead'
import Why from '../../Component/Why/Why'
import Our_serviceGrid6event from '../../Component/Our_serviceGrid/Our_serviceGrid6event'
import img1 from '../../Assets/event handelling/Decorations.JPG'
import img2 from '../../Assets/event handelling/Commercial.JPG'
import img3 from '../../Assets/event handelling/Photography.JPG'
import img4 from '../../Assets/event handelling/Wedding.jpg'
import img5 from '../../Assets/event handelling/Birthday.JPG'
import img6 from '../../Assets/event handelling/Food.JPG'
import Whatsup from '../../Component/whatsup/Whatsup'
const Event = () => {
    return (
        <>
            <Navebar />
            <Header img={img}/>
            <Service_pagehead
            heading={'Event Management'}
            p1={'Homapp Event management in Hyderabad have a wealth of experience and know-how to make your event a success. They can help with everything from finding the right venue to organizing catering and transportation. With their help, you can be sure that your event will run smoothly and be a success.'}
            p2={'They help to plan and execute events, big and small and when it comes to event management in Hyderabad, there is no better company than Homapp Events. We have years of experience planning and executing all sorts of events. We have a team of experienced and dedicated professionals who are always ready to take on any challenge.'}
            p3={"They have a detailed understanding of the city's infrastructure and can plan and execute events flawlessly. They also have a good network of suppliers and service providers, which helps them get the best deals for their clients who will make sure that your event is a success. Contact us today to learn more about what we can do for you."}
            />
            <Our_serviceGrid6event
            img1={img1}
            heading1={'Event Decoration & Florist'}
            p1={"If you're looking for stage decoration for your wedding reception in Hyderabad, you've come to the right place. We are a leading provider of stage decoration for weddings."}
            img2={img2}
            heading2={'Corporate events'}
            p2={'Hyderabad is a city that is constantly buzzing with activity. There are always commercial events taking place, and Homapp provides the best planners to make sure that these'}
            img3={img3}
            heading3={'Photography'}
            p3={"If you're looking for the best wedding photographers in Hyderabad, We provide the best photographers in the city who are experts in capturing beautiful moments."}
            img4={img4}
            heading4={'Wedding Planner'}
            p4={'A wedding is the most special day in life which involves a lot of fun, frolic, Celebrations, rituals and holy ceremonies.Planning a wedding'}
            img5={img5}
            heading5={'Birthday Party Events'}
            p5={'Homapp birthday planners in Hyderabad who can help you surprise your loved ones on their special day.They can help plan Surprise birthday parties'}
            img6={img6}
            heading6={'Catering Services'}
            p6={'At homapp, we offer the best catering services in Hyderabad. Our experienced and professional team of caterers will work with you'}
            />
            <Why/>
            <Whatsup/>
            <Footer/>
        </>
    )
}

export default Event