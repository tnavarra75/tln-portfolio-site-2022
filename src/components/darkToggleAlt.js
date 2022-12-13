import * as React from 'react'
import { useState, useLayoutEffect } from 'react'
import DarkMode from '../images/svg/dark_mode.svg'
import LightMode from '../images/svg/light_mode.svg'
import { getTheme, setPreferredTheme } from '../utils/darkmode'

const DarkToggleAlt = () => {

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
    <div className='mode-switch-alt'>
      <input id='toggle' type="checkbox" className='toggle-input' onChange={() => handleMode()}/>
      <label htmlFor='toggle' className='toggle-label'>
        <div className='toggle-ball'>
          {isDarkMode
            ? <DarkMode />
            : <LightMode />
          }
        </div>
      </label>
    </div>
    
    // <button
    //   className='mode-switch mode-switch-alt'
    //   onClick={() => handleMode()}
    // >
    //   {!isDarkMode
    //     ? <DarkMode />
    //     : <LightMode />
    //   }
    // </button>
  )
}

export default DarkToggleAlt