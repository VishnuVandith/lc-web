'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

const tabs = ['All', 'Café Interiors', 'Launch Events', 'Customers', 'Brand Shoots'];

// TODO: Replace with actual gallery images from CMS
const galleryImages = [
    { src: '/images/gallery/pic1.jpg', category: 'Café Interiors' },
    { src: '/images/gallery/pic2.jpg', category: 'Launch Events' },
    { src: '/images/gallery/pic3.jpg', category: 'Customers' },
    { src: '/images/gallery/pic4.jpg', category: 'Brand Shoots' },
    { src: '/images/gallery/pic5.jpg', category: 'Café Interiors' },
    { src: '/images/gallery/pic6.jpg', category: 'Launch Events' },
    { src: '/images/gallery/pic1.jpg', category: 'Customers' },
    { src: '/images/gallery/pic3.jpg', category: 'Brand Shoots' },
    { src: '/images/gallery/pic2.jpg', category: 'Café Interiors' },
    { src: '/images/gallery/pic4.jpg', category: 'Customers' },
    { src: '/images/gallery/pic5.jpg', category: 'Launch Events' },
    { src: '/images/gallery/pic6.jpg', category: 'Brand Shoots' },
];

export default function ConsumerGalleryPage() {
    const [activeTab, setActiveTab] = useState('All');

    const filtered = activeTab === 'All'
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeTab);

    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="GALLERY"
                        subtitle="A Visual Journey"
                        breadcrumbs={[
                            { label: 'Consumer', href: '/consumer' },
                            { label: 'Gallery' },
                        ]}
                    />

                    <SectionBlock title="Gallery" subtitle="VISUAL STORIES">
                        <div className="gallery-tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`gallery-tab ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="row sp20">
                            {filtered.map((img, idx) => (
                                <div key={idx} className="col-lg-3 col-md-4 col-6 m-b20">
                                    <div className="dlab-gallery-box">
                                        <div className="dlab-thum">
                                            <img src={img.src} alt={`${img.category} ${idx + 1}`} style={{ borderRadius: '8px' }} />
                                        </div>
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
