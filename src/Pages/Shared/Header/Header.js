import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { FaMoon, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import './Header.css';
import navLogo from '../../../assets/BackLogo.png';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch(error => console.error(error))
    }

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
                            <li className='nav-item'>
                                {
                                    user?.uid ?
                                    <>
                                        <OverlayTrigger
                                            delay={{ hide: 400, show: 200 }}
                                            overlay={(props) => (
                                            <Tooltip {...props}>{user?.displayName}</Tooltip>
                                            )}
                                            placement="bottom"
                                            ><Image className='ms-2' style={{width: '35px'}} roundedCircle src={user.photoURL} alt="img"></Image>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            delay={{ hide: 400, show: 200 }}
                                            overlay={(props) => (
                                            <Tooltip {...props}>Logout</Tooltip>
                                            )}
                                            placement="bottom"
                                            ><Button onClick={handleLogOut} variant='outline-dark mb-5 mb-lg-0 ms-4'><FaSignOutAlt className='mb-1' /></Button>
                                        </OverlayTrigger>
                                    </>
                                    :
                                    <>
                                        <OverlayTrigger
                                            delay={{ hide: 400, show: 200 }}
                                            overlay={(props) => (
                                            <Tooltip {...props}>User</Tooltip>
                                            )}
                                            placement="bottom"
                                            ><Button variant="ms-1"><FaUser className='fs-4' /></Button>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            delay={{ hide: 400, show: 200 }}
                                            overlay={(props) => (
                                            <Tooltip {...props}>Login</Tooltip>
                                            )}
                                            placement="bottom"
                                            ><Link to='/login' className='btn btn-outline-dark  mb-5 mb-lg-0 ms-3'><FaSignInAlt className='mb-1' /></Link>
                                        </OverlayTrigger>
                                    </>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;