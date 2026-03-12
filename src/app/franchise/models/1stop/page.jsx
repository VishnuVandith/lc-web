import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: '1Stop – La Caféine Franchise Model',
    description: 'The 1Stop model by La Caféine: highway and destination café with extended menu including meals and snacks.',
};

export default function OneStopPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="1STOP"
                        subtitle="Highway. Destination. All-in-One."
                        breadcrumbs={[
                            { label: 'Franchise', href: '/franchise' },
                            { label: 'Models', href: '/franchise/models' },
                            { label: '1Stop' },
                        ]}
                    />

                    <SectionBlock title="1Stop" subtitle="MODEL OVERVIEW">
                        {/* TODO: Replace with actual 1Stop model images and content */}
                        <div className="row">
                            <div className="col-md-6 m-b30">
                                <img className="radius-sm img-cover" src="/images/about/pic2.jpg" alt="1Stop Model" />
                            </div>
                            <div className="col-md-6 m-b30 align-self-center">
                                <p>The 1Stop model is designed for highway locations, tourist corridors, and destination zones. It offers an extended menu including full meals, snacks, and beverages — a complete pit-stop experience.</p>
                                <p>Perfect for entrepreneurs looking to serve travellers and families in high-visibility, high-convenience locations.</p>
                            </div>
                        </div>
                    </SectionBlock>

                    <SectionBlock bg="bg-pink-light">
                        <div className="row text-center">
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">500–800 sq ft</h3>
                                <p>Area Required</p>
                            </div>
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">₹18–25 Lakhs</h3>
                                <p>Investment</p>
                            </div>
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">28–38%</h3>
                                <p>Expected ROI</p>
                            </div>
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">12–16 Months</h3>
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
