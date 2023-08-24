import './HeroImgStyle.css'

import React from 'react'
import Background from "../assets/Background.jpeg"
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className="hero">
    <div className='mask'>
    <img className='into-img' src={Background} alt='IntroImg'/>
    </div>
    <div className='content'>
    <p> Hi, I'M AKSHAY Bauskar</p>
    <h1>React Developer</h1>
    <div>
    <Link to="/project" className='btn'>PROJECTS</Link>
    <Link to="/contact" className='btn'>Contact</Link>

    </div>
    </div>
    </div>
  )
}

export default HeroImg