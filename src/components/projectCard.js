import * as React from 'react'
import { Link } from 'gatsby'
import { getTech } from '../utils/getTech'
import TechItem from './techItem';
import OutArrow from '../images/svg/arrow_outward.svg'

const ProjectCard = ({ title, tech, links, mode }) => {

  return (
    <div className='project-card'>
      <h3 className='project-card__title'>{title}</h3>
      <a
        key={links[0]}
        href={links[0]}
        target='blank' rel='noreferrer'
        className='project-card__link'>
        {links[0].replace('https://', '').replace('www.', '')}&nbsp;<span className='project-card__arrow-icon'><OutArrow /></span>
      </a>
      {/* {links.map(link => (
        <a
          key={link}
          href={link}
          target='blank' rel='noreferrer'
          className='project-card__link'>
          {link.replace('https://', '').replace('www.', '')}&nbsp;<span className='project-card__arrow-icon'><OutArrow /></span>
        </a>
      ))} */}
      <ul className='project-card__tech-list'>
        {getTech(tech).map((techObj, i) => (
          <TechItem key={i} item={techObj} />
        ))}
      </ul>
      <Link
        key={title}
        to={`/projects/${title.toLowerCase().replaceAll(' ', '-').replaceAll('.', '').replaceAll('’', '')}`}
        state={{ mode: mode } }
        className='project-card__cta'>
        view project
      </Link>
    </div>
  )
}

export default ProjectCard