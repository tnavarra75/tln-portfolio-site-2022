import * as React from 'react'

const NextProject = ({ caseStudies }) => {
  return (
    <section>
      <h2 className='section-header section-header--next'><span className='section-header__text'>More Projects</span></h2>
      {caseStudies.map((study, i) => {
        return (
          <h3 key={i}>{study.node.title}</h3>
        )
      })}
    </section>
  )
}

export default NextProject 