import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import x from "../src/asserts/x.jpeg"
import link from "../src/asserts/linked.png"
import git from "../src/asserts/git.jpeg"
import './index.css';

function Email() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_ixcuwro', 'template_tjhosin', form.current, {
                publicKey: 'Ktr1vwixLIWo-RupJ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='email-js'>

            <div className="sending">

                <div className="form-container">
                    <form className="form" ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <label for="text">Name</label>
                            <input required name="user_name" id="text" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input required name="user_email" id="email" type="email" />
                        </div>
                        <div className="form-group">
                            <label for="text">Subject</label>
                            <input required name="subject" id="subject" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="textarea">Message</label>
                            <textarea required="" cols="50" rows="10" id="textarea" name="message" />
                        </div>
                        <button type="submit" className="form-submit-btn">Submit</button>
                    </form>
                </div>

            </div>

            <div className="end">
                <div className="love">
                    <p>made with <span>	&#9829;</span> by venkatesh</p>
                </div>
                <div className="socialmedia">
                    <a href="https://x.com/MadariVenk4216?t=vDqrOms2TKYGMuxuHreIOQ&s=09" target='_blank'>
                        <img src={x} alt="x" className='x' />
                    </a>
                    <a href="https://www.linkedin.com/in/venkateshmadari/" target='_blank'>
                        <img src={link} alt="linkedin" className="media" />
                    </a>
                    <a href="https://github.com/venkateshmadari/" target='_blank'>
                        <img src={git} alt="git" className="media" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Email