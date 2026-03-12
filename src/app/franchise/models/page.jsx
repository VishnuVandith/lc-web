import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Franchise Models – La Caféine',
    description: 'Explore La Caféine franchise models: Kiosk 365, Luxe, Green9, and 1Stop. Find the perfect format for your market.',
};

const models = [
    {
        name: 'Kiosk 365',
        slug: 'kiosk-365',
        tagline: 'Small footprint. Big returns.',
        area: '100–200 sq. ft.',
        investment: '₹8–12 Lakhs',
        roi: '~45%',
        breakEven: '~8 months',
        desc: 'Compact, high-traffic model perfect for malls, food courts, transit hubs, and commercial complexes. Minimal space, maximum efficiency.',
        color: '#e8d5b5',
    },
    {
        name: 'Luxe',
        slug: 'luxe',
        tagline: 'Premium café. Full experience.',
        area: '500–1200 sq. ft.',
        investment: '₹20–35 Lakhs',
        roi: '~42%',
        breakEven: '~14 months',
        desc: 'Full-format premium café with dine-in, lounge, and event hosting capabilities. Designed for high streets, destination locations, and lifestyle zones.',
        color: '#d4c4a8',
    },
    {
        name: 'Green9',
        slug: 'green9',
        tagline: 'Eco-first. Community-focused.',
        area: '250–400 sq. ft.',
        investment: '₹12–20 Lakhs',
        roi: '~40%',
        breakEven: '~12 months',
        desc: 'Sustainability-focused café model with energy-efficient design, eco-friendly packaging, and a community-first approach.',
        color: '#c5d4b5',
    },
    {
        name: '1Stop',
        slug: '1stop',
        tagline: 'Drive-through. Quick-serve.',
        area: '200–500 sq. ft.',
        investment: '₹14–22 Lakhs',
        roi: '~38%',
        breakEven: '~11 months',
        desc: 'Highway-ready, quick-serve format optimized for high-volume, fast-turnaround locations. Drive-through + grab-and-go convenience.',
        color: '#b5c8d4',
    },
];

export default function ModelsPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="FRANCHISE MODELS"
                        subtitle="Four Formats. One Vision."
                        breadcrumbs={[
                            { label: 'Franchise', href: '/franchise' },
                            { label: 'Models' },
                        ]}
                    />

                    <SectionBlock title="Choose Your Format" subtitle="MODELS BUILT FOR DIFFERENT MARKETS">
                        <p className="text-center m-b30">
                            Every market is different. That&apos;s why La Caféine offers four distinct franchise formats — each engineered for a specific setting, investment range, and growth trajectory.
                        </p>
                    </SectionBlock>

                    <div className="section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="row">
                                {models.map((model, idx) => (
                                    <div key={idx} className="col-lg-6 m-b30">
                                        <Link href={`/franchise/models/${model.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <div className="model-card" style={{ background: `linear-gradient(145deg, #ffffff, ${model.color}22)`, cursor: 'pointer' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                                                    <h3 className="title" style={{ margin: 0 }}>{model.name}</h3>
                                                    <span style={{ fontSize: '13px', color: '#d4a76a', fontWeight: 600 }}>{model.investment}</span>
                                                </div>
                                                <p style={{ color: '#888', fontSize: '13px', fontStyle: 'italic', marginBottom: '14px' }}>{model.tagline}</p>
                                                <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.65', marginBottom: '18px' }}>{model.desc}</p>
                                                <div className="model-detail"><span>Area Required</span><span>{model.area}</span></div>
                                                <div className="model-detail"><span>Est. ROI (Annual)</span><span className="text-primary">{model.roi}</span></div>
                                                <div className="model-detail"><span>Est. Break-even</span><span>{model.breakEven}</span></div>
                                                <div style={{ marginTop: '16px' }}>
                                                    <span className="gateway-card-cta" style={{ fontSize: '12px', padding: '8px 20px' }}>View Details →</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <SectionBlock title="Not Sure Which Model?" subtitle="WE'LL HELP YOU DECIDE">
                        <p className="text-center">Our franchise team will evaluate your location, budget, and goals to recommend the ideal format for you.</p>
                        <div className="text-center" style={{ marginTop: '20px' }}>
                            <Link href="/franchise/apply" className="btn bg-secondry">Talk to Our Team</Link>
                        </div>
                    </SectionBlock>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
