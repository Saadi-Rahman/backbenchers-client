import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CoursesLeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h4 className="text-navy fw-bold mb-3">All Course Categories: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
            <div className="my-4">
                <Link to="/" className="btn-navy text-decoration-none">Go to Home</Link>
            </div>
        </div>
    );
};

export default CoursesLeftNav;