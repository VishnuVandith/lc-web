import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBlock from '@/components/SectionBlock';
import PlaceholderSection from '@/components/PlaceholderSection';

export const metadata = {
    title: 'Coffee Education – La Caféine',
    description: 'Learn about coffee origins, brewing methods, health benefits, and the art of the perfect cup with La Caféine.',
};

export default function CoffeeEducationPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <div className="seo-hero">
                        <div className="container">
                            <h1>Coffee Education</h1>
                            <p>From bean to cup — learn everything about coffee origins, brewing techniques, and the science of flavour.</p>
                        </div>
                    </div>

                    <PlaceholderSection
                        title="Topics"
                        items={[
                            'Coffee Origins & Varieties',
                            'Brewing Methods Explained',
                            'Espresso vs Filter',
                            'Health Benefits of Coffee',
                            'The Art of Latte',
                            'Coffee & Wellness',
                        ]}
                    />

                    <SectionBlock title="Coming Soon" subtitle="WORKSHOPS & COURSES" bg="bg-pink-light">
                        {/* TODO: Add workshop schedules and registration */}
                        <p className="text-center">We&apos;re preparing interactive coffee education workshops at La Caféine outlets. Stay tuned for announcements!</p>
                    </SectionBlock>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
