'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 900);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="site-footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-links">
                        <Link href="/about">About</Link>
                        <Link href="/careers">Careers</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/media">Media</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms">Terms</Link>
                        <Link href="/refund-policy">Refund Policy</Link>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="text-left text-white">
                                <p className="copyright">
                                    Copyright © {new Date().getFullYear()}{' '}
                                    <a href="https://foxsoft.in" target="_blank" rel="noopener noreferrer">FoxSoft</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="text-right">
                                <ul className="list-inline footer-social m-b0">
                                    <li><a href="https://www.facebook.com/thelacafeine" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"></a></li>
                                    <li><a href="https://x.com/thelacafeine" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a></li>
                                    <li><a href="https://www.youtube.com/@thelacafeine" className="fa fa-youtube" target="_blank" rel="noopener noreferrer"></a></li>
                                    <li><a href="https://www.instagram.com/thelacafeine" className="fa fa-instagram" target="_blank" rel="noopener noreferrer"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showScroll && (
                <button className="scroltop" type="button" onClick={scrollToTop} style={{ display: 'block' }}>
                    <i className="fa fa-angle-up"></i>
                </button>
            )}
        </footer>
    );
}
