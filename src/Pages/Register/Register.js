import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Register.css';

const Register = () => {
    const [error, setError] = useState('');
    // const [accepted, setAccepted] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            Navigate('/');
            // handleUpdateUserProfile(name, photoURL);
            // toast.success('Registration Success!!');
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        });
    }

    return (
        <div className='container'>
            <div className='row justify-content-center align-items-center mt-5'>
                <div className='col-md-4 shadow border rounded p-5'>
                    <Form onSubmit={handleSubmit}>
                        <h3 className='text-navy fw-bold'>Register here!</h3>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter your Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                            <Form.Label>User PhotoURL</Form.Label>
                            <Form.Control type="text" name='photoURL' placeholder="Enter your PhotoURL" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter your email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Enter your Password" required />
                        </Form.Group>
                        <p className='text-danger'>{error}</p>
                        <button className='btn-navy w-100' type='submit'>Register</button>
                    </Form>
                    <p className='mt-2'><small>Already have an account? Please <Link to='/login'>Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;