import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import { loginSchema } from '../schemas'; // Assuming you have a login schema defined
import Logo from '../components/Logo';
import MyButton from '../components/MyButton';
import { Link } from 'react-router-dom';

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export default function Login() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: '', 
      password: '',
    },
    validationSchema: loginSchema, 
    onSubmit,
  });

  return (
    <Container className="d-flex flex-column align-items-center" style={{ paddingTop: '100px' }}>
      <Logo />
      <Form style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', width:'500px' }} onSubmit={handleSubmit} autoComplete="off">
        <Row>
          <Col>
            <Form.Group controlId="username"> {/* Change to username */}
              <Form.Label>Username</Form.Label>
              <Form.Control
                value={values.username}
                onChange={handleChange}
                type="text"
                placeholder="Enter your username"
                className={errors.username && touched.username ? 'is-invalid' : ''}
              />
              {errors.username && touched.username && <p className="error">{errors.username}</p>}
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
        </Row>

        <Button style={{ backgroundColor: '#874545', borderColor: '#874545' }} className="m-3" type="submit">
          Login
        </Button>
      </Form>
      <Link to={'/signup'}>
      <MyButton buttonType='pri' buttonName={'Dont have an account? Sign up'}></MyButton>
      </Link>
    </Container>
  );
}
