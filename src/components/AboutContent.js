import { Link } from 'react-router-dom';
import './AboutContentStyles.css';

import React from 'react';


const AboutContent = () => {
  return (
    <div className='about' >
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I am a seasoned technology professional with diverse experience across various organizations. At Nucamp in St. Petersburg, FL, I excelled as a Full Stack Web and Mobile App Developer, specializing in JavaScript, React, React Native, and Redux toolkit, and managing databases with Node.js, Express.js, and MongoDB. Prior to Nucamp, I interned as a Network Engineer at Kaiser Permanente in Seattle, WA, ensuring Wide Area Networks' availability and configuring Cisco networks. I also provided technical support at Premera Blue Cross and Caesar's Entertainment. Certified in Nucamp, CompTIA, and Microsoft Azure, my expertise spans JavaScript, web/mobile development, backend, database management, and cloud computing. With strong problem-solving and customer service skills, I am committed to making significant contributions to any organization.</p>
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