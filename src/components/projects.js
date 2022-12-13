import * as React from 'react'
import { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import ProjectCard from './projectCard';

const Projects = ({ projects, mode }) => {
  const [activeId, setActiveId] = useState(null)

  return (
    <section id="projects" className='projects container' aria-label='projects'>
      <h2 className='section-header'>
        <span className='section-header__text'>featured projects</span>
      </h2>
      <div className={`project-grid ${activeId !== null ? 'active' : ''}`}>
        {projects.map((project, i) => (
          
          <button
            aria-label='show project card' 
            className={ `grid-item ${activeId === i ? 'active' : ''}`} 
            key={i}  
            onMouseEnter={() => setActiveId(i)} 
            onMouseLeave={() => setActiveId(null)}
          >
            <div className={`grid-image`} >
              <GatsbyImage 
                formats={["auto"]} 
                image={project.node.coverImg.childImageSharp.gatsbyImageData} 
                alt={project.node.title} />
            </div>

            <ProjectCard
              key={i}
              title={project.node.title}
              links={project.node.links}
              tech={project.node.tech}
              mode={mode} />
          </button>
        ))}
      </div>
    </section>
  )
}

export default Projects


