import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Start Your Café in 30 Days – La Caféine Franchise',
    description: 'Launch your own premium café in just 30 days with La Caféine. Complete support from concept to launch.',
};

export default function StartCafe30DaysPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <div className="seo-hero">
                        <div className="container">
                            <h1>Start Your Café in 30 Days</h1>
                            <p>La Caféine makes it possible. From application to launch — we handle everything so you can focus on growing.</p>
                        </div>
                    </div>

                    <SectionBlock title="How It Works" subtitle="THE 30-DAY ROADMAP">
                        <div className="process-steps">
                            {['Apply Today', 'Get Approved', 'Location Lock', 'Design & Setup', 'Training', 'Grand Launch'].map((step, idx) => (
                                <div key={idx} className="process-step">
                                    <h5>{step}</h5>
                                </div>
                            ))}
                        </div>
                    </SectionBlock>

                    <SectionBlock title="Why Choose La Caféine?" subtitle="YOUR UNFAIR ADVANTAGE" bg="bg-pink-light">
                        {/* TODO: Replace with actual differentiators */}
                        <div className="row text-center">
                            {[
                                'Premium Brand Identity',
                                'Complete Setup Support',
                                'Proprietary Tech Stack',
                                'Proven Unit Economics',
                            ].map((item, idx) => (
                                <div key={idx} className="col-md-3 col-6 m-b30">
                                    <div className="placeholder-card">
                                        <h4 className="title">{item}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionBlock>

                    <div className="section-full bg-img-fix content-inner overlay-black-middle" style={{ backgroundImage: 'url(/images/background/bg3.jpg)' }}>
                        <div className="container text-center text-white">
                            <h2 className="main-title">Ready to Begin?</h2>
                            <p>Apply now and start your café journey in 30 days.</p>
                            <Link href="/franchise/apply" className="btn bg-secondry" style={{ marginTop: '10px' }}>Apply Now</Link>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
