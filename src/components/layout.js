import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "../styles/layout.scss"
import Socials from "./socials"
import { motion } from "framer-motion"


const Layout = ({ children, detailPage, location }) => {
  return (
    <>
      <Header detailPage={detailPage} location={location}/>
      <Socials />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3
        }}
         className={`${detailPage ? 'detail-pg' : null}`}>
        {children}
      </motion.main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
