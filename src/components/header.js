import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import Nav from "./nav"
import Tln from '../images/svg/tln.svg'
import Headroom from 'react-headroom'
import Socials from "./socials"
import MobileMenuButton from "./mobileMenuBtn"
// import PropTypes from "prop-types"

const Header = ({ siteTitle, detailPage, location }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    menuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
    menuOpen ? document.body.style.touchAction = 'none' : document.body.style.touchAction = 'auto';
  }, [menuOpen])

  return (
    <>
      <Link to="/" className="logo" aria-label="home">
        <Tln />
      </Link>
      <Socials resume/>
      <Headroom>
        <header className={`header ${location.pathname === '/' ? 'home' : 'project'}`}>
          <Nav location={location} mobileOpen={menuOpen} toggleMenu={toggleMenu}/>
          <MobileMenuButton open={menuOpen} toggleMenu={toggleMenu}/>
        </header>
      </Headroom>
    </>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
