import React from 'react';
import { useSpring, animated, config, useInView } from 'react-spring';
import { ButtonGroup } from 'react-bootstrap';
import MyButton from './MyButton';
import { useDarkMode } from '../contexts/DarkModeContext';

import Logo from './Logo';
import ToggleThemeIcon from './ToggleThemeIcon';

const LandingHeader = () => {
  const { isDarkMode } = useDarkMode();
  const [ref, ] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px', // Adjust the rootMargin as needed
  });

  
  const springProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    config: config.slow, 
  });

  const sectionStyle = {
    backgroundColor: isDarkMode ? '#121212' : 'transparent',
  };
 
  return (
    <animated.section ref={ref} style={{ ...sectionStyle, ...springProps }}>
     <ToggleThemeIcon/>
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
