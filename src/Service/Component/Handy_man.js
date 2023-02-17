import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import Navebar from '../../Component/Navbar/Navebar'
import img from '../../Assets/handy man/Handymanservicewallpaper_b.JPG'
import Service_pagehead from '../../Component/Service_pagehead/Service_pagehead'
import Why from '../../Component/Why/Why'
import Our_serviceGrid4handy from '../../Component/Our_serviceGrid/Our_serviceGrid4handy'
import img1 from '../../Assets/handy man/handy1.png'
import img2 from '../../Assets/handy man/handy3.png'
import img3 from '../../Assets/handy man/handy2.png'
import img4 from '../../Assets/handy man/handy4.png'
import Whatsup from '../../Component/whatsup/Whatsup'

const Handy_man = () => {
  return (
    <>
      <Navebar />
      <Header img={img} />
      <Service_pagehead
        heading={'Handyman Services'}
        p1={'Homapp can help you find good handyman services in Hyderabad. We are Homapp Handyman Services, a top handyman service near me in Hyderabad.'}
        p2={"We know exactly what customers want and how to meet their needs. We wanted to revolutionize the way home services are delivered. Service providers are verified and certified professionals, so customers receive quality service at competitive prices. There will be no surprises with Homapp's all-inclusive, easy-to-understand pricing for home services. We can work within your budget and timeline, regardless of whether you need a complete home overhaul or just a simple face-lift. Homapp is well established, famous and one of the handyman services in Hyderabad."}
        p3={'We have been offering the best handyman services in Hyderabad for the past years. Whether it is a commercial or residential project, we handle and provide all types of best handyman services near me in Hyderabad. Handyman Services in Hyderabad – Our handymen are available to help you with everything from your front gate to the backyard. By transforming pain points into fully operational and organized rooms, our team makes it simple & affordable.'}
      />
      <Our_serviceGrid4handy
        img1={img1}
        heading1={'Plumber'}
        p1={'To ensure that the plumbing job is done properly, you should hire or choose a professional plumber in Hyderabad, who will provide you with'}
        img2={img2}
        heading2={'Electrician'}
        p2={'You can book an electricians Hyderabad within minutes. With Homapp, you can find all your electrical problems in Hyderabad.'}
        img3={img3}
        heading3={'Carpenter'}
        p3={'At your doorstep: Homapp brings you the best carpenters in Hyderabad, India. Are you looking for Carpenters in Hyderabad?'}
        img4={img4}
        heading4={'Painters'}
        p4={'Homapp is one of the best Painting organizations you could find in house painters Hyderabad. Our outstanding Painting Services will bring life to'}
      />
      <Whatsup/>
      <Why />
      <Footer />
    </>
  )
}

export default Handy_man