import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button , Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import { signupSchema } from '../schemas';
import Logo from '../components/Logo'
import { Link } from 'react-router-dom';
import MyButton from '../components/MyButton';
import axios from 'axios';


const onSubmit = async (values, actions) => {
            try {
                const response = await axios.post(' http://127.0.0.1:5000/register', values);
                console.log(response.data);
                // Handle success, e.g., show a success message or redirect to another page
            } catch (error) {
                console.error('Error registering user:', error);
                // Handle error, e.g., display an error message to the user
            } finally {
                actions.setSubmitting(false);
            }
      
};

export default function SignUp() {
  const {
      values,
      errors,
      touched,
      // isSubmitting,
      // handleBlur,
      handleChange,
      handleSubmit,
    } = useFormik({
      initialValues: {
        firstName:"",
        lastName:"",
        age: "",
        history:"",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: signupSchema, onSubmit
    });
  console.log(values)
  
  console.log(errors)
  return (
    <Container className="d-flex flex-column align-items-center" style={{ paddingTop: '100px' }} >
   <Logo/>
  <Form style={{  border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }} onSubmit={handleSubmit} autoComplete="off">
    <Row>
      <Col>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={values.firstName}
            onChange={handleChange}
            type="text"
            placeholder="Enter your first name"
            className={errors.firstName&& touched.email ? 'is-invalid' : ''}
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
}
