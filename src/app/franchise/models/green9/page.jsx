import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Green9 – La Caféine Franchise Model',
    description: 'The Green9 model by La Caféine: eco-conscious café format with sustainable design and health-focused menu.',
};

export default function Green9Page() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="GREEN9"
                        subtitle="Eco-Conscious. Wellness-Driven. Sustainable."
                        breadcrumbs={[
                            { label: 'Franchise', href: '/franchise' },
                            { label: 'Models', href: '/franchise/models' },
                            { label: 'Green9' },
                        ]}
                    />

                    <SectionBlock title="Green9" subtitle="MODEL OVERVIEW">
                        {/* TODO: Replace with actual Green9 model images and content */}
                        <div className="row">
                            <div className="col-md-6 m-b30">
                                <img className="radius-sm img-cover" src="/images/about/pic4.jpg" alt="Green9 Model" />
                            </div>
                            <div className="col-md-6 m-b30 align-self-center">
                                <p>Green9 is La Caféine&apos;s sustainability-first café format. With eco-friendly materials, energy-efficient operations, and a health-focused beverage line, this model appeals to the conscious consumer.</p>
                                <p>Designed for mid-size spaces in Tier 2 cities and eco-friendly commercial zones, Green9 delivers both impact and returns.</p>
                            </div>
                        </div>
                    </SectionBlock>

                    <SectionBlock bg="bg-pink-light">
                        <div className="row text-center">
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">400–600 sq ft</h3>
                                <p>Area Required</p>
                            </div>
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">₹15–20 Lakhs</h3>
                                <p>Investment</p>
                            </div>
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">32–42%</h3>
                                <p>Expected ROI</p>
                            </div>
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">10–14 Months</h3>
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
