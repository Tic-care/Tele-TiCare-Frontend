import React from 'react'
import { useDarkMode } from '../contexts/DarkModeContext';
import { MdOutlineDarkMode } from 'react-icons/md';

export default function ToggleThemeIcon() {
  
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const iconStyle = {
        position: 'absolute',
        top: 10,
        left: 10,
        color: isDarkMode ? '#ffff' : '#000000',
      };
    return (
        <MdOutlineDarkMode style={iconStyle} fontSize={25} onClick={toggleDarkMode} />
  
  )
}
