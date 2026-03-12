import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';
import PlaceholderSection from '@/components/PlaceholderSection';

export const metadata = {
    title: 'Events – La Caféine Consumer',
    description: 'Discover events at La Caféine: open mic nights, business meetups, youth networking, and franchise launches.',
};

export default function ConsumerEventsPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="EVENTS"
                        subtitle="Happenings at La Caféine"
                        breadcrumbs={[
                            { label: 'Consumer', href: '/consumer' },
                            { label: 'Events' },
                        ]}
                    />

                    <SectionBlock title="What's Happening" subtitle="JOIN THE VIBE">
                        <p className="text-center m-b30">La Caféine isn&apos;t just a café — it&apos;s a community hub. From open mic nights to business meetups, there&apos;s always something happening at our outlets.</p>
                    </SectionBlock>

                    <PlaceholderSection
                        title="Event Categories"
                        items={[
                            'Open Mic Nights',
                            'Business Meetups',
                            'Youth Networking',
                            'Franchise Launches',
                            'Coffee Workshops',
                            'Seasonal Celebrations',
                        ]}
                    />

                    <Footer />
                </div>
            </div>
        </div>
    );
}
