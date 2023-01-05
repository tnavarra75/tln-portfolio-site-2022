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
        My path to frontend development may not have been linear, but my desire to learn and grow has been a constant. My first job out of college was in project management, my formal title was "traffic manager". Cue the comments about what the heck did that mean. Did I spend four years in college to learn how to direct cars? No dad... 
        <br />
        <br />
        I quickly found myself wanting to do the work I was managing so I taught myself the programs and convinced the studio manager to take a shot on me. Years later I can still cut foam core like a pro and have produced graphics for a wide variety of mediums. 
        <br />
        <br />
        Over the years I developed an interest in code. I often contributed to the development group building emails and landing pages. In Jan of 2019 I was given the opportunity to spend six months doing development full time. That time solidified my desire to make the transition and once again I convinced a manager to take a chance on me. While my title didn’t formally change until Jan of 2021 I have been working with the development group full time since July of 2020. 
      </div>
      
    </div>
  </motion.section>
)

export default About