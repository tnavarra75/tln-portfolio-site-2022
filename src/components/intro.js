import * as React from 'react'
import { Link } from 'gatsby'
import CloseTag from '../images/svg/closing-tag.svg'
import { FiDownload } from 'react-icons/fi'
// import { BsArrowRight } from 'react-icons/bs'


const Intro = () => {
  return (
    <section id="intro" className='intro' aria-label='intro'>
      <div className='intro__wrap'>
        
        <h1 className='intro__headline'>Hello! I’m <span>Terri Navarra</span></h1>
        <p className='intro__text'>I’m a <span>Frontend Developer</span> with a passion for building beautiful and accessible user experiences. I bring many years of agency experience working with art directors and designers to build sites that honor the creative while delivering scalable, maintainable code.
        </p>

        <div className='intro__ctas'>
          <Link to="/#projects" className="intro__cta intro__cta--view">view projects</Link>
          <a className="intro__cta intro__cta--download" href='/static/TL_resume_2022.pdf' target="_blank" rel="noreferrer">download resúme <FiDownload /></a>
        </div>
      </div>

      <div className="close-tag-wrap">
        <CloseTag />
      </div>

    </section>
  )
}

export default Intro