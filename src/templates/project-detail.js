import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import OutArrow from '../images/svg/arrow_outward.svg'
import TechItem from '../components/techItem';
import { getTech } from '../utils/getTech'
import MoreProjects from '../components/moreProjects'

const ProjectDetail = ({ data, location }) => {
  const projectDetails = data.allProjectsJson.edges[0].node;
  
  return (
    <Layout location={location} scheme={location.state?.mode ? location.state.mode : 'dark'} detailPage>
      <div className='container'>
      <GatsbyImage image={projectDetails.coverImg.childImageSharp.gatsbyImageData} alt={projectDetails.title} />
      <h1 className='detail-pg__title'>{projectDetails.title}</h1>
      <div className='detail-pg__details-wrap'>
        <div className='detail-pg__desc'>

          <div className='detail-pg__desc-txt' dangerouslySetInnerHTML={{ __html: projectDetails.description }} />
          {projectDetails.links.map(link => (
            <a
              key={link}
              href={link}
              target='blank' rel='noreferrer'
              className='project-card__link'>
              {link.replace('https://', '').replace('www.', '')}&nbsp;<span className='project-card__arrow-icon'><OutArrow /></span>
            </a>
          ))}
        </div>
        <ul className='detail-pg__tech-list'>
          {getTech(projectDetails.tech).map(techObj => (
            <TechItem key={techObj.name} item={techObj} />
          ))}
        </ul>
      </div>
      <MoreProjects caseStudies={data.caseStudies.edges} />
      </div>

    </Layout>
  )
}

export const query = graphql`
  query($title: String!) {
    allProjectsJson(filter: { title: {eq: $title} }) {
      edges {
        node {
          title
          links
          tech
          description
          coverImg {
            childImageSharp {
              gatsbyImageData(formats: [AUTO])
            }
          }
        }
      }
    }
    caseStudies: allProjectsJson(filter: {title: {ne: $title}}) {
      edges {
        node {
          title
          coverImg {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
export default ProjectDetail