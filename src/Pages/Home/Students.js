import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/students/stu-1.jpg';
import img2 from '../../assets/students/stu-2.jpg';
import img3 from '../../assets/students/stu-3.jpg';
import img4 from '../../assets/students/stu-4.jpg';

const Students = () => {
    return (
        <div>
            <section id="success" className="container my-5">
                <div className="row text-center mx-md-5">
                    <div className="col">
                        <h2 className="fs-1 fw-bold pb-2 mt-5 mt-md-0">Meet Our Successful Students</h2>
                        <p className="pb-5">Every successful student has a unique story. That's why we work closely with you to understand your particular interests, needs, and aspirations. No prior experience necessary to get started.</p>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    <div className="col">
                    <div className="card h-100">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">John Watson</h5>
                        <p className="card-text">React Developer</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Jeni Delaney</h5>
                        <p className="card-text">Motion Design</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        <img src={img3} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Mark Don</h5>
                        <p className="card-text">Graphics Designer</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        <img src={img4} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Dayana Calvert</h5>
                        <p className="card-text">Web Developer</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="text-center py-5">
                    <Link to="" className="btn-navy px-5 py-3 fw-bold text-decoration-none">View All</Link>
                </div>
            </section>
        </div>
    );
};

export default Students;