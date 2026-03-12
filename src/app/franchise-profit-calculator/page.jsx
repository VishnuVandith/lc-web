'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBlock from '@/components/SectionBlock';
import PageBanner from '@/components/PageBanner';

const models = [
    { name: 'Kiosk 365', investment: 10, monthlyRevenue: 2.5, monthlyCost: 1.2, royaltyPct: 5 },
    { name: 'Luxe', investment: 30, monthlyRevenue: 5, monthlyCost: 2.5, royaltyPct: 6 },
    { name: 'Green9', investment: 17.5, monthlyRevenue: 3.5, monthlyCost: 1.6, royaltyPct: 5 },
    { name: '1Stop', investment: 21, monthlyRevenue: 4, monthlyCost: 2, royaltyPct: 6 },
];

export default function ProfitCalculatorPage() {
    const [selectedModel, setSelectedModel] = useState(0);
    const model = models[selectedModel];

    const monthlyRoyalty = (model.monthlyRevenue * model.royaltyPct) / 100;
    const monthlyProfit = model.monthlyRevenue - model.monthlyCost - monthlyRoyalty;
    const annualProfit = monthlyProfit * 12;
    const breakEvenMonths = Math.ceil(model.investment / monthlyProfit);
    const roi = ((annualProfit / model.investment) * 100).toFixed(1);

    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="PROFIT CALCULATOR"
                        subtitle="Estimate Your Franchise Returns"
                        breadcrumbs={[
                            { label: 'Franchise', href: '/franchise' },
                            { label: 'Profit Calculator' },
                        ]}
                    />

                    <SectionBlock title="Franchise Profit Calculator" subtitle="ESTIMATE YOUR ROI">
                        <p className="text-center m-b30">Select a franchise model to see estimated revenue, costs, and return on investment. <em>These are indicative figures and actual results may vary.</em></p>

                        <div className="menu-categories" style={{ marginBottom: '30px' }}>
                            {models.map((m, idx) => (
                                <button
                                    key={idx}
                                    className={`menu-cat-btn ${selectedModel === idx ? 'active' : ''}`}
                                    onClick={() => setSelectedModel(idx)}
                                >
                                    {m.name}
                                </button>
                            ))}
                        </div>

                        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <div className="model-card">
                                <h4 className="title">{model.name} – Financial Snapshot</h4>
                                <div className="model-detail"><span>Initial Investment</span><span>₹{model.investment} Lakhs</span></div>
                                <div className="model-detail"><span>Est. Monthly Revenue</span><span>₹{model.monthlyRevenue} Lakhs</span></div>
                                <div className="model-detail"><span>Est. Monthly Cost</span><span>₹{model.monthlyCost} Lakhs</span></div>
                                <div className="model-detail"><span>Royalty ({model.royaltyPct}%)</span><span>₹{monthlyRoyalty.toFixed(2)} Lakhs</span></div>
                                <div className="model-detail" style={{ background: '#f5efe6', borderRadius: '8px', padding: '10px 14px', marginTop: '8px' }}>
                                    <span><strong>Est. Monthly Profit</strong></span>
                                    <span style={{ color: '#2a7d2e' }}><strong>₹{monthlyProfit.toFixed(2)} Lakhs</strong></span>
                                </div>
                                <div className="model-detail"><span>Est. Annual Profit</span><span>₹{annualProfit.toFixed(2)} Lakhs</span></div>
                                <div className="model-detail"><span>Est. ROI</span><span className="text-primary"><strong>{roi}%</strong></span></div>
                                <div className="model-detail"><span>Est. Break-even</span><span>{breakEvenMonths} months</span></div>
                            </div>
                        </div>
                    </SectionBlock>

                    <div className="section-full content-inner text-center bg-pink-light">
                        <div className="container">
                            <h2 className="main-title text-primary">Ready to Start?</h2>
                            <p>Get a personalized financial projection from our franchise team.</p>
                            <Link href="/franchise/apply" className="btn bg-secondry" style={{ marginTop: '10px' }}>Apply Now</Link>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
