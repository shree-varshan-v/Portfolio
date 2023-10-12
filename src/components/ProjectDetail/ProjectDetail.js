import React from 'react';
import { IoCloseCircle, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { Modal } from '@mui/material';

import './ProjectDetail.css'
const ProjectDetail = ({ openModal, setOpenModal}) => {
    const project = openModal?.project;
  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null})}>
      <div className='projectDetailContainer'>
        <div className='projectDetailWrapper'>
          <IoCloseCircle className='projectDetailClose' 
              onClick={() => setOpenModal({ state: false, project: null})}
          />
          <img className='projectDetailImage' src={project?.image} alt={`${project?.title} snapshot`}/>
          <div className='projectDetailTitle'>{project?.title}</div>
          <div className='projectDetailDate'>{project?.date}</div>
          <div className='projectDetailTags'>
            {project?.tags.map((tag, ti) => (
                <div key={ti} className='projectDetailTag'>{tag}</div>
            ))}
          </div>
          <div className='projectDetailDesc'>{project?.description}</div>
          {project?.member && (
            <>
              <div className='projectDetailMembersLabel'><b>Members:</b></div>
              <div className='projectDetailMembers'>
                {project?.member.map((mem) =>(
                  <div className='projectDetailMember'>
                    <img className='projectDetailMemberImg' src={mem.img} alt={`${mem?.name} pic`}/>
                    <div className='projectDetailMemberName'>{mem.name}</div>
                    {mem?.linkedin &&
                      <a href={mem.linkedin} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                          <IoLogoLinkedin size={'1.5rem'}/>
                      </a>
                    }
                    {mem?.github &&
                      <a href={mem.github} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                        <IoLogoGithub size={'1.5rem'}/>
                      </a>
                    }
                  </div>
                ))}
              </div>
            </>
          )}
          <div className='projectDetailButtons'>
            {project?.paper &&
              <a className='projectDetailButton' href={project?.paper} target='new'>View Paper</a>
            }
            {project?.github &&
              <a className='projectDetailButton' href={project?.github} target='new'>View Code</a>
            }
            {project?.webapp &&
              <a className='projectDetailButton' href={project?.webapp} target='new'>View Live App</a>
            }
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ProjectDetail