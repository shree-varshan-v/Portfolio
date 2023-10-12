import React from 'react'

import './ProjectCard.css';

const ProjectCard = ({project, setOpenModal}) => {
  return (
    <div className='projectCard' onClick={() => setOpenModal({state: true, project: project})}>
      <img className='projectImg' src={project.image} alt={`${project?.title} snapshot`}/>
      <div className='projectTags'>
        {project.tags?.map((tag, index) => (
          <div className='projectTag' key={index}>{tag}</div>
        ))}
      </div>
      <div className='projectDetails'>
        <div className='projectTitle'>{project.title}</div>
        <div className='projectDate'>{project.date}</div>
        <div className='projectDesc'>{project.description}</div>
      </div>
      <div className='projectMembers'>
        {project.member?.map((member, mi) => (
          <img key={mi} className='memberAvatars' src={member.img} alt={`${member?.name}`}/>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard