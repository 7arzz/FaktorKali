import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import produk1 from '../assets/product/produk1.jpg';
import produk2 from '../assets/product/produk2.jpg';
import produk3 from '../assets/product/produk3.jpg';
import produk4 from '../assets/product/produk4.jpg';
import produk5 from '../assets/product/produk5.jpg';
import produk6 from '../assets/product/produk6.jpg';
import produk7 from '../assets/product/produk7.jpg';
import produk8 from '../assets/product/produk8.jpg';

const Portfolio = () => {
    const sectionRef = useRef(null);
    const sliderRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    
    // Rotation State
    const rotation = useRef({ x: -10, y: 0 });
    const speed = useRef({ target: 0.2, current: 0 });
    const dragStart = useRef({ x: 0, y: 0, lastX: 0, lastY: 0 });
    const requestRef = useRef();

    const portfolioItems = [
        { id: 1, title: 'Signature Dish', category: 'F&B Selection', img: produk1 },
        { id: 2, title: 'Luxury Timepiece', category: 'Product Series', img: produk2 },
        { id: 3, title: 'Summer Collection', category: 'Fashion Editorial', img: produk3 },
        { id: 4, title: 'Tech Essentials', category: 'Product Shots', img: produk4 },
        { id: 5, title: 'Culinary Art', category: 'F&B Campaign', img: produk5 },
        { id: 6, title: 'Creative Pack', category: 'Creative Product', img: produk6 },
        { id: 7, title: 'Modern Texture', category: 'Product Series', img: produk7 },
        { id: 8, title: 'Editorial Look', category: 'Fashion Editorial', img: produk8 },
        { id: 9, title: 'Gourmet Mood', category: 'F&B Selection', img: produk1 },
        { id: 10, title: 'Steel Precision', category: 'Product Shots', img: produk2 },
    ];

    // Intersection Observer to trigger entrance/exit
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Initial burst speed
                    speed.current.current = 10;
                    setTimeout(() => speed.current.target = 0.2, 1000);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        // GSAP Parallax for the mesh background
        gsap.to(".portfolio-bg", {
            y: 200,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        return () => observer.disconnect();
    }, []);

    // Animation Loop
    const animate = () => {
        if (!isDragging) {
            speed.current.current += (speed.current.target - speed.current.current) * 0.05;
            rotation.current.y += speed.current.current;
        }
        
        if (sliderRef.current) {
            sliderRef.current.style.transform = `rotateX(${rotation.current.x}deg) rotateY(${rotation.current.y}deg)`;
        }
        
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [isDragging]);

    // Drag Handlers
    const onStart = (e) => {
        setIsDragging(true);
        const x = e.pageX || e.touches[0].pageX;
        const y = e.pageY || e.touches[0].pageY;
        dragStart.current = { x, y, lastX: rotation.current.y, lastY: rotation.current.x };
    };

    const onMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX || e.touches[0].pageX;
        const y = e.pageY || e.touches[0].pageY;
        
        const deltaX = x - dragStart.current.x;
        const deltaY = y - dragStart.current.y;

        rotation.current.y = dragStart.current.lastX + deltaX * 0.3;
        rotation.current.x = Math.max(-40, Math.min(40, dragStart.current.lastY - deltaY * 0.3));
    };

    const onEnd = () => setIsDragging(false);

    useEffect(() => {
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onEnd);
        window.addEventListener('touchmove', onMove);
        window.addEventListener('touchend', onEnd);
        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onEnd);
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('touchend', onEnd);
        };
    }, [isDragging]);

    return (
        <section 
            className="portfolio" 
            id="portfolio" 
            ref={sectionRef}
            onMouseDown={onStart}
            onTouchStart={onStart}
        >
            <div className="portfolio-bg"></div>
            <div className={`section-header reveal ${isVisible ? 'active' : ''}`}>
                <p>Curated Works</p>
                <h2>Editorial Showcase</h2>
            </div>

            <div className="portfolio-container">
                <div className="slider-3d" ref={sliderRef} style={{ '--total': portfolioItems.length }}>
                    {portfolioItems.map((item, idx) => (
                        <div 
                            key={`${item.id}-${idx}`}
                            className={`slider-item-3d ${isVisible ? 'animate-in' : 'animate-out'}`}
                            style={{ 
                                '--i': idx + 1,
                                transitionDelay: isVisible ? `${idx * 0.1}s` : `${(portfolioItems.length - idx) * 0.05}s`
                            }}
                            onClick={() => setModalData(item)}
                        >
                            <img src={item.img} alt={item.title} />
                            <div className="slider-info-3d">
                                <h3>{item.title}</h3>
                                <p>{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="instructions" style={{ opacity: isVisible ? 0.6 : 0 }}>
                Swipe to Rotate • Click to Expand
            </div>

            {/* Modal */}
            <div className={`modal-3d ${modalData ? 'active' : ''}`}>
                {modalData && (
                    <>
                        <div className="close-modal-3d" onClick={() => setModalData(null)}>&times;</div>
                        <div className="modal-content-3d">
                            <img src={modalData.img} alt={modalData.title} className="modal-img-3d" />
                            <div className="modal-info-3d">
                                <h2>{modalData.title}</h2>
                                <p>This project represents our commitment to excellence in visual storytelling. By combining high-end styling with technical precision, we create imagery that resonates with audiences and elevates brand identity.</p>
                                <div className="price-range">Category: {modalData.category}</div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Portfolio;

