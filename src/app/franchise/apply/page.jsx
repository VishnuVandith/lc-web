'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal',
];

const investmentRanges = [
    '₹5–10 Lakhs',
    '₹10–20 Lakhs',
    '₹20–35 Lakhs',
    '₹35+ Lakhs',
];

export default function ApplyPage() {
    const [formData, setFormData] = useState({
        name: '', city: '', investmentCapacity: '', phone: '', email: '', businessBackground: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // TODO: Connect to API endpoint for franchise applications
            await fetch('/api/franchise', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            setSubmitted(true);
            setFormData({ name: '', city: '', investmentCapacity: '', phone: '', email: '', businessBackground: '' });
        } catch {
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="APPLY NOW"
                        subtitle="Start Your La Caféine Journey"
                        breadcrumbs={[
                            { label: 'Franchise', href: '/franchise' },
                            { label: 'Apply' },
                        ]}
                    />

                    <SectionBlock title="Franchise Application" subtitle="TELL US ABOUT YOURSELF">
                        {submitted ? (
                            <div className="text-center" style={{ padding: '40px 0' }}>
                                <h3 className="text-primary">Thank You!</h3>
                                <p>Your application has been submitted successfully. Our team will reach out to you within 48 hours.</p>
                                <button className="btn bg-secondry" onClick={() => setSubmitted(false)}>Submit Another Application</button>
                            </div>
                        ) : (
                            <div className="floating-franchise-form" style={{ maxWidth: '700px' }}>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input
                                                type="text" required placeholder="Full Name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="email" required placeholder="Email Address"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="tel" required placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text" required placeholder="City"
                                                value={formData.city}
                                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <select
                                                required
                                                value={formData.investmentCapacity}
                                                onChange={(e) => setFormData({ ...formData, investmentCapacity: e.target.value })}
                                            >
                                                <option value="">Investment Capacity</option>
                                                {investmentRanges.map((range, i) => <option key={i}>{range}</option>)}
                                            </select>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea
                                                rows="4" placeholder="Tell us about your business background..."
                                                value={formData.businessBackground}
                                                onChange={(e) => setFormData({ ...formData, businessBackground: e.target.value })}
                                            ></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit">SUBMIT APPLICATION</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                    </SectionBlock>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
