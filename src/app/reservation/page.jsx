'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatConcierge from '@/components/ChatConcierge';
import LoadingScreen from '@/components/LoadingScreen';

export default function ReservationPage() {
    return (
        <div className="page-wraper">
            <LoadingScreen />
            <Header />
            <div className="page-content">
                <div id="main">
                    {/* Inner Page Banner */}
                    <div className="dlab-bnr-inr overlay-black-light" style={{ backgroundImage: 'url(/images/banner/bnr1.jpg)', backgroundPosition: 'bottom right' }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">reservation</h1>
                                <p className="sub-title">La Caféine CAFE & RESTAURANT</p>
                                <nav aria-label="breadcrumb" className="breadcrumb-row">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Reservation</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* Inner Page Banner END */}

                    {/* Reservation Form */}
                    <div className="section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-b30 align-self-center">
                                    <div className="contact-form">
                                        <div className="section-head full-head text-center">
                                            <h2 className="main-title text-primary">Need a reservation?</h2>
                                            <h3 className="title">BOOK A TABLE</h3>
                                            <div className="dlab-separator"></div>
                                        </div>
                                        <div className="dzFormMsg"></div>
                                        <form method="post" className="dzForm" action="#">
                                            <input type="hidden" value="Contact" name="dzToDo" />
                                            <div className="row sp5">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input name="dzName" type="text" required className="form-control" placeholder="Your Name" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input name="dzEmail" type="email" className="form-control" required placeholder="Your Email Id" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <select className="form-control">
                                                            <option>1 Person</option>
                                                            <option>2 People</option>
                                                            <option>3 People</option>
                                                            <option>4 People</option>
                                                            <option>5+ People</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <select className="form-control">
                                                            <option>Morning (9 AM - 12 PM)</option>
                                                            <option>Afternoon (12 PM - 4 PM)</option>
                                                            <option>Evening (4 PM - 8 PM)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Your Message..."></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <button name="submit" type="submit" value="Submit" className="btn btn-block bg-secondry">
                                                        <span>Submit</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 m-b30">
                                    <div className="row sp15 h-100">
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <img className="radius-sm img-cover" src="/images/about/pic2.jpg" alt="" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <img className="radius-sm img-cover" src="/images/about/pic3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Reservation Form END */}

                    <Footer />
                </div>
            </div>
            <ChatConcierge />
        </div>
    );
}
