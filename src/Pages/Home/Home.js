import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import img1 from '../../assets/banner1.jpg';
import img2 from '../../assets/banner2.jpg';
import img3 from '../../assets/banner3.png';
import img4 from '../../assets/banner5.png';
import Faq from '../Faq/Faq';
import './Home.css';
import Students from './Students';

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 className='banner-title'>Secure Full Stack MEAN Developer</h1>
                    <p className='banner-text'>
                        MEAN stack development is a modern approach to building dynamic web applications. It is an open-source JavaScript framework that harnesses four major technologies: MongoDB, Express, Angular, and Node.js. Given the ever-increasing demand for full-stack JavaScript developers, this course will help you master both front-end and back-end development.
                    </p>
                    <button className='btn-carousel'>Enroll for Free</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1 className='banner-title'>Building a Dynamic Web App using PHP & MySQL</h1>
                    <p className='banner-text'>
                        In this 1-hour long project-based course, you will learn how to create a simple note-taking web app using PHP and MySQL.  PHP and MySQL enable developing powerful dynamic web pages and applications. They are some of the most widely used technologies in the world right now for developing back-end applications. They allow you to create dynamic content on your webpage and bring it to life.
                    </p>
                    <button className='btn-carousel'>Start Guided Project</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1 className='banner-title'>Introduction to CSE and Programming Specialization</h1>
                    <p className='banner-text'>
                        This specialisation covers topics ranging from basic computing principles to the mathematical foundations required for computer science. You will learn fundamental concepts of how computers work, which can be applied to any software or computer system. You will also gain the practical skillset needed to write interactive, graphical programs at an introductory level. 
                    </p>
                    <button className='btn-carousel'>Enroll Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='container py-md-5 my-5'>
                <div className="row g-0">
                    <div className="col-lg-6 p-5 d-flex flex-column justify-content-center">
                        <h2 className="text-navy fs-1 fw-bold mb-3">Learn without limits with BackBenchers!</h2>
                        <p>With the advancement of technology and the availability of it to the people, online learning has become a learning reality for everybody. Whether a student or a professional may be in need of some specific and special education that is not always possible to attain physically. <br /><br /> Practice as you learn with live code environments inside your browser. Start, switch, or advance your career with more than 500 courses, Professional Certificates, and degrees from world-class universities and companies.</p>

                        <div className="my-4">
                            <Link to="/courses" className="btn-navy px-5 py-3 fw-bold text-decoration-none">Get Started</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img src={img4} className="image-fluid w-100 h-auto" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <Students></Students>
            <Faq></Faq>
        </div>
    );
};

export default Home;