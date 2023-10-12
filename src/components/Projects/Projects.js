import React, { useState } from 'react';

import './Projects.css';
import { projects } from '../../data/myData';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = ({setOpenModal}) => {
  const [toggle, setToggle] = useState('All');
  const categories = ['All',...new Set(projects.map(project => project.category))];

  const handleToggle = (category) => {
    if (toggle !== category){
      setToggle(category);
    }
  }
  return (
    <section id='projects'>
      <div className='projectsWrapper'>
        <div className='projectsTitle'>Works</div>
        <div className='projectsDesc'>
        I have a diverse portfolio of works that showcase my skills and expertise. From developing  projects on web applications to solving machine learning problems. 
        I have also published my research work in a journal. Here are some of my works.
        </div>
        <div className='toggleGroup'>
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <div 
                key={index}
                className={`toggleBtn ${toggle === category? 'toggleBtnActive' : ''}`}
                onClick={() => handleToggle(category)}
              >
                {category}
              </div>
              {index < categories.length - 1 && <div className='divider'></div>}
            </React.Fragment>
          ))}
        </div>
        <div className='projectsCardContainer'>
          {toggle === 'All' && projects.map((project,pi) => (
            <ProjectCard key={pi} project={project} setOpenModal={setOpenModal}/>
          ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, pi) => (
              <ProjectCard key={pi} project={project} setOpenModal={setOpenModal}/>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Projects