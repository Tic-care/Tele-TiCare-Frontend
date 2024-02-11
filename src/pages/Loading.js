import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  const { isDarkMode } = useDarkMode();

  const loadingPageStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : isDarkMode ? '#121212' : 'transparent',
    color : isDarkMode ? '#ffff' : '#00000'
  };

  return (
    <div style={loadingPageStyle}>
    <AiOutlineLoading3Quarters style={{fontSize: '2em'}} />
    </div>
  );
};

export default Loading;
