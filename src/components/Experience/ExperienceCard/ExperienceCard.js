import React from 'react';

import './ExperienceCard.css';

const ExperienceCard = ({exp}) => {
  return (
    <div className='expCard'>
      <div className='expCardTop'>
        <img  className='expCardLogo'src={exp.img} alt={`${exp.company} logo`}/>
        <div className='expCardBody'>
          <div className='expCardRole'>{exp.role}</div>
          <div className='expCardCompany'>{exp.company}</div>
          <div className='expCardDate'>{exp.date}</div>
        </div>
      </div>
      <div className='expCardDesc'>
        {exp?.desc && 
          <span className='expCardDescBody'>{exp?.desc}</span>
        }  
        {exp?.skills &&
          <>
            <br />
            <div className='expCardDescSkills'>
              <b>Skills:</b>
              <div className='expCardDescSkillsList'>
                {
                  exp?.skills?.map((skill, index) => (
                    <div className='expCardDescSkill' key={index}>• {skill}</div>
                  ))
                }
              </div>
            </div>
          </>
        }     
      </div>
      {/* <div style={{display: "flex"}}> */}
        {exp?.doc &&
          <a href={exp?.doc} target='new'>
            <img className='expCardDocument' src={exp?.doc} alt={`work proof`}/>
          </a>
        }
        {exp?.doc1 &&
          <a href={exp?.doc1} target='new'>
            <img className='expCardDocument' src={exp?.doc1} alt={`work proof`}/>
          </a>
        }
      {/* </div> */}
    </div>
  )
}

export default ExperienceCard