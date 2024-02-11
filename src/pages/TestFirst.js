import React from 'react';
import Layout from './Layout';
import Webcam from 'react-webcam';
import { Link, useParams } from 'react-router-dom';
import MyButton from '../components/MyButton';
import { useDarkMode } from '../contexts/DarkModeContext';
import { Col, Row } from 'react-bootstrap';

export default function TestFirst() {
  const { id } = useParams();
  const { isDarkMode } = useDarkMode();

  const sectionStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    color: isDarkMode ? '#ffff' : '#00000',
    minHeight: '100vh',
  };

  const cardStyle = {
    backgroundColor: isDarkMode ? '#1f1f1f' : '#f8f9fa',
    color: isDarkMode ? '#ffff' : '#00000',
    width: '90%', 
    margin: 'auto', 
    borderRadius: '10px', 
    padding: '20px', 
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
  };

  return (
    <>
      <Layout />
      <section style={sectionStyle} className="d-flex align-items-center justify-content-center">
        <Row>
          <Col>
            <div style={cardStyle} className="card">
              <div className="card-body">
                <h2 className="card-title">Test Your Camera First</h2>
                <h4 className="card-subtitle mb-4">Do you see yourself? If yes, press the button</h4>
                <div className="d-flex justify-content-center mb-4">
                  <Webcam />
                </div>
                <Link to={`/movie/${id}`}>
                  <MyButton buttonType="sec" buttonName={'Proceed to my movie'} Link to={`/movie/${id}`} />
                </Link>
                <p className="mt-3">I accept to be recorded by proceeding</p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}
