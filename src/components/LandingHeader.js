import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { ButtonGroup } from 'react-bootstrap';
import MyButton from './MyButton';
import { useDarkMode } from '../contexts/DarkModeContext';
import { MdOutlineDarkMode } from 'react-icons/md';
import Logo from './Logo';

const LandingHeader = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  
  const springProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    config: config.slow, 
  });

  const sectionStyle = {
    backgroundColor: isDarkMode ? '#121212' : 'transparent',
  };
  const iconStyle = {
    position: 'absolute',
    top: 10,
    left: 10,
    color: isDarkMode ? '#ffff' : '#000000',
  };

  return (
    <animated.section style={{ ...sectionStyle, ...springProps }}>
      <MdOutlineDarkMode style={iconStyle} fontSize={25} onClick={toggleDarkMode} />
      <Logo/>
      <div className="d-flex flex-column align-items-center">
        <ButtonGroup>
          <MyButton buttonName={'Join Now'} buttonLink={'/signup'} buttonType='pri' />
          <MyButton buttonName={'Login'} buttonLink={'/login'} buttonType='sec' />
        </ButtonGroup>
      </div>
    </animated.section>
  );
};

export default LandingHeader;
