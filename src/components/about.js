import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

const About = () => (
  <motion.section 
    id="about" 
    className='about container' 
    aria-label='about'
    initial="hidden"
    whileInView="visible"
    transition={{duration: 1}}
    variants={{
      visible: {opacity: 1},
      hidden: {opacity: 0}
    }}
    >
    <h2 className='section-header section-header--about'><span className='section-header__text'>about me</span></h2>
    <h3 className='about__subhead'>/ my journey to dev</h3>
    <div>
      <div className='about__text'>
        
        <div className='about__headshot'><StaticImage src='../images/headshot-angle.svg' alt="illustrated headshot" placeholder='none' /></div>
        My path to frontend development may not have been linear, but my desire to learn and grow has been a constant. I got my start with Mullen (currently known as MullenLowe) as a Traffic Manager where I was surrounded by extraordinary Creative talent and learned by osmosis. As I grew in my craft, I pursued new avenues and opportunities within MullenLowe, including the Studio as a Production Artist for traditional mediums and Production Design for exclusively digital mediums.
        <br />
        <br />
        Today, I am a bit of a rare breed — a Frontend Developer that is half technical with the skills needed to work in a modern development environment and half creative with the ability to bring designs to life. It's been a wild and wonderful ride! 
      </div>
      
    </div>
  </motion.section>
)

export default About