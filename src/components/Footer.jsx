import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='mt-5'>
                <div className="container mt-5">
                    <hr />
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div>
                                <h3>Logo</h3>
                                <p className="mb-30 footer-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta facilis
                                    eos quia optio iusto odit atque eum tempore, quisquam officiis vero veniam hic,</p>
                            </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
                            <div className="">
                                <h4>Quick Link</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="text-decoration-none">Home</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none">Service</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div>
                                <h4>Service</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="text-decoration-none">Marketing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none">Branding</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none">Graphics Design</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div>
                                <h4>Newsletter</h4>
                                <div>
                                    <label for="Newsletter" className="form-label">Subscribe To Our Newsletter</label>
                                    <input type="text" className="form-control" Placeholder="Enter Your Email" />
                                    <button className="btn btn-primary mt-3">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="copyright">
                            <p>Developed and maintained by <a href="#" target="_blank">company</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer