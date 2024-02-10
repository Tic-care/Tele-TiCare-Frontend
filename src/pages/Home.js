import React from 'react'
import Movies from '../components/Movies'
import Layout from './Layout'
import { useDarkMode } from '../contexts/DarkModeContext';
import { useEffect, useState } from 'react';
import { getSessionData } from '../apiServices/sessionService';

export default function Home() {
  const { isDarkMode } = useDarkMode()
  const sectionStyle = {
    backgroundColor: isDarkMode ? '#121212' : 'transparent',
    color: isDarkMode ? '#ffff' : '#00000',
  };

  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    getSessionData()
      .then(data => setSessions(data))
      .catch(error => {
        // Handle errors
      });
  }, []);
  console.log(sessions)
  return (
    <>
    <section style={sectionStyle}>
    <Layout/>
    <Movies/>
    </section>
    </>
  )
}
