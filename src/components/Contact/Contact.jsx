import React, { useRef, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/contact.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
    const [result, setResult] = useState(false);
    const success = () => toast("mail sent"); 
    const errorfound = () => toast("Something went wrong");
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_v15e5c4', 'template_brnm3r8', form.current, 'user_sv3OmscHRviXrEAbYmo4a')
            .then((result) => {
                console.log(result.text);
                if (result.text === 'OK') {
                    success() ;
                    setResult(true);
                }
                else {
                    errorfound() ;
                }
            }, (error) => {
                console.log(error.text);
                errorfound() ;
            });
        e.target.reset();
    };
    return (
        <div className="container mainn">
            <div className="card">
                <div className="card-image">
                    <h2 className="card-heading">
                        
                        <small></small>
                    </h2>
                </div>
                <form className="card-form contact-form" id="ms-form" ref={form} onSubmit={sendEmail}>
                    <div className="input">
                        <input type="text" name="from_name" className="input-field" required />
                        <label className="input-label">Full name</label>
                    </div>
                    <div className="input">
                        <input type="email" name="email" className="input-field" required />
                        <label className="input-label">Email</label>
                    </div>
                    <div className="input">
                        <input type="text" name="message" className="input-field" required />
                        <label className="input-label">Message</label>
                    </div>
                    <div className="action">
                        <input className="action-button" type="submit" value="send" />
                    </div>
                </form>
                <div class={(result) ? 'card-info' : 'hide'}>
                    <p>we received your response we will reach you out soon</p>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>

    )
}

export default Contact
