import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/banner1.jpg';
import img2 from '../../assets/banner2.jpg';
import img3 from '../../assets/banner3.png';
import './Home.css';

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
                <button className='btn-carousel'>Enroll for Free</button>
                <h1 className='banner-title'>Secure Full Stack MEAN Developer</h1>
                <p className='banner-text'>
                    MEAN stack development is a modern approach to building dynamic web applications. It is an open-source JavaScript framework that harnesses four major technologies: MongoDB, Express, Angular, and Node.js. Given the ever-increasing demand for full-stack JavaScript developers, this course will help you master both front-end and back-end development.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <button className='btn-carousel'>Start Guided Project</button>
                <h1 className='banner-title'>Building a Dynamic Web App using PHP & MySQL</h1>
                <p className='banner-text'>
                    In this 1-hour long project-based course, you will learn how to create a simple note-taking web app using PHP and MySQL.  PHP and MySQL enable developing powerful dynamic web pages and applications. They are some of the most widely used technologies in the world right now for developing back-end applications. They allow you to create dynamic content on your webpage and bring it to life.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <button className='btn-carousel'>Enroll for Free</button>
                <h1 className='banner-title'>Introduction to CSE and Programming Specialization</h1>
                <p className='banner-text'>
                    This specialisation covers topics ranging from basic computing principles to the mathematical foundations required for computer science. You will learn fundamental concepts of how computers work, which can be applied to any software or computer system. You will also gain the practical skillset needed to write interactive, graphical programs at an introductory level. 
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;