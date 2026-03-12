import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Consumer Experience – La Caféine',
    description: 'Discover the La Caféine experience: signature drinks, premium café vibes, our story, and find a café near you.',
};

export default function ConsumerPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="CONSUMER EXPERIENCE"
                        subtitle="More Than Coffee. A Lifestyle."
                        breadcrumbs={[{ label: 'Consumer' }]}
                    />

                    {/* Brand Story */}
                    <SectionBlock title="Our Story" subtitle="THE LA CAFÉINE JOURNEY">
                        <div className="row">
                            <div className="col-md-6 m-b30">
                                <img className="radius-sm img-cover" src="/images/about/pic4.jpg" alt="Brand Story" style={{ borderRadius: '16px', width: '100%', height: '320px', objectFit: 'cover' }} />
                            </div>
                            <div className="col-md-6 m-b30 align-self-center">
                                <p>La Caféine was born from a simple idea — that your daily cup of coffee or tea should be more than just a drink. It should be an experience that nourishes, inspires, and connects.</p>
                                <p>We blend premium ingredients with innovative techniques and a deep understanding of wellness to create beverages that taste extraordinary and feel good.</p>
                                <Link href="/consumer/our-story" className="btn bg-secondry" style={{ marginTop: '8px' }}>Read Our Full Story</Link>
                            </div>
                        </div>
                    </SectionBlock>

                    {/* Explore Consumer Sections */}
                    <div className="section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="section-head text-center" style={{ marginBottom: '36px' }}>
                                <h2 className="main-title text-primary">Explore</h2>
                                <h3 className="title">DISCOVER WHAT WE OFFER</h3>
                                <div className="dlab-separator"></div>
                            </div>
                            <div className="row">
                                {[
                                    { icon: '☕', title: 'Our Menu', desc: 'Artisan coffees, botanical teas, wellness blends, and fresh food — crafted with care.', href: '/consumer/menu' },
                                    { icon: '📍', title: 'Find a Café', desc: 'Discover your nearest La Caféine outlet and step into a world of premium beverages.', href: '/consumer/find-cafe' },
                                    { icon: '🎁', title: 'Offers & Rewards', desc: 'Exclusive deals, loyalty points, membership tiers, and birthday treats.', href: '/consumer/offers' },
                                    { icon: '🎤', title: 'Events', desc: 'Open mic nights, business meetups, coffee workshops, and seasonal celebrations.', href: '/consumer/events' },
                                    { icon: '📸', title: 'Gallery', desc: 'Visual stories from our cafés — interiors, launches, customers, and brand shoots.', href: '/consumer/gallery' },
                                    { icon: '💡', title: 'Our Story', desc: 'Why La Caféine was created, our brand philosophy, and Indian roots with a global vibe.', href: '/consumer/our-story' },
                                ].map((item, idx) => (
                                    <div key={idx} className="col-lg-4 col-md-6 m-b30">
                                        <Link href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <div className="placeholder-card" style={{ textAlign: 'left', cursor: 'pointer' }}>
                                                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{item.icon}</div>
                                                <h4 className="title">{item.title}</h4>
                                                <p className="text-muted">{item.desc}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Café Vibe */}
                    <SectionBlock title="The Café Vibe" subtitle="DESIGNED TO DELIGHT">
                        <p className="text-center m-b30">Every La Caféine café is a thoughtfully designed space where comfort meets class. From warm lighting to curated music, every detail creates an experience worth returning for.</p>
                        <div className="row">
                            {[1, 3, 5].map((num) => (
                                <div key={num} className="col-md-4 m-b30">
                                    <img className="radius-sm img-cover" src={`/images/gallery/pic${num}.jpg`} alt="Café Experience" style={{ borderRadius: '12px', width: '100%', height: '260px', objectFit: 'cover' }} />
                                </div>
                            ))}
                        </div>
                    </SectionBlock>

                    {/* Locate CTA */}
                    <div className="section-full bg-img-fix content-inner overlay-black-middle" style={{ backgroundImage: 'url(/images/background/bg3.jpg)' }}>
                        <div className="container text-center text-white">
                            <h2 className="main-title">Find a Café Near You</h2>
                            <h3 className="title" style={{ color: '#fff' }}>VISIT US TODAY</h3>
                            <div className="dlab-separator"></div>
                            <p>Discover your nearest La Caféine outlet and step into a world of premium beverages and warm hospitality.</p>
                            <Link href="/consumer/find-cafe" className="btn bg-secondry" style={{ marginTop: '10px' }}>Locate a Café</Link>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
