import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Our Story – La Caféine',
    description: 'Discover why La Caféine was created, our brand philosophy, and how we blend Indian roots with a global café vibe.',
};

export default function OurStoryPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="OUR STORY"
                        subtitle="The Heart Behind La Caféine"
                        breadcrumbs={[
                            { label: 'Consumer', href: '/consumer' },
                            { label: 'Our Story' },
                        ]}
                    />

                    {/* Why La Caféine Was Created */}
                    <SectionBlock title="Why La Caféine" subtitle="THE BEGINNING">
                        <div className="row">
                            <div className="col-md-6 m-b30">
                                <img className="radius-sm img-cover" src="/images/about/pic4.jpg" alt="Our Beginning" />
                            </div>
                            <div className="col-md-6 m-b30 align-self-center">
                                {/* TODO: Replace with founder's actual story */}
                                <p>La Caféine started as a dream — to create a café brand that didn&apos;t just serve beverages, but delivered moments of joy, wellness, and connection.</p>
                                <p>In a market dominated by global chains, we saw an opportunity to build something uniquely Indian yet globally refined — a brand that celebrates local flavours while embracing international standards of quality and experience.</p>
                            </div>
                        </div>
                    </SectionBlock>

                    {/* Brand Philosophy */}
                    <SectionBlock title="Brand Philosophy" subtitle="WHAT WE BELIEVE" bg="bg-pink-light">
                        {/* TODO: Replace with brand philosophy manifesto */}
                        <div className="row text-center">
                            {[
                                { icon: '☕', title: 'Taste First', desc: 'Every beverage is crafted for exceptional flavour — no compromises.' },
                                { icon: '🌿', title: 'Wellness Driven', desc: 'Nutritionally enriched options that nourish body and mind.' },
                                { icon: '💡', title: 'Innovation Led', desc: 'Smart brewing, data-driven operations, and tech-powered experiences.' },
                                { icon: '🤝', title: 'People Centered', desc: 'We build relationships — with customers, partners, and communities.' },
                            ].map((item, idx) => (
                                <div key={idx} className="col-md-3 col-6 m-b30">
                                    <div style={{ fontSize: '40px', marginBottom: '10px' }}>{item.icon}</div>
                                    <h4 className="title">{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </SectionBlock>

                    {/* Indian Roots + Global Vibe */}
                    <SectionBlock title="Indian Roots, Global Vibe" subtitle="THE BEST OF BOTH WORLDS">
                        {/* TODO: Replace with detailed cultural content */}
                        <p className="text-center">La Caféine is rooted in India&apos;s rich beverage heritage — from masala chai to filter coffee — while drawing inspiration from global café culture. The result is a brand that feels familiar yet elevated, local yet world-class.</p>
                    </SectionBlock>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
