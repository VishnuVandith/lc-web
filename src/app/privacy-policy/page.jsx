import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Privacy Policy – La Caféine',
    description: 'La Caféine privacy policy: how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="PRIVACY POLICY"
                        subtitle="Your Privacy Matters"
                        breadcrumbs={[{ label: 'Privacy Policy' }]}
                    />

                    <SectionBlock>
                        {/* TODO: Replace with actual legal privacy policy content */}
                        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <h2>Privacy Policy</h2>
                            <p><strong>Last updated:</strong> March 2026</p>

                            <h3>1. Information We Collect</h3>
                            <p>We collect information you provide directly, such as your name, email address, phone number, and any other details submitted through our forms or during interactions with our services.</p>

                            <h3>2. How We Use Your Information</h3>
                            <p>Your information is used to process franchise applications, respond to enquiries, send marketing communications (with your consent), and improve our services.</p>

                            <h3>3. Data Security</h3>
                            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.</p>

                            <h3>4. Third-Party Sharing</h3>
                            <p>We do not sell or rent your personal information. We may share data with trusted service providers who assist in operating our website and serving you.</p>

                            <h3>5. Your Rights</h3>
                            <p>You have the right to access, correct, or delete your personal data. Contact us at <strong>privacy@lacafeine.in</strong> for any data-related requests.</p>

                            <h3>6. Contact Us</h3>
                            <p>For questions about this Privacy Policy, contact us at <strong>info@lacafeine.in</strong></p>
                        </div>
                    </SectionBlock>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
