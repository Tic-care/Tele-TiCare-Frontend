import React from 'react'
import MyNavbar from '../components/MyNavbar'
import Logo from '../components/Logo'
import { useDarkMode } from '../contexts/DarkModeContext';
import ToggleThemeIcon from '../components/ToggleThemeIcon';
// import { config, useSpring, animated } from 'react-spring';

export default function Layout() {
  const { isDarkMode } = useDarkMode();
  // const springProps = useSpring({
  //   opacity: 1,
  //   transform: 'translateY(0)',
  //   from: { opacity: 0, transform: 'translateY(-50px)' },
  //   config: config.slow, 
  // });



  return (
    <>
    <section style={{backgroundColor: isDarkMode ? '#121212' : 'transparent',}}>   
    {/* <animated.section style={{ ...sectionStyle, ...springProps }}> */}
    <ToggleThemeIcon/>
    <Logo/>
    <MyNavbar/>
    {/* </animated.section> */}
    </section>

    </>
  )
}
