import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Terms & Conditions – La Caféine',
    description: 'La Caféine terms and conditions for website use, franchise agreements, and services.',
};

export default function TermsPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="TERMS & CONDITIONS"
                        subtitle="Terms of Use"
                        breadcrumbs={[{ label: 'Terms' }]}
                    />

                    <SectionBlock>
                        {/* TODO: Replace with actual legal terms content */}
                        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <h2>Terms & Conditions</h2>
                            <p><strong>Last updated:</strong> March 2026</p>

                            <h3>1. Acceptance of Terms</h3>
                            <p>By accessing and using the La Caféine website, you agree to be bound by these Terms & Conditions.</p>

                            <h3>2. Use of Website</h3>
                            <p>This website is provided for informational purposes and franchise/career applications. You agree not to misuse the website or its content.</p>

                            <h3>3. Intellectual Property</h3>
                            <p>All content, logos, images, and branding on this website are the intellectual property of La Caféine and may not be reproduced without written consent.</p>

                            <h3>4. Franchise Applications</h3>
                            <p>Submitting a franchise application does not guarantee approval. All applications are subject to review and screening by our team.</p>

                            <h3>5. Limitation of Liability</h3>
                            <p>La Caféine is not liable for any damages arising from the use of this website or reliance on information provided herein.</p>

                            <h3>6. Changes to Terms</h3>
                            <p>We reserve the right to update these terms at any time. Continued use of the website constitutes acceptance of the updated terms.</p>

                            <h3>7. Contact</h3>
                            <p>For questions about these Terms, contact us at <strong>info@lacafeine.in</strong></p>
                        </div>
                    </SectionBlock>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
