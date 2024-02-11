import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from './Layout';
import OffersCard from '../components/OffersCard';
import { useDarkMode } from '../contexts/DarkModeContext';
import { checkLoginStatus } from '../firebase/AuthFunctions';
import { getUserData } from '../firebase/FirestoreFunctions';

function ProfilePage() {
  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check login status
    const unsubscribe = checkLoginStatus(async (user) => {
      if (user) {
        // User is logged in, get user data
        const data = await getUserData(user.uid);
        setUserData(data);
      } else {
        // No user is logged in, handle accordingly
        setUserData(null);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  
  
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.backgroundColor = isDarkMode ? '#121212' : 'transparent';
    body.style.color = isDarkMode ? '#ffff' : '#00000';

    return () => {
      body.style.backgroundColor = '';
      body.style.color = '';
    };
  }, [isDarkMode]);

  return (
    <div>
      <Layout />
      { userData&&
     ( <Container className="my-4">
        <Row className="justify-content-center">
          <Col md={8} lg={8}>
            <OffersCard
              cardType='pri'
              cardTitle={`${userData.firstName} ${userData.lastName}`}
              cardInfo={`${userData.age} years old, ${userData.gender}, ${userData.email}`}
              isFixedHeight={false}
            />
          </Col>
         
        </Row>
        {userData.about&& (<Row className="mt-4 justify-content-center">
          <Col md={8}>
            <OffersCard
              cardType='pri'
              cardTitle={'About'}
              isFixedHeight={false}
              // cardInfo={`Sought help for increasing facial and vocal tics that began at 12, impacting social and work life. Despite prior behavioral therapy, they hope to manage symptoms through a multidisciplinary approach, emphasizing improved daily functioning and reduced embarrassment. A clinical examination confirmed Tourette's syndrome, prompting a treatment plan integrating therapy and potential medication.`}
            cardInfo={`${userData.about}`}
            />
          </Col>
        </Row>)}
        <Row className="mt-4 justify-content-center">
          <Col md={4}>
            <OffersCard
              cardType='pri'
              isTitle={false}
              cardInfo={`Number of sessions finished: 5`}
              isFixedHeight={false}
            />
          </Col>
          <Col md={4}>
            <OffersCard
              cardType='pri'
              isTitle={false}
              cardInfo={`Number of hours: 9`}
              isFixedHeight={false}
            />
          </Col>
        </Row>
      </Container>)
      }
    </div>
  );
}

export default ProfilePage;
