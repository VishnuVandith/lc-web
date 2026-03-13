'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatConcierge from '@/components/ChatConcierge';
import LoadingScreen from '@/components/LoadingScreen';

const models = [
    { id: 'Urban Kiosk', icon: '/images/icons/icon8.png', title: 'URBAN KIOSK', desc: 'Fast · Compact · High Footfall' },
    { id: 'Signature Luxe', icon: '/images/icons/icon5.png', title: 'SIGNATURE LUXE', desc: 'Premium · Meetings · Aesthetic' },
    { id: 'Cafe Botanica', icon: '/images/icons/icon6.png', title: 'CAFÉ BOTANICA', desc: 'Outdoor · Nature · Wellness' },
    { id: 'One Stop', icon: '/images/icons/icon7.png', title: 'ONE STOP', desc: 'Highway · All Day · Family' },
];

export default function OurMenuPage() {
    const [activeModel, setActiveModel] = useState('Urban Kiosk');
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/menu?model=${encodeURIComponent(activeModel)}`);
                if (!response.ok) throw new Error('Failed to fetch menu');

                const data = await response.json();

                // Group items by category
                const grouped = data.reduce((acc, item) => {
                    if (!acc[item.category]) acc[item.category] = [];
                    acc[item.category].push(item);
                    return acc;
                }, {});

                setMenuData(grouped);
            } catch (err) {
                setError('Failed to load menu. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, [activeModel]);

    return (
        <div className="page-wraper">
            <LoadingScreen />
            <Header />
            <div className="page-content">
                <div id="main">
                    {/* Inner Page Banner */}
                    <div className="dlab-bnr-inr overlay-black-light" style={{ backgroundImage: 'url(/images/banner/bnr1.jpg)', backgroundPosition: 'bottom right' }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">OUR MENU</h1>
                                <p className="sub-title">SELECT MENU BELOW:</p>
                                <nav aria-label="breadcrumb" className="breadcrumb-row">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">OUR MENU</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Menu Section */}
                    <div className="section-full bg-pink-light">
                        <div className="container">
                            <div className="dlab-tabs menu-tabs style1">
                                {/* Model Tabs */}
                                <ul className="nav nav-tabs" id="menuTabs">
                                    {models.map((model) => (
                                        <li key={model.id} className={activeModel === model.id ? 'active' : ''}>
                                            <a onClick={() => setActiveModel(model.id)} style={{ cursor: 'pointer' }}>
                                                <div className="icon-bx">
                                                    <img src={model.icon} alt={model.title} />
                                                </div>
                                                <h4>{model.title}</h4>
                                                <h6>{model.desc}</h6>
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tab Content Placeholder */}
                                <div className="tab-content">
                                    {models.map((model) => (
                                        <div key={model.id} className={`tab-pane ${activeModel === model.id ? 'active' : ''}`}></div>
                                    ))}
                                </div>

                                {/* Menu Items Container */}
                                <div id="menuContainer">
                                    {loading ? (
                                        <p>Loading menu...</p>
                                    ) : error ? (
                                        <p>{error}</p>
                                    ) : (
                                        Object.entries(menuData).map(([category, items]) => (
                                            <div key={category} className="menu-section">
                                                <div className="menu-heading">
                                                    <img src="/images/menu/loading.gif" alt="Category" />
                                                    <h3>{category}</h3>
                                                </div>
                                                {items.map((item, index) => (
                                                    <div key={index} className="menu-item">
                                                        <div className="menu-item-left">
                                                            <h5 className="menu-title">{item.title}</h5>
                                                            {item.description && <p className="menu-desc">{item.description}</p>}
                                                        </div>
                                                        <div className="menu-item-price">₹{item.price}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
            <ChatConcierge />
        </div>
    );
}
