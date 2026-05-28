import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import logoImg from '../assets/Logo.jpg';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Close menu after click
    };

    return (
        <nav className={`${isSticky ? 'sticky' : ''} ${isMenuOpen ? 'menu-active' : ''}`}>
            <div className="logo" onClick={() => scrollTo('home')}>
                <img src={logoImg} alt="faktorkali logo" style={{ height: '40px', width: 'auto' }} />
                <span className="display-font">faktorkali</span>
            </div>
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <a onClick={() => scrollTo('about')}>About</a>
                <a onClick={() => scrollTo('services')}>Services</a>
                <a onClick={() => scrollTo('portfolio')}>Portfolio</a>
                <a onClick={() => scrollTo('booking')} className="mobile-cta">Book Now</a>
            </div>
            <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu size={28} />
            </div>
        </nav>
    );
};

export default Navbar;
