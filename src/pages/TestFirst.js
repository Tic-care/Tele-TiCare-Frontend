import React from 'react';
import Layout from './Layout'
import Webcam from 'react-webcam';
import { Link, useParams } from 'react-router-dom';
import MyButton from '../components/MyButton';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function TestFirst() {
  const { id } = useParams();
  const { isDarkMode } = useDarkMode()
  const sectionStyle = {
    backgroundColor: isDarkMode ? '#121212' : 'transparent',
    color: isDarkMode ? '#ffff' : '#00000',
  };
  return (
    <>
    <section style={sectionStyle}>
      <Layout/>
        <div className="row" >
          <div className="col-md-8 offset-md-3">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Test Your Camera First</h2>
                <h4 className="card-subtitle mb-4">Do you see yourself? If yes, press the button</h4>
                <Webcam className="mb-4"/>
                <Link to={`/movie/${id}`}>
                  <MyButton buttonType='sec' buttonName={'Proceed to my movie'} Link to={`/movie/${id}`}/>
                </Link>
                <p className="mt-3">I accept to be recorded by proceeding</p>
              </div>
            </div>
          </div>
        </div>
        </section>
    </>
  );
}
