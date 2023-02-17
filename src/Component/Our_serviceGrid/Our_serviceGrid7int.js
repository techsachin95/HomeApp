import React from 'react'
import { Link } from 'react-router-dom'
import ReadMore from '../ReadMore/ReadMore'
import './Our_serviceGrid7int.css'
import bimg1 from '../../Assets/Bookimage/int1.jpg'
import bimg2 from '../../Assets/Bookimage/int2.jpg'
import bimg3 from '../../Assets/Bookimage/int3.jpg'
import bimg4 from '../../Assets/Bookimage/int4.jpg'
import bimg5 from '../../Assets/Bookimage/int5.jpg'
import bimg6 from '../../Assets/Bookimage/int6.jpg'
import bimg7 from '../../Assets/Bookimage/int7.jpg'
const Our_serviceGrid7int = (props) => {
  return (
        <div className="servicediv1">
            <div className="heading">
                <h1>OUR SERVICES</h1>
            </div> 
            <div className="servicegrid">
                <Link to={'/book'} state={{
                bimg1:bimg1,
                bheading:"2D Planning Design",
                p1:"Are you confused about how your space looks after construction? Do you have multiple ideas and want to see how they are implemented? Are you stressed about how to explain your plan to builders?",
                p2:"2D planning can help you with this. 2D planning gives a complete top view of your space before construction with proper measurements. It can show the entire view of your space designing and every element of it",
                p3:"Homapp provides the best 2D plans designed by skilled 2D planners who can also suggest you for the best of the best plan. They help you in designing a 2D plan of exactly what you have imagined. 2D planners at Homapp are experienced in 2D plans with measurement and vastu",
                p4:"Homapp can provide 2d building plan, 2d home plan with wiring and pipelining ,2d plan of house with dimensions, small house plans, floor plan design, modern house plans, farmhouse plans, modern bedroom house plans, 2D floor plan.",
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img1} alt="img1" />
                    </div>
                    <h1>{props.heading1}</h1>
                    <p>{props.p1}</p>
                    <div className="servicelinks">
                        <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg1,
                bheading:"2D Planning Design",
                p1:"Are you confused about how your space looks after construction? Do you have multiple ideas and want to see how they are implemented? Are you stressed about how to explain your plan to builders?",
                p2:"2D planning can help you with this. 2D planning gives a complete top view of your space before construction with proper measurements. It can show the entire view of your space designing and every element of it",
                p3:"Homapp provides the best 2D plans designed by skilled 2D planners who can also suggest you for the best of the best plan. They help you in designing a 2D plan of exactly what you have imagined. 2D planners at Homapp are experienced in 2D plans with measurement and vastu",
                p4:"Homapp can provide 2d building plan, 2d home plan with wiring and pipelining ,2d plan of house with dimensions, small house plans, floor plan design, modern house plans, farmhouse plans, modern bedroom house plans, 2D floor plan.",
                }} className='book'>Book Now</Link>
                    </div>
                </div>
                </Link>
                <Link to={'/book'} state={{
                bimg1:bimg2,
                bheading:"Modular Kitchen Design",
                p1:"In terms of interior design, modular kitchens are an expression of contemporary style.Every home should have a modular kitchen that is both affordable & has the best design.",
                p2:"Our team of experts designs Modular kitchens with several modules that are combined to form a fully functional kitchen We are one of the best dealers of modular kitchens in Hyderabad with our services being clients. Our team customizes the most idealistic modular kitchen to suit your interiors as well as to make your cooking experience more enjoyable and unique.Modular kitchen platform granite design You can choose from a variety of designs and materials, so you can find a kitchen that fits your lifestyle and budget. Some of the most popular modular kitchens come with built-in appliances, so you don't have to worry about purchasing them separately.The benefits of a modular kitchen include having more storage space, being able to customize the layout, and having a sleek and modern look.",
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img2} alt="img2" />
                    </div>
                    <h1>{props.heading2}</h1>
                    <p>{props.p2}</p>
                    <div className="servicelinks">
                    <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg2,
                bheading:"Modular Kitchen Design",
                p1:"In terms of interior design, modular kitchens are an expression of contemporary style.Every home should have a modular kitchen that is both affordable & has the best design.",
                p2:"Our team of experts designs Modular kitchens with several modules that are combined to form a fully functional kitchen We are one of the best dealers of modular kitchens in Hyderabad with our services being clients. Our team customizes the most idealistic modular kitchen to suit your interiors as well as to make your cooking experience more enjoyable and unique.Modular kitchen platform granite design You can choose from a variety of designs and materials, so you can find a kitchen that fits your lifestyle and budget. Some of the most popular modular kitchens come with built-in appliances, so you don't have to worry about purchasing them separately.The benefits of a modular kitchen include having more storage space, being able to customize the layout, and having a sleek and modern look.",
                }} className='book'>Book Now</Link>
                    </div>
                </div>
                </Link>
                <Link to={'/book'} state={{
                bimg1:bimg3,
                bheading:"False Ceiling Design",
                p1:"The ceiling no longer just covers your head. It is now possible to style it so that it looks great from all sides.A false ceiling is a great way to bring out the best aesthetics and aesthetic appeal of your home.",
                p2:"It should never be overlooked because they are often an afterthought for your interiors. We at Homapp are emerging as one of the best False ceiling contractors in Hyderabad as curate ideal false ceiling ideas to suit your interiors as per your taste that surely leave an impression on guests and people visiting your home.",
                p3:"We offer a wide range of designs varying in different colors, sizes and structures for you to choose from that fit perfectly for your interiors using the right grid and styling. Our experts customize the perfect false ceiling to suit your interiors as per your specifications and deliver quality services to you.",
                p4:"False ceilings provide a lot of room to experiment with different color palette, textures and structures that suit exceptionally to your interiors and our team provides you with the right assistance in this process making us one of the best false ceiling contractors in Hyderabad.",
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img3} alt="img3" />
                    </div>
                    <h1>{props.heading3}</h1>
                    <p>{props.p3}</p>
                    <div className="servicelinks">
                    <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg3,
                bheading:"False Ceiling Design",
                p1:"The ceiling no longer just covers your head. It is now possible to style it so that it looks great from all sides.A false ceiling is a great way to bring out the best aesthetics and aesthetic appeal of your home.",
                p2:"It should never be overlooked because they are often an afterthought for your interiors. We at Homapp are emerging as one of the best False ceiling contractors in Hyderabad as curate ideal false ceiling ideas to suit your interiors as per your taste that surely leave an impression on guests and people visiting your home.",
                p3:"We offer a wide range of designs varying in different colors, sizes and structures for you to choose from that fit perfectly for your interiors using the right grid and styling. Our experts customize the perfect false ceiling to suit your interiors as per your specifications and deliver quality services to you.",
                p4:"False ceilings provide a lot of room to experiment with different color palette, textures and structures that suit exceptionally to your interiors and our team provides you with the right assistance in this process making us one of the best false ceiling contractors in Hyderabad.",
                }} className='book'>Book Now</Link>
                    </div>
                </div>
                </Link>
                <Link to={'/book'} state={{
                bimg1:bimg4,
                bheading:"3D Planning Design",
                p1:"3d planning gives you a visual and ideas to view the exact design of your space before your space is ready. You can create your dream home by adding different ideas and visualize it before you actually implement it. A 3D layout plan is an easy way to image your space and to showcase it. It gives a clear picture on what is to be implemented so any changes can be easily made.",
                p2:"Sometimes our imagination does not match with the actual application but 3D planning can make it possible by pre-picturing the layout. Homapp provides skilled 3d planners to fill your space with its potential and dimensions that are apt for your space. It provides 3d house plans, 3d floor plans, 3d building plans, 3d room plans.",
                p3:"We ensure in 3d planning your space with proper dimensions ,correct vastu and design in a way that it looks beautiful.",
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img4} alt="img4" />
                    </div>
                    <h1>{props.heading4}</h1>
                    <p>{props.p4}</p>
                    <div className="servicelinks">
                    <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg4,
                bheading:"3D Planning Design",
                p1:"3d planning gives you a visual and ideas to view the exact design of your space before your space is ready. You can create your dream home by adding different ideas and visualize it before you actually implement it. A 3D layout plan is an easy way to image your space and to showcase it. It gives a clear picture on what is to be implemented so any changes can be easily made.",
                p2:"Sometimes our imagination does not match with the actual application but 3D planning can make it possible by pre-picturing the layout. Homapp provides skilled 3d planners to fill your space with its potential and dimensions that are apt for your space. It provides 3d house plans, 3d floor plans, 3d building plans, 3d room plans.",
                p3:"We ensure in 3d planning your space with proper dimensions ,correct vastu and design in a way that it looks beautiful.",
                }} className='book'>Book Now</Link>
                    </div>
                </div>
                </Link>
                <Link to={'/book'} state={{
                bimg1:bimg5,
                bheading:"Wardrobe Designs",
                p1:"Our team at Homapp designs a wardrobe that is in sync with your interiors and that is functional to your needs at the same time. Creating an ideal and functional wardrobe that covers all storage requirements and which is stylish is a challenge especially when the spaces are constrained.",
                p2:"We create best wardrobes that match your interiors and are functional according to your specifications as well. Our team of designers understand the need of proper alignment when it comes to wardrobes that also provide the right amount of space so as to maximize the storage.",
                p3:"Homapp provides the best wardrobe designs in Hyderabad and assists you in finding the most suitable wardrobe designs for your interiors.",
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img5} alt="img5" />
                    </div>
                    <h1>{props.heading5}</h1>
                    <p>{props.p5}</p>
                    <div className="servicelinks">
                    <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg5,
                bheading:"Wardrobe Designs",
                p1:"Our team at Homapp designs a wardrobe that is in sync with your interiors and that is functional to your needs at the same time. Creating an ideal and functional wardrobe that covers all storage requirements and which is stylish is a challenge especially when the spaces are constrained.",
                p2:"We create best wardrobes that match your interiors and are functional according to your specifications as well. Our team of designers understand the need of proper alignment when it comes to wardrobes that also provide the right amount of space so as to maximize the storage.",
                p3:"Homapp provides the best wardrobe designs in Hyderabad and assists you in finding the most suitable wardrobe designs for your interiors.",
                }} className='book'>Book Now</Link>
                    </div>
                </div>
                </Link>
                <Link to={'/book'} state={{
                bimg1:bimg6,
                bheading:"Wallpapers Design",
                p1:"Wallpapers add the right aesthetic and touch to your interiors making the interiors pop out. Wallpapers are a smart buy for the interiors of your home that make the walls look prettier and add different color to your interiors.",
                p2:"Homapp helps you find the best wallpapers for your interiors as we connect with the leading dealers of trend setting and latest design wallpapers in Hyderabad.",
                p3:"We deal in different types of wallpapers and provide you a wide range to choose from. Style your home and personal spaces with wallpapers of your choice by choosing from a wide range of stylish wallpapers such as vinyl wallpaper, textured wallpaper etc and revamp your interiors.",
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img6} alt="img6" />
                    </div>
                    <h1>{props.heading6}</h1>
                    <p>{props.p6}</p>
                    <div className="servicelinks">
                    <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg6,
                bheading:"Wallpapers Design",
                p1:"Wallpapers add the right aesthetic and touch to your interiors making the interiors pop out. Wallpapers are a smart buy for the interiors of your home that make the walls look prettier and add different color to your interiors.",
                p2:"Homapp helps you find the best wallpapers for your interiors as we connect with the leading dealers of trend setting and latest design wallpapers in Hyderabad.",
                p3:"We deal in different types of wallpapers and provide you a wide range to choose from. Style your home and personal spaces with wallpapers of your choice by choosing from a wide range of stylish wallpapers such as vinyl wallpaper, textured wallpaper etc and revamp your interiors.",
                }} className='book'>Book Now</Link>
                    </div>
                </div>
                </Link>
                <Link to={'/book'} state={{
                bimg1:bimg7,
                bheading:"Curtains Blinds",
                p1:"Adding colors and textures to your space makes it much more lively and beautiful. It turns your normal day into a brighter one and gives you unknown joy.",
                p2:"But as we all know it's quite hard to keep changing them through wall painting. One solution for this could be adding curtains and drapes to your space. The wide varieties in colors and models of curtains can be customized to your interest. It gives you the atmosphere of your taste to your space. On the other hand, blinds for windows are easy to use and change the look of your space into a better one.",
                p3:"Homapp being the leading traders in Hyderabad provides services to fix and install curtains by skilled workers. We help you with guiding you to pick best rods for curtains which are of proper measurements. We also provide blinds fixing services to block your windows or open them for fresh light.",
                p4:"So let's make your space colorful and lively by adding curtains and drapes to your space with Homapp. We often look for ideas or spaces to hang our clothes without being messy and unorganized. Also at times our tired day needs a space to dump clothes without making your space untidy.",
                p5:"Installing hangers helps you with this. Cloth hangers in your wardrobes help you to organize your stuff properly without messing up. Wall hangers help you in holding your clothes in place though thrown messily.",
                p6:"Installing hangers helps you with this. Cloth hangers in your wardrobes help you to organize your stuff properly without messing up. Wall hangers help you in holding your clothes in place though thrown messily."
                }}>
                <div className="sdiv1">
                    <div className="img">
                        <img src={props.img7} alt="img7" />
                    </div>
                    <h1>{props.heading7}</h1>
                    <p>{props.p7}</p>
                    <div className="servicelinks">
                    <Link><ReadMore/></Link><Link to={'/book'} state={{
                bimg1:bimg7,
                bheading:"Curtains Blinds",
                p1:"Adding colors and textures to your space makes it much more lively and beautiful. It turns your normal day into a brighter one and gives you unknown joy.",
                p2:"But as we all know it's quite hard to keep changing them through wall painting. One solution for this could be adding curtains and drapes to your space. The wide varieties in colors and models of curtains can be customized to your interest. It gives you the atmosphere of your taste to your space. On the other hand, blinds for windows are easy to use and change the look of your space into a better one.",
                p3:"Homapp being the leading traders in Hyderabad provides services to fix and install curtains by skilled workers. We help you with guiding you to pick best rods for curtains which are of proper measurements. We also provide blinds fixing services to block your windows or open them for fresh light.",
                p4:"So let's make your space colorful and lively by adding curtains and drapes to your space with Homapp. We often look for ideas or spaces to hang our clothes without being messy and unorganized. Also at times our tired day needs a space to dump clothes without making your space untidy.",
                p5:"Installing hangers helps you with this. Cloth hangers in your wardrobes help you to organize your stuff properly without messing up. Wall hangers help you in holding your clothes in place though thrown messily.",
                p6:"Installing hangers helps you with this. Cloth hangers in your wardrobes help you to organize your stuff properly without messing up. Wall hangers help you in holding your clothes in place though thrown messily."
                }} className='book'>Book Now</Link>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Our_serviceGrid7int