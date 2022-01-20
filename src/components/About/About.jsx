import React, { useRef, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/about.css'
import emailjs from '@emailjs/browser';

function About() {
    const [result, setResult] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_v15e5c4', 'template_brnm3r8', form.current, 'user_sv3OmscHRviXrEAbYmo4a')
            .then((result) => {
                console.log(result.text);
                if (result.text === 'OK') {
                    alert("mail sent");
                    setResult(true);
                }
                else {
                    alert("something went wrong");
                }
            }, (error) => {
                console.log(error.text);
                alert("something went wrong");
            });
        e.target.reset();
    };
    return (
        <div className="container">
            <div className="card">
                <div className="card-image">
                    <h2 className="card-heading">
                        
                        <small></small>
                    </h2>
                </div>
                <form className="card-form contact-form" id="ms-form" ref={form} onSubmit={sendEmail}>
                    <div className="input">
                        <input type="text" name="name" className="input-field" required />
                        <label className="input-label">Full name</label>
                    </div>
                    <div className="input">
                        <input type="text" name="email" className="input-field" required />
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
        </div>

    )
}

export default About 
