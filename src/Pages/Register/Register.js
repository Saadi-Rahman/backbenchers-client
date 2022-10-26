import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center align-items-center mt-5'>
                <div className='col-md-4 shadow border rounded p-5'>
                    <Form>
                        <h3 className='text-navy fw-bold'>Register here!</h3>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <p className='text-danger'></p>
                        <p className='text-success'>User Created Successfully.</p>
                        <button className='btn-navy' type='submit'>Register</button>
                    </Form>
                    <p className='mt-2'><small>Already have an account? Please <Link to='/login'>Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;