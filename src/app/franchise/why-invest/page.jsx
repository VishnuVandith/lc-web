import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Why Invest in La Caféine – Franchise Opportunity',
    description: 'Why La Caféine is the smartest franchise investment: brand positioning, market stats, tier-2/3 city growth, and tech-powered advantage.',
};

export default function WhyInvestPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="WHY INVEST IN LA CAFÉINE"
                        subtitle="Smart Capital. Premium Returns."
                        breadcrumbs={[
                            { label: 'Franchise', href: '/franchise' },
                            { label: 'Why Invest' },
                        ]}
                    />

                    {/* Brand Positioning */}
                    <SectionBlock title="Brand Positioning" subtitle="WHERE WE STAND">
                        <div className="row">
                            <div className="col-md-6 m-b30">
                                <img className="radius-sm img-cover" src="/images/lc-250x500.png" alt="Brand" style={{ borderRadius: '16px', width: '100%', height: '320px', objectFit: 'cover' }} />
                            </div>
                            <div className="col-md-6 m-b30 align-self-center">
                                <p>La Caféine sits at the intersection of <strong>affordable luxury</strong> and <strong>wellness-driven innovation</strong>. In a market crowded with cookie-cutter cafés, we offer a category-defining brand that blends Indian roots with global café culture.</p>
                                <p>Our competitors serve drinks. We deliver <strong>experiences</strong> — powered by proprietary technology, nutritionally enriched beverages, and a design-forward approach that delights every customer.</p>
                            </div>
                        </div>
                    </SectionBlock>

                    {/* Market Stats */}
                    <div className="section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="section-head text-center" style={{ marginBottom: '36px' }}>
                                <h2 className="main-title text-primary">Market Opportunity</h2>
                                <h3 className="title">THE NUMBERS DON&apos;T LIE</h3>
                                <div className="dlab-separator"></div>
                            </div>
                            <div className="row text-center">
                                {[
                                    { value: '$63.89B', label: 'Expected market size by 2030', icon: '📈' },
                                    { value: '63%', label: 'Growth rate (2020–25)', icon: '🚀' },
                                    { value: '150M+', label: 'Daily coffee/tea consumers in India', icon: '☕' },
                                    { value: '3X', label: 'Tier-2/3 city café growth vs metros', icon: '🏙️' },
                                ].map((stat, idx) => (
                                    <div key={idx} className="col-md-3 col-6 m-b30">
                                        <div className="placeholder-card">
                                            <div style={{ fontSize: '32px', marginBottom: '8px' }}>{stat.icon}</div>
                                            <h3 className="text-primary" style={{ fontSize: '28px', marginBottom: '4px' }}>{stat.value}</h3>
                                            <p className="text-muted" style={{ fontSize: '13px' }}>{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tier City Growth */}
                    <SectionBlock title="Tier-2 & Tier-3 City Opportunity" subtitle="THE UNTAPPED GOLDMINE">
                        <div className="row">
                            <div className="col-md-6 align-self-center m-b30">
                                <p>While metros are saturated with global chains, <strong>Tier-2 and Tier-3 cities</strong> represent the fastest-growing café market in India. Rising disposable incomes, aspirational lifestyles, and limited premium options create the perfect entry point.</p>
                                <p>La Caféine is purpose-built for these markets — with models that work in compact spaces, local taste integration, and investment levels that match the regional economy.</p>
                            </div>
                            <div className="col-md-6 m-b30">
                                <img className="radius-sm img-cover" src="/images/t2t3cities.png" alt="Growth" style={{ borderRadius: '16px', width: '100%', height: '320px', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </SectionBlock>

                    {/* Tech Advantage */}
                    <div className="section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="section-head text-center" style={{ marginBottom: '36px' }}>
                                <h2 className="main-title text-primary">Tech Advantage</h2>
                                <h3 className="title">DATA-DRIVEN CAFÉ OPERATIONS</h3>
                                <div className="dlab-separator"></div>
                            </div>
                            <div className="row">
                                {[
                                    { title: 'Customer Data Capture', desc: 'Know your customers better than any competitor.' },
                                    { title: 'Loyalty Automation', desc: 'Automated rewards that drive 40%+ repeat visits.' },
                                    { title: 'Campaign Engine', desc: 'Run targeted promotions via SMS, WhatsApp, and email.' },
                                    { title: 'Real-Time Analytics', desc: 'Track every metric from revenue to customer satisfaction.' },
                                    { title: 'Smart Operations', desc: 'AI-assisted inventory, staffing, and demand forecasting.' },
                                    { title: 'Secure Platform', desc: 'Enterprise-grade security for all data and transactions.' },
                                ].map((feat, idx) => (
                                    <div key={idx} className="col-lg-4 col-md-6 m-b30">
                                        <div className="placeholder-card" style={{ textAlign: 'left' }}>
                                            <h4 className="title">{feat.title}</h4>
                                            <p className="text-muted">{feat.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="section-full bg-img-fix content-inner overlay-black-middle" style={{ backgroundImage: 'url(/images/background/bg3.jpg)' }}>
                        <div className="container text-center text-white">
                            <h2 className="main-title">Join the Fastest Growing Café Brand</h2>
                            <p>The market is ready. The tech is ready. Are you?</p>
                            <Link href="/franchise/apply" className="btn bg-secondry" style={{ marginTop: '10px' }}>Apply Now</Link>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
