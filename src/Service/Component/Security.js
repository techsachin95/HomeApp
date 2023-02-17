import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import Navebar from '../../Component/Navbar/Navebar'
import img from '../../Assets/security/Securitysystemwallpaper_b.JPG'
import Service_pagehead from '../../Component/Service_pagehead/Service_pagehead'
import Why from '../../Component/Why/Why'
import Experties from '../../Component/Experties/Experties'
import Our_serviceGrid4sec from '../../Component/Our_serviceGrid/Our_serviceGrid4sec'
import img1 from '../../Assets/security/secure1.png'
import img2 from '../../Assets/security/secure3.png'
import img3 from '../../Assets/security/secure2.png'
import img4 from '../../Assets/security/secure4.png'
import Whatsup from '../../Component/whatsup/Whatsup'

const Security = () => {
  return (
    <>
      <Navebar />
      <Header img={img} />
      <Service_pagehead
        heading={'Security Systems'}
        p1={'In these modern times, home security systems play a significant role in our lives because they add security and a sense of relief. With a home security alarm system, police are notified quickly when you are away from home all thanks to professional monitoring.'}
        p2={'The safety alerts on these security systems are simple and easy to understand. These systems are useful if we, in a hurry, forget to close the front door or the back window. The entry sensors can be managed remotely from a smartphone application. Notifications can also be sent to inform the user of the doors, an intruder, or if there is movement detected. Homapp provides the best security services in Hyderabad. We provide security services like CCTV, Firealrams, Entrance control, and biometric systems. With Homapp, we manage and deliver top-notch security services across Hyderabad.'}
      />
      <Our_serviceGrid4sec
        img1={img1}
        heading1={'CCTV'}
        p1={"We are one of the most experienced and cost-effective CCTV installation services providers in Hyderabad. In today's world,"}
        img2={img2}
        heading2={'Entrance Control'}
        p2={'Through login credentials such as passwords, personal identification numbers, biometric scans, and physical or electronic keys'}
        img3={img3}
        heading3={'Fire Alarm'}
        p3={'During an emergency, your Fire Alarm Repair System and Services Hyderabad may be called upon to operate. In order to ensure the safety'}
        img4={img4}
        heading4={'Biometric System'}
        p4={'A variety of biometric access control units are available from Haritha Technologies, including fingerprints, face and vein authentication, all'}
      />
      <Experties heading={'COMMERICAL SPACES'} />
      <Why />
      <Whatsup/>
      <Footer />
    </>
  )
}

export default Security