import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div className='container'>
            <div className='col-lg-8 my-5 px-3 py-4 p-md-5 bg-light'>
                <h3>Checkout</h3>
                <p className='mb-4'>Please checkout to confirm to purchase this course.</p>
                <form>
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example1" className="form-control" required />
                            <label className="form-label" for="form6Example1">First name</label>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example2" className="form-control" required />
                            <label className="form-label" for="form6Example2">Last name</label>
                        </div>
                        </div>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="text" id="form6Example3" className="form-control" required />
                        <label className="form-label" for="form6Example3">Company name</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="text" id="form6Example4" className="form-control" required />
                        <label className="form-label" for="form6Example4">Address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="email" id="form6Example5" className="form-control" required />
                        <label className="form-label" for="form6Example5">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="number" id="form6Example6" className="form-control" required />
                        <label className="form-label" for="form6Example6">Phone</label>
                    </div>

                    <div className="form-outline mb-4">
                        <textarea className="form-control" id="form6Example7" rows="4"></textarea>
                        <label className="form-label" for="form6Example7">Additional information</label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8" />
                        <label className="form-check-label" for="form6Example8">I accept the <Link to="" className='text-decoration-none'>terms & conditions</Link> and I've read the <Link to="" className='text-decoration-none'>privacy policy</Link>.</label>
                    </div>

                    <button type="submit" className="btn-navy px-4 py-2 fw-bold">Place order</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;