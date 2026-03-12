import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Offers & Loyalty – La Caféine',
    description: 'Discover La Caféine loyalty rewards, QR benefits, membership tiers, and exclusive offers for our customers.',
};

export default function OffersLoyaltyPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <div className="seo-hero">
                        <div className="container">
                            <h1>Offers & Loyalty Program</h1>
                            <p>Earn rewards with every visit. Join the La Caféine loyalty program and unlock exclusive benefits.</p>
                        </div>
                    </div>

                    <SectionBlock title="How It Works" subtitle="EARN, REDEEM, REPEAT">
                        {/* TODO: Replace with actual loyalty program flow */}
                        <div className="row text-center">
                            {[
                                { icon: '📱', title: 'Scan QR', desc: 'Scan the QR code at your table or counter.' },
                                { icon: '⭐', title: 'Earn Points', desc: 'Earn points on every order automatically.' },
                                { icon: '🎁', title: 'Unlock Rewards', desc: 'Redeem points for free drinks, discounts, and more.' },
                            ].map((step, idx) => (
                                <div key={idx} className="col-md-4 m-b30">
                                    <div style={{ fontSize: '50px', marginBottom: '10px' }}>{step.icon}</div>
                                    <h4 className="title">{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </SectionBlock>

                    <SectionBlock title="Membership Tiers" subtitle="LEVEL UP YOUR EXPERIENCE" bg="bg-pink-light">
                        {/* TODO: Replace with actual tier data */}
                        <div className="row text-center">
                            {[
                                { title: 'Silver', benefit: 'Birthday reward, earn 1 point per ₹100' },
                                { title: 'Gold', benefit: '10% off all orders, priority seating, earn 2x points' },
                                { title: 'Platinum', benefit: 'Free monthly drink, event access, earn 3x points' },
                            ].map((tier, idx) => (
                                <div key={idx} className="col-md-4 m-b30">
                                    <div className="offer-card">
                                        <h4 className="title">{tier.title}</h4>
                                        <p>{tier.benefit}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionBlock>

                    <div className="section-full content-inner text-center">
                        <div className="container">
                            <h2 className="main-title text-primary">Find a Café</h2>
                            <p>Visit your nearest La Caféine outlet and start earning rewards today.</p>
                            <Link href="/consumer/find-cafe" className="btn bg-secondry" style={{ marginTop: '10px' }}>Locate a Café</Link>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
