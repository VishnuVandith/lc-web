import { getLaunches } from '@/lib/db';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

export const metadata = {
    title: 'Upcoming Launches – La Caféine',
    description: 'Discover what\'s brewing next at La Caféine. Thoughtfully crafted flavours and functional blends, launching soon.',
};

export default function LaunchesPage() {
    const launches = getLaunches();
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner title="Upcoming Launches" subtitle="What's Brewing Next at La Caféine" />

                    <div className="section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">What&apos;s Brewing Next ☕</h2>
                                <p>
                                    Thoughtfully crafted flavours and functional blends,
                                    launching soon at La Caféine.
                                </p>
                            </div>

                            <div className="launches-grid">
                                {launches.map((launch) => {
                                    const isLaunched = launch.launch_date <= today;
                                    const launchDate = new Date(launch.launch_date);
                                    const formattedDate = launchDate.toLocaleDateString('en-IN', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    });

                                    return (
                                        <div key={launch.id} className="launch-card">
                                            <div className="launch-card-icon">☕</div>
                                            <div className="launch-card-content">
                                                <h3 className="launch-card-name">{launch.name}</h3>
                                                <p className="launch-card-desc">{launch.description}</p>
                                                <div className="launch-card-meta">
                                                    {isLaunched ? (
                                                        <span className="launch-badge launched">✓ Launched</span>
                                                    ) : (
                                                        <span className="launch-badge upcoming">
                                                            Launching {formattedDate}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {launches.length === 0 && (
                                <div className="text-center" style={{ padding: '60px 0' }}>
                                    <h3>No upcoming launches at the moment</h3>
                                    <p>Stay tuned — something exciting is always brewing!</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
