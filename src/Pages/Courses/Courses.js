import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import CoursesLeftNav from './CoursesLeftNav';


const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div className='container my-5'>
            <div className="row g-0">
                <div className="col-lg-3">
                    <CoursesLeftNav></CoursesLeftNav>
                </div>
                <div className="col-lg-9">
                    <h2 className="text-navy fs-1 fw-bold mb-3">Learn without limits with BackBenchers!</h2>
                    <p>You don’t get better at swimming by watching others. Coding is no different. Practice as you learn with live code environments inside your browser. Start, switch, or advance your career with more than 500 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                    <h3>All Courses {allCourses.length}</h3>

                    <Row xs={1} md={2} lg={3} className="g-3">
                        {
                            allCourses.map(course => <CourseSummaryCard
                                key={course._id}
                                course={course}
                            ></CourseSummaryCard>)
                        }
                    </Row>    
                </div>
            </div>
        </div>
    );
};

export default Courses;