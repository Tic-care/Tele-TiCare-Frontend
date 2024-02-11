import React, { useEffect, useState } from 'react';
import { useSpring, animated, useInView } from 'react-spring';
import MyButton from './MyButton';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust the rootMargin as needed
    });

  const [delayedInView, setDelayedInView] = useState(false);

  useEffect(() => {
    // Introduce a delay before starting the animation (1 second delay in this example)
    const timeout = setTimeout(() => {
      setDelayedInView(inView);
    }, 300);

    // Clear the timeout on component unmount or when inView changes
    return () => clearTimeout(timeout);
  }, [inView])

  // const slideInAnimation = useSpring({
  //   opacity: delayedInView ? 1 : 0,
  //   transform: delayedInView ? 'scale(1)' : 'scale(0.5)',
  //   config: { tension: 100, friction: 20 },
  // });
  // You can define easing functions, for example, easeOutExpo and easeInExpo:
  const randomBarsAnimation = useSpring({
    opacity: delayedInView ? 1 : 0,
    height: delayedInView ? '100%' : '0%',
    config: { tension: 100, friction: 20 },
  });
  
  
  

  return (
    <footer ref={ref} style={{ backgroundColor: '#1c5c63' }} className="text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <animated.div style={{ height: '100%', ...randomBarsAnimation }}>
              
              <h4 className="mb-4">Join the TiCare Revolution!</h4>
              <p className="mb-4">
                We're not just an app; we're your partner in understanding and managing tics. TiCare is taking care of you and your tics.
                Whether you're a Patient or Healthcare Provider, join us in this revolutionary journey.
              </p>
              <p>Contact Us at <a href="mailto:Ticare03@gmail.com" className="text-light">Ticare03@gmail.com</a></p>
              <MyButton buttonName={'Join Now'} buttonLink={'/signup'} buttonType='pri' />
            </animated.div>
          </div>
          <div className="col-md-6">
            <animated.div style={{ height: '100%', ...randomBarsAnimation }}>
              <h4 className="mb-4">Developed by:</h4>
              <p>Alaa Yasser</p>
              <p>Mahmoud Hamdy</p>
              <p>Mariam Hossam Eldien</p>
              <p>Mariam Mohammed</p>
              <p className="mb-0">Under the Supervision of Dr. Amira Gaber</p>
            </animated.div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
