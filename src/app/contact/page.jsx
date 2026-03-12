import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

export const metadata = {
    title: 'Contact Us – La Caféine',
    description: 'Get in touch with La Caféine for franchise enquiries and more.',
};

export default function ContactPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner title="CONTACT US" subtitle="La Caféine cafe & restaurant" breadcrumbs={[{ label: 'Contact Us' }]} />

                    <div className="section-full content-inner bg-pink-light"></div>

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
