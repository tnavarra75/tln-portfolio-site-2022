import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import DarkToggleAlt from "./darkToggleAlt"
import Socials from "./socials"

const Nav = ({ location, mobileOpen, toggleMenu }) => {
  const [activeId, setActiveId] = useState(`test`)
  const mobileNav = useRef(null)
  // const onClickOutside = () => toggleMenu();

  useEffect(() => {
    const itemIds = ["intro", "projects", "skills", "about"]

    if (location.pathname === "/") {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id)
            }
          })
        },
        { rootMargin: `0% 0% -100% 0%` }
      )

      itemIds.forEach(id => {
        observer.observe(document.getElementById(id))
      })

      return () => {
        if (!location.pathname === "/") {
          itemIds.forEach(id => {
            observer.unobserve(document.getElementById(id))
          })
        }
      }
    }
  }, [location?.pathname])

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (mobileNav.current && mobileOpen) {
  //       onClickOutside && onClickOutside(event);
  //     }
  //   }

  //   document.addEventListener('click', handleClickOutside, true);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside, true);
  //   }
  // },[])

  return (
    <nav className="nav">
      <ul
        ref={mobileNav}
        className={`nav__items ${mobileOpen ? "open" : "closed"}`}
      >
        <li className="nav__item">
          <Link
            to="/#projects"
            className={`nav__link ${activeId === "projects"}`}
            onClick={() => toggleMenu()}
            onKeyDown={() => toggleMenu()}
          >
            projects
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/#skills"
            className={`nav__link ${activeId === "skills" ? "active" : ""}`}
            onClick={() => toggleMenu()}
            onKeyDown={() => toggleMenu()}
          >
            skills
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/#about"
            className={`nav__link ${activeId === "about" ? "active" : ""}`}
            onClick={() => toggleMenu()}
            onKeyDown={() => toggleMenu()}
          >
            about me
          </Link>
        </li>
        <li className="nav__item nav__item--socials">
          <a
            className="nav__link"
            href="/TL_resume_2022.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => toggleMenu()}
            onKeyDown={() => toggleMenu()}
          >
            résumé
          </a>
        </li>
        <li className="nav__item nav__link nav__item--socials">
          get in touch
          <Socials resume={false} />
        </li>
      </ul>
      <DarkToggleAlt />
    </nav>
  )
}

export default Nav
