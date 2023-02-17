import React from 'react'
import Footer from '../Component/Footer/Footer'
import Navebar from '../Component/Navbar/Navebar'
import HeroSection from './Component/HeroSection'
import Member from './Component/Member'
import './Home.css'
import Crousel from '../Component/HomeCrousel/Crousel'
import HomeappCrousel from '../Component/HomeCrousel/HomeappCrousel'
import GardeningCrousel from '../Component/HomeCrousel/GardeningCrousel'
import InteriorCrousel from '../Component/HomeCrousel/InteriorCrousel'
import Crousel2 from '../Component/HomeCrousel/Crousel2'

import img1a from '../Assets/deep cleaning/cleaning1.png'
import img2a from '../Assets/deep cleaning/cleaning2.png'
import img3a from '../Assets/deep cleaning/cleaning3.png'
import img4a from '../Assets/deep cleaning/cleaning4.png'
import img5a from '../Assets/deep cleaning/cleaning5.png'
import img6a from '../Assets/deep cleaning/cleaning6.png'

import img1b from '../Assets/paste controll/pest1.png'
import img2b from '../Assets/paste controll/pest2.png'
import img3b from '../Assets/paste controll/service5.png'
import img4b from '../Assets/paste controll/pest4.png'
import img5b from '../Assets/paste controll/service6.png'
import img6b from '../Assets/paste controll/service4.png'

import img1c from '../Assets/water proofing/water1.png'
import img2c from '../Assets/water proofing/water2.png'
import img3c from '../Assets/water proofing/water3.png'
import img4c from '../Assets/water proofing/water4.png'
import img5c from '../Assets/water proofing/water5.png'
import img6c from '../Assets/water proofing/water6.png'

import img1d from '../Assets/safty nates/net1.png'
import img2d from '../Assets/safty nates/net2.png'
import img3d from '../Assets/safty nates/net3.png'
import img4d from '../Assets/safty nates/net4.png'
import img5d from '../Assets/safty nates/net5.png'
import img6d from '../Assets/safty nates/net6.png'

import img1e from '../Assets/event handelling/Photography.JPG'
import img2e from '../Assets/event handelling/Birthday.JPG'
import img3e from '../Assets/event handelling/Commercial.JPG'
import img4e from '../Assets/event handelling/Decorations.JPG'
import img5e from '../Assets/event handelling/Wedding.jpg'
import img6e from '../Assets/event handelling/Food.JPG'

import img1h from '../Assets/home app/homapp1.png'
import img2h from '../Assets/home app/homapp2.png'
import img3h from '../Assets/home app/homapp3.png'
import img4h from '../Assets/home app/homeapp4.png'
import img5h from '../Assets/home app/homapp5.png'
import img6h from '../Assets/home app/homapp6.png'
import img7h from '../Assets/home app/homapp7.png'
import img8h from '../Assets/home app/homapp8.png'
import img9h from '../Assets/home app/homapp9.png'

import img1g from '../Assets/gardening/garden1.png'
import img2g from '../Assets/gardening/garden2.png'
import img3g from '../Assets/gardening/garden3.png'
import img4g from '../Assets/gardening/garden4.png'
import img5g from '../Assets/gardening/garden5.png'

import img1i from '../Assets/interior design/design1.png'
import img2i from '../Assets/interior design/design2.png'
import img3i from '../Assets/interior design/design3.png'
import img4i from '../Assets/interior design/design4.png'
import img5i from '../Assets/interior design/design5.png'
import img6i from '../Assets/interior design/design6.png'
import img7i from '../Assets/interior design/design7.png'

import img1_2a from '../Assets/handy man/handy1.png'
import img2_2a from '../Assets/handy man/handy2.png'
import img3_2a from '../Assets/handy man/handy3.png'
import img4_2a from '../Assets/handy man/handy4.png'

import img1_2b from '../Assets/security/secure1.png'
import img2_2b from '../Assets/security/secure2.png'
import img3_2b from '../Assets/security/secure3.png'
import img4_2b from '../Assets/security/secure4.png'
import Key_feature from './Component/Key_feature'
import Testemonial from './Component/Testemonial'
import Whatsup from '../Component/whatsup/Whatsup'
const Home = () => {
  return (
    <>
    <Navebar/>
    <HeroSection/>
    <Member/>
    <div className="Service_heading">
      <h1>Our Services</h1>
    </div>
    <Crousel img1={img1a}img2={img2a}img3={img3a}img4={img4a}img5={img5a}img6={img6a}to={'/deepcleaning'}heading={'Cleaning'}h1={'Home deep Cleaning'}h2={'Water tank Cleaning'}h3={'Commercial Cleaning'}h4={'After party Cleaning'}h5={'Facade Cleaning'}h6={'Furniture Cleaning'}/>

    <Crousel img1={img1b}img2={img2b}img3={img3b}img4={img4b}img5={img5b}img6={img6b}to={'/pestcontrols'}heading={'Pest Control'}h1={'Cockroach Control'}h2={'Termites Control'}h3={'Mosquitoes Control'}h4={'Bed Bugs Control'}h5={'Virus Fumigation'}h6={'Commercial Pest Control'}/>

    <HomeappCrousel img1={img1h}img2={img2h}img3={img3h}img4={img4h}img5={img5h}img6={img6h}img7={img7h}img8={img8h}img9={img9h}to={'/homeapp'}heading={'Home Appliance Repair'}h1={'Air Conditiner Maintenance'}h2={'Water Purifire Maintenance'}h3={'Washing Machine Maintenance'}h4={'Refrigetrator Maintenance'}h5={'Geysar Maintenance'}h6={'Kitchen Chimney Maintenance'}h7={'Television Maintenance'}h8={'Microwave Maintenance'}h9={'Inverter Maintenance'}/>

    <Crousel img1={img1c}img2={img2c}img3={img3c}img4={img4c}img5={img5c}img6={img6c}to={'/waterproofing'}heading={'Water Proofing'}h1={'Wall dampness Treatment'}h2={'Terrace or slab leaking'}h3={'Crack Filling'}h4={'Basement water Proofing'}h5={'Bathroom Water Proofing'}h6={'Watertank water Proofing'}/>

    <InteriorCrousel img1={img1i}img2={img2i}img3={img3i}img4={img4i}img5={img5i}img6={img6i}img7={img7i}to={'/interiordesign'}heading={'Interior Design'}h1={'2D Planning Design'}h2={'3D Planning Design'}h3={'Modular Kitchen Design'}h4={'Wardrode Design'}h5={'Wallpaper Design'}h6={'Curtains Blinds'}h7={'False Ceiling Design'}/>

    <GardeningCrousel img1={img1g}img2={img2g}img3={img3g}img4={img4g}img5={img5g}to={'/gardening'} heading={'Gardening'}h1={'Landscaping Gardening'}h2={'Terrace Gardening'}h3={'Plants & Trees Trimming'}h4={'Commercial Gardening'}h5={'Gradening Lighting'}/>

    <Crousel img1={img1d}img2={img2d}img3={img3d}img4={img4d}img5={img5d}img6={img6d}to={'/saftynets'}heading={'Safety Nets'}h1={'Bird Nets'}h2={'Mosquitoes Nets'}h3={'Children Safety Nets'}h4={'Bird Spickes'}h5={'Building Safety Nets'}h6={'Construction Nets'}/>

    <Crousel img1={img1e}img2={img2e}img3={img3e}img4={img4e}img5={img5e}img6={img6e}to={'/event'}heading={'Event Management'}h1={'Photography Events'}h2={'Birthday Party Event'}h3={'Corporate Event'}h4={'Event Decorations Florist'}h5={'Wedding Event'}h6={'Catering Services'}/>

    <Crousel2 img1={img1_2a}img2={img2_2a}img3={img3_2a}img4={img4_2a}to={'/handyman'}heading={'Handyman Services'}h1={'Plumber'}h2={'Carpenter'}h3={'Electrician'}h4={'Painter'}/>

    <Crousel2 img1={img1_2b}img2={img2_2b}img3={img3_2b}img4={img4_2b}to={'/security'}heading={'Security System'}h1={'CCTV'}h2={'Fire Alarm'}h3={'Entrance Control'}h4={'Biometric system'}/>
    <Key_feature/>
    <Testemonial/>
    <Whatsup/>
    <Footer/>
    </>
  )
}

export default Home