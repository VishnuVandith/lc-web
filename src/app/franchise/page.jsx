'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal',
];

const highlights = [
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>),
        title: 'Affordable Luxury', desc: 'Premium café experience at accessible price points — giving you a competitive edge in every market.'
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104A7.5 7.5 0 1017.25 17.5H9.75V3.104z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v9h9" /></svg>),
        title: 'Wellness Innovation', desc: "World's first Single Drop Tea Technology and nutrition-infused beverages that set us apart from every competitor."
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6M9 11h6M9 15h4" /></svg>),
        title: 'Tech-Powered Operations', desc: 'AI-driven inventory, loyalty automation, and real-time analytics — all for just ₹2,000/month.'
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-1a4 4 0 00-4-4h-1M9 20H4v-1a4 4 0 014-4h1m6-4a4 4 0 11-8 0 4 4 0 018 0z" /></svg>),
        title: 'Total Partner Support', desc: 'Training, marketing, supply chain, and ongoing mentorship. We succeed only when you succeed.'
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 17l4-8 4 4 4-6 4 10" /></svg>),
        title: 'High-Growth Market', desc: "India's café market is heading to $63.89B by 2030. Tier-2 & Tier-3 cities are the fastest-growing segment."
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 2l2.09 4.26L19 7.27l-3.5 3.41.83 4.82L12 13.27l-4.33 2.23.83-4.82L5 7.27l4.91-.01L12 2z" /></svg>),
        title: 'Zero Risk Model', desc: 'Effortless ownership with expert-driven operations. Proven systems that minimize your risk and maximize returns.'
    },
];

const models = [
    {
        name: 'Urban 365',
        tag: 'City Express',
        desc: 'High-footfall urban kiosks and compact cafés designed for maximum throughput with minimal space.',
        investment: '₹8–12 Lakhs',
        icon: '🏙️',
        color: '#c8a96e',
    },
    {
        name: 'Signature La Caféine',
        tag: 'Flagship Experience',
        desc: 'Full-service premium café with the complete La Caféine menu, ambience, and Wi-Fi lounge.',
        investment: '₹15–25 Lakhs',
        icon: '⭐',
        color: '#8b4513',
    },
    {
        name: 'Calm Botanica',
        tag: 'Wellness Café',
        desc: 'Nature-inspired wellness café focused on herbal teas, nutri drinks, and a calming atmosphere.',
        investment: '₹12–18 Lakhs',
        icon: '🌿',
        color: '#4a7c59',
    },
    {
        name: 'Highway OneStop',
        tag: 'Travel Hub',
        desc: 'Robust highway café model for expressways, fuel stations, and travel rest stops.',
        investment: '₹10–16 Lakhs',
        icon: '🛣️',
        color: '#2c3e50',
    },
];

const stats = [
    { value: '$63.89B', label: 'Expected market size by 2030' },
    { value: '63%', label: 'Growth rate 2020–25' },
    { value: '150M+', label: 'Daily coffee & tea consumers in India' },
    { value: '3X', label: 'Tier-2/3 city café growth vs metros' },
];

const support = [
    { icon: '🎓', title: 'Comprehensive Training', desc: 'Operations, barista skills, customer service, and business management.' },
    { icon: '📦', title: 'Supply Chain', desc: 'Centralized procurement, quality-assured supplies delivered to your doorstep.' },
    { icon: '📣', title: 'Marketing Engine', desc: 'Brand campaigns, social media, WhatsApp promotions, and local marketing kits.' },
    { icon: '💻', title: 'Digital Ecosystem', desc: 'POS, loyalty platform, customer analytics, and campaign tools — all integrated.' },
    { icon: '🏗️', title: 'Café Setup', desc: 'Turnkey interior design, equipment procurement, and layout planning by our team.' },
    { icon: '📞', title: 'Ongoing Support', desc: '24/7 partner helpline and dedicated relationship managers for your success.' },
];

const journeySteps = [
    { num: '01', title: 'Apply', desc: 'Fill the franchise application form online.' },
    { num: '02', title: 'Screening', desc: 'Our team reviews your profile and connects with you.' },
    { num: '03', title: 'Location', desc: 'We help identify and approve your ideal location.' },
    { num: '04', title: 'Agreement', desc: 'Sign the franchise agreement and formalize your partnership.' },
    { num: '05', title: 'Setup', desc: 'Interior, equipment, staff, and training — all handled.' },
    { num: '06', title: 'Launch', desc: 'Grand opening with full marketing and brand support.' },
    { num: '07', title: 'Growth', desc: 'Ongoing tech, ops, and marketing support to scale.' },
];

const testimonials = [
    {
        name: 'Rajesh Kumar',
        location: 'Vijayawada, AP',
        quote: 'La Caféine gave me everything I needed to launch my café confidently. The tech support and training were exceptional — I was profitable within 6 months.',
        model: 'Urban 365',
    },
    {
        name: 'Priya Sharma',
        location: 'Indore, MP',
        quote: 'I had no prior F&B experience, but La Caféine\'s team held my hand through every step. My Calm Botanica outlet is the most-loved café in town now.',
        model: 'Calm Botanica',
    },
    {
        name: 'Mohammed Farhan',
        location: 'Coimbatore, TN',
        quote: 'The Signature La Caféine model is a premium product at an affordable investment. My ROI exceeded expectations. Highly recommend to any serious entrepreneur.',
        model: 'Signature La Caféine',
    },
];

export default function FranchiseLandingPage() {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', model: '', state: '', message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('/api/franchise', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            setSubmitted(true);
            setFormData({ name: '', phone: '', email: '', model: '', state: '', message: '' });
        } catch {
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">

                    {/* ===== HERO ===== */}
                    <div className="franchise-hero">
                        <div className="franchise-hero-overlay" />
                        <div className="franchise-hero-content">
                            <div className="franchise-hero-badge">For Entrepreneurs</div>
                            <h1 className="franchise-hero-title">
                                Brew Success With<br />
                                <span className="franchise-hero-brand">La Caféine</span>
                            </h1>
                            <p className="franchise-hero-subtitle">
                                Own a premium café brand backed by world-class technology, wellness innovation, and total partner support. India's fastest-growing café franchise awaits you.
                            </p>
                            <div className="franchise-hero-actions">
                                <Link href="/franchise/apply" className="franchise-hero-cta-primary">
                                    Apply Now — It's Free
                                </Link>
                                <Link href="#models" className="franchise-hero-cta-secondary">
                                    Explore Models ↓
                                </Link>
                            </div>
                            <div className="franchise-hero-stats">
                                <div className="franchise-hero-stat">
                                    <strong>₹8L+</strong>
                                    <span>Starting Investment</span>
                                </div>
                                <div className="franchise-hero-stat-divider" />
                                <div className="franchise-hero-stat">
                                    <strong>28–45%</strong>
                                    <span>Profit Margin</span>
                                </div>
                                <div className="franchise-hero-stat-divider" />
                                <div className="franchise-hero-stat">
                                    <strong>4 Models</strong>
                                    <span>To Choose From</span>
                                </div>
                                <div className="franchise-hero-stat-divider" />
                                <div className="franchise-hero-stat">
                                    <strong>Pan-India</strong>
                                    <span>Presence Growing</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ===== GATEWAY CARDS ===== */}
                    <div className="gc2-section">
                        <div className="container">
                            <div className="section-head text-center" style={{ marginBottom: '40px' }}>
                                <h2 className="main-title text-primary">Explore La Caféine</h2>
                                <h3 className="title">TWO WORLDS. ONE BRAND.</h3>
                                <div className="dlab-separator"></div>
                            </div>
                            <div className="gc2-row">
                                {/* Franchise Card */}
                                <div className="gc2-card">
                                    <div className="gc2-card-header">
                                        <img src="/images/logo-2.png" alt="La Caféine" className="gc2-logo" />
                                        <div className="gc2-tagline">TASTE THAT CARES</div>
                                    </div>
                                    <div className="gc2-card-body">
                                        <div className="gc2-card-text">
                                            <div className="gc2-label">For Entrepreneurs</div>
                                            <h2 className="gc2-headline">FRANCHISE OPPORTUNITY:<br />PARTNER WITH LA CAFÉINE</h2>
                                            <p className="gc2-desc">Explore franchise models, investment options, ROI projections, and everything you need to start your own La Caféine café.</p>
                                            <div className="gc2-features">
                                                <Link href="/franchise/models" className="gc2-feature">
                                                    <span className="gc2-feature-icon">📐</span>
                                                    <span>MODELS &amp;<br />LAYOUTS</span>
                                                </Link>
                                                <Link href="/franchise/investment" className="gc2-feature">
                                                    <span className="gc2-feature-icon">💰</span>
                                                    <span>INVESTMENT<br />&amp; ROI</span>
                                                </Link>
                                                <Link href="/franchise/process" className="gc2-feature">
                                                    <span className="gc2-feature-icon">⚙️</span>
                                                    <span>PROCESS &amp;<br />SETUP</span>
                                                </Link>
                                                <Link href="/franchise/apply" className="gc2-feature">
                                                    <span className="gc2-feature-icon">✅</span>
                                                    <span>APPLY<br />NOW</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="gc2-card-photo">
                                            <img src="/images/lcf.png" alt="Franchise" />
                                        </div>
                                    </div>
                                    <Link href="/franchise" className="gc2-cta-btn">EXPLORE FRANCHISE →</Link>
                                </div>

                                {/* Consumer Card */}
                                <div className="gc2-card">
                                    <div className="gc2-card-header">
                                        <img src="/images/logo-2.png" alt="La Caféine" className="gc2-logo" />
                                        <div className="gc2-tagline">TASTE THAT CARES</div>
                                    </div>
                                    <div className="gc2-card-body">
                                        <div className="gc2-card-text">
                                            <div className="gc2-label">For Coffee Lovers</div>
                                            <h2 className="gc2-headline">FOR COFFEE LOVERS:<br />THE CONSUMER EXPERIENCE</h2>
                                            <p className="gc2-desc">Discover our menu, find a café near you, explore offers, and immerse yourself in the La Caféine lifestyle.</p>
                                            <div className="gc2-features">
                                                <Link href="/consumer/menu" className="gc2-feature">
                                                    <span className="gc2-feature-icon">☕</span>
                                                    <span>EXPLORE<br />MENU</span>
                                                </Link>
                                                <Link href="/consumer/find-cafe" className="gc2-feature">
                                                    <span className="gc2-feature-icon">📍</span>
                                                    <span>FIND A<br />CAFÉ</span>
                                                </Link>
                                                <Link href="/consumer/offers" className="gc2-feature">
                                                    <span className="gc2-feature-icon">🏷️</span>
                                                    <span>LATEST<br />OFFERS</span>
                                                </Link>
                                                <Link href="/consumer/gallery" className="gc2-feature">
                                                    <span className="gc2-feature-icon">🖼️</span>
                                                    <span>GALLERY</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="gc2-card-photo">
                                            <img src="/images/consumer.png" alt="Consumer Experience" />
                                        </div>
                                    </div>
                                    <Link href="/consumer" className="gc2-cta-btn">EXPLORE EXPERIENCE →</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ===== ABOUT La Caféine ===== */}
                    <div className="franchise-about section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 m-b30">
                                    <div className="franchise-about-media">
                                        <img src="/images/lcf.png" alt="La Caféine Café" className="franchise-about-img-main" />
                                        <img src="/images/consumer.png" alt="La Caféine Interior" className="franchise-about-img-accent" />
                                    </div>
                                </div>
                                <div className="col-lg-6 m-b30 align-self-center">
                                    <div className="franchise-about-text">
                                        <span className="franchise-section-label">The Brand</span>
                                        <h2 className="main-title text-primary">What Is La Caféine?</h2>
                                        <h3 className="title">COFFEE · TEA · WELLNESS · TECHNOLOGY</h3>
                                        <div className="dlab-separator" />
                                        <p>
                                            La Caféine is a new-age beverage brand built at the intersection of <strong>taste, technology, and wellness</strong>. We serve premium coffee, innovative teas, and functional wellness beverages — all under one roof with a consistently superior café experience.
                                        </p>
                                        <p>
                                            What sets us apart is our <strong>proprietary Single Drop Tea Technology</strong>, nutrition-infused beverages, and a cutting-edge digital ecosystem — giving each franchise partner every tool needed to run a thriving, modern café business.
                                        </p>
                                        <div className="franchise-about-pills">
                                            <span>🏆 Star-Rated Establishment</span>
                                            <span>🧪 Proprietary Technology</span>
                                            <span>🌿 Wellness Innovation</span>
                                            <span>📲 Digital Ecosystem</span>
                                            <span>🤝 Total Partner Support</span>
                                        </div>
                                        <Link href="/franchise/why-invest" className="btn bg-secondry" style={{ marginTop: '20px', display: 'inline-block' }}>
                                            Why Invest →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ===== WHY LA CAFÉINE ===== */}
                    <div className="section-full content-inner">
                        <div className="container">
                            <div className="section-head text-center" style={{ marginBottom: '48px' }}>
                                <span className="franchise-section-label">The Advantage</span>
                                <h2 className="main-title text-primary">Why Choose La Caféine?</h2>
                                <h3 className="title">A FRANCHISE BUILT DIFFERENTLY</h3>
                                <div className="dlab-separator" />
                                <p className="m-b0" style={{ maxWidth: '640px', margin: '0 auto' }}>
                                    We combine affordable investment with a premium brand, proprietary technology, and unwavering partner support to create the smartest café franchise opportunity in India.
                                </p>
                            </div>
                            <div className="franchise-highlights-grid">
                                {highlights.map((h, idx) => (
                                    <div key={idx} className="franchise-highlight-card">
                                        <div className="franchise-highlight-icon">{h.icon}</div>
                                        <h4 className="franchise-highlight-title">{h.title}</h4>
                                        <p className="franchise-highlight-desc">{h.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ===== CAFÉ MODELS ===== */}
                    <div id="models" className="section-full content-inner bg-img-fix overlay-black-middle" style={{ backgroundImage: 'url(/images/background/bg2.jpg)' }}>
                        <div className="container">
                            <div className="section-head text-center" style={{ marginBottom: '48px' }}>
                                <span className="franchise-section-label" style={{ color: '#c8a96e' }}>Our Models</span>
                                <h2 className="main-title" style={{ color: '#fff' }}>Choose Your Franchise Model</h2>
                                <h3 className="title text-white">FOUR FORMATS. ONE WINNING BRAND.</h3>
                                <div className="dlab-separator" />
                                <p className="text-white m-b0" style={{ maxWidth: '580px', margin: '0 auto' }}>
                                    Whether you want a sleek urban kiosk, a flagship lounge, a wellness café, or a highway hub — La Caféine has a model built for your market.
                                </p>
                            </div>
                            <div className="franchise-models-grid">
                                {models.map((m, idx) => (
                                    <div key={idx} className="franchise-model-card">
                                        <div className="franchise-model-icon" style={{ color: m.color }}>{m.icon}</div>
                                        <div className="franchise-model-tag">{m.tag}</div>
                                        <h3 className="franchise-model-name">{m.name}</h3>
                                        <p className="franchise-model-desc">{m.desc}</p>
                                        <div className="franchise-model-investment">
                                            <span className="franchise-model-inv-label">Investment</span>
                                            <span className="franchise-model-inv-value" style={{ color: m.color }}>{m.investment}</span>
                                        </div>
                                        <Link href="/franchise/models" className="franchise-model-link">Learn More →</Link>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center" style={{ marginTop: '40px' }}>
                                <Link href="/franchise/models" className="btn bg-secondry">View All Models & Details</Link>
                            </div>
                        </div>
                    </div>

                    {/* ===== MARKET OPPORTUNITY ===== */}
                    <div className="section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="section-head text-center" style={{ marginBottom: '48px' }}>
                                <span className="franchise-section-label">The Market</span>
                                <h2 className="main-title text-primary">A Once-in-a-Generation Opportunity</h2>
                                <h3 className="title">THE NUMBERS DON'T LIE</h3>
                                <div className="dlab-separator" />
                            </div>
                            <div className="franchise-stats-grid">
                                {stats.map((s, idx) => (
                                    <div key={idx} className="franchise-stat-card">
                                        <div className="franchise-stat-value">{s.value}</div>
                                        <div className="franchise-stat-label">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="franchise-market-body">
                                <div className="row align-items-center">
                                    <div className="col-md-6 m-b30 align-self-center">
                                        <h3 className="title">Tier-2 & Tier-3 Cities: The Untapped Goldmine</h3>
                                        <div className="dlab-separator" />
                                        <p>While metros are crowded with global chains, <strong>Tier-2 and Tier-3 cities</strong> present the fastest-growing café market in India. Rising disposable incomes, aspirational lifestyles, and limited premium options create the perfect entry point.</p>
                                        <p>La Caféine is purpose-built for these markets — with compact models, local taste integration, and investment levels that match regional economies.</p>
                                        <Link href="/franchise/why-invest" className="btn bg-secondry" style={{ marginTop: '10px', display: 'inline-block' }}>
                                            Deep Dive: Why Invest →
                                        </Link>
                                    </div>
                                    <div className="col-md-6 m-b30">
                                        <img src="/images/consumer.png" alt="Market Opportunity" style={{ borderRadius: '16px', width: '100%', height: '340px', objectFit: 'cover' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ===== WHAT WE PROVIDE ===== */}
                    <div className="section-full content-inner">
                        <div className="container">
                            <div className="section-head text-center" style={{ marginBottom: '48px' }}>
                                <span className="franchise-section-label">Partner Benefits</span>
                                <h2 className="main-title text-primary">What We Provide</h2>
                                <h3 className="title">EVERYTHING YOU NEED TO SUCCEED</h3>
                                <div className="dlab-separator" />
                                <p className="m-b0" style={{ maxWidth: '620px', margin: '0 auto' }}>
                                    When you partner with La Caféine, you don't just get a brand name — you get a complete business system with end-to-end support from Day 1.
                                </p>
                            </div>
                            <div className="franchise-support-grid">
                                {support.map((s, idx) => (
                                    <div key={idx} className="franchise-support-card">
                                        <div className="franchise-support-icon">{s.icon}</div>
                                        <h4 className="franchise-support-title">{s.title}</h4>
                                        <p className="franchise-support-desc">{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center" style={{ marginTop: '36px' }}>
                                <Link href="/franchise/what-we-provide" className="btn bg-secondry">Full Support Details →</Link>
                            </div>
                        </div>
                    </div>

                    {/* ===== FRANCHISE JOURNEY ===== */}
                    <div className="section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="section-head text-center" style={{ marginBottom: '48px' }}>
                                <span className="franchise-section-label">The Process</span>
                                <h2 className="main-title text-primary">Your Franchise Journey</h2>
                                <h3 className="title">7 STEPS TO YOUR OWN CAFÉ</h3>
                                <div className="dlab-separator" />
                            </div>
                            <div className="franchise-journey-grid">
                                {journeySteps.map((step, idx) => (
                                    <div key={idx} className="franchise-journey-step">
                                        <div className="franchise-journey-num">{step.num}</div>
                                        <div className="franchise-journey-content">
                                            <h5 className="franchise-journey-title">{step.title}</h5>
                                            <p className="franchise-journey-desc">{step.desc}</p>
                                        </div>
                                        {idx < journeySteps.length - 1 && <div className="franchise-journey-arrow">→</div>}
                                    </div>
                                ))}
                            </div>
                            <div className="text-center" style={{ marginTop: '36px' }}>
                                <Link href="/franchise/process" className="btn bg-secondry">Full Process Details →</Link>
                            </div>
                        </div>
                    </div>

                    {/* ===== TESTIMONIALS ===== */}
                    <div className="section-full content-inner bg-img-fix overlay-black-middle" style={{ backgroundImage: 'url(/images/background/bg4.jpg)' }}>
                        <div className="container">
                            <div className="section-head text-center" style={{ marginBottom: '48px' }}>
                                <span className="franchise-section-label" style={{ color: '#c8a96e' }}>Success Stories</span>
                                <h2 className="main-title" style={{ color: '#fff' }}>From Our Franchise Partners</h2>
                                <h3 className="title text-white">REAL PEOPLE. REAL RESULTS.</h3>
                                <div className="dlab-separator" />
                            </div>
                            <div className="franchise-testimonials-grid">
                                {testimonials.map((t, idx) => (
                                    <div key={idx} className="franchise-testimonial-card">
                                        <div className="franchise-testimonial-quote">❝</div>
                                        <p className="franchise-testimonial-text">{t.quote}</p>
                                        <div className="franchise-testimonial-footer">
                                            <div className="franchise-testimonial-avatar">{t.name[0]}</div>
                                            <div>
                                                <div className="franchise-testimonial-name">{t.name}</div>
                                                <div className="franchise-testimonial-meta">{t.location} · {t.model}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center" style={{ marginTop: '36px' }}>
                                <Link href="/success-stories" className="btn bg-secondry">View All Success Stories →</Link>
                            </div>
                        </div>
                    </div>

                    {/* ===== INQUIRY FORM ===== */}
                    <div id="apply" className="section-full content-inner">
                        <div className="container">
                            <div className="franchise-form-section">
                                <div className="franchise-form-intro">
                                    <span className="franchise-section-label">Get Started</span>
                                    <h2 className="main-title text-primary">Ready to Brew Success?</h2>
                                    <h3 className="title">REACH OUR FRANCHISE TEAM</h3>
                                    <div className="dlab-separator" />
                                    <p>Fill out the form and our investment team will contact you within 24 hours to discuss your franchise opportunity and answer any questions.</p>
                                    <div className="franchise-form-contact-block">
                                        <div className="franchise-form-contact-item">
                                            <span>📞</span>
                                            <div>
                                                <strong>Call Us</strong>
                                                <p>+91 88988 88829</p>
                                            </div>
                                        </div>
                                        <div className="franchise-form-contact-item">
                                            <span>✉️</span>
                                            <div>
                                                <strong>Email Us</strong>
                                                <p>info@lacafeine.in</p>
                                            </div>
                                        </div>
                                        <div className="franchise-form-contact-item">
                                            <span>📍</span>
                                            <div>
                                                <strong>Visit Us</strong>
                                                <p>34, Road No-2, Jubilee Hills, Hyderabad</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="franchise-form-box contact-form">
                                    {submitted ? (
                                        <div className="franchise-form-success">
                                            <div className="franchise-form-success-icon">✅</div>
                                            <h3>Thank You!</h3>
                                            <p>Our franchise team will reach out to you within 24 hours.</p>
                                            <button className="btn bg-secondry" onClick={() => setSubmitted(false)} style={{ marginTop: '16px' }}>
                                                Submit Another Enquiry
                                            </button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit}>
                                            <h4 className="franchise-form-title">Enquire Now</h4>
                                            <div className="row sp5">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input
                                                                type="text" required className="form-control" placeholder="Your Full Name*"
                                                                value={formData.name}
                                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input
                                                                type="text" required className="form-control" placeholder="WhatsApp / Phone*"
                                                                value={formData.phone}
                                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input
                                                                type="email" className="form-control" placeholder="Email Address"
                                                                value={formData.email}
                                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <select
                                                            className="form-control"
                                                            value={formData.model}
                                                            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                                                        >
                                                            <option value="">Preferred Model</option>
                                                            {['Urban 365', 'Signature La Caféine', 'Calm Botanica', 'Highway OneStop'].map((m, i) => (
                                                                <option key={i}>{m}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <select
                                                            className="form-control"
                                                            value={formData.state}
                                                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                                        >
                                                            <option value="">Select State</option>
                                                            {states.map((s, i) => <option key={i}>{s}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <textarea
                                                                rows="4" className="form-control" placeholder="Tell us about yourself and your city..."
                                                                value={formData.message}
                                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-block bg-secondry">
                                                        <span>Submit Enquiry</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
