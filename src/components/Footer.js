import React from 'react'
import '../stylesheets/sass/Footer.css'
import brand from '../images/logoKalkulasi.png'

function Footer() {
     return (
          <>
               <div className="footer">
                    <div className="brandCompany">
                         <img src={brand} alt="brand" />
                         <p> Kalkulasi is a Online Class Platfom who provide an mentoring and Learning Consultation about more aspect like Tech and Design.</p>
                    </div>
                    <div className="discover">
                         <h3>Discover</h3>
                         <p>Consultation</p>
                         <p>Learning Platform</p>
                         <p>Online Learning</p>
                         <p>Research and Develop</p>
                         <p>Research and Develop</p>
                    </div>
                    <div className="ourservice">
                         <h3>Our Service</h3>
                         <p>Consultation</p>
                         <p>Learning Platform</p>
                         <p>Online Learning</p>
                         <p>Research and Develop</p>
                         <p>Research and Develop</p>
                    </div>
                    <div className="validation-form">
                         <h3>Feedback</h3>
                         <p>Consultation</p>
                         <p>Learning Platform</p>
                         <p>Online Learning</p>
                         <p>Research and Develop</p>
                         <p>Research and Develop</p>
                    </div>
               </div>
               <div className="bottom-banner">
                    <p>Online Learning Platform</p>
                    <p>&copy; 2021 Kalkulasi Media Teknologi &trade;</p>
                    <p>All Right Reserved.</p>
               </div>
          </>
     )
}

export default Footer
