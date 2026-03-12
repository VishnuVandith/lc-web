import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

export const metadata = {
    title: 'About Us – La Caféine',
    description: 'Learn about La Caféine, a premium healthy tea and coffee brand.',
};

export default function AboutPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner title="ABOUT US" subtitle="More Than a Café. A Thoughtful Beverage Brand." breadcrumbs={[{ label: 'About us' }]} />

                    {/* About Us */}
                    <div className="section-full content-inner bg-pink-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 m-b30">
                                    <img className="radius-sm img-cover" src="/images/about/pic4.jpg" alt="About La Caféine" />
                                </div>
                                <div className="col-md-6 m-b30 align-self-center">
                                    <div className="section-head full-head text-center">
                                        <h2 className="main-title text-primary">About us</h2>
                                        <h3 className="title">La Caféine</h3>
                                        <div className="dlab-separator"></div>
                                        <p>La Caféine was born from a simple belief — that beverages can do more than refresh. They can comfort, energize, nourish, and bring people together.</p>
                                        <p>We are a modern café brand built at the intersection of <b>taste, technology, and wellness</b>. From premium coffee and innovative tea extraction to nutritionally enriched beverages, every offering at La Caféine is designed with intention and care.</p>
                                        <p>What sets us apart is not just what we serve, but how we serve it — through consistency, smart brewing systems, and an experience that feels both premium and welcoming. We call it <b>affordable luxury</b>.</p>
                                    </div>
                                    <div className="rating-box text-center">
                                        <ul className="rating-star">
                                            {[1, 2, 3, 4].map((i) => (<li key={i}><i className="fa fa-star text-primary"></i></li>))}
                                            <li><i className="fa fa-star text-gray-dark"></i></li>
                                        </ul>
                                        <h2 className="rating-title">&ldquo;A place where every sip feels thoughtful.&rdquo;</h2>
                                        <p>La Caféine blends flavour, innovation, and warmth in a way that feels refreshingly real. It&apos;s not just about coffee or tea — it&apos;s about how it makes you feel.</p>
                                        <h4 className="rating-name">— A La Caféine Guest</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Owner */}
                    <div className="section-full bg-img-fix content-inner-2 overlay-black-middle" style={{ backgroundImage: 'url(/images/background/bg3.jpg)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="owner-profile text-center text-white">
                                        <div className="owner-profile-info">
                                            <div className="owner-profile-pic">
                                                <img src="/images/testimonials/pic2.jpg" alt="" />
                                            </div>
                                            <div className="owner-profile-content">
                                                <h2 className="owner-name">The Vision Behind La Caféine</h2>
                                                <h5 className="owner-position text-primary">Brand Custodian</h5>
                                                <p>La Caféine is driven by a vision to reimagine everyday beverages — making them smarter, healthier, and more meaningful.</p>
                                                <p>By combining research-backed processes, modern technology, and a deep respect for taste, the brand aims to build a café ecosystem that is scalable, trustworthy, and loved by customers.</p>
                                                <p className="owner-signature">Pranani</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="section-full content-inner-2">
                        <div className="container">
                            <div className="row sp0 contact-box align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="section-head full-head text-center">
                                        <h2 className="main-title text-primary">Our location</h2>
                                        <h3 className="title">VISIT US!</h3>
                                        <div className="dlab-separator"></div>
                                        <p className="m-b0">34, Road No-2, Women&apos;s Welfare Housing Society, Jubilee Hills, Hyderabad, Telangana-500045</p>
                                        <p style={{ textAlign: 'center' }}>&amp;</p>
                                        <p className="m-b0">5th Floor, Caddie Commercial Tower, No. 2, Asset Area, Northern Access road, New Delhi, Delhi 110037</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5995279118447!2d78.42084557520008!3d17.430996183463623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a531f1e209%3A0x63485cdc26415391!2s34%2C%20Rd%20Number%202%2C%20Women&#39;s%20Welfare%20Housing%20Society%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500045!5e0!3m2!1sen!2sin!4v1770324306794!5m2!1sen!2sin"
                                        style={{ border: 0, height: '300px', width: '100%', marginBottom: '-5px' }}
                                        allowFullScreen=""
                                        title="Location Map"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="row sp0 contact-box contact-box-reversed">
                                <div className="col-lg-6 col-md-6">
                                    <img src="/images/our-services/pic1.jpg" className="img-cover" alt="" />
                                </div>
                                <div className="col-lg-6 col-md-6 align-self-center">
                                    <div className="section-head full-head text-center">
                                        <h2 className="main-title text-primary">For Franchise Enquiries!</h2>
                                        <h3 className="title">CONTACT US</h3>
                                        <div className="dlab-separator"></div>
                                        <p className="m-b0">Call us: +91 88988 88829</p>
                                        <p className="m-b0">Mail us: info@lacafeine.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
