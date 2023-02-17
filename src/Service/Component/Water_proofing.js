import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import Navebar from '../../Component/Navbar/Navebar'
import img from '../../Assets/water proofing/waterwall.JPG'
import Service_pagehead from '../../Component/Service_pagehead/Service_pagehead'
import Why from '../../Component/Why/Why'
import Our_serviceGrid6water from '../../Component/Our_serviceGrid/Our_serviceGrid6water'
import img1 from '../../Assets/water proofing/water1.png'
import img2 from '../../Assets/water proofing/water3.png'
import img3 from '../../Assets/water proofing/water5.png'
import img4 from '../../Assets/water proofing/water2.png'
import img5 from '../../Assets/water proofing/water4.png'
import img6 from '../../Assets/water proofing/water6.png'
import Whatsup from '../../Component/whatsup/Whatsup'

const Water_proofing = () => {
  return (
    <>
      <Navebar />
      <Header img={img} />
      <Service_pagehead
        heading={'Water Proofing'}
        p1={'Hyderabad, known for its tropical climate, receives an abundance of rainfall every year. However, this can sometimes lead to problems such as leaks. There are different'}
        p2={'types of substructure leaks that can cause damage to their substructure, such as leaks from drainage systems. Consequently, a huge requirement of waterproofing services and waterproofing contractors. Therefore, waterproofing Hyderabad ensures that the structure will remain strong and beautiful for a long time. House waterproofing services in Hyderabad should be considered when building a new home, as well as when repairing an existing one.'}
        p3={'It prevents frequent leaks, increases structure durability, reduces recurring costs, eliminates the hassles of repetitive repairs, repairs damaged interiors, and prevents health issues caused by dampness.'}
      />
      <Our_serviceGrid6water
        img1={img1}
        heading1={'Wall dampness treatment'}
        p1={'As a result of our no-franchise policy, we are able to provide quality service. While providing wall dampness treatment and'}
        img2={img2}
        heading2={'Crack filling'}
        p2={'Content filling is the process that helps to seal the cracks that are specially formed on the floors, pavements, and walls'}
        img3={img3}
        heading3={'Bathroom Water proofing'}
        p3={'The Bathroom Waterproofing Service we provide to our clients is of excellent quality at the most affordable price.'}
        img4={img4}
        heading4={'Terrace or slab leaking'}
        p4={'If you have a terrace or slab leakage in Hyderabad, India, we are the best waterproofing solution for you. It is common to see leaks in the ceiling'}
        img5={img5}
        heading5={'Basement water proofing'}
        p5={'The best waterproofing services in Hyderabad are provided by Homapp basement waterproofing, which has professionals and experts in the field.'}
        img6={img6}
        heading6={'Watertank water proofing'}
        p6={'Our company provides top-class Commercial Tank Waterproofing Service based on high capacities of industrial ability and understanding'}
        />
    <Why />
    <Whatsup/>
      <Footer />
    </>
  )
}

export default Water_proofing