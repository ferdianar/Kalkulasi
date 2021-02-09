import React from 'react'
import '../stylesheets/SetReminder.css'
import firstImages from '../images/paper.jpg'

const SetReminder = () => {
     return (
          <div className="setReminder">
               <div data-aos="fade-right" className="imagesReminder">
                    <img src={firstImages} alt="discussion" />
               </div>
               <div data-aos="fade-down" className="descReminder">
                    <div className="textReminder">
                         <h1>Lets set a daily reminder</h1>
                         <p>Component has a constructor function, the props should always be passed to the constructor and also to the omponent has a constructor function, the props should always be passed to the constructor and also.</p>
                         <button className="buttonReminder">Create Reminder</button>
                    </div>
                    <div className="cardReminder">
                    <div className="cardsRemind">
                         <p>Play Demo</p>
                         <div  className="overlay"></div>
                    </div>
                    <div  className="cardsRemind">
                         <p>Need Help</p>
                         <div className="overlay2"></div>
                    </div>
                    <div className="cardsRemind">
                         <p>Need Help</p>
                         <div className="overlay3"></div>
                    </div>
                    </div>
               </div>
          </div>
     )
}

export default SetReminder;
