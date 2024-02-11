import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button , Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import { signupSchema } from '../schemas';
import Logo from '../components/Logo'
import { Link } from 'react-router-dom';
import MyButton from '../components/MyButton';
// import axios from 'axios';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import  {getDatabase} from "firebase/database"
import { ref, set } from 'firebase/database';
import { useDarkMode } from '../contexts/DarkModeContext';
import ToggleThemeIcon from '../components/ToggleThemeIcon';



const SignUp = () => {
 
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
  const auth = getAuth();
  const db = getDatabase();


  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      gender:"",
      email: "",
      about:"",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values, actions) => {
      try {
        const { user } = await createUserWithEmailAndPassword(auth, values.email, values.password);

        const reference = ref(db, 'users/'+ user.uid)
        set(reference,{
          userId: user.uid,
                firstName: values.firstName,
                lastName: values.lastName,
                about: values.about,
                age: values.age,
                email: values.email,
                gender: values.gender
      
        })

      console.log('User added to Firestore:', db);

      } catch (error) {
        console.error('Error registering user:', error.response ? error.response.data : error.message);
        // Handle error, e.g., display an error message to the user
      }
    }
  });  return (
    <Container className="d-flex flex-column align-items-center" style={{ paddingTop: '100px'}} >
    <ToggleThemeIcon/>
   <Logo/>
  <Form style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}  onSubmit={handleSubmit} autoComplete="off">
    <Row>
      <Col>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={values.firstName}
            onChange={handleChange}
            type="text"
            placeholder="Enter your first name"
            className={errors.firstName&& touched.firstName ? 'is-invalid' : ''}
          />
           {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={values.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Enter your last name"
            className={errors.lastName && touched.lastName ? 'is-invalid' : ''}
          />
          {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            value={values.age}
            onChange={handleChange}
            type="number"
            placeholder="Enter your age"
            className={errors.age && touched.age ? 'is-invalid' : ''}
          />
          {errors.age && touched.age && <p className="error">{errors.age}</p>}
        </Form.Group>
      </Col>
    </Row>
    <Row>
    <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        <Form.Control
          as="select"
          value={values.gender}
          onChange={handleChange}
          className={errors.gender && touched.gender ? 'is-invalid' : ''}
        >
          <option value="" label="Select your gender" />
          <option value="male" label="Male" />
          <option value="female" label="Female" />
        </Form.Control>
        {errors.gender && touched.gender && <p className="error">{errors.gender}</p>}
      </Form.Group>
      </Row>
    <Row>
      <Col>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={values.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            className={errors.email && touched.email ? 'is-invalid' : ''}
          />
          {errors.email && touched.email && <p className="error">{errors.email}</p>}
        </Form.Group>
      </Col>
    </Row>
    <Row>
    <Form.Group controlId="about">
          <Form.Label>About</Form.Label>
          <Form.Control
            value={values.about}
            onChange={handleChange}
            type="text"
            placeholder="Enter your tics history"
            className={errors.about && touched.about ? 'is-invalid' : ''}
          />
          {errors.about && touched.about && <p className="error">{errors.about}</p>}
        </Form.Group>
    </Row>
    <Row>
      <Col>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={values.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter your password"
            className={errors.password && touched.password ? 'is-invalid' : ''}
          />
          {errors.password && touched.password && <p className="error">{errors.password}</p>}
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            value={values.confirmPassword}
            onChange={handleChange}
            type="password"
            placeholder="Re-enter your password"
            className={errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ''}
          />
          {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </Form.Group>
      </Col>
    </Row>
    
    <Button  style={{backgroundColor: '#874545', borderColor:'#874545'}} className='m-3'  type="submit">
      Sign up
    </Button>
    
  </Form>
  <Link to={'/login'}>
      <MyButton buttonType='pri' buttonName={'have an account? Login'}></MyButton>
  </Link>
</Container>

  )
};
export default SignUp;
