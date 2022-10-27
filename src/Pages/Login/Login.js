import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle  } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, providerLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
            // toast.success('Login Success!!');
        })
        .catch(error => console.error(error));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/');
            setError('');
            navigate(from, {replace: true});
            // toast.success('Login Success!!');
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
    }

    return (
        <div className='container'>
            <div className='row justify-content-center align-items-center mt-5'>
                <div className='col-md-4 shadow border rounded p-5'>
                    <Form onSubmit={handleSubmit}>
                        <h3 className='text-navy fw-bold'>Please Login!!</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <button className='btn-navy w-100 mb-1' type='submit'>Login</button>
                    </Form>
                    <p className='text-danger'>{error}</p>
                    <hr className="d-inline-block mx-auto w-100" />
                    <Button onClick={handleGoogleSignIn} variant="outline-primary w-100" type="submit"><FaGoogle className='me-1' /> Continue with Google</Button>
                    <Button variant="outline-dark w-100 mt-2" type="submit"><FaGithub className='me-1' /> Continue with GitHub</Button>
                    <p className='mt-2'><small>New to this website? Please <Link to='/register'>Register</Link> </small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;