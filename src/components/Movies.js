import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import OffersCard from './OffersCard';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const { isDarkMode } = useDarkMode()
  
  const sectionStyle = {
    backgroundColor: isDarkMode ? '#121212' : 'transparent',
    color: isDarkMode ? '#ffff' : '#00000',
  };

  useEffect(() => {
    axios.get('https://freetestapi.com/api/v1/movies')
      .then((res) => {
        console.log(res.data)
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section style={sectionStyle} className="py-5">
      
      <div className="row m-5">  
        <Container className="text-center">
        <Row className="d-flex justify-content-center align-items-stretch">
        {movies.map((movie, id) => (
          <Col xs={12} md={4} lg={3} className='py-2' key={id}>
           <Link style={{textDecoration: 'none'}}  className="card-title" to={{ pathname: `/testfirst/${movie.id}`, state: { movie } }}>
            <OffersCard cardType={id % 2 === 0 ? 'pri' : 'sec'} cardTitle={movie.title} cardInfo={`This is a ${movie.genre} movie, the rating is ${movie.rating}, ${movie.year}`}/>     
            </Link>
          </Col>
        ))}
        </Row>
      </Container>

      </div>
      </section>
  );
}
