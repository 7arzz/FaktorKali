import React from 'react';
import { Camera, Zap, Target } from 'lucide-react';

const WhyUs = () => {
    return (
        <section className="why-us">
            <div className="section-header reveal">
                <p>The Faktor Kali Difference</p>
                <h2>Why Choose Us?</h2>
            </div>
            <div className="why-grid">
                <div className="why-card reveal">
                    <div className="service-icon"><Camera size={48} /></div>
                    <h3>Editorial Eye</h3>
                    <p>We bring magazine-quality lighting and composition to every single shoot, no matter the scale.</p>
                </div>
                <div className="why-card reveal">
                    <div className="service-icon"><Zap size={48} /></div>
                    <h3>Rapid Delivery</h3>
                    <p>Professional post-production within 72 hours, so your marketing stays ahead of the trend.</p>
                </div>
                <div className="why-card reveal">
                    <div className="service-icon"><Target size={48} /></div>
                    <h3>Market Focused</h3>
                    <p>We analyze your target audience to ensure the visuals resonate and drive engagement.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
