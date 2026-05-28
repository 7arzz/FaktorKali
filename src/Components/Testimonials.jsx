import React from 'react';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="section-header reveal" style={{ color: 'black' }}>
                <p>Real Experience</p>
                <h2 style={{ color: 'black' }}>Client Love</h2>
            </div>
            <div className="testimonial-grid">
                <div className="testimonial-card reveal">
                    <p>"The best studio in Surabaya for food shots. They really understood our brand identity and elevated it to the next level."</p>
                    <div className="client-info">
                        <div className="client-name">Steak House Co.</div>
                    </div>
                </div>
                <div className="testimonial-card reveal">
                    <p>"Quick turnaround and absolutely stunning product shots. Our engagement increased by 40% after using their content."</p>
                    <div className="client-info">
                        <div className="client-name">Luxe Beauty ID</div>
                    </div>
                </div>
                <div className="testimonial-card reveal">
                    <p>"Professional, organized, and truly creative. They didn't just take photos; they suggested a whole aesthetic."</p>
                    <div className="client-info">
                        <div className="client-name">Modern Wear</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
