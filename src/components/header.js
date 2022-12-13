import * as React from "react"
import { Link } from "gatsby"
import Nav from "./nav"
import Tln from '../images/svg/tln.svg'
import Headroom from 'react-headroom'
// import PropTypes from "prop-types"

const Header = ({ siteTitle, detailPage, location }) => {

  return (
    <>
      <Link to="/" className="logo" aria-label="home">
        <Tln />
      </Link>
      <Headroom>
        <header className={`header ${location.pathname === '/' ? 'home' : 'project'}`}>
          <Nav location={location} />
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
