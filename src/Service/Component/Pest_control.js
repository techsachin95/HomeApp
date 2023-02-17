import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import Navebar from '../../Component/Navbar/Navebar'
import img from '../../Assets/paste controll/Pestcontrollwallpaper_b.JPG'
import Service_pagehead from '../../Component/Service_pagehead/Service_pagehead'
import Why from '../../Component/Why/Why'
import Experties from '../../Component/Experties/Experties'
import Our_serviceGrid6pest from '../../Component/Our_serviceGrid/Our_serviceGrid6pest'
import img1 from '../../Assets/paste controll/service1.png'
import img2 from '../../Assets/paste controll/service3.png'
import img3 from '../../Assets/paste controll/service5.png'
import img4 from '../../Assets/paste controll/service2.png'
import img5 from '../../Assets/paste controll/service4.png'
import img6 from '../../Assets/paste controll/service6.png'
import Whatsup from '../../Component/whatsup/Whatsup'

const Pest_control = () => {
  return (
    <>
      <Navebar />
      <Header img={img} />
      <Service_pagehead
        heading={'Pest Control Services'}
        p1={"People don't like to have bothersome pests in their homes since they cause property damage and carry diseases. They cause homeowners a lot of problems."}
        p2={'Professional pest control service providers will use the right tools and pesticides to eliminate pests in your home. You may want to hire a professional pest control company if your home appears infested with pests'}
        p3={'Here is a list of top pest control services in Hyderabad that will efficiently rid your house or office of bothersome bugs and rodents. If you have problems controlling pests and pesticides in your home, search for pest control near me and fumigation services on Google.You will find the best pest and termite control services in Hyderabad.'}
      />
      <Our_serviceGrid6pest
        img1={img1}
        heading1={'Cockroach Control'}
        p1={'Cockroach pest control services are crucial as they carry a variety of serious diseases. As they are in search of food, cockroaches are probably one of the worst household pests to deal with since they hide themselves well'}
        img2={img2}
        heading2={'Termites Control'}
        p2={'Termites eat wood surfaces or wooden structures or cellulose-laden substances and ruin so many household or office items. Although termites are small in size, they can cause significant damage'}
        img3={img3}
        heading3={'Mosquitoes Control'}
        p3={'Are your homes and offices infested with mosquitoes, which hide in every corner? In order to prevent any serious consequences in the future, mosquito control services and eradicating them quickly'}
        img4={img4}
        heading4={'Bedbugs Control'}
        p4={"Are you fed-up with bed bugs, and did you want to get rid of the bed bugs problems at your home and your work places? You have come to the right place if you're"}
        img5={img5}
        heading5={'Virus Fumigation'}
        p5={'Surfaces and air inside the house may appear to be clean and odorless. Unfortunately, it can occasionally be contaminated with airborne and viral diseases caused by harmful'}
        img6={img6}
        heading6={'Commercial PestControl'}
        p6={'Homapp provides the best commercial pest control services in hyderabad. It also provides the best types of commercial services in different categories'}
      />
      <Experties heading={'COMMERCIAL PEST CONTROL'} />
      <Why />
      <Whatsup/>
      <Footer />
    </>
  )
}

export default Pest_control