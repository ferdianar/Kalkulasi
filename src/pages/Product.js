import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import FontAwesome from 'react-fontawesome'
import CardCategory from '../components/CardCategory'
import graphicImage from '../images/GraphicDesign.jpg'
import wireframingImage from '../images/Wireframing.jpg'
import uxImage from '../images/discussion.jpg'
import pictureDisk from '../images/design.jpg'
import workImage from '../images/work.jpg'
import deskkk from '../images/deskk.jpg'
import WebImage from '../images/pc.jpg'
import architectImage from '../images/architect.jpg'
import interiorImage from '../images/interior.jpg'
import '../stylesheets/sass/Product.css'
import '../stylesheets/sass/cardCategory.css'

const Product = () => {
     // Initialize Animate on Scroll
     AOS.init({
          duration :1500
     })
     return (
          <>
          <div className="product">
               <div className="productHeader">
                    <div className="headingContent">
                         <h1 data-aos="fade-down">
                              Lets Begin Your Learning Adventure.
                         </h1>
                         <p data-aos="fade-right">Component has a constructor function, the props should always be passed to the constructor and also to the omponent has a constructor function, the props should always be passed to the constructor and also</p>
                         <div data-aos="fade-left" className="formSearch">
                              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Example : Graphic Design Class" />
                              <button className="button-search">Search</button>
                              <p className="latestSearch">Latest Search</p>
                              <div className="keySearch">
                                   <p>Product Design</p>
                                   <p>Web Development</p>
                              </div>
                         </div>
                    </div>
                    <div className="imageHeader">
                         <div data-aos="fade-up" className="rectangle">
                              <img src={graphicImage} />
                         </div>
                         <div data-aos="fade-left" className="rectangle">
                         <img src={wireframingImage} />
                         </div>
                    </div>
               </div>
               <div className="openingProduct">
                    <p>Popular Online Class</p>
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
                         <FontAwesome
                         className="super-crazy-colors"
                         name="rocket"
                         size="2x"
                         spin
                         style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                         />
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
                    <div className="cards">
                    <div data-aos="fade-up" data-aos-duration="2000" className="card">
                    <div className="card-image">
                         <p>Professional</p>
                         <img src={WebImage} />
                    </div>
                    <div className="card-body">
                         <p className="text-muted">Development</p>
                         <h3>Web Development</h3>
                         <h4>IDR 375000</h4>
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
                    <img src={architectImage} />
               </div>
               <div className="card-body">
                    <p className="text-muted">Architectural</p>
                    <h3>Architectural Design</h3>
                    <h4>IDR 420000</h4>
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
                    <img src={interiorImage} />
               </div>
               <div className="card-body">
                    <p className="text-muted">Architectural Design</p>
                    <h3>Interior Design</h3>
                    <h4>IDR275000</h4>
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
               <CardCategory />
          </div>
          </>
     )
}

const styleProduct = {
     'paddingTop': '150px',
     'textAlign': 'center'
}

export default Product