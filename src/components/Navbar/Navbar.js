import React, { useState } from 'react';
import { CgBee} from 'react-icons/cg';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-scroll';

import './Navbar.css';
import { Bio } from '../../data/myData';

// todo
//github from data

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <a href='/' style={{textDecoration: 'none', color: 'white'}}>
        <div className='navLogo'><CgBee className='logoIcon'/>Portfolio</div>
      </a>
      <div className='navItems'>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='navLinks'>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className='navLinks'>Skills</Link>
        <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-60} duration={500} className='navLinks'>Experience</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-55} duration={500} className='navLinks'>Works</Link>
        <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className='navLinks'>Education</Link>
      </div>
      <a href={Bio.github} target="_blank" rel="noopener noreferrer" className='github'>Github Profile</a>
      
      {/* Mobile */}
      <IoMenu className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className='mobNavItems' 
        style={{display: showMenu? 'flex': 'none', transform: showMenu? 'translateY(0)' : 'translateY(-100%)'}}
        >
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='mobNavLinks' onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='mobNavLinks' onClick={()=>setShowMenu(false)}>Skills</Link>
          <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className='mobNavLinks' onClick={()=>setShowMenu(false)}>Experience</Link>
          <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='mobNavLinks' onClick={()=>setShowMenu(false)}>Works</Link>
          <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className='mobNavLinks' onClick={()=>setShowMenu(false)}>Education</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='mobNavLinks' onClick={()=>setShowMenu(false)}>Contact me</Link>
          <a href={Bio.github} target="_blank" rel="noopener noreferrer" className='mobNavLinks mobGithub' onClick={()=>setShowMenu(false)}>Github Profile</a>
      </div>
    </nav>
  )
}

export default Navbar