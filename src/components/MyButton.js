import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDarkMode } from '../contexts/DarkModeContext';


export default function MyButton({ buttonName, buttonLink, buttonType = 'pri' }) {
  const { isDarkMode,  } = useDarkMode();
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? (buttonType === 'pri' ? (isDarkMode? '#874545' : '#b75757') : (isDarkMode? '#186860' : '#2b8e9a') ) : (buttonType === 'pri' ?  (isDarkMode? '#ebd7d7' : '#984141') :  (isDarkMode? '#68ddd1' :  '#1f7a88')),
    borderColor:  isHovered ? (buttonType === 'pri' ? (isDarkMode? '#874545' : '#b75757') : (isDarkMode? '#186860' : '#2b8e9a') ) : (buttonType === 'pri' ?  (isDarkMode? '#ebd7d7' : '#984141') :  (isDarkMode? '#68ddd1' :  '#1f7a88')),
    color: isDarkMode? '#000000' : '#ffffff',
  };

  return (
    <Button
      className={`m-3`}
      style={buttonStyle}
      href={buttonLink}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {buttonName}
    </Button>
  );
}
