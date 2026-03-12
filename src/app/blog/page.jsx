import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata = {
    title: 'Blog – La Caféine',
    description: 'Read the latest articles, stories, and insights from La Caféine on coffee culture, wellness, and franchise success.',
};

export default function BlogPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="BLOG"
                        subtitle="Stories, Insights & More"
                        breadcrumbs={[{ label: 'Blog' }]}
                    />

                    <SectionBlock title="Latest Articles" subtitle="FROM THE LA CAFÉINE JOURNAL">
                        {/* TODO: Replace with dynamic blog posts from CMS/API */}
                        <div className="row">
                            {[
                                { title: 'The Rise of Premium Café Culture in India', date: 'Coming Soon', excerpt: 'An exploration of how café culture is transforming India\'s social and business landscape.' },
                                { title: '5 Reasons to Choose a Healthy Beverage Brand', date: 'Coming Soon', excerpt: 'Why health-conscious cafés are the future of the food & beverage industry.' },
                                { title: 'From Bean to Cup: Our Coffee Journey', date: 'Coming Soon', excerpt: 'A behind-the-scenes look at how we source, roast, and brew our signature coffees.' },
                                { title: 'Franchise Success Stories', date: 'Coming Soon', excerpt: 'Real stories from La Caféine franchise partners across India.' },
                                { title: 'The Technology Behind Your Coffee', date: 'Coming Soon', excerpt: 'How smart brewing and data analytics are changing the café experience.' },
                                { title: 'Wellness in Every Sip', date: 'Coming Soon', excerpt: 'The science behind our nutritionally enriched beverage line.' },
                            ].map((post, idx) => (
                                <div key={idx} className="col-lg-4 col-md-6 m-b30">
                                    <div className="placeholder-card" style={{ textAlign: 'left' }}>
                                        <span style={{ fontSize: '11px', color: '#d4a76a', textTransform: 'uppercase', letterSpacing: '1px' }}>{post.date}</span>
                                        <h4 className="title" style={{ marginTop: '8px' }}>{post.title}</h4>
                                        <p className="text-muted">{post.excerpt}</p>
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
