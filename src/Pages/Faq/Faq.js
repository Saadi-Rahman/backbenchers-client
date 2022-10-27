import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="container my-5">
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-md-12 col-lg-8">
                        <h2 className="text-navy fs-1 fw-bold py-2">Frequently Asked Questions</h2>
                        <p className="pb-4">87% of people learning for professional development report career benefits like getting a promotion, a raise, or starting a new career. Get your ans from here.</p>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 col-lg-8">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What are the differences between Flexbox and Grid?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <strong>he basic difference between CSS Grid Layout and CSS Flexbox Layout</strong> is that flexbox was designed for layout in one dimension - either a row or a column. Grid was designed for two-dimensional layout - rows, and columns at the same time.
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What is the purpose of gitignore?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                The purpose of gitignore files is <strong>to ensure that certain files not tracked by Git remain untracked. </strong> To stop tracking a file that is currently tracked, use git rm --cached.
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What is CSS Box model?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <strong>In CSS, the term "box model"</strong> is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What are the differences between Bootstrap and Tailwind?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <strong>The main difference between TailwindCSS and Bootstrap</strong> is that Tailwind CSS is not a UI kit. Unlike UI kits such as Bootstrap, Bulma, and Foundation, Tailwind CSS doesn't have a default theme or built-in UI components. Instead, it comes with predesigned widgets you can use to build your site from scratch.
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    What is a Semantic tag?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <strong>The HTML semantics refers to the tags </strong>that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages.
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                What is react router-dom?
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                React Router DOM is <strong> an npm package that enables you to implement dynamic routing in a web app.</strong> It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSeven">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                What is the purpose of react router?
                                </button>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <strong>React Router is a standard library for routing in React.</strong> It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item mb-5">
                            <h2 className="accordion-header" id="headingEight">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                What is Context API?
                                </button>
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                The React Context API is a way for <strong> a React app to effectively produce global variables that can be passed around. </strong> This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;