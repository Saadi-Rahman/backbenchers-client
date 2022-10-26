import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center align-items-center mt-5'>
                <div className='col-md-4 shadow border rounded p-5'>
                    <Form>
                        <h3 className='text-navy fw-bold'>Please Login!!</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <p className='text-success'>Successfully login to the account.</p>
                        <button className='btn-navy' type='submit'>Login</button>
                    </Form>
                    <Button variant="light w-100 mt-2" type="submit">Forgot Password?</Button>
                    <p className='mt-2'><small>New to this website? Please <Link to='/register'>Register</Link> </small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;