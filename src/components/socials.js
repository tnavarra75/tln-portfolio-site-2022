import * as React from 'react'
import Github from '../images/svg/github.svg'
import LinkedIn from '../images/svg/linked-in.svg'
import Email from '../images/svg/email-icon.svg'
import Resume from '../images/svg/document-icon.svg'

const Socials = () => (
  <ul className="socials">
    <li className='social email'>
      <a href='mailto: tnavarra75@gmail.com' target="_blank" rel="noreferrer" aria-label="email" >
        <Email />
      </a>
    </li>
    <li className='social linked-in'>
      <a href='https://www.linkedin.com/in/terri-navarra-03378031/' target="_blank" rel="noreferrer" aria-label="linkedIn">
        <LinkedIn />
      </a>
    </li>
    <li className='social github'>
      <a href='https://github.com/tnavarra75' target="_blank" rel="noreferrer" aria-label="github">
        <Github />
      </a>
    </li>
    <li className='social resume'>
      <a href='/static/TL_resume_2022.pdf' target="_blank" rel="noreferrer" aria-label="resume">
        <Resume />
      </a>
    </li>
  </ul>
)

export default Socials