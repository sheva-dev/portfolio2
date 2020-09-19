import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCardBody, MDBIcon } from 'mdbreact';
import { useForm } from 'react-hook-form';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
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
        <div className="container">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="5">
                        <MDBCardBody>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label className="grey-text font-weight-light">
                                    Your name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    ref={register({ required: true })}
                                    name="name"
                                />
                                {errors.name && 'name is required.'}

                                <label className="grey-text font-weight-light">
                                    Your email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    ref={register({ required: true })}
                                    name="email"
                                />
                                {errors.email && 'Email is required.'}

                                <label className="grey-text font-weight-light">
                                    Your Message
                                </label>

                                <textarea ref={register({ required: true })} className="form-control"
                                    rows="5"
                                    id="message"
                                    name="message" />
                                {errors.message && 'Message is required.'}

                                <div className="text-center py-4 mt-3">
                                    <MDBBtn className="btn btn-outline-cyan accent-1" type="submit">
                                        Send
                                        <MDBIcon far icon="paper-plane" className="ml-2" />
                                    </MDBBtn>
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
                            </form>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default ContactFrom;
