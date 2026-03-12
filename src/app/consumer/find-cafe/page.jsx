'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

// TODO: Replace with actual café location data from API
const cafes = [
    { name: 'La Caféine Jubilee Hills', city: 'Hyderabad', address: '34, Road No-2, Women\'s Welfare Housing Society, Jubilee Hills, Hyderabad', hours: '8:00 AM – 10:00 PM', phone: '+91 88988 88829' },
    { name: 'La Caféine Connaught Place', city: 'New Delhi', address: '5th Floor, Caddie Commercial Tower, Northern Access Road, New Delhi', hours: '9:00 AM – 11:00 PM', phone: '+91 88988 88829' },
];

export default function FindCafePage() {
    const [searchCity, setSearchCity] = useState('');

    const filteredCafes = searchCity
        ? cafes.filter((c) => c.city.toLowerCase().includes(searchCity.toLowerCase()))
        : cafes;

    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="FIND A CAFÉ"
                        subtitle="Locate Your Nearest La Caféine"
                        breadcrumbs={[
                            { label: 'Consumer', href: '/consumer' },
                            { label: 'Find a Café' },
                        ]}
                    />

                    {/* Map Integration Placeholder */}
                    <div className="section-full bg-pink-light" style={{ padding: '40px 0' }}>
                        <div className="container">
                            {/* TODO: Integrate actual map (Google Maps / Mapbox) */}
                            <div style={{ background: '#e8ddd0', borderRadius: '12px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div className="text-center">
                                    <h3 className="title" style={{ marginBottom: '8px' }}>Map View</h3>
                                    <p className="text-muted">Interactive map integration coming soon</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* City Search */}
                    <SectionBlock title="Search by City" subtitle="FIND YOUR CAFE">
                        <div style={{ maxWidth: '400px', margin: '0 auto 30px' }}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by city name..."
                                value={searchCity}
                                onChange={(e) => setSearchCity(e.target.value)}
                                style={{ textAlign: 'center', fontSize: '16px', padding: '12px' }}
                            />
                        </div>

                        {/* Cafe Cards */}
                        <div className="row">
                            {filteredCafes.length > 0 ? (
                                filteredCafes.map((cafe, idx) => (
                                    <div key={idx} className="col-md-6 m-b30">
                                        <div className="placeholder-card" style={{ textAlign: 'left' }}>
                                            <h4 className="title">{cafe.name}</h4>
                                            <p style={{ marginBottom: '6px' }}><strong>City:</strong> {cafe.city}</p>
                                            <p style={{ marginBottom: '6px' }}><strong>Address:</strong> {cafe.address}</p>
                                            <p style={{ marginBottom: '6px' }}><strong>Hours:</strong> {cafe.hours}</p>
                                            <p style={{ marginBottom: '0' }}><strong>Phone:</strong> {cafe.phone}</p>
                                            {/* TODO: Add directions link (Google Maps deep link) */}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center">
                                    <p>No cafés found for &quot;{searchCity}&quot;. We&apos;re expanding rapidly — check back soon!</p>
                                </div>
                            )}
                        </div>
                    </SectionBlock>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
