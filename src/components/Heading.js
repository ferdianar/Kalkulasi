import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Heading = () => {
     // Initialize Animate on Scroll
     AOS.init({
          duration : 2000
     })
     return (
               <div className="heading">
                    <div className="hero">
                         <h1 data-aos="fade-left" className="title">Improve Knowledge and Digital Skill.</h1>
                         <p data-aos="fade-right">Component has a constructor function, the props should always be passed to the constructor and also to the omponent has a constructor function, the props should always be passed to the constructor and also </p>
                         <button className="calltoaction">Try it Free</button>
                    </div>
               </div>
     )
}

export default Heading;