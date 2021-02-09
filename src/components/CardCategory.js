import React, {Component} from 'react'
import Footer from './Footer'
import firstImage from '../images/design.jpg'
import secImage from '../images/vegetables.jpg'
import thirdImage from '../images/discussion.jpg'
import fourthImage from '../images/think.jpg'
import deskk from '../images/deskk.jpg'
import uxImage from '../images/discussion.jpg'
import pictureDisk from '../images/design.jpg'
import deskkk from '../images/deskk.jpg'
import '../stylesheets/sass/Product.css'
import '../stylesheets/sass/cardCategory.css'

const CardCategory = () => {
     return (
          <>
          <div className="banner-container">
               <div className="container-overlay"></div>
               <h3>Solve your problem with <br></br> share in Telegram Group <br></br> and Consultation.</h3>
               <p>Consulting make you easy learn something and now you also share your experience in group telegram. Sharing each other people to make more impact.</p>
               <button className="button-telegram">
                    Join Telegram
               </button>
               <img src={deskk} alt="" />
          </div>
          <h2>Feature you will get</h2>
          <div className="wrapCard">
               <div className="cardCategory">
                    <div className="cardOverlay first"></div>
                         <p className="titles">
                              Unlimited Access for <br></br>
                              Premium Member</p>
                         <img src={firstImage} />
                    </div>
                    <div className="cardCategory">
                    <div className="cardOverlay sec"></div>
                    <p className="titles">
                              Unlimited Access for <br></br>
                              Premium Member</p>
                    <img src={secImage} />
               </div>
               <div className="cardCategory">
               <div className="cardOverlay third"></div>
               <p className="titles">
                              Unlimited Access for <br></br>
                              Premium Member</p>
               <img src={deskk} />
               </div>
          </div>
          <div className="endProduct">
               <h3>Recommendation Class</h3>
               <div className="cards">
                    <div data-aos="fade-up" data-aos-duration="2000" className="card">
                    <div className="card-image">
                         <p>Intermediatte</p>
                         <img src={uxImage} />
                    </div>
                    <div className="card-body">
                         <p className="text-muted">Product Design</p>
                         <h3>UX Design Process</h3>
                         <h4>IDR 225000</h4>
                         <p className="subtitle">
                         Component has a constructor function, the props should always be passed to the constructor and also.
                         </p>
                    </div>
                    <div className="card-footer">
                         <button className="button-cart">
                              Add to Cart
                         </button>
                    </div>
               </div>
     <div data-aos="fade-up" className="card">
          <div className="card-image">
               <p>Expert</p>
               <img src={deskkk} />
          </div>
          <div className="card-body">
               <p className="text-muted">Branding & Design</p>
               <h3>Branding Design</h3>
               <h4>IDR 575000</h4>
               <p className="subtitle">
               Component has a constructor function, the props should always be passed to the constructor and also.
               </p>
          </div>
          <div className="card-footer">
               <button className="button-cart">
                    Add to Cart
               </button>
          </div>
     </div>
     <div data-aos="fade-up" className="card">
          <div className="card-image">
               <p>Beginner</p>
               <img src={pictureDisk} />
          </div>
          <div className="card-body">
               <p className="text-muted">Digital Marketing</p>
               <h3>Google my Bussiness</h3>
               <h4>IDR199000</h4>
               <p className="subtitle">
               Component has a constructor function, the props should always be passed to the constructor and also.
               </p>
          </div>
          <div className="card-footer">
               <button className="button-cart">
                    Add to Cart
               </button>
          </div>
     </div>
     </div>
     </div>
          <Footer />
          </>
     )
}
export default CardCategory