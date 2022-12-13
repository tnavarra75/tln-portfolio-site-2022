import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import DarkToggle from './darkToggle'
import DarkToggleAlt from './darkToggleAlt'

const Nav = ({ location }) => {
  
  const [activeId, setActiveId] = useState(`test`);

  useEffect(() => {
    const itemIds = ['intro', 'projects', 'skills', 'about'];

    if (location.pathname === '/') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: `0% 0% -100% 0%` }
      );

      itemIds.forEach((id) => {
        observer.observe(document.getElementById(id));
      });

      return () => {
        if (!location.pathname === '/') {
          itemIds.forEach(id => {
            observer.unobserve(document.getElementById(id));
          })
        }
      }
    }
  }, [location?.pathname]);

  return (
    <nav className='nav'>
      <ul className='nav__items'>
        <li className="nav__item">
          <Link 
            to="/#projects" 
            className={`nav__link ${activeId === 'projects' || location?.pathname.includes('projects') ? 'active' : ''}`}>
              projects
          </Link>
        </li>
        <li className='nav__item'>
          <Link 
            to="/#skills" 
            className={`nav__link ${activeId === 'skills' ? 'active' : ''}`}>
              skills
          </Link>
        </li>
        <li className='nav__item'>
          <Link 
            to="/#about" 
            className={`nav__link ${activeId === 'about' ? 'active' : ''}`}>
              my story
          </Link>
        </li>
      </ul>
      <DarkToggleAlt />
    </nav>
  )
}

export default Nav