import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const ReadyToJoin = () => {
    return (
        <div>
            <section className="container-fluid bg-banner-comon px-0 custom-margin">
                <div className='mask-comon'>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-12 col-lg-10">
                                <h1 className="fw-bold text-white">Ready to join?</h1>
                                <p className="text-white">Practice as you learn with live code environments inside your browser. Start your career with more than 500 courses, Professional Certificates, and degrees from world-class universities and companies. Take the next step toward your personal and professional goals with BackBenchers. Join now to receive personalized recommendations from the full BackBenchers catalog.</p>

                                <div className="pt-3">
                                    <Link to="/register" className="btn btn-outline-light btn-lg px-4 fw-semibold text-decoration-none">Register Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReadyToJoin;