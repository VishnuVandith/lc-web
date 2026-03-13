'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatConcierge from '@/components/ChatConcierge';
import LoadingScreen from '@/components/LoadingScreen';
import Link from 'next/link';

export default function NotFound() {
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
                                <h1 className="text-white">Error page</h1>
                                <p className="sub-title">La Caféine CAFE & RESTAURANT</p>
                                <nav aria-label="breadcrumb" className="breadcrumb-row">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Error 404</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Error Page */}
                    <div className="section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="error-page text-center m-b30">
                                <div className="dlab_error">404</div>
                                <h2 className="error-head">We are sorry. But the page you are looking for cannot be found.</h2>
                                <Link href="/" className="btn">Back to Homepage</Link>
                            </div>
                        </div>
                    </div>
                    {/* Error Page End */}

                    <Footer />
                </div>
            </div>
            <ChatConcierge />
        </div>
    );
}
