import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import OutArrow from "../images/svg/arrow_outward.svg"
import TechItem from "../components/techItem"
import { getTech } from "../utils/getTech"
import MoreProjects from "../components/moreProjects"
import DetailHero from "../components/detailHero"
import Seo from "../components/seo"

const ProjectDetail = ({ data, location }) => {
  const projectDetails = data.allProjectsJson.edges[0].node

  return (
    <Layout
      location={location}
      scheme={location.state?.mode ? location.state.mode : "dark"}
      detailPage
    >
      <div className="container">
        <DetailHero
          vid={projectDetails?.heroVid}
          img={projectDetails.heroImg?.childImageSharp.gatsbyImageData}
          mobileImg={projectDetails.heroImgMobile.childImageSharp.gatsbyImageData}
          altText={`${projectDetails.title} screengrab`}
        />
        <h1 className="detail-pg__title">{projectDetails.title}</h1>
        <div className="detail-pg__details-wrap">
          <div className="detail-pg__desc">
            <div
              className="detail-pg__desc-txt"
              dangerouslySetInnerHTML={{ __html: projectDetails.description }}
            />
            {projectDetails.links.map((link, i) => (
              <a
                key={i}
                href={link}
                target="blank"
                rel="noreferrer"
                className="project-card__link"
              >
                {link.replace("https://", "").replace("wwww.", "")}&nbsp;
                <span className="project-card__arrow-icon">
                  <OutArrow />
                </span>
              </a>
            ))}
          </div>
          <ul className="detail-pg__tech-list">
            {getTech(projectDetails.tech).map((techObj, i) => (
              <TechItem key={i} item={techObj} />
            ))}
          </ul>
        </div>
        <MoreProjects caseStudies={data.caseStudies.edges} />
      </div>
    </Layout>
  )
}

export const Head = ({data}) => <Seo title={data.allProjectsJson.edges[0].node.title} />


export const query = graphql`
  query ($title: String!) {
    allProjectsJson(filter: { title: { eq: $title } }) {
      edges {
        node {
          title
          links
          tech
          description
          heroVid
          coverImg {
            childImageSharp {
              gatsbyImageData(formats: [AUTO])
            }
          }
          heroImg {
            childImageSharp {
              gatsbyImageData(formats: [AUTO])
            }
          }
          heroImgMobile {
            childImageSharp {
              gatsbyImageData(formats: [AUTO])
            }
          }
        }
      }
    }
    caseStudies: allProjectsJson(filter: { title: { ne: $title } }) {
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
