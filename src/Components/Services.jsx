import React, { useEffect, useRef } from 'react';
import { Utensils, Package, Sparkles, Instagram as InstagramIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current.forEach((el, i) => {
            gsap.fromTo(el, 
                { y: 50 * (i + 1) },
                {
                    y: -50 * (i + 1),
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                }
            );
        });
    }, []);

    return (
        <section className="services" id="services" ref={sectionRef}>
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
                    <div className="service-card reveal" key={i} ref={el => cardsRef.current[i] = el}>
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
