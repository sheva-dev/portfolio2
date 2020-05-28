import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBInput } from 'mdbreact';
import './ContactFrom.css';

const ContactFrom = () => {
    return (
        <div className="container">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="5">
                        <MDBCardBody>
                            <form>
                                <label
                                    className="grey-text font-weight-light"
                                >
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                />
                                <label
                                    className="grey-text font-weight-light"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                />
                                <MDBInput className="border-focus" type="textarea" label="Your Message" rows="5" id="message" />
                                <div className="text-center py-4 mt-3">
                                    <MDBBtn className="btn btn-outline-cyan accent-1" type="submit">
                                        Send
                                        <MDBIcon far icon="paper-plane" className="ml-2" />
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default ContactFrom;
