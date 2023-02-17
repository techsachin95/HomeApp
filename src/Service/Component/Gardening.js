import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Navebar from '../../Component/Navbar/Navebar'
import img from '../../Assets/gardening/gardeningwallpaper_b.JPG'
import Header from '../../Component/Header/Header'
import Service_pagehead from '../../Component/Service_pagehead/Service_pagehead'
import Why from '../../Component/Why/Why'
import Our_serviceGrid5gar from '../../Component/Our_serviceGrid/Our_serviceGrid5gar'
import img1 from '../../Assets/gardening/garden1.png'
import img2 from '../../Assets/gardening/garden3.png'
import img3 from '../../Assets/gardening/garden2.png'
import img4 from '../../Assets/gardening/garden4.png'
import img5 from '../../Assets/gardening/garden5.png'
import Whatsup from '../../Component/whatsup/Whatsup'

const Gardening = () => {
  return (
    <>
      <Navebar />
      <Header img={img} />
      <Service_pagehead
        heading={'Gardening'}
        p1={"We all strive to live a peaceful and focused life. But, In today's fast-paced world, it's hard to achieve. Gardening is one such activity which gives you immense peace, calming effect and eco-friendly living irrespective of your lifestyle."}
        p2={'Green garden improves the quality of your life and helps your stressful brain in getting positive vibes.But, do we have time for gardening? We know that gardening requires lots of patience, time and skills.'}
        p3={"What if there's a skilled gardener who can manage this task? Homapp being the leading traders in Hyderabad provides gardening services which include designing and maintenance."}
        p4={'It helps you to make your boring balconies, rooftops, lawn, outdoor spaces , and indoor spaces look beautiful and interesting with creative gardening.'}
        p5={'Homapp ensures in making your beautiful house much more lively using modern gardening techniques. So lets make our lives and our spaces green like a dream with the help of homapp.'}
      />
      <Our_serviceGrid5gar
        img1={img1}
        heading1={'Landscaping'}
        p1={'Homapp is well-known in the market for providing Landscaping near me in Hyderabad, Telangana, India. Our Grounds Maintenance division'}
        img2={img2}
        heading2={'Plants & Trees trimming'}
        p2={'Trees are one of the most beautiful features of a property. Their foliage provides color, privacy, and shade. Despite their wonderful qualities,'}
        img3={img3}
        heading3={'Terrace gardening'}
        p3={'As per client requirements, Homapp does terrace gardening as well as total home landscaping. Everything is provided according to the'}
        img4={img4}
        heading4={'Commercial Gardening'}
        p4={"Homapp has pioneered the art of crafting the most spectacular landscapes, which inspire an endless reign of 'boundless revival', with the"}
        img5={img5}
        heading5={'Gardening Lighting'}
        p5={'The top garden garden lighting dealers near me in Hyderabad manufactured by Homapp are made from high quality raw materials procured'}
      />
      <Whatsup/>
      <Why />
      <Footer />
    </>
  )
}

export default Gardening