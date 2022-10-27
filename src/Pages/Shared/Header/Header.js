import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { FaMoon, FaUser } from "react-icons/fa";
import './Header.css';
import navLogo from '../../../assets/BackLogo.png';

const Header = () => {
    return (
        <div>
            <Navbar className='base-color navbar-thin'>
                <Container>
                    <Navbar.Text className='text-light ms-3'>
                        backbenchers@info.com
                    </Navbar.Text>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link className='text-light text-decoration-none me-4' to="/login">Login</Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link className='text-light text-decoration-none me-4' to="/register">Register</Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link className='text-light text-decoration-none me-1'><FaMoon /></Link>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <nav className="navbar navbar-expand-lg navbar-wide shadow bg-body">
                <div className="container">
                    <Link className='pb-2' to="/"><img src={navLogo} alt="" width="200px" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-wide-items navbar-nav me-auto mb-2 p-lg-0 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link text-dark" : "nav-link"} to="/home">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link text-dark" : "nav-link"} to="courses">COURSES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link text-dark" : "nav-link"} to="faq">FAQ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link text-dark" : "nav-link"} to="blog">BLOG</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link text-dark pe-0 pt-1" : "nav-link"} to=""><FaUser className='fs-4' /></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;