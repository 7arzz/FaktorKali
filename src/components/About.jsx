import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const statsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Parallax stats
        statsRef.current.forEach((el, i) => {
            gsap.to(el, {
                y: -100 * (i + 1),
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5
                }
            });
        });

        return () => {
            observer.disconnect();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const statItems = [
        { label: 'Loyal Followers', value: '3,805' },
        { label: 'Happy Clients', value: '100+' }
    ];

    return (
        <section className="about" id="about" ref={sectionRef}>
            <div className="stats">
                {statItems.map((item, i) => (
                    <div 
                        key={i} 
                        className="stat-item reveal" 
                        ref={el => statsRef.current[i] = el}
                    >
                        <h3>{item.value}</h3>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
            <div className="about-story reveal">
                <h2>Capturing the <span className="highlight-red">Soul</span> of Every Product.</h2>
                <p>Based in the heart of Surabaya, faktorkali.photography is a creative powerhouse dedicated to elevating food and product brands. We don't just take pictures; we create visual narratives that convert.</p>
                <p>Our methodology combines magazine-editorial aesthetics with strategic marketing insights, ensuring your brand stands out in the crowded digital market.</p>
            </div>
        </section>
    );
};

export default About;
