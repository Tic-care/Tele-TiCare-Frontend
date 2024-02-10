import React from 'react';
import { useSpring, animated } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDarkMode } from '../contexts/DarkModeContext';
import Layout from './Layout';

export default function Report() {
  const { isDarkMode, } = useDarkMode();
  const pageStyle = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const textAnimation = useSpring({
    from: { transform: 'scale(0.8)', opacity: 0 },
    to: async (next) => {
      while (true) {
        await next({ transform: 'scale(1.2)', opacity: 1});
        await next({ transform: 'scale(1)', opacity: 0.8});
      }
    },
    config: { tension: 170, friction: 10 },
  });

  const textStyle = {
    color: (isDarkMode? '#ebd7d7':'#874545'  ),
    fontSize: '3em',
    ...textAnimation,
  };
  return (
    <>
    <div style={{overflow: 'hidden'}}>
    <Layout/>
    <animated.div style={{ ...pageStyle, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: isDarkMode ? '#121212' : 'transparent' }}>
      <animated.h1 className="text-center mb-4" style={textStyle}>Coming Soon</animated.h1>
    </animated.div>
    </div>
    </>
  );
}

