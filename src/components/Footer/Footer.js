import React from 'react'
import { Link } from 'react-scroll';
import { IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5';

import './Footer.css';
import { Bio } from '../../data/myData';
const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footerWrapper'>
        <div className='footerName'>{Bio.name}</div>
        <div className='footerNav'>
          <Link to='about' smooth={true} offset={-60} duration={500} className='footerNavItem' >About</Link>
          <Link to='skills' smooth={true} offset={-70} duration={500} className='footerNavItem' >Skills</Link>
          <Link to='experience' smooth={true} offset={-60} duration={500} className='footerNavItem' >Experience</Link>
          <Link to='projects' smooth={true} offset={-55} duration={500} className='footerNavItem' >Works</Link>
          <Link to='education' smooth={true} offset={-50} duration={500} className='footerNavItem' >Education</Link>
        </div>
        <div className='footerSocial'>
          <a href={Bio.linkedin} className='footerSocialIcons'><IoLogoLinkedin /> LinkedIn</a>
          <a href={Bio.github} className='footerSocialIcons'><IoLogoGithub /> Github</a>
        </div>
        <div className='footerCopyright'>
          Copyright &#169; 2023 {Bio.name}. All rights received.
        </div>
      </div>
    </footer>
  )
}

export default Footer