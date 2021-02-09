import React from 'react'
import discussionPicture from '../images/discussion.jpg'

const OnlineAccess = () => {
     return (
          <div className="onlineAccess">
               <div data-aos="fade-left" className="imageOnlineAccess">
                    <img src={discussionPicture} />
               </div>
               <div className="descOnlineAccess">
                    <div data-aos="fade-right" className="chatBanner">
                         <p>Lets learn everywhere and lifetime access.</p>
                    </div>
                    <div data-aos="slide-up">
                    <h1>Unlimited Access for Premium Members.</h1>
               <p>Learning is the process of acquiring new understanding, knowledge, behaviors, skills, values, attitudes, and preferences.The ability to learn is possessed by humans, animals, and some machines</p>
               </div>
               </div>
          </div>
     )
}

export default OnlineAccess;