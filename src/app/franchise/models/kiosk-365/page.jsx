import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Kiosk 365 – La Caféine Franchise Model',
    description: 'The Kiosk 365 model by La Caféine: compact, high-traffic café format designed for malls, tech parks, and transit zones.',
};

export default function Kiosk365Page() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="KIOSK 365"
                        subtitle="Compact. High-Traffic. Smart."
                        breadcrumbs={[
                            { label: 'Franchise', href: '/franchise' },
                            { label: 'Models', href: '/franchise/models' },
                            { label: 'Kiosk 365' },
                        ]}
                    />

                    <SectionBlock title="Kiosk 365" subtitle="MODEL OVERVIEW">
                        {/* TODO: Replace with actual model images and content */}
                        <div className="row">
                            <div className="col-md-6 m-b30">
                                <img className="radius-sm img-cover" src="/images/about/pic2.jpg" alt="Kiosk 365 Model" />
                            </div>
                            <div className="col-md-6 m-b30 align-self-center">
                                <p>The Kiosk 365 is La Caféine&apos;s most compact format, engineered for high-footfall zones like shopping malls, tech parks, metro stations, and commercial complexes.</p>
                                <p>With a minimal footprint and maximum brand impact, this model is perfect for first-time entrepreneurs looking for a low-risk, high-return entry into the café business.</p>
                            </div>
                        </div>
                    </SectionBlock>

                    <SectionBlock bg="bg-pink-light">
                        <div className="row text-center">
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">150–250 sq ft</h3>
                                <p>Area Required</p>
                            </div>
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">₹8–12 Lakhs</h3>
                                <p>Investment</p>
                            </div>
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">35–45%</h3>
                                <p>Expected ROI</p>
                            </div>
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">8–12 Months</h3>
                                <p>Break-even Period</p>
                            </div>
                        </div>
                    </SectionBlock>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
