import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './ContactFrom.css';

const ContactFrom = () => {
    const { register, handleSubmit, errors, setValue } = useForm();
    const [confMsg, setConfMsg] = useState(false);
    const [name, setName] = useState('');

    const onSubmit = (data) => {
        setConfMsg(true);
        setName(data.name)
        setValue('name', '');
        setValue('email', '');
        setValue('message', '');
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-75">
                            <input type="text" id="name" name="name" placeholder="Name" ref={register({ required: true })} />
                            <p style={{ marginBottom: "2px" }}>{errors.message && 'Name is required.'}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input type="email" id="name" name="email" placeholder="Email" ref={register({ required: true })} />
                            <p style={{ marginBottom: "2px" }}>{errors.message && 'email is required.'}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <textarea id="subject" name="message" placeholder="Your Message" rows="5" ref={register({ required: true })}></textarea>
                            <p style={{ marginBottom: "2px" }}>{errors.message && 'Message is required.'}</p>
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
