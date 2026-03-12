import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Franchise Process – La Caféine',
    description: 'Step-by-step La Caféine franchise process: Apply, Screening, Location Approval, Agreement, Setup, Launch, and Ongoing Support.',
};

const steps = [
    'Apply',
    'Screening',
    'Location Approval',
    'Agreement',
    'Setup',
    'Launch',
    'Support',
];

export default function ProcessPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="FRANCHISE PROCESS"
                        subtitle="From Application to Launch"
                        breadcrumbs={[
                            { label: 'Franchise', href: '/franchise' },
                            { label: 'Process' },
                        ]}
                    />

                    <SectionBlock title="Your Journey" subtitle="7 SIMPLE STEPS">
                        <p className="text-center m-b30">Our streamlined process takes you from your initial application to a fully operational La Caféine café with ongoing support.</p>
                        <div className="process-steps">
                            {steps.map((step, idx) => (
                                <div key={idx} className="process-step">
                                    <h5>{step}</h5>
                                </div>
                            ))}
                        </div>
                    </SectionBlock>

                    {/* Detailed steps */}
                    <SectionBlock bg="bg-pink-light">
                        {/* TODO: Replace with detailed step descriptions */}
                        <div className="row">
                            {[
                                { title: '1. Apply', desc: 'Fill out the franchise application form with your details, city preference, and investment capacity.' },
                                { title: '2. Screening', desc: 'Our team reviews your application and connects with you for an initial discussion.' },
                                { title: '3. Location Approval', desc: 'We work together to identify and approve the right location for your café.' },
                                { title: '4. Agreement', desc: 'Sign the franchise agreement and formalize the partnership.' },
                                { title: '5. Setup', desc: 'Interior design, equipment procurement, staff recruitment, and training begin.' },
                                { title: '6. Launch', desc: 'Grand opening with marketing support, branding, and community engagement.' },
                                { title: '7. Ongoing Support', desc: 'Continuous operational, marketing, and tech support to ensure growth.' },
                            ].map((item, idx) => (
                                <div key={idx} className="col-md-6 m-b30">
                                    <div className="placeholder-card" style={{ textAlign: 'left' }}>
                                        <h4 className="title">{item.title}</h4>
                                        <p>{item.desc}</p>
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
