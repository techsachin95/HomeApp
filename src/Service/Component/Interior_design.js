import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Navebar from '../../Component/Navbar/Navebar'
import img from '../../Assets/interior design/Interiordesignwallpaper_b.JPG'
import Header from '../../Component/Header/Header'
import Service_pagehead from '../../Component/Service_pagehead/Service_pagehead'
import Why from '../../Component/Why/Why'
import Experties from '../../Component/Experties/Experties'
import Our_serviceGrid7int from '../../Component/Our_serviceGrid/Our_serviceGrid7int'
import img1 from '../../Assets/interior design/design1.png'
import img2 from '../../Assets/interior design/design3.png'
import img3 from '../../Assets/interior design/design5.png'
import img4 from '../../Assets/interior design/design2.png'
import img5 from '../../Assets/interior design/design4.png'
import img6 from '../../Assets/interior design/design6.png'
import img7 from '../../Assets/interior design/design7.png'    
import Whatsup from '../../Component/whatsup/Whatsup'

const Interior_design = () => {
    return (
        <>
            <Navebar />
            <Header img={img} />
            <Service_pagehead
                heading={'Interior Design'}
                p1={'We can help you create the home interior of your dreams. Bring your dream home to life with the help of our interior designers in Hyderabad. It is important to us to understand'}
                p2={"your lifestyle, needs, and vision before translating it into 3D. Our goal at Homapp is to bring your dream vision to life. Interior designers in Hyderabad transform your home into a space that is cherished by everyone in the family. There are a few things to consider if you've already hired or are planning to hire professionals for your Hyderabad home interiors."}
                p3={"When it comes to your home, you only have one chance to make it, so it is essential to make the right decisions. Hiring professionals is the most crucial decision. At Homapp's Experience Centre, you can see everything from materials, finishes, furniture, and accessories to different decor styles that go into designing your dream home. A dedicated team of interior designers is on hand to assist you at the Hyderabad Experience Centers. An extensive collection of room interiors for various spaces will help you visualize how your future room will look once Homapp adds its final touches. Now is the time to stop searching for the best interior design company in Hyderabad."}
            />
            <Our_serviceGrid7int
                img1={img1}
                heading1={'2D Planning'}
                p1={'Our team works with our clients to develop and plan 2D planning services in Durgam Cheruvu that meet their specifications. We use existing 2D'}
                img2={img2}
                heading2={'Modular Kitchen Designs'}
                p2={"The kitchen industry is becoming smarter by the day in today's modern world. We provide the best possible way to combine luxury and an affordable"}
                img3={img3}
                heading3={'False Ceiling'}
                p3={'False ceilings are used in the home interior because they are light, moisture-resistant, and reduce condensation. Modern home lifestyle trends have brought new designs to false ceilings'}
                img4={img4}
                heading4={'3D Planning'}
                p4={'3d planning gives you a visual and ideas to view the exact design of your space before your space is ready. You can create your dream home by'}
                img5={img5}
                heading5={'Wardrode Designs'}
                p5={'In a home, wardrobes are the best way to illuminate the space, since they are a symbol of elegance that is specifically designed to satisfy'}
                img6={img6}
                heading6={'Wallpapers'}
                p6={"When you don't see any design on the wall, it may be boring to look at it. Your eyes may feel temporarily relieved if you paint it in beautiful"}
                img7={img7}
                heading7={'Curtains'}
                p7={'Our company manufactures Venetian Blinds, Vertical Blinds, Roller Blinds, Chick Blinds, Wooden Blinds, Bamboo Blinds, Zebra Blinds,'}
            />
            <Experties heading={'COMMERCIAL INTERIOR DESIGN'} />
            <Why />
            <Whatsup/>
            <Footer />
        </>
    )
}

export default Interior_design