import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Course.css';

const Course = () => {
    const course = useLoaderData();

    return (
        <div className='container'>
            <h2 className='my-4'>Course Details</h2>
            <hr />
            <h3 className='pb-2'>{course.title}</h3>
            <p>{course.details}</p>

            <div class="card mb-5 course-details-card">
                <div class="row g-0">
                    <div class="col-md-4 p-3 rounded">
                        <img width="100%" src={course.image_url} alt="" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{course.title}</h5>
                            <h6>Price:</h6>
                            <p className='mb-0'>{course.author?.name}</p>
                            <p>{course.author?.published_date}</p>
                            <button className='btn-navy py-1'>Premium Access</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;