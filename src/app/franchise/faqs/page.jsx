'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

const faqs = [
    { q: 'What is the minimum investment required?', a: 'The minimum investment starts at ₹8 Lakhs for our Kiosk 365 model. Investment varies by model — from ₹8 Lakhs to ₹35 Lakhs depending on the format and location.' },
    { q: 'Do I need prior experience in the food & beverage industry?', a: 'No prior experience is necessary. La Caféine provides complete training, SOPs, vendor support, and operational guidance to ensure your success.' },
    { q: 'What kind of locations work best?', a: 'High-footfall areas like malls, commercial complexes, tech parks, high streets, and highway stops are ideal. Our team helps evaluate and approve your proposed location.' },
    { q: 'What is the royalty structure?', a: 'Royalty ranges between 5–8% of gross revenue, depending on the franchise model. This includes access to our tech platform, central marketing, and ongoing support.' },
    { q: 'How long does it take to set up a café?', a: 'From agreement signing to launch, the typical setup timeline is 45–90 days, depending on location readiness and interior work.' },
    { q: 'What ongoing support does La Caféine provide?', a: 'We provide continuous support including marketing campaigns, tech platform updates, menu innovations, staff training refreshers, and operational audits.' },
    { q: 'Can I own multiple franchise outlets?', a: 'Absolutely! We actively encourage multi-unit ownership. Special terms and priority location access are available for multi-franchise partners.' },
    { q: 'What is the ₹2,000/month digital system fee?', a: 'This covers access to our complete tech ecosystem — POS system, customer data capture, loyalty engine, campaign tools, and analytics dashboard.' },
];

export default function FaqsPage() {
    const [openIdx, setOpenIdx] = useState(null);

    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="FRANCHISE FAQs"
                        subtitle="Answers to Common Questions"
                        breadcrumbs={[
                            { label: 'Franchise', href: '/franchise' },
                            { label: 'FAQs' },
                        ]}
                    />

                    <SectionBlock title="Frequently Asked Questions" subtitle="GOT QUESTIONS?">
                        <div className="faq-list">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="faq-item">
                                    <button
                                        className={`faq-question ${openIdx === idx ? 'open' : ''}`}
                                        onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                    >
                                        {faq.q}
                                        <span className="arrow">▼</span>
                                    </button>
                                    <div className={`faq-answer ${openIdx === idx ? 'open' : ''}`}>
                                        <p>{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionBlock>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
