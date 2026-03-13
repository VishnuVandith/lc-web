import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Advisory Board – La Caféine',
    description: 'Meet the distinguished advisory board guiding La Caféine\'s strategic vision, innovation, and growth across India and beyond.',
};

const advisors = [
    {
        name: 'Coming Soon',
        role: 'Strategic Advisor',
        expertise: 'Business Strategy & Growth',
        bio: 'Our advisory board is currently being finalized. We are onboarding leaders from diverse industries who share our passion for innovation, wellness, and scalable café culture.',
        initials: 'CS',
    },
    {
        name: 'Coming Soon',
        role: 'Industry Expert',
        expertise: 'Food & Beverage Industry',
        bio: 'We are assembling a team of seasoned professionals with deep expertise in the food and beverage sector, consumer brands, and franchise operations.',
        initials: 'CS',
    },
    {
        name: 'Coming Soon',
        role: 'Technology Advisor',
        expertise: 'Technology & Innovation',
        bio: 'Technology is at the heart of La Caféine. We are bringing on board advisors who will help us push boundaries in smart brewing, supply chain, and digital experience.',
        initials: 'CS',
    },
];

export default function AdvisoryBoardPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="ADVISORY BOARD"
                        subtitle="Guided by Visionaries. Driven by Purpose."
                        breadcrumbs={[{ label: 'Advisory Board' }]}
                    />

                    {/* Introduction */}
                    <SectionBlock title="Our Advisors" subtitle="STRATEGIC LEADERSHIP">
                        <div className="section-head text-center" style={{ marginBottom: '40px' }}>
                            <p>
                                At La Caféine, we believe that great brands are built with great guidance.
                                Our Advisory Board comprises leaders and experts from diverse fields — including
                                business strategy, food &amp; beverage innovation, technology, and franchise operations
                                — who help shape the brand&apos;s long-term vision and growth trajectory.
                            </p>
                        </div>

                        {/* Advisor Cards */}
                        <div className="row">
                            {advisors.map((advisor, idx) => (
                                <div key={idx} className="col-lg-4 col-md-6 m-b30">
                                    <div className="advisory-card">
                                        <div className="advisory-avatar">
                                            <span>{advisor.initials}</span>
                                        </div>
                                        <h4 className="advisory-name">{advisor.name}</h4>
                                        <p className="advisory-role">{advisor.role}</p>
                                        <div className="advisory-expertise">
                                            <span>{advisor.expertise}</span>
                                        </div>
                                        <p className="advisory-bio">{advisor.bio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionBlock>

                    {/* Advisory Vision */}
                    <div className="section-full bg-img-fix content-inner-2 overlay-black-middle" style={{ backgroundImage: 'url(/images/background/bg3.jpg)' }}>
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="main-title text-primary">Vision</h2>
                                <h3 className="title text-white">THE ROLE OF OUR ADVISORY BOARD</h3>
                                <div className="dlab-separator" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 m-b30">
                                    <div className="icon-bx-wraper center text-white service-box">
                                        <div className="icon-bx-xl">
                                            <span className="icon-cell" style={{ fontSize: '48px' }}>🎯</span>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">STRATEGIC<br />DIRECTION</h5>
                                            <p style={{ fontSize: '13px', opacity: 0.8 }}>Guiding business strategy, market expansion, and brand positioning across India and beyond.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 m-b30">
                                    <div className="icon-bx-wraper center text-white service-box">
                                        <div className="icon-bx-xl">
                                            <span className="icon-cell" style={{ fontSize: '48px' }}>💡</span>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">INNOVATION<br />&amp; R&amp;D</h5>
                                            <p style={{ fontSize: '13px', opacity: 0.8 }}>Driving product innovation, wellness integration, and technology adoption in café operations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 m-b30">
                                    <div className="icon-bx-wraper center text-white service-box">
                                        <div className="icon-bx-xl">
                                            <span className="icon-cell" style={{ fontSize: '48px' }}>🤝</span>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">NETWORK<br />&amp; GROWTH</h5>
                                            <p style={{ fontSize: '13px', opacity: 0.8 }}>Opening doors to partnerships, investors, and industry connections that accelerate growth.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <SectionBlock title="Join Us" subtitle="INTERESTED IN ADVISING LA CAFÉINE?" bg="bg-pink-light">
                        <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <p>
                                We welcome expressions of interest from industry leaders, domain experts, and
                                seasoned professionals who believe in the future of premium café culture in India.
                            </p>
                            <a href="/contact" className="btn bg-secondry" style={{ marginTop: '20px' }}>GET IN TOUCH</a>
                        </div>
                    </SectionBlock>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
