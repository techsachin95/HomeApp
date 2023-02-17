import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import Navebar from '../../Component/Navbar/Navebar'
import img from '../../Assets/safty nates/safetynetswallpaper_b.JPG'
import Service_pagehead from '../../Component/Service_pagehead/Service_pagehead'
import Why from '../../Component/Why/Why'
import Our_serviceGrid6sefty from '../../Component/Our_serviceGrid/Our_serviceGrid6sefty'
import img1 from '../../Assets/safty nates/net1.png'
import img2 from '../../Assets/safty nates/net3.png'
import img3 from '../../Assets/safty nates/net5.png'
import img4 from '../../Assets/safty nates/net2.png'
import img5 from '../../Assets/safty nates/net4.png'
import img6 from '../../Assets/safty nates/net6.png'
import Whatsup from '../../Component/whatsup/Whatsup'

const Safty_nates = () => {
  return (
    <>
      <Navebar />
      <Header img={img} />
      <Service_pagehead
        heading={'Safety Nets'}
        p1={'Safety nets have become one such component in life where safety can be assured while having fun. It is an absolute necessity to have safety nets on construction sites balconies,'}
        p2={'and pools in order to ensure fall arrest application. Also these safety nets have come to a wider range of usage for anti birds coverage and in playgrounds. Irrespective of the utilization, the key aspect of these safety nets is proper installation with an apt mechanism.'}
        p3={'A small mistake can take up a life that cannot be retrieved back. One must definitely ensure to pick the right person to install these safety nets and understand the importance of it. Homapp being the leading traders in hyderabad provides one such promising service of installing safety nets at any place with proper mechanism by the skilled people. It ensures that there is no harm to anyone using it.'}
      />
      <Our_serviceGrid6sefty
        img1={img1}
        heading1={'Bird Nets'}
        p1={"Balcony bird netting is designed to protect humans from high-rise buildings. Homapp netting sevices in Hyderabad fulfills everyone's"}
        img2={img2}
        heading2={'Childern safety Nets'}
        p2={"Children's or kids' safety nets help to prevent your child from falling out of a window, balcony, terrace, or staircase. Children and even adults"}
        img3={img3}
        heading3={'Building Safety Nets'}
        p3={'It is for this reason that Building Safety Nets in Hyderabad are needed to provide a protective shield and prevent accidents from occurring.'}
        img4={img4}
        heading4={'Mosquitoes Mesh'}
        p4={'Mosquito nets are becoming important for your residence and play a crucial role in preventing mosquitoes in your surroundings.'}
        img5={img5}
        heading5={'Bird Spikes'}
        p5={'Bird spikes are highly effective repellents that are virtually invisible from a distance. Pigeons, and similarly sized birds roosting on signs, gutters,'}
        img6={img6}
        heading6={'Construction Nets'}
        p6={'Construction is the most happening thing on earth, and it is the place where thousands of workers toil hard to build the structure. In'}
      />
      <Why />
      <Whatsup/>
      <Footer />
    </>
  )
}

export default Safty_nates