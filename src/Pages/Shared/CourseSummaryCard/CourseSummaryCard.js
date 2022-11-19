import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseSummaryCard = ({course}) => {
    const { _id, title, author, details, image_url, rating, total_view } = course;
    // console.log(course);

    return (
        <Col>
            <Card className='shadow-sm'>
                <Card.Body>
                    <Card.Img variant="top mb-2" src={image_url} />
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 100 ?
                            <>{details.slice(0, 100) + '...'} </>
                            :
                            <>{details}</>
                        }
                    </Card.Text>
                    <p className='mb-0'>{author?.name}</p>
                    <small>{author?.published_date}</small>

                    <div className="text-muted d-flex justify-content-between align-items-center mt-3 mb-2">
                        <div>
                            <FaStar className='text-warning me-2 pb-1' /><span>{rating?.number}</span>
                            <FaEye className='ms-3 me-2' /><span>{total_view}</span>
                        </div>
                        <div>
                            <Link className='btn-navy py-2 text-decoration-none' to={`/course/${_id}`}>See Details</Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseSummaryCard;