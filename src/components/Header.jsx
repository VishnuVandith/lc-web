'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { label: 'Home', href: '/' },
    {
        label: 'Franchise Partner',
        children: [
            { label: 'Franchise Home', href: '/franchise' },
            { label: 'Why Invest', href: '/franchise/why-invest' },
            { label: 'Models', href: '/franchise/models' },
            { label: 'Investment & ROI', href: '/franchise/investment' },
            { label: 'What We Provide', href: '/franchise/what-we-provide' },
            { label: 'Tech Ecosystem', href: '/franchise/tech-ecosystem' },
            { label: 'Process', href: '/franchise/process' },
            { label: 'Apply Now', href: '/franchise/apply' },
            { label: 'FAQs', href: '/franchise/faqs' },
        ],
    },
    {
        label: 'Consumer Experience',
        children: [
            { label: 'Consumer Home', href: '/consumer' },
            { label: 'Menu', href: '/consumer/menu' },
            { label: 'Our Story', href: '/consumer/our-story' },
            { label: 'Find a Café', href: '/consumer/find-cafe' },
            { label: 'Offers', href: '/consumer/offers' },
            { label: 'Events', href: '/consumer/events' },
            { label: 'Gallery', href: '/consumer/gallery' },
        ],
    },
    { label: 'Menu', href: '/consumer/menu' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSubs, setOpenSubs] = useState({});
    const [isFixed, setIsFixed] = useState(false);
    const [sidebarRevealed, setSidebarRevealed] = useState(false);
    const pathname = usePathname();
    const observerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Watch the slider: hide sidebar while slider is visible, show once user scrolls past it
    useEffect(() => {
        const slider = document.querySelector('.main-slider');
        if (!slider) {
            // No slider on this page (inner pages) — show sidebar immediately
            setSidebarRevealed(true);
            return;
        }

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Slider visible → hide sidebar; slider gone → show sidebar
                    setSidebarRevealed(!entry.isIntersecting);
                });
            },
            { threshold: 0.05 } // trigger as soon as even 5% of slider leaves view
        );

        observerRef.current.observe(slider);

        return () => observerRef.current?.disconnect();
    }, []);

    const toggleSub = (idx) => {
        setOpenSubs((prev) => ({ ...prev, [idx]: !prev[idx] }));
    };

    return (
        <header className="site-header mo-left header-sidenav header dark">
            <div className={`sticky-header main-bar-wraper navbar-expand-lg ${isFixed ? 'is-fixed' : ''}`}>
                <div className="main-bar clearfix">
                    <div className="container-fluid">
                        <div className="header-content-bx">
                            <div className="logo-header">
                                <Link href="/"><img src="/images/logo-2.png" alt="La Caféine" /></Link>
                            </div>
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <ul>
                                        <li className="search-btn">
                                            <a href="#" className="menu-icon" onClick={(e) => { e.preventDefault(); setMenuOpen(true); }}>
                                                <div className="menu-icon-in navicon">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`header-nav navbar-collapse collapse full-sidenav content-scroll ${menuOpen ? 'active' : ''} ${sidebarRevealed ? 'sidebar-revealed' : 'sidebar-hidden'}`}
                style={{ backgroundImage: 'url(/images/background/bg4.jpg)' }}
            >
                <div className="logo-header">
                    <Link href="/"><img src="/images/logo.png" alt="La Caféine" /></Link>
                </div>
                <ul className="nav navbar-nav">
                    {navItems.map((item, idx) => {
                        if (item.children) {
                            return (
                                <li key={idx} className={openSubs[idx] ? 'open' : ''}>
                                    <a
                                        href="#"
                                        onClick={(e) => { e.preventDefault(); toggleSub(idx); }}
                                        className={openSubs[idx] ? 'dz-open' : ''}
                                    >
                                        {item.label}
                                        <i className="fa fa-chevron-down"></i>
                                    </a>
                                    <ul className="sub-menu" style={{ display: openSubs[idx] ? 'block' : 'none' }}>
                                        {item.children.map((child, cIdx) => (
                                            <li key={cIdx}>
                                                <Link href={child.href} onClick={() => setMenuOpen(false)}>
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            );
                        }
                        return (
                            <li key={idx} className={pathname === item.href ? 'active' : ''}>
                                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="footer-menu">
                    <ul className="footer-social">
                        <li><a href="https://www.facebook.com/thelacafeine" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"></a></li>
                        <li><a href="https://x.com/thelacafeine" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a></li>
                        <li><a href="https://www.youtube.com/@thelacafeine" className="fa fa-youtube" target="_blank" rel="noopener noreferrer"></a></li>
                        <li><a href="https://www.instagram.com/thelacafeine" className="fa fa-instagram" target="_blank" rel="noopener noreferrer"></a></li>
                    </ul>
                    <p className="copyright">© Copyright {new Date().getFullYear()}</p>
                    <p className="copyright-text">
                        Design With <span className="heart"></span> By <a href="https://foxsoft.in" target="_blank" rel="noopener noreferrer">FoxSoft</a>
                    </p>
                </div>
                <div className="menu-close btn" onClick={() => setMenuOpen(false)}>
                    <i className="ti-close"></i>
                </div>
            </div>
        </header>
    );
}
