import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { ButtonGroup } from 'react-bootstrap';
import MyButton from './MyButton';
import logoLight from '../designMatriels/lightLogo.png';
import logoDark from '../designMatriels/darkLogo gded.png';
import { useDarkMode } from '../contexts/DarkModeContext';
import { MdOutlineDarkMode } from 'react-icons/md';

const LandingHeader = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const logoSrc = isDarkMode ? logoDark : logoLight;

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
      <div className="d-flex flex-column align-items-center">
        <img src={logoSrc} alt="Logo" height={'125vh'} />
      </div>
      <div className="d-flex flex-column align-items-center">
        <ButtonGroup>
          <MyButton buttonName={'Join Now'} buttonLink={'/home'} buttonType='pri' />
          <MyButton buttonName={'Login'} buttonLink={'/home'} buttonType='sec' />
        </ButtonGroup>
      </div>
    </animated.section>
  );
};

export default LandingHeader;
