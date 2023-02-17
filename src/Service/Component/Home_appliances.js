import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import Navebar from '../../Component/Navbar/Navebar'
import img from '../../Assets/home app/homappwall.png'
import Service_pagehead from '../../Component/Service_pagehead/Service_pagehead'
import Why from '../../Component/Why/Why'
import Our_serviceGrid9app from '../../Component/Our_serviceGrid/Our_serviceGrid9app'
import img1 from '../../Assets/home app/homapp1.png'
import img2 from '../../Assets/home app/homapp3.png'
import img3 from '../../Assets/home app/homapp5.png'
import img4 from '../../Assets/home app/homapp2.png'
import img5 from '../../Assets/home app/homeapp4.png'
import img6 from '../../Assets/home app/homapp6.png'
import img7 from '../../Assets/home app/homapp7.png'
import img8 from '../../Assets/home app/homapp9.png'
import img9 from '../../Assets/home app/homapp8.png'
import Whatsup from '../../Component/whatsup/Whatsup'

const Home_appliances = () => {
  return (
    <>
      <Navebar />
      <Header img={img}/>
      <Service_pagehead
      heading={'Home Appliance Repair'}
      p1={'We at Homapp provide reliable, effective, and quality appliance repair services in Hyderabad. Our high quality service experience is available on site, at your home or business, whether you require significant'}
      p2={'appliance repairs, replacement parts, or general maintenance. By taking the extra steps necessary to fully protect your home, we provide you with a superior level of support and care. Homapp aims to make people life simpler and stress-free by providing Home services in time,specially for those living in cities. in addition to our reasonable flat rate pricing,we offer courteous and dependable service, and guarantee all of our workmanship and equipment.'}
      p3={"Our extensive experience and expertise in the industry allows us to provide a wide range of professional appliance repair services in Hyderabad, regardless of the age of the appliance. Our technicians are on duty and available 24/7 with no breaks and are fully dedicated to helping and providing service at any time and every time, even at odd hours. Moreover, we deliver the best services, have several positive reviews from customers, and the efficient services that we provide and we value the time and trust that you invest in us."}
      p4={'in addition, we provide the best services, we have several positive reviews from customers, we provide efficient services, and we value your time and trust.'}/>
      <Our_serviceGrid9app
      img1={img1}
      heading1={'Air Conditioner'}
      p1={'AC repair service Hyderabad provides AC routine,repair and maintenance service for all PIN codes.Homapp offers comprihensive range of air'}
      img2={img2}
      heading2={'Washing Machine'}
      p2={'Our lives has been made easier by the invention of washing machines.Initialy people had semi auto-matic washing machines.Today,however '}
      img3={img3}
      heading3={'Geyser'}
      p3={'Homapp provides quality and highest level services for geyser repaire service in Hyderabad.Our professionals quickly diagnose'}
      img4={img4}
      heading4={'Water Purifire'}
      p4={'The RO water purifire services are the most popular kitchen appliance in most household,perticularly for those who care about the quality'}
      img5={img5}
      heading5={'Refrigerator'}
      p5={"As a leading refrigetrator repair services company in Hyderabad,we offer reasonable for the service.You can book your any brand's"}
      img6={img6}
      heading6={'Kitchen Chimney'}
      p6={'The purpose of a chimney is to safely remove combussion product from afire place or appliances to the out side of a building without'}
      img7={img7}
      heading7={'Television'}
      p7={'In our lives, TV plays avery importent role, whether it is for entertainment ,education,current affairs and many other things.'}
      img8={img8}
      heading8={'Inverter'}
      p8={'With the quality of inverter repaire & service in Hyderabad ,Homaap always brimg you custmer satisfation,and our professional technician are'}
      img9={img9}
      heading9={'Microwave'}
      p9={"Homapp takes care of your microwaveoven's repaire,so you never have to worry about it braking doen.We will be able to help you with"}
      />
      <Why/>
      <Whatsup/>
      <Footer />
    </>
  )
}

export default Home_appliances