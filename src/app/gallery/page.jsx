import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

export const metadata = {
    title: 'Gallery – La Caféine',
    description: 'Explore La Caféine gallery showcasing our premium café spaces and beverages.',
};

const galleryImages = [
    { src: '/images/gallery/pic1.jpg', col: 'col-lg-3 col-md-6 col-6' },
    { src: '/images/gallery/pic3.jpg', col: 'col-lg-3 col-md-6 col-6' },
    { src: '/images/gallery/pic5.jpg', col: 'col-lg-6 col-md-12 col-12' },
    { src: '/images/gallery/pic4.jpg', col: 'col-lg-3 col-md-6 col-6' },
    { src: '/images/gallery/pic2.jpg', col: 'col-lg-3 col-md-6 col-6' },
    { src: '/images/gallery/pic6.jpg', col: 'col-lg-6 col-md-12 col-12' },
    { src: '/images/gallery/pic2.jpg', col: 'col-lg-3 col-md-6 col-6' },
    { src: '/images/gallery/pic3.jpg', col: 'col-lg-3 col-md-6 col-6' },
    { src: '/images/gallery/pic4.jpg', col: 'col-lg-3 col-md-6 col-6' },
    { src: '/images/gallery/pic1.jpg', col: 'col-lg-3 col-md-6 col-6' },
];

export default function GalleryPage() {
    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content one-page-layout">
                <div id="main">
                    <PageBanner title="GALLERY" subtitle="La Caféine Gallery" breadcrumbs={[{ label: 'Gallery' }]} />

                    <div className="section-full content-inner-2 bg-pink-light">
                        <div className="container">
                            <div className="row sp20">
                                {galleryImages.map((img, idx) => (
                                    <div key={idx} className={`card-container ${img.col}`}>
                                        <div className="dlab-gallery-box">
                                            <div className="dlab-thum">
                                                <img src={img.src} alt={`Gallery ${idx + 1}`} />
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
