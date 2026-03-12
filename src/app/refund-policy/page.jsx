import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Refund Policy – La Caféine',
    description: 'La Caféine refund policy for franchise fees, events, and services.',
};

export default function RefundPolicyPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="REFUND POLICY"
                        subtitle="Our Refund Terms"
                        breadcrumbs={[{ label: 'Refund Policy' }]}
                    />

                    <SectionBlock>
                        {/* TODO: Replace with actual refund policy content */}
                        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <h2>Refund Policy</h2>
                            <p><strong>Last updated:</strong> March 2026</p>

                            <h3>1. Franchise Fees</h3>
                            <p>Franchise fees are non-refundable once the franchise agreement has been signed and the setup process has commenced.</p>

                            <h3>2. Event Bookings</h3>
                            <p>Event booking cancellations made more than 48 hours in advance are eligible for a full refund. Cancellations within 48 hours may be subject to a cancellation fee.</p>

                            <h3>3. Merchandise & Products</h3>
                            <p>Merchandise purchased through our website can be returned within 7 days of delivery for a full refund, provided the items are in their original condition.</p>

                            <h3>4. Beverage & Food Orders</h3>
                            <p>In-store orders are non-refundable. If you are dissatisfied with your order, please speak with our café manager who will be happy to assist.</p>

                            <h3>5. Processing Time</h3>
                            <p>Approved refunds will be processed within 7–10 business days and credited to the original payment method.</p>

                            <h3>6. Contact</h3>
                            <p>For refund requests, contact us at <strong>support@lacafeine.in</strong></p>
                        </div>
                    </SectionBlock>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
