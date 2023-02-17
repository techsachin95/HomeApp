import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Navebar from '../../Component/Navbar/Navebar'
import img from '../../Assets/deep cleaning/cleaningwallpaperrrr.jpg'
import Header from '../../Component/Header/Header'
import Service_pagehead from '../../Component/Service_pagehead/Service_pagehead'
import Why from '../../Component/Why/Why'
import Experties from '../../Component/Experties/Experties'
import Our_serviceGrid6 from '../../Component/Our_serviceGrid/Our_serviceGrid6'
import img1 from '../../Assets/deep cleaning/cleaning1.png'
import img2 from '../../Assets/deep cleaning/cleaning2.png'
import img3 from '../../Assets/deep cleaning/cleaning3.png'
import img4 from '../../Assets/deep cleaning/cleaning4.png'
import img5 from '../../Assets/deep cleaning/cleaning5.png'
import img6 from '../../Assets/deep cleaning/cleaning6.png'
import Whatsup from '../../Component/whatsup/Whatsup'
const Deep_cleaning = () => {
    return (
        <>
            <Navebar />
            <Header img={img} />
            <Service_pagehead
                heading={'DEEP CLEANING'}
                p1={'When life becomes busier and you, as a professional, barely have time to manage household chores.Consequently, Homapp provides the best “deep cleaning services in Hyderabad”.'}
                p2={'We will provide services such as removing dust allergens, bacteria, dust mites, and other disease-causing agents. Whatever the problem with unhygienic homes, Homapp is there to provide full-house & empty house cleaning services in Hyderabad.'}
                p3={'As these harmful agents accumulate in the house, it not only looks dirty, but it also becomes unhealthy.Consequently, the residents suffer from allergic reactions such as runny nose,wheezing, cold, cough,fever, eye redness or tearing, and asthma to rashes and other skin diseases.'}
                p4={'Children are at risk of being affected by these harmful bacteria and microbes to a dangerous extent if they are at home.'} />
            <Our_serviceGrid6
                img1={img1}
                heading1={'Home Deep cleaning'}
                p1={'Are you looking for home cleaning services in Hyderabad? Everyone likes to have a neat and tidy home to'}
                img2={img2}
                heading2={'Water tank cleaning'}
                p2={'Homapp offers the best water tank cleaning services in Hyderabad for commercial and residential'}
                img3={img3}
                heading3={'Commercial Cleaning'}
                p3={"Business organizations, industries, offices, shops, factories, bars, hotels, and restaurants must maintain"}
                img4={img4}
                heading4={'After party cleaning'}
                p4={'With Homapp, you can keep things clean after parties in Hyderabad and enjoy peace of mind and happiness.'}
                img5={img5}
                heading5={'Facade Cleaning'}
                p5={"During extreme weather conditions, Hyderabad's facade can be strained by dust, wind, and rain."}
                img6={img6}
                heading6={'Furniture Cleaning'}
                p6={'The furniture in the living room is one of the most essential and important parts, so it is very important that you'}
            />
            <Experties heading={'COMMERCIAL DEEP CLEANING'} />
            <Why />
            <Whatsup/>
            <Footer />
        </>
    )
}

export default Deep_cleaning