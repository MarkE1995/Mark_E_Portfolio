import { Link } from 'react-router-dom';
import './AboutContentStyles.css';

import React from 'react';


const AboutContent = () => {
  return (
    <div className='about' >
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I'm an artist just wanting to share his work</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>

        <div className='right'>
            <div className='img-container'>
           
            </div>
        </div>
    </div>
  )
}

export default AboutContent