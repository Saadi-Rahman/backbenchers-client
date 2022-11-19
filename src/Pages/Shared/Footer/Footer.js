import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebook, FaGithub, FaGoogle, FaHome, FaInstagram, FaLinkedin, FaPhone, FaPrint, FaTwitter } from "react-icons/fa";
import './Footer.css';
import bsIcon from '../../../assets/bs.png';

const Footer = () => {
    return (
        <div className="container-fluid mx-0 px-0 mt-5">
            <footer
                    className="text-center text-lg-start text-white footer-bg-color1"
                    >
                
                <section
                        className="d-flex justify-content-between p-4 base-color"
                        >
                
                <div className="me-5">
                    <span>Get connected with us on social networks:</span>
                </div>
                
                <div>
                    <Link to="" className="text-white me-4"><FaFacebook /></Link>
                    <Link to="" className="text-white me-4"><FaTwitter /></Link>
                    <Link to="" className="text-white me-4"><FaGoogle /></Link>
                    <Link to="" className="text-white me-4"><FaInstagram /></Link>
                    <Link to="" className="text-white me-4"><FaLinkedin /></Link>
                    <Link to="" className="text-white me-4"><FaGithub /></Link>
                </div>
                
                </section>
                
                <section className="">
                <div className="container text-center text-md-start mt-5">
                    
                    <div className="row mt-3">
                    
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <img src={bsIcon} width="30px" alt="" />
                        <h6 className="text-uppercase pt-1 fw-bold">BackBenchers'</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto footer-hr" />
                        <p>
                        You don’t get better at swimming by watching others. Coding is no different. Practice as you learn with live code environments with us.
                        </p>
                    </div>
                   
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        
                        <h6 className="text-uppercase fw-bold">Products</h6>
                        <hr
                            className="mb-4 mt-0 d-inline-block mx-auto footer-bg-color2"
                            />
                        <p>
                        <a href="#!" className="text-white">MDBootstrap</a>
                        </p>
                        <p>
                        <a href="#!" className="text-white">MDWordPress</a>
                        </p>
                        <p>
                        <a href="#!" className="text-white">BrandFlow</a>
                        </p>
                        <p>
                        <a href="#!" className="text-white">Bootstrap Angular</a>
                        </p>
                    </div>
                   
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        
                        <h6 className="text-uppercase fw-bold">Useful links</h6>
                        <hr
                            className="mb-4 mt-0 d-inline-block mx-auto footer-bg-color2"
                            />
                        <p>
                        <a href="#!" className="text-white">Your Account</a>
                        </p>
                        <p>
                        <a href="#!" className="text-white">Become an Affiliate</a>
                        </p>
                        <p>
                        <a href="#!" className="text-white">Shipping Rates</a>
                        </p>
                        <p>
                        <a href="#!" className="text-white">Help</a>
                        </p>
                    </div>
                    
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        
                        <h6 className="text-uppercase fw-bold">Contact</h6>
                        <hr
                            className="mb-4 mt-0 d-inline-block mx-auto footer-bg-color2"
                            />
                        <p><FaHome className='fs-5 me-2' /> New York, NY 10012, US</p>
                        <p><FaEnvelope className='fs-5 me-2' /> backbenchers@info.com</p>
                        <p><FaPhone className='fs-5 me-2' /> + 01 234 567 88</p>
                        <p><FaPrint className='fs-5 me-2' /> + 01 234 567 89</p>
                    </div>
                    
                    </div>
                    
                </div>
                </section>
                
                <div className="text-center p-3 footer-bg-color2">
                    <small>© 2022. All rights reserved by BackBenchers</small>
                </div>
                
            </footer>
        </div>
    );
};

export default Footer;