import React from 'react'
import { Link } from 'react-router-dom'
import ReadMore from '../ReadMore/ReadMore'
import './Our_serviceGrid5gar.css'
import bimg1 from '../../Assets/Bookimage/gar1.jpg'
import bimg2 from '../../Assets/Bookimage/gar2.jfif'
import bimg3 from '../../Assets/Bookimage/gar3.jfif'
import bimg4 from '../../Assets/Bookimage/gar4.png'
import bimg5 from '../../Assets/Bookimage/gar5.jfif'

const Our_serviceGrid5gar = (props) => {
    return (
        <div className="servicediv1">
            <div className="heading">
                <h1>OUR SERVICES</h1>
            </div>
            <div className="servicegrid">
                <Link to={'/book'} state={{
                    bimg1:bimg1,
                    bheading:"Landscaping Gardening",
                    p1:"Beautiful spaces are important for inner peace, and healthier spaces are essential! The Landscaping services that are trending all over the world are truly changing what living in the green means. As well as improving the appearance of your space, it can also be beneficial for your health and well-being.",
                    p2:"Landscaping doesn’t require a genius to do the job, but it is better done with the help of a pro. The most effective and efficient way to get landscapes is to hire a professional, knowing every penny’s worth of planting the right green at the right place. Homapp has the professionals to understand your need to knowing the statues to what will fit better into space is what a professional landscaping service can done with Homapp.",
                    p3:"It's easy to refute the idea that experts and space owners can turn a similar space into a new dwelling, yet what's not questionable is how a star realizes what is best for the space and its residents The vast majority consider finishing projects one more thought of inside planning, however as a general rule, it undeniably something beyond a presentation of plants developing unexpectedly without care and support. Arranging experts will initially look at your property prior to moving forward, in light of which will the entire thought be spread out.",
                    p4:"While there are a ton of organizations giving incredible finishing administrations, not every person can make a decent equilibrium between structure and capability, actually making it look staggering on the property.",
                }}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img1} alt="img1" />
                        </div>
                        <h1>{props.heading1}</h1>
                        <p>{props.p1}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                    bimg1:bimg1,
                    bheading:"Landscaping Gardening",
                    p1:"Beautiful spaces are important for inner peace, and healthier spaces are essential! The Landscaping services that are trending all over the world are truly changing what living in the green means. As well as improving the appearance of your space, it can also be beneficial for your health and well-being.",
                    p2:"Landscaping doesn’t require a genius to do the job, but it is better done with the help of a pro. The most effective and efficient way to get landscapes is to hire a professional, knowing every penny’s worth of planting the right green at the right place. Homapp has the professionals to understand your need to knowing the statues to what will fit better into space is what a professional landscaping service can done with Homapp.",
                    p3:"It's easy to refute the idea that experts and space owners can turn a similar space into a new dwelling, yet what's not questionable is how a star realizes what is best for the space and its residents The vast majority consider finishing projects one more thought of inside planning, however as a general rule, it undeniably something beyond a presentation of plants developing unexpectedly without care and support. Arranging experts will initially look at your property prior to moving forward, in light of which will the entire thought be spread out.",
                    p4:"While there are a ton of organizations giving incredible finishing administrations, not every person can make a decent equilibrium between structure and capability, actually making it look staggering on the property.",
                }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                    bimg1:bimg2,
                    bheading:"Plants & Trees Trimming",
                    p1:"When it comes to pruning your plants, it can be confusing, but pruning at the wrong time is rarely fatal. As a result of off-cycle pruning, there are less flowers and fruit, but it usually won't harm the plant. Pruning should not be done too late in the growing season. The result of doing so will be tender new growth that will die in winter.",
                    p2:"During the dormant period, most fruit trees and berry plants need to be pruned. If they do not do so, the plant will slowly decline, as suckers will direct energy away from fruiting branches. Exceptions to this rule are spring-flowering trees and shrubs. The blooms of these flowers fade in late spring and early summer so they have to be pruned.",
                    p3:"Additionally, most perennial plants need to be cut back completely either before or after the growing season. Pruning and deadheading are necessary throughout the year.",
                }}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img2} alt="img2" />
                        </div>
                        <h1>{props.heading2}</h1>
                        <p>{props.p2}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                    bimg1:bimg2,
                    bheading:"Plants & Trees Trimming",
                    p1:"When it comes to pruning your plants, it can be confusing, but pruning at the wrong time is rarely fatal. As a result of off-cycle pruning, there are less flowers and fruit, but it usually won't harm the plant. Pruning should not be done too late in the growing season. The result of doing so will be tender new growth that will die in winter.",
                    p2:"During the dormant period, most fruit trees and berry plants need to be pruned. If they do not do so, the plant will slowly decline, as suckers will direct energy away from fruiting branches. Exceptions to this rule are spring-flowering trees and shrubs. The blooms of these flowers fade in late spring and early summer so they have to be pruned.",
                    p3:"Additionally, most perennial plants need to be cut back completely either before or after the growing season. Pruning and deadheading are necessary throughout the year.",
                }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                    bimg1:bimg3,
                    bheading:"Terrace gardening",
                    p1:"Can we be so unhappy about not enjoying a greener life? What are the benefits of living a healthier and greener life? Is it hard to grow and maintain greenery around in our day-to-day lives?",
                    p2:"As urbanization speeds up at lightning speed, greenery in India has also declined. As a result of decreased green cover, temperatures and dust pollution have been higher than they used to be. To address this issue, people started planting greens, such as fruits, vegetables, plants, herbs, etc., in their homes or above them.",
                    p3:"There are many ways to live a healthier and greener life, such as the terrace garden. People with larger spaces are welcome to participate in this program. You can also grow fruits and vegetables on your roof, no matter how small the plants or flowers are. The best thing about terrace gardening is the fact that you can completely cover it with soil and grass in order to convert it into a lawn. It is a fact that there is never enough creativity and innovation when it comes to gardening landscapes.",
                    p4:"The task isn't as difficult as you might think it is. Before you plant your favorite greens, you should keep a few things in mind if you're a beginner. Some of the things to consider are the size, type of plants suitable for the environment, how much sunlight is needed, shade requirements in harsh and direct sunlight, and the list goes on and on. You can set up a terrace garden in a professional manner by calling in professional help. It is because nobody else knows what will be planted better than a professional gardener.",
                }}>
                    <div className="sdiv1">
                        <div className="img">
                            <img src={props.img3} alt="img3" />
                        </div>
                        <h1>{props.heading3}</h1>
                        <p>{props.p3}</p>
                        <div className="servicelinks">
                            <Link><ReadMore /></Link><Link to={'/book'} state={{
                    bimg1:bimg3,
                    bheading:"Terrace gardening",
                    p1:"Can we be so unhappy about not enjoying a greener life? What are the benefits of living a healthier and greener life? Is it hard to grow and maintain greenery around in our day-to-day lives?",
                    p2:"As urbanization speeds up at lightning speed, greenery in India has also declined. As a result of decreased green cover, temperatures and dust pollution have been higher than they used to be. To address this issue, people started planting greens, such as fruits, vegetables, plants, herbs, etc., in their homes or above them.",
                    p3:"There are many ways to live a healthier and greener life, such as the terrace garden. People with larger spaces are welcome to participate in this program. You can also grow fruits and vegetables on your roof, no matter how small the plants or flowers are. The best thing about terrace gardening is the fact that you can completely cover it with soil and grass in order to convert it into a lawn. It is a fact that there is never enough creativity and innovation when it comes to gardening landscapes.",
                    p4:"The task isn't as difficult as you might think it is. Before you plant your favorite greens, you should keep a few things in mind if you're a beginner. Some of the things to consider are the size, type of plants suitable for the environment, how much sunlight is needed, shade requirements in harsh and direct sunlight, and the list goes on and on. You can set up a terrace garden in a professional manner by calling in professional help. It is because nobody else knows what will be planted better than a professional gardener.",
                }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                    bimg1:bimg4,
                    bheading:"Commercial Gardening",
                    p1:"The maintenance of gardens and grounds on a large scale can be challenging, I am sure you have managed to maintain your own garden for a few hours at a time and fully understand it. Each week, our vehicles are loaded by hand and bring away tons of cuttings and garden debris collected from sites. These wastes are collected for recycling where the green waste is eventually turned into compost.",
                    p2:"How much legwork in only one day is astounding and we have involved pedometers that show on a normal day in the late spring while at the same time completing general cultivating and grass cutting every one of our landscapers stroll around 5-8 miles, taking into account a significant number of these miles are pushing a yard trimmer or utilizing hardware this is in a real sense not simply a stroll in the park.",
                    p3:"Weather conditions generally has an influence and there are numerous days when the weather conditions are simply not our companion but rather no matter what there are consistently errands that can be completed, and they are undertakings that need doing. For this reason we attempt to be essentially as adaptable as conceivable in our way to deal with site visits, for instance on the off chance that the weather conditions is excessively wet to permit grass removing we will convey different undertakings or even continue on toward another site returning the next day to trim the yards when the weather conditions is drier, this guarantees we furnish our clients with a total planting administration. However, this is rather than my own nursery by which on the off chance that it is pouring at the end of the week, the cultivating should stand by, impossible monetarily.",
                    p4:"It could be difficult work however there is pride and fulfillment in our cultivating and when we stand back and investigate the grounds we have quite recently kept up with and improved, it is with a similar pride I feel with my own nursery. We love to get great remarks and recognition from individuals who live or work around our nurseries and it makes it all beneficial when we realize individuals are partaking in their nearby climate, their neighborhood climate that we have kept up with for them.",
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
                    bheading:"Commercial Gardening",
                    p1:"The maintenance of gardens and grounds on a large scale can be challenging, I am sure you have managed to maintain your own garden for a few hours at a time and fully understand it. Each week, our vehicles are loaded by hand and bring away tons of cuttings and garden debris collected from sites. These wastes are collected for recycling where the green waste is eventually turned into compost.",
                    p2:"How much legwork in only one day is astounding and we have involved pedometers that show on a normal day in the late spring while at the same time completing general cultivating and grass cutting every one of our landscapers stroll around 5-8 miles, taking into account a significant number of these miles are pushing a yard trimmer or utilizing hardware this is in a real sense not simply a stroll in the park.",
                    p3:"Weather conditions generally has an influence and there are numerous days when the weather conditions are simply not our companion but rather no matter what there are consistently errands that can be completed, and they are undertakings that need doing. For this reason we attempt to be essentially as adaptable as conceivable in our way to deal with site visits, for instance on the off chance that the weather conditions is excessively wet to permit grass removing we will convey different undertakings or even continue on toward another site returning the next day to trim the yards when the weather conditions is drier, this guarantees we furnish our clients with a total planting administration. However, this is rather than my own nursery by which on the off chance that it is pouring at the end of the week, the cultivating should stand by, impossible monetarily.",
                    p4:"It could be difficult work however there is pride and fulfillment in our cultivating and when we stand back and investigate the grounds we have quite recently kept up with and improved, it is with a similar pride I feel with my own nursery. We love to get great remarks and recognition from individuals who live or work around our nurseries and it makes it all beneficial when we realize individuals are partaking in their nearby climate, their neighborhood climate that we have kept up with for them.",
                }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/book'} state={{
                    bimg1:bimg5,
                    bheading:"Gardening Lighting",
                    p1:"There are many choices with regards to scene lighting. One method for concluding which type fits you best is by taking a gander at its power/fuel source Sun based lights - they are protected and more straightforward to set up. Low voltage lights (like LED lights) - they are one of the more well known decisions since they are financially savvy, more secure to introduce and work. Low voltage lights require the utilization of a power transformer and are utilized to give visual load to plants and scene highlights you need to feature",
                    p2:"Line voltage outside lights -, for example, post lights, wall lights and uplights. Since they work at 120 V, line voltage lights must be introduced by an authorized electrical expert. The wires should be kept underground or encased in hard-scape components like cement. Nonetheless, line voltage lights are the most ideal decision for enlightening bigger regions. Gas, oil and other fuel consuming lighting - like lights, lamps and chimneys. These open air lighting apparatuses enlighten through controlled consumption of fuel. They can give your scene a natural or strange look and be welcoming simultaneously.",
                    p3:"We can securely introduce any kind of outside lighting. Our teams are authorized, guaranteed and work intimately with scene planners to ensure the lighting isn't just very much introduced and safe, yet additionally gorgeous and correlative to your home's character.",
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
                    bheading:"Gardening Lighting",
                    p1:"There are many choices with regards to scene lighting. One method for concluding which type fits you best is by taking a gander at its power/fuel source Sun based lights - they are protected and more straightforward to set up. Low voltage lights (like LED lights) - they are one of the more well known decisions since they are financially savvy, more secure to introduce and work. Low voltage lights require the utilization of a power transformer and are utilized to give visual load to plants and scene highlights you need to feature",
                    p2:"Line voltage outside lights -, for example, post lights, wall lights and uplights. Since they work at 120 V, line voltage lights must be introduced by an authorized electrical expert. The wires should be kept underground or encased in hard-scape components like cement. Nonetheless, line voltage lights are the most ideal decision for enlightening bigger regions. Gas, oil and other fuel consuming lighting - like lights, lamps and chimneys. These open air lighting apparatuses enlighten through controlled consumption of fuel. They can give your scene a natural or strange look and be welcoming simultaneously.",
                    p3:"We can securely introduce any kind of outside lighting. Our teams are authorized, guaranteed and work intimately with scene planners to ensure the lighting isn't just very much introduced and safe, yet additionally gorgeous and correlative to your home's character.",
                }} className='book'>Book Now</Link>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Our_serviceGrid5gar