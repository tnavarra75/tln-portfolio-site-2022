import * as React from 'react'
import { useState, useLayoutEffect } from 'react'
import DarkMode from '../images/svg/dark_mode.svg'
import LightMode from '../images/svg/light_mode.svg'
import { getTheme, setPreferredTheme } from '../utils/darkmode'

const DarkToggle = () => {

  const [isDarkMode, setDarkMode] = useState(getTheme() === 'dark');
  const [hasMounted, setHasMounted] = useState(false);

  useLayoutEffect(() => {
    setHasMounted(true);
  },[])

  const handleMode = () => {
    setDarkMode(!isDarkMode);
    setPreferredTheme(isDarkMode ? 'light' : 'dark');
  }

  if (!hasMounted) {
    return <div style={{ width: 50 }} />;
  }

  return (
    <button
      className='mode-switch'
      onClick={() => handleMode()}
    >
      {!isDarkMode
        ? <DarkMode />
        : <LightMode />
      }
    </button>
  )
}

export default DarkToggle