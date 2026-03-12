'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

const jobOpenings = [
    { title: 'Barista', type: 'Full-time', location: 'Multiple Cities', description: 'Craft exceptional beverages and deliver outstanding customer experiences at our café outlets.' },
    { title: 'Café Manager', type: 'Full-time', location: 'Multiple Cities', description: 'Lead café operations, manage staff, and ensure every guest leaves with a smile.' },
    { title: 'Kitchen Staff', type: 'Full-time', location: 'Multiple Cities', description: 'Prepare food items following La Caféine quality standards and hygiene protocols.' },
    { title: 'Marketing Executive', type: 'Full-time', location: 'Hyderabad / Delhi', description: 'Drive brand awareness through creative campaigns, social media, and local marketing.' },
    { title: 'Franchise Support Specialist', type: 'Full-time', location: 'Hyderabad', description: 'Support franchise partners with onboarding, training, and ongoing operational guidance.' },
    { title: 'Corporate Roles', type: 'Full-time', location: 'Hyderabad / Delhi', description: 'Join our corporate team in finance, HR, operations, or technology.' },
    { title: 'Internship Programs', type: 'Internship', location: 'Hyderabad / Delhi', description: 'Gain hands-on experience in café operations, marketing, or product development.' },
];

export default function CareersPage() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', position: '', resume: '', message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // TODO: Connect to careers API endpoint
            await fetch('/api/careers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', position: '', resume: '', message: '' });
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
                        title="CAREERS"
                        subtitle="Build a Career Where Taste, Care, and Growth Come Together"
                        breadcrumbs={[{ label: 'Careers' }]}
                    />

                    {/* Job Openings */}
                    <SectionBlock title="Open Positions" subtitle="JOIN OUR TEAM">
                        <div className="row">
                            {jobOpenings.map((job, idx) => (
                                <div key={idx} className="col-lg-4 col-md-6 m-b30">
                                    <div className="job-card">
                                        <h4 className="title">{job.title}</h4>
                                        <p style={{ marginBottom: '4px' }}><strong>{job.type}</strong> · {job.location}</p>
                                        <p>{job.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionBlock>

                    {/* Application Form */}
                    <SectionBlock title="Apply for a Job" subtitle="WE'D LOVE TO HEAR FROM YOU" bg="bg-pink-light">
                        {submitted ? (
                            <div className="text-center" style={{ padding: '40px 0' }}>
                                <h3 className="text-primary">Application Received!</h3>
                                <p>Thank you for your interest in joining La Caféine. Our HR team will review your application and get back to you shortly.</p>
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
                                            <select
                                                required
                                                value={formData.position}
                                                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                            >
                                                <option value="">Select Position</option>
                                                {jobOpenings.map((job, i) => <option key={i}>{job.title}</option>)}
                                            </select>
                                        </div>
                                        <div className="col-md-12">
                                            <input
                                                type="url" placeholder="Resume Link (Google Drive / LinkedIn)"
                                                value={formData.resume}
                                                onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <textarea
                                                rows="4" placeholder="Tell us why you'd be a great fit..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
