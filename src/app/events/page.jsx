import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

export const metadata = {
    title: 'Events – La Caféine',
    description: 'Discover parties and events at La Caféine.',
};

const events = [
    { img: '/images/events/pic1.jpg', title: 'Coffee Brewing & Tasting Workshops' },
    { img: '/images/events/pic2.jpg', title: 'Corporate Partner Meetup' },
    { img: '/images/events/pic3.jpg', title: 'Product launches & More' },
];

export default function EventsPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner title="PARTIES & EVENTS" subtitle="Build a career where taste, care, and growth come together" breadcrumbs={[{ label: 'Events' }]} />

                    <div className="section-full content-inner-2 bg-pink-light">
                        <div className="container">
                            <div className="section-head text-center m-b0">
                                <h2 className="main-title text-primary">Got a party in mind?</h2>
                                <h3 className="title">LET&apos;S PARTY!</h3>
                                <p className="m-b0">
                                    From intimate gatherings to large celebrations, La Caféine is the perfect destination
                                    to host unforgettable moments. With thoughtfully crafted beverages, curated menus,
                                    and warm, aesthetic spaces, we turn every event into a memorable experience.
                                </p>
                                <br />
                                <p className="m-b0">
                                    Whether it&apos;s a birthday, corporate meet, coffee workshop, or a wellness-focused gathering,
                                    our team ensures seamless planning, great hospitality, and an ambience that reflects
                                    both comfort and class.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="section-full content-inner bg-white">
                        <div className="container">
                            <div className="row">
                                {events.map((event, idx) => (
                                    <div key={idx} className="col-lg-12">
                                        <div className="blog-post blog-md event-blog">
                                            <div className="dlab-post-media dlab-img-overlay1 dlab-overlay-primary">
                                                <a href="#"><img src={event.img} alt="" /></a>
                                            </div>
                                            <div className="dlab-post-info text-center">
                                                <div className="dlab-post-title">
                                                    <h2 className="post-sub-title"><a href="#" className="text-primary">Event</a></h2>
                                                    <h3 className="post-title">{event.title}</h3>
                                                </div>
                                                <div className="dlab-separator"></div>
                                                <div className="dlab-post-readmore">
                                                    <a href="#" className="btn bg-secondry">LEARN MORE</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
