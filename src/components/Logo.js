import React from 'react'
import logoLight from '../designMatriels/lightLogo.png';
import logoDark from '../designMatriels/darkLogo gded.png';
import { useDarkMode } from '../contexts/DarkModeContext';
import { Link } from 'react-router-dom';

export default function Logo() {
    const { isDarkMode, } = useDarkMode();

    const logoSrc = isDarkMode ? logoDark : logoLight;
    return (
    
    <div className="d-flex flex-column align-items-center">
        <Link to={{ pathname: `/`}}> 
        <img src={logoSrc} alt="Logo" height={'125vh'} />
        </Link>
      </div>
  )
}
