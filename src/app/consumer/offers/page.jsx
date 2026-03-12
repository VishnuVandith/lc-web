import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Offers & Rewards – La Caféine',
    description: 'Discover current offers, membership programs, QR benefits, and referral rewards at La Caféine.',
};

export default function OffersPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="OFFERS & REWARDS"
                        subtitle="More Reasons to Love La Caféine"
                        breadcrumbs={[
                            { label: 'Consumer', href: '/consumer' },
                            { label: 'Offers' },
                        ]}
                    />

                    {/* Current Offers */}
                    <SectionBlock title="Current Offers" subtitle="GRAB YOURS TODAY">
                        {/* TODO: Replace with dynamic offers from CMS/API */}
                        <div className="row">
                            {[
                                { icon: '🎉', title: 'Grand Opening Special', desc: 'Flat 20% off on all beverages at newly launched outlets.' },
                                { icon: '☕', title: 'Happy Hours', desc: 'Buy 1 Get 1 Free on all coffees, weekdays 2–5 PM.' },
                                { icon: '🎂', title: 'Birthday Treat', desc: 'Free signature drink on your birthday with membership.' },
                            ].map((offer, idx) => (
                                <div key={idx} className="col-md-4 m-b30">
                                    <div className="offer-card">
                                        <div className="offer-icon">{offer.icon}</div>
                                        <h4 className="title">{offer.title}</h4>
                                        <p>{offer.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionBlock>

                    {/* Membership Program */}
                    <SectionBlock title="Membership Program" subtitle="JOIN THE CLUB" bg="bg-pink-light">
                        {/* TODO: Replace with membership tier details */}
                        <p className="text-center m-b30">Become a La Caféine member and unlock exclusive benefits, early access to new drinks, and special discounts across all outlets.</p>
                        <div className="row text-center">
                            {[
                                { title: 'Silver', benefits: 'Earn points on every order, birthday reward' },
                                { title: 'Gold', benefits: 'All Silver benefits + 10% off, priority seating' },
                                { title: 'Platinum', benefits: 'All Gold benefits + free monthly drink, event access' },
                            ].map((tier, idx) => (
                                <div key={idx} className="col-md-4 m-b30">
                                    <div className="placeholder-card">
                                        <h4 className="title">{tier.title}</h4>
                                        <p>{tier.benefits}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionBlock>

                    {/* QR Benefits */}
                    <SectionBlock title="QR Benefits" subtitle="SCAN & EARN">
                        {/* TODO: Replace with actual QR benefit flow details */}
                        <p className="text-center">Scan the QR code at your table to earn loyalty points, access exclusive offers, and get personalized recommendations based on your preferences.</p>
                    </SectionBlock>

                    {/* Referral Rewards */}
                    <SectionBlock title="Referral Rewards" subtitle="SHARE THE LOVE" bg="bg-pink-light">
                        {/* TODO: Replace with referral program details */}
                        <p className="text-center">Refer a friend to La Caféine and both of you get rewarded! Share your unique referral code and earn points for every successful referral.</p>
                    </SectionBlock>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
