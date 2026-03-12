import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'What We Provide – La Caféine Franchise Support',
    description: 'Complete franchise support from La Caféine: branding, interior design, vendor sourcing, staff training, marketing, tech support, and more.',
};

const supportPillars = [
    { icon: '🎨', title: 'Branding & Identity', desc: 'Complete brand toolkit — logo usage, signage, packaging, uniforms, and in-store branding materials to ensure a consistent premium look.' },
    { icon: '🏗️', title: 'Interior Design & Setup', desc: 'Turnkey interior design, equipment procurement, and setup supervision. Your café will be ready to serve from Day 1.' },
    { icon: '📦', title: 'Vendor Sourcing', desc: 'Pre-negotiated supply chain for raw materials, packaging, and equipment. Consistent quality at optimized costs.' },
    { icon: '👨‍🍳', title: 'Staff Training & SOPs', desc: 'Comprehensive training programs covering brewing techniques, customer service, hygiene protocols, and operational SOPs.' },
    { icon: '📢', title: 'Marketing Support', desc: 'Local launch campaigns, social media templates, seasonal promotions, and central brand campaigns to drive footfall.' },
    { icon: '💻', title: 'Tech & POS Support', desc: 'Full POS system, customer data capture, loyalty engine, campaign tools, and a real-time analytics dashboard — all for ₹2,000/month.' },
    { icon: '🎉', title: 'Central Promotions', desc: 'Nationwide campaigns, festival promotions, and collaborative marketing initiatives that benefit every franchise outlet.' },
];

export default function WhatWeProvidePage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="WHAT WE PROVIDE"
                        subtitle="End-to-End Franchise Support"
                        breadcrumbs={[
                            { label: 'Franchise', href: '/franchise' },
                            { label: 'What We Provide' },
                        ]}
                    />

                    <SectionBlock title="Complete Support" subtitle="WE'VE GOT YOU COVERED">
                        <p className="text-center m-b30">When you partner with La Caféine, you&apos;re never alone. We provide comprehensive support across every aspect of your café business — from setup to scale.</p>
                    </SectionBlock>

                    <div className="section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="row">
                                {supportPillars.map((item, idx) => (
                                    <div key={idx} className="col-lg-4 col-md-6 m-b30">
                                        <div className="placeholder-card" style={{ textAlign: 'left' }}>
                                            <div style={{ fontSize: '36px', marginBottom: '14px' }}>{item.icon}</div>
                                            <h4 className="title">{item.title}</h4>
                                            <p className="text-muted">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="section-full bg-img-fix content-inner overlay-black-middle" style={{ backgroundImage: 'url(/images/background/bg3.jpg)' }}>
                        <div className="container text-center text-white">
                            <h2 className="main-title">Ready to Get Started?</h2>
                            <p>Apply now and let our support team guide you every step of the way.</p>
                            <Link href="/franchise/apply" className="btn bg-secondry" style={{ marginTop: '10px' }}>Apply for Franchise</Link>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
