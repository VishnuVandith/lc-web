import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBlock from '@/components/SectionBlock';
import PlaceholderSection from '@/components/PlaceholderSection';

export const metadata = {
    title: 'Café Setup Guide – La Caféine',
    description: 'Complete guide to setting up a café in India with La Caféine. Location, investment, design, licensing, and operations.',
};

export default function CafeSetupGuidePage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <div className="seo-hero">
                        <div className="container">
                            <h1>Café Setup Guide</h1>
                            <p>Everything you need to know about opening a premium café in India — from location selection to daily operations.</p>
                        </div>
                    </div>

                    <PlaceholderSection
                        title="Guide Chapters"
                        items={[
                            'Choosing the Right Location',
                            'Understanding Investment',
                            'Interior Design & Branding',
                            'Licensing & Compliance',
                            'Staff Recruitment & Training',
                            'Menu Planning',
                            'Technology & POS Setup',
                            'Marketing & Launch Strategy',
                            'Daily Operations SOPs',
                        ]}
                    />

                    <div className="section-full bg-img-fix content-inner overlay-black-middle" style={{ backgroundImage: 'url(/images/background/bg3.jpg)' }}>
                        <div className="container text-center text-white">
                            <h2 className="main-title">Skip the Learning Curve</h2>
                            <p>Partner with La Caféine and get all of this — done for you.</p>
                            <Link href="/franchise/apply" className="btn bg-secondry" style={{ marginTop: '10px' }}>Apply for Franchise</Link>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
