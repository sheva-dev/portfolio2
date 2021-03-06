import React, { useState } from 'react';
import './ContactFrom.css';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init("user_YDEuIcnG28EVIxhyk1PwB");

const ContactFrom = () => {
    const { register, handleSubmit, errors } = useForm();
    const [confMsg, setConfMsg] = useState(false);
    const [name, setName] = useState('');

    const onSubmit = (data) => {
        const form = document.querySelector('#contact-form');

        sendForm('gmail', 'portofolio-template', 'contact-form')
            .then(res => {
                setConfMsg(true);
                setName(data.name);
                form.reset();
            });
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} className='contact-form' id='contact-form'>
                    <div className="row">
                        <div className="col-75">
                            <input type="text" id="name" name="name" placeholder="Name"
                                ref={register({
                                    required: "Enter your Name",
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: "Please Enter a valid name",
                                    }
                                })} />
                            {errors.name && <p className="error">{errors.name.message}</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input type="email" id="email" name="email" placeholder="Email"
                                ref={register({
                                    required: "Enter your e-mail",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Please Enter a valid e-mail address",
                                    }
                                })}
                            />
                            {errors.email && <p className="error">{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <textarea id="subject" name="message" placeholder="Your Message" rows="5"
                                ref={register({
                                    required: "Enter your message",
                                    pattern: {
                                        value: /[.*+\-?^${}()|[\]\\]/g,
                                        message: "Please Enter a valid message",
                                    }
                                })}></textarea>
                            {errors.message && <p className="error">{errors.message.message}</p>}
                        </div>
                    </div>
                    <div className="row-button">
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
            {confMsg &&
                <p className="confirmation-message"
                    style={{
                        textAlign: 'center',
                        marginTop: "20px",
                        fontWeight: '1000',
                        color: '#04c2c9'
                    }}>
                    Thank you {name} for your message.
                </p>
            }
        </>
    );
}

export default ContactFrom;
