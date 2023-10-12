import React from 'react'
import Typewriter from 'typewriter-effect';

import './About.css';
import { Bio } from '../../data/myData';
import myImg from '../../assets/me.png';
import AnimationBg from './AnimationBg';

const About = () => {
  return (
    <section id='about'>
        <div className='aboutBg'>
          <AnimationBg />
        </div>
        <div className='aboutContainer'>
          {/* left */}
          <div className='aboutLeft'>
            <div className='aboutName'>
              Hi, I am <br/> {Bio.name}
            </div>
            <div className='aboutRoles'>
              I am a
              <span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }} 
                />
              </span>
            </div>
            <div className='aboutDesc'>{Bio.description}</div>
            <a href={Bio.resume} target='_blank' rel="noopener noreferrer" className='aboutResume'>Check Resume</a>
          </div>
          {/* right */}
          <div className='aboutRight'>
            <img className='aboutImg' src={myImg} alt={`${Bio.name}`} />
          </div>
        </div>
    </section>
  )
}

export default About