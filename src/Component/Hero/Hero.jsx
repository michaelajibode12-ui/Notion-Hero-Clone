import React from 'react'
import './Hero.css'
import Notion2 from '../../assets/Notion-2.png'
import 'remixicon/fonts/remixicon.css'
import Affrim from '../../assets/Affrim.png'
import Netflix from '../../assets/Netflix.png'
import Discord from '../../assets/Discord.png'
import Figma from '../../assets/Figma.png'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="Hero">
        <h1>
          Build <br />
          something <br />
          beautiful.
        </h1>
      </div>

      <div className="Hero1">
        <h4>
          Notion helps you and your team get more <br />
          done with peace of mind
        </h4>

        <div className="button-group">
          <button className="btn1">Get Notion free</button>
          <button className="btn2">Request a Demo</button>
        </div>
      </div>

      <img src={Notion2} alt="Notion" className="notion-image" />
      <div className='txt'>
        <h5>Trusted by team at</h5>
        <img src={Affrim} alt="" className="affrim" />
        <img src={Netflix} alt="" className="Netflix" />
        <img src={Discord} alt="" className="Discord" />
        <img src={Figma} alt="" className="Figma" />
      </div>
    </div>
  )
}

export default Hero
