'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const models = [
    { name: 'Kiosk 365', investment: 10, monthlyRevenue: 2.5, monthlyCost: 1.2, royaltyPct: 5, icon: '🏪' },
    { name: 'Green9', investment: 17.5, monthlyRevenue: 3.5, monthlyCost: 1.6, royaltyPct: 5, icon: '🌿' },
    { name: '1Stop', investment: 21, monthlyRevenue: 4, monthlyCost: 2, royaltyPct: 6, icon: '☕' },
    { name: 'Luxe', investment: 30, monthlyRevenue: 5, monthlyCost: 2.5, royaltyPct: 6, icon: '👑' },
];

function formatLakhs(val) {
    return `₹${val.toFixed(2)} L`;
}

export default function ProfitCalculatorPage() {
    const [selectedModel, setSelectedModel] = useState(0);
    const [customRevenue, setCustomRevenue] = useState(null);
    const [customCost, setCustomCost] = useState(null);
    const [yearsToProject, setYearsToProject] = useState(3);

    const model = models[selectedModel];
    const revenue = customRevenue ?? model.monthlyRevenue;
    const cost = customCost ?? model.monthlyCost;

    // Reset custom values when switching models
    const handleModelChange = (idx) => {
        setSelectedModel(idx);
        setCustomRevenue(null);
        setCustomCost(null);
    };

    const calc = useMemo(() => {
        const monthlyRoyalty = (revenue * model.royaltyPct) / 100;
        const monthlyProfit = revenue - cost - monthlyRoyalty;
        const annualProfit = monthlyProfit * 12;
        const breakEvenMonths = monthlyProfit > 0 ? Math.ceil(model.investment / monthlyProfit) : Infinity;
        const roi = model.investment > 0 ? ((annualProfit / model.investment) * 100) : 0;
        const totalProfitProjected = annualProfit * yearsToProject;
        const netReturn = totalProfitProjected - model.investment;

        // Yearly breakdown
        const yearlyBreakdown = [];
        let cumulativeProfit = 0;
        for (let y = 1; y <= yearsToProject; y++) {
            cumulativeProfit += annualProfit;
            yearlyBreakdown.push({
                year: y,
                annual: annualProfit,
                cumulative: cumulativeProfit,
                netOfInvestment: cumulativeProfit - model.investment,
            });
        }

        return {
            monthlyRoyalty,
            monthlyProfit,
            annualProfit,
            breakEvenMonths,
            roi,
            totalProfitProjected,
            netReturn,
            yearlyBreakdown,
        };
    }, [revenue, cost, model, yearsToProject]);

    // max values for the sliders
    const maxRevenue = model.monthlyRevenue * 2.5;
    const maxCost = model.monthlyCost * 2.5;

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

                    {/* Model Selection */}
                    <div className="section-full content-inner">
                        <div className="container">
                            <div className="section-head text-center" style={{ marginBottom: '36px' }}>
                                <h2 className="main-title text-primary">Calculate</h2>
                                <h3 className="title">FRANCHISE PROFIT CALCULATOR</h3>
                                <div className="dlab-separator"></div>
                                <p>Select a franchise model and adjust the inputs to see your estimated returns. <em>Figures are indicative and actual results may vary.</em></p>
                            </div>

                            {/* Model Selector Cards */}
                            <div className="calc-model-grid">
                                {models.map((m, idx) => (
                                    <button
                                        key={idx}
                                        className={`calc-model-btn ${selectedModel === idx ? 'active' : ''}`}
                                        onClick={() => handleModelChange(idx)}
                                    >
                                        <span className="calc-model-icon">{m.icon}</span>
                                        <span className="calc-model-name">{m.name}</span>
                                        <span className="calc-model-inv">₹{m.investment}L Investment</span>
                                    </button>
                                ))}
                            </div>

                            {/* Calculator Body */}
                            <div className="calc-body">
                                {/* Left: Inputs */}
                                <div className="calc-inputs">
                                    <h4 className="calc-section-title">Adjust Your Estimates</h4>

                                    <div className="calc-slider-group">
                                        <div className="calc-slider-header">
                                            <label>Monthly Revenue</label>
                                            <span className="calc-slider-value">{formatLakhs(revenue)}</span>
                                        </div>
                                        <input
                                            type="range"
                                            className="calc-range"
                                            min={0.5}
                                            max={maxRevenue}
                                            step={0.1}
                                            value={revenue}
                                            onChange={(e) => setCustomRevenue(parseFloat(e.target.value))}
                                        />
                                        <div className="calc-slider-labels">
                                            <span>₹0.5L</span>
                                            <span>{formatLakhs(maxRevenue)}</span>
                                        </div>
                                    </div>

                                    <div className="calc-slider-group">
                                        <div className="calc-slider-header">
                                            <label>Monthly Operating Cost</label>
                                            <span className="calc-slider-value">{formatLakhs(cost)}</span>
                                        </div>
                                        <input
                                            type="range"
                                            className="calc-range"
                                            min={0.2}
                                            max={maxCost}
                                            step={0.1}
                                            value={cost}
                                            onChange={(e) => setCustomCost(parseFloat(e.target.value))}
                                        />
                                        <div className="calc-slider-labels">
                                            <span>₹0.2L</span>
                                            <span>{formatLakhs(maxCost)}</span>
                                        </div>
                                    </div>

                                    <div className="calc-slider-group">
                                        <div className="calc-slider-header">
                                            <label>Projection Period</label>
                                            <span className="calc-slider-value">{yearsToProject} Years</span>
                                        </div>
                                        <input
                                            type="range"
                                            className="calc-range"
                                            min={1}
                                            max={10}
                                            step={1}
                                            value={yearsToProject}
                                            onChange={(e) => setYearsToProject(parseInt(e.target.value))}
                                        />
                                        <div className="calc-slider-labels">
                                            <span>1 Year</span>
                                            <span>10 Years</span>
                                        </div>
                                    </div>

                                    {/* Fixed Info */}
                                    <div className="calc-fixed-info">
                                        <div className="calc-fixed-row">
                                            <span>Investment</span>
                                            <strong>₹{model.investment} Lakhs</strong>
                                        </div>
                                        <div className="calc-fixed-row">
                                            <span>Royalty Rate</span>
                                            <strong>{model.royaltyPct}%</strong>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Results */}
                                <div className="calc-results">
                                    <h4 className="calc-section-title">Your Estimated Returns</h4>

                                    {/* Key Metrics */}
                                    <div className="calc-metrics-grid">
                                        <div className="calc-metric">
                                            <span className="calc-metric-label">Monthly Profit</span>
                                            <span className={`calc-metric-value ${calc.monthlyProfit >= 0 ? 'positive' : 'negative'}`}>
                                                {formatLakhs(calc.monthlyProfit)}
                                            </span>
                                        </div>
                                        <div className="calc-metric">
                                            <span className="calc-metric-label">Annual Profit</span>
                                            <span className={`calc-metric-value ${calc.annualProfit >= 0 ? 'positive' : 'negative'}`}>
                                                {formatLakhs(calc.annualProfit)}
                                            </span>
                                        </div>
                                        <div className="calc-metric highlight">
                                            <span className="calc-metric-label">ROI</span>
                                            <span className="calc-metric-value">{calc.roi.toFixed(1)}%</span>
                                        </div>
                                        <div className="calc-metric">
                                            <span className="calc-metric-label">Break-even</span>
                                            <span className="calc-metric-value">
                                                {calc.breakEvenMonths === Infinity ? '—' : `${calc.breakEvenMonths} mo`}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Monthly Breakdown */}
                                    <div className="calc-breakdown">
                                        <h5 className="calc-breakdown-title">Monthly Breakdown</h5>
                                        <div className="calc-breakdown-bar">
                                            <div
                                                className="calc-bar-segment revenue"
                                                style={{ width: '100%' }}
                                            >
                                                Revenue: {formatLakhs(revenue)}
                                            </div>
                                        </div>
                                        <div className="calc-breakdown-bar stacked">
                                            <div
                                                className="calc-bar-segment cost"
                                                style={{ width: `${(cost / revenue) * 100}%` }}
                                                title={`Cost: ${formatLakhs(cost)}`}
                                            >
                                                Cost
                                            </div>
                                            <div
                                                className="calc-bar-segment royalty"
                                                style={{ width: `${(calc.monthlyRoyalty / revenue) * 100}%` }}
                                                title={`Royalty: ${formatLakhs(calc.monthlyRoyalty)}`}
                                            >
                                                Royalty
                                            </div>
                                            <div
                                                className="calc-bar-segment profit"
                                                style={{ width: `${Math.max(0, (calc.monthlyProfit / revenue) * 100)}%` }}
                                                title={`Profit: ${formatLakhs(calc.monthlyProfit)}`}
                                            >
                                                Profit
                                            </div>
                                        </div>
                                    </div>

                                    {/* Year-wise Projection */}
                                    <div className="calc-projection">
                                        <h5 className="calc-breakdown-title">{yearsToProject}-Year Projection</h5>
                                        <div className="calc-projection-table">
                                            <div className="calc-proj-header">
                                                <span>Year</span>
                                                <span>Annual Profit</span>
                                                <span>Cumulative</span>
                                                <span>Net Return</span>
                                            </div>
                                            {calc.yearlyBreakdown.map((row) => (
                                                <div key={row.year} className="calc-proj-row">
                                                    <span>Year {row.year}</span>
                                                    <span>{formatLakhs(row.annual)}</span>
                                                    <span>{formatLakhs(row.cumulative)}</span>
                                                    <span className={row.netOfInvestment >= 0 ? 'positive' : 'negative'}>
                                                        {formatLakhs(row.netOfInvestment)}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="section-full content-inner text-center bg-pink-light">
                        <div className="container">
                            <h2 className="main-title text-primary">Ready to Start?</h2>
                            <h3 className="title">GET A PERSONALIZED PROJECTION</h3>
                            <div className="dlab-separator"></div>
                            <p style={{ maxWidth: '500px', margin: '0 auto 20px' }}>Our franchise team can provide a detailed, customized financial projection based on your location and preferences.</p>
                            <Link href="/franchise/apply" className="btn bg-secondry">APPLY NOW</Link>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
