import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Success Stories – La Caféine Franchise Partners',
    description: 'Real success stories from La Caféine franchise partners. See how entrepreneurs are building thriving café businesses.',
};

export default function SuccessStoriesPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <div className="seo-hero">
                        <div className="container">
                            <h1>Success Stories</h1>
                            <p>Real franchise partners. Real results. Discover how La Caféine is creating successful café entrepreneurs across India.</p>
                        </div>
                    </div>

                    <SectionBlock title="Partner Stories" subtitle="INSPIRED BY REAL JOURNEYS">
                        {/* TODO: Replace with actual success stories and testimonials */}
                        <div className="row">
                            {[
                                { name: 'Partner A', city: 'Hyderabad', quote: 'La Caféine gave me a turnkey solution. I went from application to launch in just 45 days.' },
                                { name: 'Partner B', city: 'Bengaluru', quote: 'The tech ecosystem alone sets La Caféine apart. I can see my customer data and run campaigns effortlessly.' },
                                { name: 'Partner C', city: 'Jaipur', quote: 'As a first-time entrepreneur, the training and support were invaluable. I broke even in 10 months.' },
                            ].map((story, idx) => (
                                <div key={idx} className="col-md-4 m-b30">
                                    <div className="placeholder-card" style={{ textAlign: 'left' }}>
                                        <p style={{ fontStyle: 'italic', marginBottom: '16px' }}>&ldquo;{story.quote}&rdquo;</p>
                                        <h4 className="title" style={{ marginBottom: '0' }}>{story.name}</h4>
                                        <span className="text-muted">{story.city}</span>
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
