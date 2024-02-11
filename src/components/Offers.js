import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useSpring, animated, useInView  } from 'react-spring';
import { useDarkMode } from '../contexts/DarkModeContext';
import OffersCard from './OffersCard';

export default function Offers() {
  const { isDarkMode } = useDarkMode();
  const cardsTitles = [
    'Story-based Assessment',
    'Tic Analysis and Triggers',
    'Reporting to the Doctor',
    'User-Friendly Interface'
  ];
  const cardInfos = [
    `Experience captivating stories while our system, with the camera active, detects your tics and creates an assessment report using AI.`,
    `Gain insights into tic frequency and potential triggers for a comprehensive report.`,
    `Share valuable objective information with your doctor for personalized treatment adjustments.`,
    `Access TiCare via web and mobile applications for seamless monitoring`
  ];

  const sectionStyle = {
    backgroundColor: isDarkMode ? '#121212' : 'transparent',
    color: isDarkMode ? '#ffff' : '#00000',
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px', 
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

  const cardAnimation = useSpring({
    from: { opacity: 0, transform: 'rotateY(180deg) scale(0.5)' },
    to: delayedInView  ? { opacity: 1, transform: 'rotateY(0deg) scale(1)' }: {opacity: 0, transform: 'rotateY(180deg) scale(0.5)'}, 
    config: { tension: 100}
  });
  

  return (
    <section ref={ref} style={sectionStyle} className="py-5">
      <Container className="text-center">
        <h1 className='pt-4' style={{ fontSize: '2.5rem',  color: (isDarkMode ? 'white' : 'black')}}>What <span style={{ color: (isDarkMode ? '#57cedb' : '#2b8e9a'), fontSize: '2.5rem', fontWeight: '1000' }}>TiCare</span> Offers</h1>
        <Row className="d-flex justify-content-center align-items-stretch">
          {[0, 1, 2, 3].map((index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <animated.div style={{ height: '100%', ...cardAnimation }}>
                <OffersCard
                  cardType={index % 2 === 0 ? 'pri' : 'sec'}
                  cardTitle={cardsTitles[index]}
                  cardInfo={cardInfos[index]}
                />
              </animated.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
