import React, { useState } from 'react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        business: '',
        service: '',
        date: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, business, service, date, message } = formData;
        const phoneNumber = "6281234470603";
        const text = `Halo faktorkali! Saya ingin booking sesi foto:%0A%0ANama: ${name}%0ABisnis: ${business}%0ALayanan: ${service}%0ATanggal: ${date}%0APesan: ${message}`;
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    };

    return (
        <section className="booking" id="booking">
            <div className="booking-info reveal">
                <h2>Ready to Elevate Your Brand?</h2>
                <p>Let's create something extraordinary together. Fill out the form, and we'll get back to you via WhatsApp to finalize the session details.</p>
                <p><strong>Location:</strong> Surabaya, Indonesia</p>
                <p><strong>Response Time:</strong> Within 2 hours</p>
            </div>
            <form className="booking-form reveal" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="business">Business Name</label>
                    <input type="text" id="business" placeholder="The Cafe Surabaya" value={formData.business} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="service">Service Type</label>
                    <select id="service" value={formData.service} onChange={handleChange} required>
                        <option value="" disabled>Select a Service</option>
                        <option value="Food & Beverage">Food & Beverage Photography</option>
                        <option value="Product Shots">Product Photography</option>
                        <option value="Fashion Editorial">Fashion Editorial</option>
                        <option value="Social Media Management">Social Media Management</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Preferred Date</label>
                    <input type="date" id="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows="3" placeholder="Tell us about your brand..." value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="booking-submit">Send to WhatsApp</button>
            </form>
        </section>
    );
};

export default BookingForm;
