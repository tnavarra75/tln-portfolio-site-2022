import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
// import Headshot from '../images/headshot-angle.svg'

const About = () => (
  <section id="about" className='about container' aria-label='about'>
    <h2 className='section-header section-header--about'><span className='section-header__text'>my story</span></h2>
    <h3 className='about__subhead'>/ the journey to dev</h3>
    <div>
      <div className='about__text'>
        
        <div className='about__headshot'><StaticImage src='../images/headshot-angle.svg' alt="illustrated headshot" placeholder='none' /></div>
        When I graduated from high school graphic art programs were not widespread and I didn’t think I could make a living pursuing art so I went to a traditional university. I studied communications (with a minor in business) and did a couple internships in account services. Upon graduation I was hired by the head of Creative Services at Mullen to help the traffic, production and art production departments. I spent two years as a traffic manager — wishing I could be doing the work I was managing. I asked for IT to put the Adobe Creative Suite on my iMac, got the Quark Bible for Christmas and taught myself the programs. I was fortunate to be offered a position in the studio with no experience — I don’t think the studio manager realized just how little I knew! Over the years in the studio I worked on a wide range of mediums. I’ve done everything from supporting pitches to preparing files for print, direct-mail, OOH and station dominations.
        <br />
        <br />
        Five years ago I made the transition to senior digital production designer. I primarily work on emails, banners, social posts, landing pages and sites. I also do work for our development group, coding emails and landing pages. Currently I’m working full time with the development group while a co-op fills my production design role.
      </div>
      
    </div>
  </section>
)

export default About