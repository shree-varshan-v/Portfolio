import React from 'react';

import './Education.css'
import { education } from '../../data/myData';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import EducationCard from './EducationCard/EducationCard';

const Education = () => {
  return (
    <section id='education'>
      <div className='eduWrapper'>
        <div className='eduTitle'>Education</div>
        <div className='eduDesc'>
          Through years of dedicated learning, my educational journey has been one of self-discovery filled with profound experiences, marked by continuous personal and intellectual growth, alongside unwavering resilience. My educational details are as follows.
        </div>
        <div className='eduTimeLine'>
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationCard edu={edu} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== education.length && <TimelineConnector style={{ background: '#854CE6' }}/>}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  )
}

export default Education