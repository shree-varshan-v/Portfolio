import React from 'react'

import './Skills.css';
import { skills } from '../../data/myData';
const Skills = () => {
  return (
    <section id='skills'>
      <div className='skillWrapper' >
        <div className='skillTitle' >Skills</div>
        <div className='skillDesc' >Here are some of the skills I have acquired throughout my academic years, demonstrating my dedication to continuous learning and growth.</div>
        <div className='skillsContainer' >
          {skills.map((skill, i) => (
            <div key={i} className='skill'>
              <div className='skillCategory' >{skill.title}</div>
              <div className='skillList' >
                {skill.skills.map((item, index) => (
                  <span key={index} className='skillItem'>
                    <img className='skillImg' src={item.image} alt={`${item?.name} logo`}/>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills