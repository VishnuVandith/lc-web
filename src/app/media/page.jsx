import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';
import PlaceholderSection from '@/components/PlaceholderSection';

export const metadata = {
    title: 'Media – La Caféine',
    description: 'La Caféine in the media: press coverage, brand features, and media resources.',
};

export default function MediaPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="MEDIA"
                        subtitle="La Caféine in the Press"
                        breadcrumbs={[{ label: 'Media' }]}
                    />

                    <SectionBlock title="Press & Media" subtitle="IN THE SPOTLIGHT">
                        {/* TODO: Replace with actual press coverage and media features */}
                        <p className="text-center m-b30">For media enquiries, press kits, and brand collaboration requests, please contact us at <strong>media@lacafeine.in</strong></p>
                    </SectionBlock>

                    <PlaceholderSection
                        title="Media Coverage"
                        items={[
                            'Press Releases',
                            'Brand Features',
                            'Interview Coverage',
                            'Event Coverage',
                            'Brand Assets & Logos',
                            'Video Features',
                        ]}
                    />

                    <Footer />
                </div>
            </div>
        </div>
    );
}
