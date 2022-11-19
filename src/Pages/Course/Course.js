import React from 'react';
import { Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';


const Course = () => {
    const course = useLoaderData();

    return (
        <div className='container'>
            <h2 className='my-4'>Course Details</h2>
            <hr />
            <h3 className='pb-2'>{course.title}</h3>
            <h4>Description</h4>
            <p>{course.details}</p>

            <div className="card mb-5 col-xl-8">
                <div className="row g-0">
                    <div className="col-md-4 p-3 rounded base-color">
                        <img width="100%" src={course.image_url} alt="" />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h4 className="card-title">{course.title}</h4>
                                {
                                    course.details.length > 200 ?
                                    <>{course.details.slice(0, 200) + '...'} </>
                                    :
                                    <>{course.details}</>
                                }
                            <h5 className='py-2'>Price: ${course.price}</h5>
                            <div className='d-flex justify-content-between align-items-end'>
                                <div className='d-flex flex-column'>
                                    <div className='d-flex align-items-center mb-3'>
                                        <Image roundedCircle style={{width: '60px'}} src={course.author?.img}></Image>
                                        <div className='ms-3'>
                                            <h6 className='my-0'>Course Instructor:</h6>
                                            <p className='mb-0'>{course.author?.name}</p>
                                        </div>
                                    </div>
                                    <small>Published Date: {course.author?.published_date}</small>
                                </div>
                                <div className='mb-1'>
                                    <Link to="/checkout" className='btn-navy py-2 text-decoration-none'>Premium Access</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;