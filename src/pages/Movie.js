import React, { useState } from 'react';
import Layout from './Layout';
import ReactPlayer from 'react-player';
import WebcamVideo from './WebcamVideo';
import { useDarkMode } from '../contexts/DarkModeContext';

function Movie() {
  const { isDarkMode } = useDarkMode();
  const sectionStyle = {
    backgroundColor: isDarkMode ? '#121212' : 'transparent',
    color: isDarkMode ? '#ffff' : '#00000',
    minHeight: '100vh',
    padding: '20px', // Add padding for spacing
  };

  const [captureStatus, setCaptureStatus] = useState('start');

  const updateCaptureStatus = (status) => {
    setCaptureStatus(status);
  };

  return (
    <section style={sectionStyle}>
      <Layout />
      <div className="container">
        <div className="m-5 embed-responsive embed-responsive-16by9">
          {captureStatus === 'start' ? (
            <h3>Press start capture then enjoy your movie</h3>
          ) : (
            <h3>Press stop capture and download your video</h3>
          )}
          <WebcamVideo onCaptureStatusChange={updateCaptureStatus} />
          <ReactPlayer
            className="embed-responsive-item"
            controls
            url="https://www.youtube.com/embed/oaIJNOqY1oQ"
          />
        </div>
      </div>
    </section>
  );
}

export default Movie;
