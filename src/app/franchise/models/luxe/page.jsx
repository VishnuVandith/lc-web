import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Luxe – La Caféine Franchise Model',
    description: 'The Luxe model by La Caféine: premium full-format café with curated interiors, full menu, and a luxury beverage experience.',
};

export default function LuxePage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="LUXE"
                        subtitle="Premium. Experiential. Iconic."
                        breadcrumbs={[
                            { label: 'Franchise', href: '/franchise' },
                            { label: 'Models', href: '/franchise/models' },
                            { label: 'Luxe' },
                        ]}
                    />

                    <SectionBlock title="Luxe" subtitle="MODEL OVERVIEW">
                        {/* TODO: Replace with actual Luxe model images and content */}
                        <div className="row">
                            <div className="col-md-6 m-b30">
                                <img className="radius-sm img-cover" src="/images/about/pic3.jpg" alt="Luxe Model" />
                            </div>
                            <div className="col-md-6 m-b30 align-self-center">
                                <p>The Luxe format is La Caféine&apos;s flagship café experience — a full-service premium outlet featuring curated interiors, an extensive beverage and food menu, and an ambience designed to impress.</p>
                                <p>Ideal for prime locations in metro and Tier 1 cities, the Luxe model attracts discerning customers seeking an elevated café experience.</p>
                            </div>
                        </div>
                    </SectionBlock>

                    <SectionBlock bg="bg-pink-light">
                        <div className="row text-center">
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">800–1200 sq ft</h3>
                                <p>Area Required</p>
                            </div>
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">₹25–35 Lakhs</h3>
                                <p>Investment</p>
                            </div>
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">30–40%</h3>
                                <p>Expected ROI</p>
                            </div>
                            <div className="col-md-3 col-6 m-b30">
                                <h3 className="text-primary">14–18 Months</h3>
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
