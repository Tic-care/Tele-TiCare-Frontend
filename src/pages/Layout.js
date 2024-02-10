import React from 'react'
import MyNavbar from '../components/MyNavbar'
import Logo from '../components/Logo'
import { MdOutlineDarkMode } from 'react-icons/md'
import { useDarkMode } from '../contexts/DarkModeContext';
// import { config, useSpring, animated } from 'react-spring';

export default function Layout() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  // const springProps = useSpring({
  //   opacity: 1,
  //   transform: 'translateY(0)',
  //   from: { opacity: 0, transform: 'translateY(-50px)' },
  //   config: config.slow, 
  // });

  const iconStyle = {
    position: 'absolute',
    top: 10,
    left: 10,
    color: isDarkMode ? '#ffff' : '#000000',
  };

  return (
    <>
    <section style={{backgroundColor: isDarkMode ? '#121212' : 'transparent',}}>   
    {/* <animated.section style={{ ...sectionStyle, ...springProps }}> */}
    <MdOutlineDarkMode style={iconStyle} fontSize={25} onClick={toggleDarkMode} />
    <Logo/>
    <MyNavbar/>
    {/* </animated.section> */}
    </section>

    </>
  )
}
