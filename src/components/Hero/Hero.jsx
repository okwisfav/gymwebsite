import React from 'react'
import Header from '../Header/Header'
import hero_image from "../../assets/heroimage.png";
import hero_image_back from "../../assets/heroimageback.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import  './Hero.css'
const Hero = () => {
  return (
     <div className="hero">
         <div className="left-h">
            <Header />
            <div className="the-best-ad">
            <div></div>
            <span>the best fitness club in the town </span>
            </div>

            {/*Hero Heading */}
            <div className="hero-text">
                <div>
                  <span className='stroke-text'> Shape </span>
                  <span> Your </span>
                  </div>
                  <div>
                     <span>Ideal body</span>
                  </div>
                  <div>
                     <span>
                        In here we will help you to shape and build your ideal body and live up your life to fullest
                     </span> 
                  </div>
            </div>
            {/* figures */ }
            <div className="figures">
               <div>
                  <span>+ 140</span>
                  <span>EXPERT COACHES</span>
               </div>
               <div>
                  <span>+ 978</span>
                  <span>MEMBERS JOINED</span>
               </div>
               <div>
                  <span>+ 50</span>
                  <span>FITNESS PROGRAMS</span>
               </div>     
            </div>
                 {/* hero buttons */}
               <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
               </div>
         </div>
         <div className="right-h">
             <button className="btn">Join Now</button>

             <div className="heart-rate">
                <img src={Heart} alt="" />
               
                 <span>Heart Rate</span><span>116bpm</span>
             </div>
             {/*hero image */ }
             <img scr={hero_image} alt="" className="hero-image" />
             <img scr={hero_image_back} alt="" className="hero-image-back" />
             <div className="calories">
                <img src={Calories} alt="" />
                 <div>
                     <span>Calories Burned</span>
                     <span>220 kcal</span>
                 </div>
             </div>
         </div>
     </div>
  )
}

export default Hero
