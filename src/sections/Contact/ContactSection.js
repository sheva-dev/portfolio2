import React from 'react';
import './ContactSection.css';
import ContactFrom from '../../components/ContactForm/ContactFrom';
import Footer from '../../components/Footer/Footer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <SectionTitle sectionTitle="contact" lineColor="#fff" />
            <p style={{
                color: "#04c2c9",
                paddingBottom: "10px"
            }}>Get in Touch</p>
            <ContactFrom />
            <Footer />
        </section >
    );
}

export default ContactSection;
