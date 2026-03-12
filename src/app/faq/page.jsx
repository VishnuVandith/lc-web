'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBlock from '@/components/SectionBlock';
import PageBanner from '@/components/PageBanner';

const allFaqs = [
    { category: 'General', q: 'What is La Caféine?', a: 'La Caféine is a premium healthy tea and coffee brand that blends taste, wellness, and technology to create an elevated café experience.' },
    { category: 'General', q: 'Where are La Caféine outlets located?', a: 'We currently have outlets in Hyderabad and New Delhi, with rapid expansion planned across India.' },
    { category: 'Franchise', q: 'How much does it cost to open a La Caféine franchise?', a: 'Investment starts from ₹8 Lakhs for our Kiosk 365 model, going up to ₹35 Lakhs for the Luxe format.' },
    { category: 'Franchise', q: 'What support does La Caféine provide to franchise partners?', a: 'We provide end-to-end support including branding, interior design, vendor sourcing, staff training, marketing, and technology.' },
    { category: 'Franchise', q: 'How long does it take to break even?', a: 'Break-even periods range from 8–18 months depending on the model and location.' },
    { category: 'Menu', q: 'Does La Caféine serve food?', a: 'Yes! Along with our signature beverages, we offer snacks, light meals, and combo options.' },
    { category: 'Menu', q: 'Do you have options for health-conscious customers?', a: 'Absolutely. Our menu includes wellness blends, sugar-free options, and nutritionally enriched beverages.' },
    { category: 'Careers', q: 'How do I apply for a job at La Caféine?', a: 'Visit our Careers page to view current openings and submit your application.' },
    { category: 'Tech', q: 'What is the La Caféine tech ecosystem?', a: 'Our proprietary tech stack includes POS integration, customer data capture, loyalty engine, campaign tools, and a real-time analytics dashboard.' },
];

export default function FaqPage() {
    const [openIdx, setOpenIdx] = useState(null);

    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="FAQ"
                        subtitle="Frequently Asked Questions"
                        breadcrumbs={[{ label: 'FAQ' }]}
                    />

                    <SectionBlock title="Questions & Answers" subtitle="WE'RE HERE TO HELP">
                        <div className="faq-list">
                            {allFaqs.map((faq, idx) => (
                                <div key={idx} className="faq-item">
                                    <button
                                        className={`faq-question ${openIdx === idx ? 'open' : ''}`}
                                        onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                    >
                                        <span><strong style={{ color: '#d4a76a', marginRight: '8px' }}>[{faq.category}]</strong> {faq.q}</span>
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
