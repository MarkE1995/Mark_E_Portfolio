import './HeroImgStyles.css';

import React from 'react'
 
import IntroImg from '../assets/IMG_2568.JPG'

import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='IntroImg '/>
        </div>
        <div className='content'>
            <p> Hello There.</p>
            <h1> WELCOME TO MY WEBSITE</h1>
            <div>
                <Link to='/project' className='btn' >Projects</Link>
                <Link to='/contact' className='btn btn-light' >Contact</Link>
            </div>

        </div>
    </div>
  )
}

export default HeroImg