import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Tech Ecosystem – La Caféine',
    description: 'Discover La Caféine\'s tech ecosystem: customer data capture, loyalty engine, campaign broadcasting, local marketing automation, and analytics dashboard.',
};

const features = [
    { icon: '📊', title: 'Customer Data Capture', desc: 'Automatically capture customer data at every touchpoint — orders, QR scans, loyalty sign-ups. Build rich customer profiles to personalize experiences and drive repeat visits.' },
    { icon: '❤️', title: 'Loyalty Engine', desc: 'A points-based loyalty system that rewards every visit. Customers earn, redeem, and stay engaged — all automated through our platform.' },
    { icon: '📲', title: 'Campaign Broadcasting', desc: 'Run SMS, WhatsApp, and email campaigns directly from your dashboard. Target specific customer segments with personalized offers.' },
    { icon: '📍', title: 'Local Marketing Automation', desc: 'Geo-targeted promotions, local event campaigns, and hyper-local digital ads — all managed centrally with outlet-level customization.' },
    { icon: '📈', title: 'Dashboard & Analytics', desc: 'Real-time business intelligence: track revenue, footfall, customer patterns, popular items, and staff performance from any device.' },
];

export default function TechEcosystemPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="TECH ECOSYSTEM"
                        subtitle="Data-Driven. Automated. Smart."
                        breadcrumbs={[
                            { label: 'Franchise', href: '/franchise' },
                            { label: 'Tech Ecosystem' },
                        ]}
                    />

                    <SectionBlock title="Technology That Powers Growth" subtitle="THE LA CAFÉINE ADVANTAGE">
                        <p className="text-center m-b30">Every La Caféine outlet is powered by a proprietary tech stack that captures customer data, automates marketing, and drives repeat visits — all for just <strong>₹2,000/month</strong>.</p>
                    </SectionBlock>

                    <div className="section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="row">
                                {features.map((f, idx) => (
                                    <div key={idx} className="col-lg-4 col-md-6 m-b30">
                                        <div className="placeholder-card" style={{ textAlign: 'left' }}>
                                            <div style={{ fontSize: '36px', marginBottom: '14px' }}>{f.icon}</div>
                                            <h4 className="title">{f.title}</h4>
                                            <p className="text-muted">{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pricing highlight */}
                    <SectionBlock title="₹2,000/Month" subtitle="ALL-INCLUSIVE DIGITAL SYSTEM">
                        <div className="row text-center">
                            <div className="col-md-4 m-b30">
                                <h3 className="text-primary">POS System</h3>
                                <p>Integrated point-of-sale with inventory tracking</p>
                            </div>
                            <div className="col-md-4 m-b30">
                                <h3 className="text-primary">CRM & Loyalty</h3>
                                <p>Customer management and rewards automation</p>
                            </div>
                            <div className="col-md-4 m-b30">
                                <h3 className="text-primary">Analytics</h3>
                                <p>Real-time business dashboards on any device</p>
                            </div>
                        </div>
                    </SectionBlock>

                    {/* CTA */}
                    <div className="section-full bg-img-fix content-inner overlay-black-middle" style={{ backgroundImage: 'url(/images/background/bg2.jpg)' }}>
                        <div className="container text-center text-white">
                            <h2 className="main-title">Experience the Tech</h2>
                            <p>Join La Caféine and get the full technology stack from Day 1.</p>
                            <Link href="/franchise/apply" className="btn bg-secondry" style={{ marginTop: '10px' }}>Apply Now</Link>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
