import React from 'react'
import c1 from '../../Assets/home page/testnominals_person1.png'
import c2 from '../../Assets/home page/testnominal_person2.png'
import c3 from '../../Assets/home page/testnomial_person3.png'
import { FaStar } from 'react-icons/fa'
const Testemonial = () => {
  return (
    <div className="testemonial_div1">
        <div className="testemonial_div2">
            <div className="testemonial_customer">
                <div className="div1">
                    <h1>Testimonials</h1>
                    <p>Our Happy Customers</p>
                </div>
                <div className="div2">
                    <img src={c1} alt="customer1" />
                    <p>Firstly, I found that booking a service with you was the easiest and involved simple steps. The plumber arrived on time and finished his entire work without any residue, which is the best part of booking service with you.</p>
                    <h1>Priyanka</h1>
                    <h2>Dollfine Durga County</h2>
                    <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                </div>
                <div className="div3">
                    <img src={c2} alt="customer2" />
                    <p>It was very irritating with our ac as it had recurring issues of its functionality. But all of them who came to repair it either gave a high price list or did temporary work.Thanks to homapp for identifying exact issue and treating it.</p>
                    <h1>Kalyan</h1>
                    <h2>Vessilla Vilas</h2>
                    <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                </div>
                <div className="div4">
                    <img src={c3} alt="customer3" />
                    <p>I booked for Deep cleaning services, and I must accept that my house after the people who came to deep clean my house was the cleanest from the time I bought it. They did their job really well at a very low price.</p>
                    <h1>Jyoshna Reddy</h1>
                    <h2>DSR Fourtune Prime</h2>
                    <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Testemonial