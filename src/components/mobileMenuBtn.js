import React from 'react'

const MobileMenuButton = ({ open, toggleMenu }) => {
  return (
    <button 
      aria-label={`${open ? 'close' : 'open'} menu`} 
      className={`mobile-menu ${open ? 'open' : 'closed'}`}
      onClick={() => toggleMenu()}
    >
      <div className='menu-bar menu-bar--top'></div>
      <div className='menu-bar menu-bar--middle'></div>
      <div className='menu-bar menu-bar--bottom'></div>
    </button>
  )
}

export default MobileMenuButton