import React from 'react';
import { Utensils, Package, Sparkles, Instagram as InstagramIcon } from 'lucide-react';

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="section-header reveal">
                <p>What We Offer</p>
                <h2>Our Specialized Expertise</h2>
            </div>
            <div className="services-grid">
                {[
                    { icon: <Utensils size={40} />, title: 'F&B Photography', text: 'High-end food and beverage styling and photography tailored for menus, advertising, and delivery apps.', price: '$100 - $300' },
                    { icon: <Package size={40} />, title: 'Product Shots', text: 'Crispy, detailed product photography for e-commerce, catalogs, and high-impact marketing campaigns.', price: '$80 - $250' },
                    { icon: <Sparkles size={40} />, title: 'Fashion Editorial', text: 'Magazine-quality fashion photography that highlights texture, movement, and the identity of your brand.', price: '$150 - $500' },
                    { icon: <InstagramIcon size={40} />, title: 'Social Media Mgmt', text: 'End-to-end visual content strategy and management to keep your social feeds aesthetically consistent.', price: '$200 - $800' }
                ].map((s, i) => (
                    <div className="service-card reveal" key={i}>
                        <div className="service-icon">{s.icon}</div>
                        <h3>{s.title}</h3>
                        <p>{s.text}</p>
                        <div className="price-range">Range: {s.price}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
