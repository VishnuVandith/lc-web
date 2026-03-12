'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function getTimeLeft(target) {
    const diff = target - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
    };
}

// Set launch date — 90 days from now by default
const LAUNCH_DATE = new Date();
LAUNCH_DATE.setDate(LAUNCH_DATE.getDate() + 90);

export default function ComingSoonPage() {
    const [time, setTime] = useState(getTimeLeft(LAUNCH_DATE));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(getTimeLeft(LAUNCH_DATE));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="coming-soon-page">
            <div className="coming-soon-overlay" />
            <div className="coming-soon-content">
                <div className="cs-logo">
                    <Link href="/">
                        <img src="/images/logo.png" alt="La Caféine" />
                    </Link>
                </div>

                <h1 className="cs-title">Coming Soon</h1>
                <p className="cs-tagline">Something extraordinary is brewing. Stay tuned.</p>

                <div className="countdown">
                    <div className="countdown-item">
                        <span className="countdown-number">{String(time.days).padStart(2, '0')}</span>
                        <span className="countdown-label">Days</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-number">{String(time.hours).padStart(2, '0')}</span>
                        <span className="countdown-label">Hours</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-number">{String(time.mins).padStart(2, '0')}</span>
                        <span className="countdown-label">Minutes</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-number">{String(time.secs).padStart(2, '0')}</span>
                        <span className="countdown-label">Seconds</span>
                    </div>
                </div>

                <div className="cs-notify">
                    <p>Get notified when we launch</p>
                    <form className="cs-notify-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will notify you.'); }}>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Notify Me</button>
                    </form>
                </div>

                <ul className="cs-social">
                    <li><a href="#" aria-label="Facebook">f</a></li>
                    <li><a href="#" aria-label="Twitter">𝕏</a></li>
                    <li><a href="#" aria-label="LinkedIn">in</a></li>
                    <li><a href="#" aria-label="Instagram">◎</a></li>
                </ul>
            </div>

            <style jsx>{`
                .coming-soon-page {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: url('/images/background/bg2.jpg') center/cover no-repeat fixed;
                    overflow: hidden;
                }

                .coming-soon-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.75);
                    z-index: 1;
                }

                .coming-soon-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    padding: 40px 20px;
                    max-width: 700px;
                    width: 100%;
                }

                .cs-logo img {
                    max-width: 200px;
                    margin-bottom: 30px;
                    filter: brightness(0) invert(1);
                }

                .cs-title {
                    font-family: 'Playfair Display', serif !important;
                    font-size: 64px;
                    font-weight: 900;
                    color: #fff;
                    margin: 0 0 10px;
                    letter-spacing: 2px;
                }

                .cs-tagline {
                    font-size: 18px;
                    color: rgba(255, 255, 255, 0.7);
                    margin-bottom: 40px;
                    font-weight: 300;
                }

                .countdown {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-bottom: 40px;
                }

                .countdown-item {
                    background: linear-gradient(135deg, #d4a76a, #a0764a);
                    border-radius: 12px;
                    padding: 20px 16px;
                    min-width: 90px;
                    box-shadow: 0 8px 24px rgba(212, 167, 106, 0.25);
                }

                .countdown-number {
                    display: block;
                    font-family: 'Oswald', sans-serif !important;
                    font-size: 42px;
                    font-weight: 700;
                    color: #1a1a1a;
                    line-height: 1;
                }

                .countdown-label {
                    display: block;
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-top: 6px;
                    font-weight: 600;
                }

                .cs-notify {
                    margin-bottom: 30px;
                }

                .cs-notify p {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 14px;
                    margin-bottom: 12px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                .cs-notify-form {
                    display: flex;
                    gap: 0;
                    max-width: 420px;
                    margin: 0 auto;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
                }

                .cs-notify-form input {
                    flex: 1;
                    padding: 14px 18px;
                    border: none;
                    background: rgba(255, 255, 255, 0.1);
                    color: #fff;
                    font-size: 14px;
                    outline: none;
                    font-family: 'Raleway', sans-serif !important;
                }

                .cs-notify-form input::placeholder {
                    color: rgba(255, 255, 255, 0.4);
                }

                .cs-notify-form button {
                    padding: 14px 24px;
                    background: linear-gradient(135deg, #d4a76a, #a0764a);
                    color: #1a1a1a;
                    font-weight: 700;
                    border: none;
                    cursor: pointer;
                    font-size: 13px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    transition: all 0.3s ease;
                    font-family: 'Oswald', sans-serif !important;
                    white-space: nowrap;
                }

                .cs-notify-form button:hover {
                    background: linear-gradient(135deg, #e0b87a, #b0865a);
                }

                .cs-social {
                    list-style: none;
                    display: flex;
                    justify-content: center;
                    gap: 16px;
                    padding: 0;
                    margin: 0;
                }

                .cs-social li a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.08);
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 16px;
                    transition: all 0.3s ease;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .cs-social li a:hover {
                    background: #d4a76a;
                    color: #1a1a1a;
                    border-color: #d4a76a;
                    transform: translateY(-3px);
                    box-shadow: 0 6px 16px rgba(212, 167, 106, 0.3);
                }

                @media (max-width: 600px) {
                    .cs-title {
                        font-size: 40px;
                    }
                    .countdown {
                        gap: 10px;
                    }
                    .countdown-item {
                        min-width: 70px;
                        padding: 14px 10px;
                    }
                    .countdown-number {
                        font-size: 30px;
                    }
                    .cs-notify-form {
                        flex-direction: column;
                        border-radius: 8px;
                    }
                    .cs-notify-form input,
                    .cs-notify-form button {
                        border-radius: 0;
                    }
                }
            `}</style>
        </div>
    );
}
