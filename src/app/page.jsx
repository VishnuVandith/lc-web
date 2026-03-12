'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatConcierge from '@/components/ChatConcierge';
import LoadingScreen from '@/components/LoadingScreen';

const slides = [
    {
        title: 'From Beans to Big Profits',
        subtitle: 'RAPID GROWTH BUSINESS MODEL',
        points: [
            '2001–05 Growth Rate 8%',
            '2005–10 Growth Rate 15%',
            '2010–15 Growth Rate 31%',
            '2015–20 Growth Rate 46%',
            '2020–25 Growth Rate 63%',
            '2025–30 Expected Growth $63.89 Billion',
        ],
    },
    {
        title: 'Where Excellence Leaves No Match',
        subtitle: 'A CONCEPT SUPERIOR TO ALL',
        points: [
            'Affordable Luxury',
            'Corporate Management Systems',
            'Comprehensive Menu',
            'Cutting Edge Technology',
            'Expert Backing: Total Support, Zero Effort',
            'Dedicated R&D, QA/QC and Elite Procurement Team',
        ],
    },
    {
        title: 'Redefining the Coffee Experience',
        subtitle: 'EVERY SIP SPARKS A NEW MOMENT',
        points: [
            'Star Rated Establishment',
            'Exceptional Quality & Delicious Taste',
            'Cozy Ambience and Free Wi-Fi to Chill in Style & Meet-up',
            'Top-notch Service by Skilled Professionals',
            'Regional & International Blends to Satisfy Every Palate',
            'Luxury Redefined: Sophistication Meets Affordability',
        ],
    },
    {
        title: 'Be Part of a Winning Brand',
        subtitle: 'START RISK FREE BUSINESS',
        points: [
            'Affordable Investment',
            'Effortless Ownership',
            'Expert-Driven Operations',
            'Zero Risk, Guaranteed Returns',
            'High Performance System',
            'Fastest Growing Business',
        ],
    },
];

const coffeeMenu = [
    { img: '/images/cup/cup1.png', title: 'Signature Espresso', desc: 'Bold, aromatic, and intense — the foundation of our coffee craft.' },
    { img: '/images/cup/cup2.png', title: 'Caffé Americano', desc: 'Smooth espresso diluted to perfection for a balanced taste.' },
    { img: '/images/cup/cup3.png', title: 'Cappuccino', desc: 'Rich espresso topped with velvety milk foam.' },
    { img: '/images/cup/cup4.png', title: 'Café Latte', desc: 'Creamy, comforting, and perfectly balanced.' },
    { img: '/images/cup/cup5.png', title: 'Caramel Macchiato', desc: 'Espresso layered with milk and caramel indulgence.' },
    { img: '/images/cup/cup6.png', title: 'Mocha Fusion', desc: 'A decadent blend of coffee and chocolate.' },
];

const teaMenu = [
    { img: '/images/cup/cup1.png', title: 'Classic Assam Black Tea', desc: 'Strong, full-bodied tea with a rich Indian character.' },
    { img: '/images/cup/cup2.png', title: 'Masala Chai', desc: 'Traditional Indian spices blended for warmth and comfort.' },
    { img: '/images/cup/cup3.png', title: 'Ginger Tulsi Tea', desc: 'A soothing immunity-boosting herbal infusion.' },
    { img: '/images/cup/cup4.png', title: 'Cardamom Elaichi Tea', desc: 'Fragrant and refreshing with natural cardamom notes.' },
    { img: '/images/cup/cup5.png', title: 'Darjeeling Green Tea', desc: 'Light, delicate, and rich in antioxidants.' },
    { img: '/images/cup/cup6.png', title: 'Lemon Honey Green Tea', desc: 'Refreshing citrus notes with natural sweetness.' },
    { img: '/images/cup/cup1.png', title: 'Chamomile Herbal Tea', desc: 'Calming floral infusion for relaxation.' },
];

const wellnessMenu = [
    { img: '/images/cup/cup2.png', title: 'Vitamin C Immunity Tea', desc: 'Boosts immunity with essential micronutrients.' },
    { img: '/images/cup/cup3.png', title: 'Detox Green Tea', desc: 'Cleanses the body and revitalizes metabolism.' },
    { img: '/images/cup/cup4.png', title: 'Energy Boost Nutri Tea', desc: 'Natural energy without caffeine crashes.' },
    { img: '/images/cup/cup5.png', title: 'Calcium & Iron Infused Tea', desc: 'Supports bone health and daily vitality.' },
    { img: '/images/cup/cup6.png', title: 'Stress Relief Herbal Blend', desc: 'Designed to calm the mind and balance the body.' },
    { img: '/images/cup/cup1.png', title: 'Digestive Wellness Tea', desc: 'A gentle blend for improved digestion.' },
];

const services = [
    { icon: '/images/icons/icon1.png', title: "WORLD'S FIRST\nSINGLE DROP TEA TECHNOLOGY" },
    { icon: '/images/icons/icon7.png', title: 'NUTRI-INFUSED \nWELLNESS BEVERAGES' },
    { icon: '/images/icons/icon3.png', title: 'SMART & CONSISTENT \nBREWING SYSTEMS' },
    { icon: '/images/icons/icon4.png', title: 'AFFORDABLE \nPREMIUM EXPERIENCE' },
];

export default function HomePage() {
    const [activeTab, setActiveTab] = useState('coffee');

    const renderMenu = (items) => (
        <ul className="menu-list">
            {items.map((item, idx) => (
                <li key={idx}>
                    <div className="item-left">
                        <img src={item.img} alt="" />
                        <h4 className="title">{item.title}</h4>
                        <p className="description">{item.desc}</p>
                    </div>
                </li>
            ))}
        </ul>
    );

    return (
        <div className="page-wraper">
            <LoadingScreen />
            <Header />
            <div className="page-content">
                <div id="main">
                    {/* ===== SLIDER ===== */}
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop
                        className="main-slider"
                    >
                        {/* Slide 1 — Brand banner */}
                        <SwiperSlide>
                            <div className="slide fp-banner-slide">
                                <div className="fp-banner-panel fp-banner-left">
                                    <div className="fp-banner-left-body">
                                        <h2 className="fp-banner-headline">
                                            ETHICALLY<br />
                                            SOURCED.<br />
                                            TRULY<br />
                                            CARES.
                                        </h2>
                                        <p className="fp-banner-subtext">From independent farmers, with respect.</p>
                                    </div>
                                </div>
                                <div className="fp-banner-panel fp-banner-center">
                                    <div className="fp-banner-leaf-bg" />
                                    <div className="fp-banner-center-body">
                                        <img src="/images/logo-2.png" alt="La Caféine" className="fp-banner-logo" />
                                        <div className="fp-banner-tagline-badge">TASTE THAT CARES</div>
                                    </div>
                                </div>
                                <div className="fp-banner-panel fp-banner-right">
                                    <div className="fp-banner-right-body">
                                        <h2 className="fp-banner-headline">
                                            ARTISAN<br />
                                            CRAFTED.<br />
                                            PERFECTLY<br />
                                            ROASTED.
                                        </h2>
                                        <Link href="/consumer/menu" className="fp-banner-browse-btn">BROWSE BLENDS</Link>
                                        <p className="fp-banner-subtext">Experience the ultimate cup.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 — Growth */}
                        <SwiperSlide>
                            <div className="slide fp-banner-slide">
                                <div className="fp-banner-panel fp-banner-left">
                                    <div className="fp-banner-left-body">
                                        <p className="fp-banner-slide-label">RAPID GROWTH BUSINESS MODEL</p>
                                        <h2 className="fp-banner-headline">FROM BEANS<br />TO BIG<br />PROFITS.</h2>
                                        <ul className="fp-banner-points">
                                            <li>2015–20 Growth Rate 46%</li>
                                            <li>2020–25 Growth Rate 63%</li>
                                            <li>2025–30 Expected $63.89 Billion</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="fp-banner-panel fp-banner-center">
                                    <div className="fp-banner-leaf-bg" />
                                    <div className="fp-banner-center-body">
                                        <img src="/images/logo-2.png" alt="La Caféine" className="fp-banner-logo" />
                                        <div className="fp-banner-tagline-badge">TASTE THAT CARES</div>
                                    </div>
                                </div>
                                <div className="fp-banner-panel fp-banner-right">
                                    <div className="fp-banner-right-body">
                                        <p className="fp-banner-slide-label">JOIN US</p>
                                        <h2 className="fp-banner-headline">INDIA'S<br />FASTEST<br />GROWING<br />CAFÉ.</h2>
                                        <Link href="/franchise" className="fp-banner-browse-btn">BECOME A PARTNER</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 — Excellence */}
                        <SwiperSlide>
                            <div className="slide fp-banner-slide">
                                <div className="fp-banner-panel fp-banner-left">
                                    <div className="fp-banner-left-body">
                                        <p className="fp-banner-slide-label">A CONCEPT SUPERIOR TO ALL</p>
                                        <h2 className="fp-banner-headline">WHERE<br />EXCELLENCE<br />LEAVES NO<br />MATCH.</h2>
                                    </div>
                                </div>
                                <div className="fp-banner-panel fp-banner-center">
                                    <div className="fp-banner-leaf-bg" />
                                    <div className="fp-banner-center-body">
                                        <img src="/images/logo-2.png" alt="La Caféine" className="fp-banner-logo" />
                                        <div className="fp-banner-tagline-badge">TASTE THAT CARES</div>
                                    </div>
                                </div>
                                <div className="fp-banner-panel fp-banner-right">
                                    <div className="fp-banner-right-body">
                                        <ul className="fp-banner-points">
                                            <li>Affordable Luxury</li>
                                            <li>Cutting Edge Technology</li>
                                            <li>Expert Backing &amp; Total Support</li>
                                            <li>Dedicated R&amp;D &amp; QA/QC Team</li>
                                        </ul>
                                        <Link href="/franchise/why-invest" className="fp-banner-browse-btn">WHY LA CAFÉINE</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 4 — Experience */}
                        <SwiperSlide>
                            <div className="slide fp-banner-slide">
                                <div className="fp-banner-panel fp-banner-left">
                                    <div className="fp-banner-left-body">
                                        <p className="fp-banner-slide-label">EVERY SIP SPARKS A NEW MOMENT</p>
                                        <h2 className="fp-banner-headline">REDEFINING<br />THE COFFEE<br />EXPERIENCE.</h2>
                                        <p className="fp-banner-subtext">Star-rated. Premium quality. Luxury made affordable.</p>
                                    </div>
                                </div>
                                <div className="fp-banner-panel fp-banner-center">
                                    <div className="fp-banner-leaf-bg" />
                                    <div className="fp-banner-center-body">
                                        <img src="/images/logo-2.png" alt="La Caféine" className="fp-banner-logo" />
                                        <div className="fp-banner-tagline-badge">TASTE THAT CARES</div>
                                    </div>
                                </div>
                                <div className="fp-banner-panel fp-banner-right">
                                    <div className="fp-banner-right-body">
                                        <ul className="fp-banner-points">
                                            <li>Regional &amp; International Blends</li>
                                            <li>Cozy Ambience &amp; Free Wi-Fi</li>
                                            <li>Skilled Professional Service</li>
                                        </ul>
                                        <Link href="/consumer/menu" className="fp-banner-browse-btn">EXPLORE MENU</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 5 — Risk Free */}
                        <SwiperSlide>
                            <div className="slide fp-banner-slide">
                                <div className="fp-banner-panel fp-banner-left">
                                    <div className="fp-banner-left-body">
                                        <p className="fp-banner-slide-label">START RISK FREE BUSINESS</p>
                                        <h2 className="fp-banner-headline">BE PART<br />OF A<br />WINNING<br />BRAND.</h2>
                                    </div>
                                </div>
                                <div className="fp-banner-panel fp-banner-center">
                                    <div className="fp-banner-leaf-bg" />
                                    <div className="fp-banner-center-body">
                                        <img src="/images/logo-2.png" alt="La Caféine" className="fp-banner-logo" />
                                        <div className="fp-banner-tagline-badge">TASTE THAT CARES</div>
                                    </div>
                                </div>
                                <div className="fp-banner-panel fp-banner-right">
                                    <div className="fp-banner-right-body">
                                        <ul className="fp-banner-points">
                                            <li>Affordable Investment</li>
                                            <li>Zero Risk, Guaranteed Returns</li>
                                            <li>High Performance Systems</li>
                                            <li>Effortless Ownership</li>
                                        </ul>
                                        <Link href="/franchise/apply" className="fp-banner-browse-btn">APPLY NOW — FREE</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* ===== DUAL GATEWAY: FRANCHISE & CONSUMER ===== */}
                    <div className="gc2-section">
                        <div className="container">
                            <div className="section-head text-center" style={{ marginBottom: '40px' }}>
                                <h2 className="main-title text-primary">Explore La Caféine</h2>
                                <h3 className="title">TWO WORLDS. ONE BRAND.</h3>
                                <div className="dlab-separator"></div>
                            </div>
                            <div className="gc2-row">
                                {/* Franchise Card */}
                                <div className="gc2-card">
                                    <div className="gc2-card-header">
                                        <img src="/images/logo-2.png" alt="La Caféine" className="gc2-logo" />
                                        <div className="gc2-tagline">TASTE THAT CARES</div>
                                    </div>
                                    <div className="gc2-card-body">
                                        <div className="gc2-card-text">
                                            <div className="gc2-label">For Entrepreneurs</div>
                                            <h2 className="gc2-headline">FRANCHISE OPPORTUNITY:<br />PARTNER WITH LA CAFÉINE</h2>
                                            <p className="gc2-desc">Explore franchise models, investment options, ROI projections, and everything you need to start your own La Caféine café.</p>
                                            <div className="gc2-features">
                                                <Link href="/franchise/models" className="gc2-feature">
                                                    <span className="gc2-feature-icon">📐</span>
                                                    <span>MODELS &amp;<br />LAYOUTS</span>
                                                </Link>
                                                <Link href="/franchise/investment" className="gc2-feature">
                                                    <span className="gc2-feature-icon">💰</span>
                                                    <span>INVESTMENT<br />&amp; ROI</span>
                                                </Link>
                                                <Link href="/franchise/process" className="gc2-feature">
                                                    <span className="gc2-feature-icon">⚙️</span>
                                                    <span>PROCESS &amp;<br />SETUP</span>
                                                </Link>
                                                <Link href="/franchise/apply" className="gc2-feature">
                                                    <span className="gc2-feature-icon">✅</span>
                                                    <span>APPLY<br />NOW</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="gc2-card-photo">
                                            <img src="/images/lcf.png" alt="Franchise" />
                                        </div>
                                    </div>
                                    <Link href="/franchise" className="gc2-cta-btn">EXPLORE FRANCHISE →</Link>
                                </div>

                                {/* Consumer Card */}
                                <div className="gc2-card">
                                    <div className="gc2-card-header">
                                        <img src="/images/logo-2.png" alt="La Caféine" className="gc2-logo" />
                                        <div className="gc2-tagline">TASTE THAT CARES</div>
                                    </div>
                                    <div className="gc2-card-body">
                                        <div className="gc2-card-text">
                                            <div className="gc2-label">For Coffee Lovers</div>
                                            <h2 className="gc2-headline">FOR COFFEE LOVERS:<br />THE CONSUMER EXPERIENCE</h2>
                                            <p className="gc2-desc">Discover our menu, find a café near you, explore offers, and immerse yourself in the La Caféine lifestyle.</p>
                                            <div className="gc2-features">
                                                <Link href="/consumer/menu" className="gc2-feature">
                                                    <span className="gc2-feature-icon">☕</span>
                                                    <span>EXPLORE<br />MENU</span>
                                                </Link>
                                                <Link href="/consumer/find-cafe" className="gc2-feature">
                                                    <span className="gc2-feature-icon">📍</span>
                                                    <span>FIND A<br />CAFÉ</span>
                                                </Link>
                                                <Link href="/consumer/offers" className="gc2-feature">
                                                    <span className="gc2-feature-icon">🏷️</span>
                                                    <span>LATEST<br />OFFERS</span>
                                                </Link>
                                                <Link href="/consumer/gallery" className="gc2-feature">
                                                    <span className="gc2-feature-icon">🖼️</span>
                                                    <span>GALLERY</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="gc2-card-photo">
                                            <img src="/images/consumer.png" alt="Consumer Experience" />
                                        </div>
                                    </div>
                                    <Link href="/consumer" className="gc2-cta-btn">EXPLORE EXPERIENCE →</Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* ===== ABOUT ===== */}
                    <div className="section-full content-inner-2 bg-pink-light">
                        <div className="container">
                            <div className="section-head text-center m-b0">
                                <h2 className="main-title text-primary">Welcome</h2>
                                <h3 className="title">ABOUT La Caféine</h3>
                                <h4 className="sub-title">COFFEE • TEA • WELLNESS</h4>
                                <div className="dlab-separator"></div>
                                <p className="m-b0">
                                    La Caféine is more than a café — it is a new-age beverage brand built at the intersection of taste, technology, and wellness.
                                    We bring together premium coffee, innovative tea extraction, and functional nutrition to create a consistently superior experience in every cup.
                                    <br />
                                    Designed for modern lifestyles and scalable growth, La Caféine delivers affordable luxury, whether you are a customer enjoying a moment or a partner building a future.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ===== SERVICES ===== */}
                    <div className="section-full bg-img-fix content-inner overlay-black-middle" style={{ backgroundImage: 'url(/images/background/bg2.jpg)' }}>
                        <div className="container">
                            <div className="section-head text-center">
                                <h3 className="title text-white">DID YOU KNOW?</h3>
                                <h4 className="sub-title">WHAT MAKES La Caféine DIFFERENT</h4>
                            </div>
                            <div className="row">
                                {services.map((svc, idx) => (
                                    <div key={idx} className="col-lg-3 col-md-3 col-sm-6 col-6 m-b30">
                                        <div className="icon-bx-wraper center text-white service-box">
                                            <div className="icon-bx-xl">
                                                <span className="icon-cell"><img src={svc.icon} alt="" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte" dangerouslySetInnerHTML={{ __html: svc.title.replace(/\n/g, '<br/>') }}></h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ===== MENU TABS ===== */}
                    <div className="section-full content-inner-2" style={{ backgroundImage: 'url(/images/background/bg1.jpg)', backgroundPosition: 'top right', backgroundRepeat: 'no-repeat' }}>
                        <div className="container">
                            <div className="section-head text-center">
                                <h3 className="title">OUR BEVERAGES</h3>
                                <h4 className="sub-title">CRAFTED FOR EVERY MOOD</h4>
                            </div>
                            <div className="dlab-tabs menu-tabs">
                                <ul className="nav nav-tabs">
                                    <li><a className={activeTab === 'coffee' ? 'active' : ''} onClick={() => setActiveTab('coffee')} style={{ cursor: 'pointer' }}>Coffee Collection</a></li>
                                    <li><a className={activeTab === 'tea' ? 'active' : ''} onClick={() => setActiveTab('tea')} style={{ cursor: 'pointer' }}>Tea Collection</a></li>
                                    <li><a className={activeTab === 'wellness' ? 'active' : ''} onClick={() => setActiveTab('wellness')} style={{ cursor: 'pointer' }}>Wellness & Nutri Drinks</a></li>
                                </ul>
                                <div className="tab-content">
                                    {activeTab === 'coffee' && (
                                        <div className="tab-pane active">
                                            <p className="text-center m-b40"><b>From classic brews to contemporary favourites, our coffee collection is crafted for richness, balance, and consistency — delivering café-quality perfection in every cup.</b></p>
                                            <div className="menu-box">{renderMenu(coffeeMenu)}<div className="text-center"><a href="#" className="btn bg-secondry">VIEW OUR COMPLETE MENU</a></div></div>
                                        </div>
                                    )}
                                    {activeTab === 'tea' && (
                                        <div className="tab-pane active">
                                            <p className="text-center m-b40"><b>Experience tea like never before. Our Single Drop Tea Technology preserves natural aroma, authentic flavour, and wellness benefits — served instantly, without compromise.</b></p>
                                            <div className="menu-box">{renderMenu(teaMenu)}<div className="text-center"><a href="/our-menu" className="btn bg-secondry">VIEW OUR COMPLETE MENU</a></div></div>
                                        </div>
                                    )}
                                    {activeTab === 'wellness' && (
                                        <div className="tab-pane active">
                                            <p className="text-center m-b40"><b>Functional beverages designed to energize, detox, and nourish — combining ancient wisdom with modern nutritional science.</b></p>
                                            <div className="menu-box">{renderMenu(wellnessMenu)}<div className="text-center"><a href="/our-menu" className="btn bg-secondry">VIEW OUR COMPLETE MENU</a></div></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ===== GALLERY PREVIEW ===== */}
                    <div className="section-full bg-pink-light content-inner-2">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="section-head full-head text-center">
                                        <h2 className="main-title text-primary">Authentic</h2>
                                        <h3 className="title">TASTEFUL</h3>
                                        <h4 className="sub-title">THE La Caféine EXPERIENCE</h4>
                                        <div className="dlab-separator"></div>
                                        <p>Every La Caféine outlet is thoughtfully designed to stimulate the senses — from soothing music and inviting aromas to warm interiors and vibrant outdoor spaces. It&apos;s a place to <b>pause, connect, collaborate,</b> and <b>recharge</b>.</p>
                                        <p>Whether it&apos;s a quick sip or a long conversation, La Caféine is where moments turn memorable.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row sp20">
                                        {[1, 2, 3, 4].map((num) => (
                                            <div key={num} className="col-lg-6 col-md-6 col-6">
                                                <div className="dlab-gallery-box">
                                                    <div className="dlab-thum">
                                                        <img src={`/images/gallery/pic${num}.jpg`} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div >
            </div >
            <ChatConcierge />
        </div >
    );
}
