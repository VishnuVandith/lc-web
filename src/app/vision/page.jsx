'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const faqs = [
    { q: 'What makes La Caféine different from other cafés?', a: 'La Caféine blends automation, standardized recipes, and wellness-led beverages to deliver consistent taste, hygiene, and quality across every location — without compromising on experience.' },
    { q: 'Is La Caféine suitable for franchising?', a: 'Yes. La Caféine is built on a franchise-friendly, asset-light model with standardized operations, making it easy to scale while maintaining quality and consistency.' },
    { q: 'Does La Caféine focus on wellness beverages?', a: 'Absolutely. Alongside coffee and tea, La Caféine offers wellness and nutri beverages crafted to support modern, mindful lifestyles.' },
    { q: 'How does La Caféine ensure taste consistency?', a: 'Through automated brewing systems, precision-controlled recipes, and strict quality protocols, every cup maintains the same taste and aroma across outlets.' },
    { q: 'Are La Caféine beverages hygienically prepared?', a: 'Hygiene is a core principle at La Caféine. Our processes minimize manual handling and follow strict cleanliness and safety standards at every stage.' },
    { q: 'What kind of support do franchise partners receive?', a: 'Franchise partners receive end-to-end support including training, operational guidance, quality control systems, and ongoing business assistance.' },
    { q: 'Who is La Caféine designed for?', a: 'La Caféine is designed for modern consumers who value quality, consistency, and mindful choices — and for entrepreneurs seeking a reliable, scalable café business model.' },
];

export default function VisionPage() {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner title="VISION OF La Caféine" subtitle="La Caféine cafe & restaurant" breadcrumbs={[{ label: 'Vision' }]} />

                    {/* Vision */}
                    <div className="section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 m-b30">
                                    <h2 className="title">Our Vision</h2>
                                    <p>At <strong>La Caféine</strong>, our vision is to redefine the way people experience coffee, tea, and wellness beverages in their everyday lives.</p>
                                    <p>We envision a future where every cup delivers consistent taste, trusted quality, and a sense of calm — regardless of location, format, or scale.</p>
                                    <p>By blending innovation, tradition, and technology, La Caféine aims to become a globally admired beverage brand rooted in reliability and care.</p>
                                </div>
                                <div className="col-lg-6 m-b30 text-center">
                                    <img src="/images/vision/vision-main.jpg" alt="La Caféine Vision" className="img-fluid radius-xl" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="section-full content-inner">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">Our Mission</h2>
                                <p className="sub-title">Turning everyday beverage moments into meaningful experiences.</p>
                            </div>
                            <div className="row">
                                {[
                                    { img: '/images/vision/mission-quality.jpg', title: 'Uncompromising Quality', desc: 'To deliver beverages crafted with precision, hygiene, and consistency across every outlet.' },
                                    { img: '/images/vision/mission-innovation.jpg', title: 'Purposeful Innovation', desc: 'To innovate responsibly by combining modern brewing technology with traditional and wellness-driven ingredients.' },
                                    { img: '/images/vision/mission-growth.jpg', title: 'Sustainable Growth', desc: 'To create a scalable ecosystem that empowers franchise partners and builds long-term trust with customers.' },
                                ].map((item, idx) => (
                                    <div key={idx} className="col-lg-4 col-md-6 m-b30 text-center">
                                        <img src={item.img} className="img-fluid radius-md m-b20" alt="" />
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Trademarks */}
                    <div className="section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">Our Trade Marks</h2>
                                <p className="sub-title">What makes La Caféine distinct and dependable.</p>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-6 m-b30">
                                    <ul className="list-check-circle">
                                        <li>Single Drop Tea & Precision Coffee Systems</li>
                                        <li>Standardized Recipes & Automated Consistency</li>
                                        <li>Wellness & Nutri Beverage Integration</li>
                                        <li>Hygiene-first, Technology-led Operations</li>
                                        <li>Franchise-friendly, Asset-light Model</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 m-b30 text-center">
                                    <img src="/images/vision/trademarks.jpg" className="img-fluid radius-xl" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Leaders */}
                    <div className="section-full content-inner">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">Our Leaders</h2>
                                <p className="sub-title">A timeless partnership where experience meets innovation.</p>
                            </div>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-5 col-md-6 m-b40 text-center">
                                    <img src="/images/vision/leader-father.jpg" className="img-fluid radius-xl m-b20" alt="Founder – Tradition" />
                                    <h4 className="m-b10">Founder – The Custodian of Tradition</h4>
                                    <p>With decades of life experience and deep-rooted values, the founding father of <strong>La Caféine</strong> brings wisdom, discipline, and a timeless understanding of quality and ethics.</p>
                                    <p>His philosophy is simple yet powerful — build trust before building scale, and let integrity guide every decision. This foundation shapes the soul of La Caféine.</p>
                                </div>
                                <div className="col-lg-5 col-md-6 m-b40 text-center">
                                    <img src="/images/vision/leader-son.jpg" className="img-fluid radius-xl m-b20" alt="Founder – Trend" />
                                    <h4 className="m-b10">Co-Founder – The Voice of Modern Vision</h4>
                                    <p>Representing the new generation, the son brings contemporary thinking, technology-led execution, and a deep understanding of evolving customer lifestyles.</p>
                                    <p>His focus lies in innovation, scalability, and crafting experiences that resonate with today&apos;s fast-paced, mindful world — without losing the essence of tradition.</p>
                                </div>
                            </div>
                            <div className="row m-t20">
                                <div className="col-lg-10 offset-lg-1 text-center">
                                    <p className="m-b0"><strong>Together, they represent the heart of La Caféine — a harmonious blend of tradition and trend, where legacy inspires innovation and the future is brewed with respect for the past.</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">Frequently Asked Questions</h2>
                                <p className="sub-title">Everything you&apos;d like to know about La Caféine.</p>
                            </div>
                            <div className="accordion dlab-accordion faq-accordion" id="faqAccordion">
                                {faqs.map((faq, idx) => (
                                    <div className="panel" key={idx}>
                                        <div className="acod-head">
                                            <h5 className="acod-title">
                                                <a
                                                    href="#"
                                                    onClick={(e) => { e.preventDefault(); setOpenFaq(openFaq === idx ? -1 : idx); }}
                                                    className={openFaq === idx ? '' : 'collapsed'}
                                                >
                                                    {faq.q}
                                                </a>
                                            </h5>
                                        </div>
                                        <div className={`collapse ${openFaq === idx ? 'show' : ''}`}>
                                            <div className="acod-body">{faq.a}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
