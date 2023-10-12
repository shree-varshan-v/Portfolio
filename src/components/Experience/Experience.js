import React from 'react'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';

import './Experience.css';
import { experiences } from '../../data/myData';
import ExperienceCard from './ExperienceCard/ExperienceCard';

const Experience = () => {
  return (
    <section id='experience'>
      <div className='expWrapper'>
        <div className='expTitle'>Experience</div>
        <div className='expDesc'>
          Embracing my passion for software engineering, I've embarked on a journey of self-learning and exploration.
          <br />Eager for Opportunities, Hungry for Growth.
          </div>
        <div className='expTimeLine'>
        <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length && <TimelineConnector style={{ background: '#854CE6' }}/>}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard exp={exp} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  )
}

export default Experience