import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const markRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        // Entrance Animation
        const tl = gsap.timeline();
        tl.to(markRef.current, { opacity: 1, scale: 1, duration: 1.5, ease: "expo.out" })
          .to(titleRef.current, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "-=1")
          .to(subRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.8")
          .to(ctaRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.8");

        // Parallax Effect — desktop only to prevent mobile jank
        const mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
            gsap.to(markRef.current, {
                y: 300,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });

            gsap.to(titleRef.current, {
                y: 120,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });

        return () => {
            mm.revert();
        };
    }, []);

    return (
        <section className="hero" id="home" ref={heroRef}>
            <div className="hero-logo-mark" ref={markRef}>ƒ</div>
            <div className="hero-content">
                <h1 ref={titleRef}>We're More Than Just a Photoshoot.</h1>
                <p ref={subRef}>Visual Excellence / Surabaya, Indonesia</p>
                <a href="#booking" className="cta-btn" ref={ctaRef}>Book a Session</a>
            </div>
        </section>
    );
};

export default Hero;
