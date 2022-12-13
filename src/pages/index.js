import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import Tech from "../components/tech"
import Projects from "../components/projects"
import About from "../components/about"



const IndexPage = ({ data, location }) => {
  
  return (
  <Layout location={location} scheme={location.state?.mode ? location.state.mode : 'dark'}>
    <Seo title="Home" />
    <Intro />
    <Projects projects={data.allProjectsJson.edges} mode={location.state?.mode ? location.state.mode : 'dark'}/>
    <Tech />
    <About />
  </Layout>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export const query = graphql`
  {
    allProjectsJson {
      edges {
        node {
          title
          links
          tech
          coverImg {
            childImageSharp {
              gatsbyImageData(formats: [AUTO])
            }
          }
        }
      }
    }
  }
`

export default IndexPage
