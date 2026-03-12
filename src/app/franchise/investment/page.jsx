import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Investment & ROI – La Caféine Franchise',
    description: 'Understand the investment structure, monthly expenses, revenue projections, and profit margins for a La Caféine franchise.',
};

export default function InvestmentPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="INVESTMENT & ROI"
                        subtitle="Transparent Numbers. Real Returns."
                        breadcrumbs={[
                            { label: 'Franchise', href: '/franchise' },
                            { label: 'Investment' },
                        ]}
                    />

                    {/* Setup Cost */}
                    <SectionBlock title="Setup Cost" subtitle="INITIAL INVESTMENT">
                        {/* TODO: Replace with actual setup cost breakdown */}
                        <div className="row text-center">
                            {[
                                { label: 'Franchise Fee', value: '₹2–5 Lakhs' },
                                { label: 'Interior & Equipment', value: '₹5–20 Lakhs' },
                                { label: 'Initial Inventory', value: '₹1–3 Lakhs' },
                                { label: 'Technology Setup', value: '₹50K–1 Lakh' },
                            ].map((item, idx) => (
                                <div key={idx} className="col-md-3 col-6 m-b30">
                                    <div className="placeholder-card">
                                        <h4 className="title">{item.label}</h4>
                                        <h3 className="text-primary">{item.value}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionBlock>

                    {/* Monthly Expenses */}
                    <SectionBlock title="Monthly Expenses" subtitle="OPERATING COSTS" bg="bg-pink-light">
                        {/* TODO: Replace with real operational cost data */}
                        <div className="row">
                            {[
                                { label: 'Rent', estimate: 'Location dependent' },
                                { label: 'Staff Salaries', estimate: '₹40K–1.2 Lakhs' },
                                { label: 'Raw Materials', estimate: '₹30K–80K' },
                                { label: 'Utilities & Misc', estimate: '₹10K–25K' },
                                { label: 'Digital System Fee', estimate: '₹2,000/month' },
                                { label: 'Marketing', estimate: '₹5K–15K' },
                            ].map((item, idx) => (
                                <div key={idx} className="col-md-4 col-6 m-b30">
                                    <div className="placeholder-card">
                                        <h4 className="title">{item.label}</h4>
                                        <p>{item.estimate}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionBlock>

                    {/* Revenue Projections */}
                    <SectionBlock title="Revenue Projections" subtitle="EXPECTED EARNINGS">
                        {/* TODO: Replace with actual financial projections */}
                        <p className="text-center">Revenue projections vary by model, location, and market conditions. Our team provides detailed financial projections during the screening process tailored to your specific setup.</p>
                        <div className="row text-center" style={{ marginTop: '20px' }}>
                            <div className="col-md-4 m-b30">
                                <h3 className="text-primary">₹1.5–5 Lakhs</h3>
                                <p>Monthly Revenue (Est.)</p>
                            </div>
                            <div className="col-md-4 m-b30">
                                <h3 className="text-primary">28–45%</h3>
                                <p>Profit Margin Estimate</p>
                            </div>
                            <div className="col-md-4 m-b30">
                                <h3 className="text-primary">5–8%</h3>
                                <p>Royalty Structure</p>
                            </div>
                        </div>
                    </SectionBlock>

                    {/* Digital System */}
                    <SectionBlock title="₹2,000/Month Digital System" subtitle="TECH-POWERED OPERATIONS" bg="bg-pink-light">
                        {/* TODO: Replace with detailed digital system features */}
                        <p className="text-center">For just ₹2,000/month, every franchise partner gets access to La Caféine&apos;s complete digital ecosystem — including POS integration, customer data capture, loyalty engine, campaign tools, and a real-time analytics dashboard.</p>
                    </SectionBlock>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
