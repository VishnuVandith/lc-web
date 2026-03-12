'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectionBlock from '@/components/SectionBlock';

const categories = ['All', 'Coffee', 'Cold Beverages', 'Snacks', 'Combos', 'Seasonal Specials'];

// TODO: Replace with actual menu data from API or CMS
const menuItems = [
    { name: 'Classic Americano', category: 'Coffee', price: '₹149', description: 'Bold, smooth espresso with hot water' },
    { name: 'Café Latte', category: 'Coffee', price: '₹179', description: 'Espresso with steamed milk and light foam' },
    { name: 'Cappuccino', category: 'Coffee', price: '₹169', description: 'Equal parts espresso, steamed milk, and foam' },
    { name: 'Mocha', category: 'Coffee', price: '₹199', description: 'Espresso with chocolate and steamed milk' },
    { name: 'Iced Caramel Latte', category: 'Cold Beverages', price: '₹219', description: 'Espresso with caramel syrup over ice' },
    { name: 'Cold Brew', category: 'Cold Beverages', price: '₹199', description: '12-hour steeped cold coffee' },
    { name: 'Berry Blast Smoothie', category: 'Cold Beverages', price: '₹229', description: 'Mixed berry smoothie with yogurt' },
    { name: 'Mango Tango', category: 'Cold Beverages', price: '₹209', description: 'Fresh mango smoothie with a tropical twist' },
    { name: 'Grilled Panini', category: 'Snacks', price: '₹179', description: 'Toasted panini with premium fillings' },
    { name: 'Croissant', category: 'Snacks', price: '₹129', description: 'Butter croissant, baked fresh daily' },
    { name: 'Pasta Bowl', category: 'Snacks', price: '₹249', description: 'Creamy penne with herbs and cheese' },
    { name: 'Coffee + Croissant', category: 'Combos', price: '₹249', description: 'Any classic coffee with a butter croissant' },
    { name: 'Smoothie + Panini', category: 'Combos', price: '₹349', description: 'Any smoothie with a grilled panini' },
    { name: 'Rose Cardamom Latte', category: 'Seasonal Specials', price: '₹239', description: 'Limited edition floral latte with cardamom' },
    { name: 'Spiced Chai Frappé', category: 'Seasonal Specials', price: '₹219', description: 'Iced chai with Indian spices' },
];

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems = activeCategory === 'All'
        ? menuItems
        : menuItems.filter((item) => item.category === activeCategory);

    return (
        <div className="page-wraper">
            <Header />
            <div className="page-content">
                <div id="main">
                    <PageBanner
                        title="OUR MENU"
                        subtitle="Crafted with Love"
                        breadcrumbs={[
                            { label: 'Consumer', href: '/consumer' },
                            { label: 'Menu' },
                        ]}
                    />

                    <SectionBlock title="Menu" subtitle="EXPLORE OUR OFFERINGS">
                        <div className="menu-categories">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`menu-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="row">
                            {filteredItems.map((item, idx) => (
                                <div key={idx} className="col-lg-4 col-md-6 m-b30">
                                    <div className="placeholder-card" style={{ textAlign: 'left' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                            <h4 className="title" style={{ marginBottom: '4px' }}>{item.name}</h4>
                                            <span className="text-primary" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>{item.price}</span>
                                        </div>
                                        <p className="text-muted" style={{ marginBottom: '4px', fontSize: '13px' }}>{item.description}</p>
                                        <span style={{ fontSize: '11px', color: '#bbb', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.category}</span>
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
