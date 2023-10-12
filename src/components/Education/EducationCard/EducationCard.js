import React from 'react';

import './EducationCard.css';

const EducationCard = ({edu}) => {
  return (
    <div className='eduCard'>
      <div className='eduCardTop'>
        <img  className='eduCardLogo'src={edu.img} alt={`${edu.school} logo`}/>
        <div className='eduCardBody'>
          <div className='eduCardSchool'>{edu.school}</div>
          <div className='eduCardDegree'>{edu.degree}</div>
          <div className='eduCardDate'>{edu.date}</div>
        </div>
      </div>
      <div className='eduCardGrade'><b>Grade: </b>{edu.grade}</div>
      <div className='eduCardDesc'>
        <span className='eduCardDescBody'>{edu.desc}</span>
      </div>
    </div>
  )
}

export default EducationCard