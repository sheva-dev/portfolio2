import React from 'react';
import './ContactSection.css';
import ContactFrom from '../../components/ContactForm/ContactFrom';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <h1>ContactSection</h1>
            <ContactFrom />
        </section>
    );
}

export default ContactSection;
