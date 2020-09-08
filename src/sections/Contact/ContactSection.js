import React from 'react';
import './ContactSection.css';
import ContactFrom from '../../components/ContactForm/ContactFrom';
import Footer from '../../components/Footer/Footer';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <h1 style={{textAlign:"center", paddingTop:"50px"}}>CONTACT</h1>
            <hr style={{width:'130px', margin:"auto", backgroundColor:"#fff", height:"2px"}} />
            <ContactFrom />
            <Footer />
        </section>
    );
}

export default ContactSection;
