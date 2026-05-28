import React from 'react';
import { Instagram as InstagramIcon, Facebook, Twitter } from 'lucide-react';
import logoImg from '../assets/Logo.jpg';

const Footer = () => {
    return (
        <footer>
            <div className="footer-grid">
                <div className="footer-col">
                    <div className="logo" style={{ marginBottom: '2rem' }}>
                        <img src={logoImg} alt="logo" style={{ height: '50px', width: 'auto' }} />
                        <span className="display-font">faktorkali</span>
                    </div>
                    <p style={{ color: '#666', maxWidth: '300px' }}>Elevating Indonesian brands through superior visual storytelling. More than just a photoshoot.</p>
                </div>
                <div className="footer-col">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>SERVICES</h4>
                    <ul>
                        <li><a href="#">F&B Styling</a></li>
                        <li><a href="#">Commercial Product</a></li>
                        <li><a href="#">Fashion Shoots</a></li>
                        <li><a href="#">Content Strategy</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>CONTACT</h4>
                    <ul>
                        <li>Surabaya, Indonesia</li>
                        <li>wa.me/6281234470603</li>
                        <li>ig: @faktorkali</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 faktorkali.photography. All Rights Reserved.</p>
                <div className="social-links">
                    <a href="#"><InstagramIcon /></a>
                    <a href="#"><Facebook /></a>
                    <a href="#"><Twitter /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
