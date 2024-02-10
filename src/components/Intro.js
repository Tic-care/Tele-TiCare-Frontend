import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import MyButton from './MyButton';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { FaRibbon } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';

export default function Intro() {

  const colAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-50px)' },
  });

  const iconAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.5)' },
  });

  return (
    <section className=" text-light py-4" style={{ backgroundColor: '#1c5c63' }}>
      <Container>
        <Row>
          <Col md={6}>
            <animated.div style={colAnimation}>
              <Container>
                <h1 className="pt-4" style={{ fontSize: '2.5rem' }}>
                  Discover <span style={{ fontWeight: '1000' }}>TiCare</span> – Your Partner in Tics Assessment and Evaluation!
                </h1>
                <p className="pt-1" style={{ fontSize: '1.2rem', fontWeight: 'thin' }}>
                  Experience a groundbreaking solution for Tourette's Syndrome with <span>TiCare</span>!
                  <br />
                  <span>TiCare</span> is your comprehensive, user-friendly app designed to understand and manage tics effectively, with the help of your Dr.<br />
                  Whether you're a Patient or Healthcare Provider, join us in this revolutionary journey.
                </p>
                <MyButton buttonName={'Join Now'} buttonLink={'/signup'} buttonType="pri" />
              </Container>
            </animated.div>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-end">
            <Row xs={12}>
              <Col xs={4} className="mb-2">
                <animated.div style={iconAnimation}>
                  <FaRibbon style={{ fontSize: '8rem', color: '#f2f2f2' }} />
                </animated.div>
              </Col>
              <Col xs={4} className="mb-2">
                <animated.div style={iconAnimation}>
                  <HiOutlineClipboardDocumentList style={{ fontSize: '8rem', color: '#f2f2f2' }} />
                </animated.div>
              </Col>
              <Col xs={4} className="mb-2">
                <animated.div style={iconAnimation}>
                  <AiFillLike style={{ fontSize: '8rem', color: '#f2f2f2' }} />
                </animated.div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
