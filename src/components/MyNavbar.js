import React from 'react';
import { ButtonGroup } from 'react-bootstrap'; 
import MyButton from './MyButton';

const MyNavbar = () => {
  return (
    <div className="d-flex flex-column align-items-center">
        <ButtonGroup>
          <MyButton buttonName={'My Profile'} buttonLink={'/profile'} buttonType='pri' />
          <MyButton buttonName={'Movies'} buttonLink={'/movies'} buttonType='pri' />
          <MyButton buttonName={'Reports'} buttonLink={'/commingSoon'} buttonType='pri' />
          <MyButton buttonName={'Education'} buttonLink={'/commingSoon'} buttonType='pri' />
          <MyButton buttonName={'Excercises'} buttonLink={'/commingSoon'} buttonType='pri' />
          <MyButton buttonName={'Sign Out'} buttonLink={'/'} buttonType='pri' />
        </ButtonGroup>
      </div>
  );
};

export default MyNavbar;
