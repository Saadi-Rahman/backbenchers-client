import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const Category = () => {
    const courseCategory = useLoaderData();
    return (
        <div className='container'>
            <h2 className="text-navy text-center fs-1 fw-bold pt-3 m-3">Learn without limits with BackBenchers!</h2>
            <p className='text-center'>You don’t get better at swimming by watching others. Coding is no different. Practice as you learn with live code environments inside your browser. Start, switch, or advance your career with more than 500 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
            <h3>This Category has {courseCategory.length} Courses</h3>

            <Row xs={1} md={2} lg={4} className="g-3">
                {
                    courseCategory.map(course => <CourseSummaryCard
                        key={course._id}
                        course={course}
                    ></CourseSummaryCard>)
                }
            </Row> 
        </div>
    );
};

export default Category;