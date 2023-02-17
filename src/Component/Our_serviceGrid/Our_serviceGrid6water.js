import React from 'react'
import { Link } from 'react-router-dom'
import Book from '../Book/Book'
import ReadMore from '../ReadMore/ReadMore'
import bimg1 from '../../Assets/Bookimage/corner.jfif'
import bimg2 from '../../Assets/Bookimage/bathroom.jfif'
import bimg3 from '../../Assets/Bookimage/crack.jfif'
import bimg4 from '../../Assets/Bookimage/slab.jfif'
import bimg5 from '../../Assets/Bookimage/basement.jfif'
import bimg6 from '../../Assets/Bookimage/tank.jfif'

import './Our_serviceGrid6water.css'
const Our_serviceGrid6water = (props) => {
    
    return (
        <div className="servicediv1">
            <div className="heading">
                <h1>OUR SERVICES</h1>
            </div>
            <div className="servicegrid">
                <Link to={'/book'} state={{
                        bimg1:bimg1,
                        bheading:'Wall Dampness Treatment',
                        p1:'Wall dampness is a serious problem that needs to be fixed immediately. There are many ways to treat damp walls, but the most effective way is to use a Wonderproof system.it works by removing moisture from the air, which prevents the growth of mold and mildew.',
                        p2:"Hyderabad is a city that experiences high levels of Rainfall. This can cause problems for homes, as dampness can collect on walls. Damp walls can lead to mold and mildew growth, which can be harmful to your health. That's why it's important to get a wall dampness treatment done if you live in Hyderabad. There are many companies that offer this service, so you can choose the one that best suits your needs.",
                        p3:"If you're dealing with damp walls, you need to call in a professional for help. The best way to treat damp walls is with a product called Homapp. Our skilled Professionals inspect your premises and identify the severity using high Quality industrial chemicals to resolve the problem. Call now to book your wall dampness treatment Today.",
                        }} >
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img1} alt="img1" />
                        </div>
                        <h1>{props.heading1}</h1>
                        <p>{props.p1}</p>
                        <div className="servicelinks">
                        <Link><ReadMore /></Link><Link to={'/book'} state={{
                        bimg1:bimg1,
                        bheading:'Wall Dampness Treatment',
                        p1:'Wall dampness is a serious problem that needs to be fixed immediately. There are many ways to treat damp walls, but the most effective way is to use a Wonderproof system.it works by removing moisture from the air, which prevents the growth of mold and mildew.',
                        p2:"Hyderabad is a city that experiences high levels of Rainfall. This can cause problems for homes, as dampness can collect on walls. Damp walls can lead to mold and mildew growth, which can be harmful to your health. That's why it's important to get a wall dampness treatment done if you live in Hyderabad. There are many companies that offer this service, so you can choose the one that best suits your needs.",
                        p3:"If you're dealing with damp walls, you need to call in a professional for help. The best way to treat damp walls is with a product called Homapp. Our skilled Professionals inspect your premises and identify the severity using high Quality industrial chemicals to resolve the problem. Call now to book your wall dampness treatment Today.",
                        }}
                        className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg3,
                        bheading:'Crack Filling',
                        p1:"Walls crack filling is an important part of maintaining your home. Cracks can allow moisture and pests into your home, and they can also be unsightly. Filling cracks properly will help to prevent these problems. You can use a variety of materials to fill cracks, including caulk, spackle, and putty. Be sure to choose the right material for the type of crack you have, and follow the manufacturer's instructions for application.",
                        p2:'At our home improvement store, we offer a wall crack filling treatment in Hyderabad at the best price. This treatment is perfect for cracks that are up to 1/2 inch wide. The first step is to clean the crack with a wire brush to remove any loose debris. Next, we apply a primer to the crack to help the filler adhere better. Finally, we fill the crack with an epoxy-based filler and smooth it out.',
                        p3:"If you're looking for a reliable and affordable wall crack filling treatment in Hyderabad, look no further than Homapp. Our experienced professionals use the latest techniques and materials to fill cracks quickly and efficiently. We also offer a 100% satisfaction guarantee on all of our work, so you can be confident that you're making the best decision for your home.",
                        }} >
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img2} alt="img2" />
                        </div>
                        <h1>{props.heading2}</h1>
                        <p>{props.p2}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                        bimg1:bimg3,
                        bheading:'Crack Filling',
                        p1:"Walls crack filling is an important part of maintaining your home. Cracks can allow moisture and pests into your home, and they can also be unsightly. Filling cracks properly will help to prevent these problems. You can use a variety of materials to fill cracks, including caulk, spackle, and putty. Be sure to choose the right material for the type of crack you have, and follow the manufacturer's instructions for application.",
                        p2:'At our home improvement store, we offer a wall crack filling treatment in Hyderabad at the best price. This treatment is perfect for cracks that are up to 1/2 inch wide. The first step is to clean the crack with a wire brush to remove any loose debris. Next, we apply a primer to the crack to help the filler adhere better. Finally, we fill the crack with an epoxy-based filler and smooth it out.',
                        p3:"If you're looking for a reliable and affordable wall crack filling treatment in Hyderabad, look no further than Homapp. Our experienced professionals use the latest techniques and materials to fill cracks quickly and efficiently. We also offer a 100% satisfaction guarantee on all of our work, so you can be confident that you're making the best decision for your home.",
                        }}  className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg2,
                        bheading:'Bathroom Water Proofing',
                        p1:"Bathroom waterproofing is important to keep your bathroom in top condition. By waterproofing your bathroom, you can prevent water damage to your walls, floors, and ceiling. This will also extend the life of your bathroom fixtures and fittings. There are many ways to waterproof your bathroom, but the most effective method is to use a waterproofing membrane. This membrane will create a barrier between the water and your bathroom surfaces.",
                        p2:"Homapp is a company that specializes in bathroom waterproofing in Hyderabad. They use a special spray that creates a waterproof barrier on any surfaces in your bathroom. This prevents mold and mildew from growing, and keeps your bathroom looking clean and new. Homapp also offers a warranty on their work, so you can be confident that your bathroom will be protected for years to come.",
                        p3:"Homapp uses a special waterproofing material that is applied to the surface of your bathroom. This material creates a barrier that prevents water from seeping through and causing damage.contact us Today",
                        }}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img3} alt="img3" />
                        </div>
                        <h1>{props.heading3}</h1>
                        <p>{props.p3}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                        bimg1:bimg2,
                        bheading:'Bathroom Water Proofing',
                        p1:"Bathroom waterproofing is important to keep your bathroom in top condition. By waterproofing your bathroom, you can prevent water damage to your walls, floors, and ceiling. This will also extend the life of your bathroom fixtures and fittings. There are many ways to waterproof your bathroom, but the most effective method is to use a waterproofing membrane. This membrane will create a barrier between the water and your bathroom surfaces.",
                        p2:"Homapp is a company that specializes in bathroom waterproofing in Hyderabad. They use a special spray that creates a waterproof barrier on any surfaces in your bathroom. This prevents mold and mildew from growing, and keeps your bathroom looking clean and new. Homapp also offers a warranty on their work, so you can be confident that your bathroom will be protected for years to come.",
                        p3:"Homapp uses a special waterproofing material that is applied to the surface of your bathroom. This material creates a barrier that prevents water from seeping through and causing damage.contact us Today",
                        }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg4,
                        bheading:'Terrace or Slab Leaking',
                        p1:"Slab leaks are a serious problem that can cause extensive damage to your home. If you suspect that you have a slab leak, it's important to call a professional right away to have it repaired. Slab leaks can be caused by many things, including plumbing problems, cracks in the foundation, or even Settling. Slab leaks can be very expensive to repair, so it's important to catch them early.",
                        p2:"This can be caused by many things, but the most common cause is water damage. The first step in repairing a slab leak is to identify the source of the leak. Once the source is found, the next step is to repair the damage. This can be done by patching up the hole or cracks that are causing the leak, or by replacing the damaged section of the slab.It can also weaken the structure of your home. If you think you have a slab leak, it's important to call a professional to come and take a look. They'll be able to tell you if you need to repair the leak or not",
                        p3:"Slab water leaking is a common problem in Hyderabad. There are many causes of this problem, but the most common one is because of the weather. Hyderabad experiences a lot of humidity and this causes the concrete to expand and contract. This expansion and contraction can cause cracks to form in the slab, which then allows water to seep through.",
                        p4:"Fortunately, there are companies like Homapp that specialize in treating and repairing these leaks. They use a variety of methods to get the job done right, and they have a good track record of success. If you're dealing with a slab leak in Hyderabad, be sure to contact Homapp for help.",
                        }}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img4} alt="img4" />
                        </div>
                        <h1>{props.heading4}</h1>
                        <p>{props.p4}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                        bimg1:bimg4,
                        bheading:'Terrace or Slab Leaking',
                        p1:"Slab leaks are a serious problem that can cause extensive damage to your home. If you suspect that you have a slab leak, it's important to call a professional right away to have it repaired. Slab leaks can be caused by many things, including plumbing problems, cracks in the foundation, or even Settling. Slab leaks can be very expensive to repair, so it's important to catch them early.",
                        p2:"This can be caused by many things, but the most common cause is water damage. The first step in repairing a slab leak is to identify the source of the leak. Once the source is found, the next step is to repair the damage. This can be done by patching up the hole or cracks that are causing the leak, or by replacing the damaged section of the slab.It can also weaken the structure of your home. If you think you have a slab leak, it's important to call a professional to come and take a look. They'll be able to tell you if you need to repair the leak or not",
                        p3:"Slab water leaking is a common problem in Hyderabad. There are many causes of this problem, but the most common one is because of the weather. Hyderabad experiences a lot of humidity and this causes the concrete to expand and contract. This expansion and contraction can cause cracks to form in the slab, which then allows water to seep through.",
                        p4:"Fortunately, there are companies like Homapp that specialize in treating and repairing these leaks. They use a variety of methods to get the job done right, and they have a good track record of success. If you're dealing with a slab leak in Hyderabad, be sure to contact Homapp for help.",
                        }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg5,
                        bheading:'Basement Water Proofing',
                        p1:"If you have a water leak in your basement, there are a few things you can do to try to fix the problem. First, check the area around the leak for any cracks or holes. If you find any, seal them up with caulk or another sealant. Next, check the grades around your house. Make sure that the ground slopes away from your foundation so that water doesn't pool near your house. Finally, check your gutters and downspouts. Make sure they're clean and free of debris so that they can properly drain water away from your Hyderabad experiences heavy rains during the monsoon season",
                        p2:"which can often lead to flooding in basement areas. Homapp offers basement waterproofing services to help prevent water damage. They use high-quality materials and equipment to ensure that your basement stays dry and free from mold and mildew.",
                        p3:"Homapp's experienced team will work with you to find the best solution for your basement, whether it's a simple coating or a more complex system. We also offer a range of maintenance and repair services to keep your basement in top condition. Contact us today to find out.",
                        }}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img5} alt="img5" />
                        </div>
                        <h1>{props.heading5}</h1>
                        <p>{props.p5}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                        bimg1:bimg5,
                        bheading:'Basement Water Proofing',
                        p1:"If you have a water leak in your basement, there are a few things you can do to try to fix the problem. First, check the area around the leak for any cracks or holes. If you find any, seal them up with caulk or another sealant. Next, check the grades around your house. Make sure that the ground slopes away from your foundation so that water doesn't pool near your house. Finally, check your gutters and downspouts. Make sure they're clean and free of debris so that they can properly drain water away from your Hyderabad experiences heavy rains during the monsoon season",
                        p2:"which can often lead to flooding in basement areas. Homapp offers basement waterproofing services to help prevent water damage. They use high-quality materials and equipment to ensure that your basement stays dry and free from mold and mildew.",
                        p3:"Homapp's experienced team will work with you to find the best solution for your basement, whether it's a simple coating or a more complex system. We also offer a range of maintenance and repair services to keep your basement in top condition. Contact us today to find out.",
                        }}  className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                        bimg1:bimg6,
                        bheading:'Water Tank Water Proofing',
                        p1:"Water tank waterproofing is a process that helps to prevent water from entering the tank and causing damage. It is often done by using a sealant or coating on the outside of the tank. This prevents water from seeping in and causing problems. Waterproofing also helps to keep the inside of the tank clean and free of algae and other organisms.",
                        p2:"Water tank waterproofing is essential to keeping your water clean and free of contaminants. There are many different ways to waterproof a water tank, but the most important thing is to make sure that the tank is properly sealed. This can be done with a liner or by using a sealant. Water tank waterproofing will help to keep your water clean and safe to drink.",
                        p3:"Hyderabad-based Homapp Water tank waterproofing Company is a leading provider of waterproofing services. It has a team of experienced and skilled professionals who use the latest technology to provide quality services. The company offers a wide range of services, including tank coating, membrane lining, and epoxy grouting. It also provides a 2-year warranty on all its services.",
                        }}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img6} alt="img6" />
                        </div>
                        <h1>{props.heading6}</h1>
                        <p>{props.p6}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                        bimg1:bimg6,
                        bheading:'Water Tank Water Proofing',
                        p1:"Water tank waterproofing is a process that helps to prevent water from entering the tank and causing damage. It is often done by using a sealant or coating on the outside of the tank. This prevents water from seeping in and causing problems. Waterproofing also helps to keep the inside of the tank clean and free of algae and other organisms.",
                        p2:"Water tank waterproofing is essential to keeping your water clean and free of contaminants. There are many different ways to waterproof a water tank, but the most important thing is to make sure that the tank is properly sealed. This can be done with a liner or by using a sealant. Water tank waterproofing will help to keep your water clean and safe to drink.",
                        p3:"Hyderabad-based Homapp Water tank waterproofing Company is a leading provider of waterproofing services. It has a team of experienced and skilled professionals who use the latest technology to provide quality services. The company offers a wide range of services, including tank coating, membrane lining, and epoxy grouting. It also provides a 2-year warranty on all its services.",
                        }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Our_serviceGrid6water