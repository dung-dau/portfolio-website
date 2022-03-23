import React from 'react';
import './contact.css';
import email from '../../img/email.png';
import github from '../../img/github.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9mpjx0e', 'template_qrcnpis', formRef.current, 
        'jrwKRlMP_BXpbPicc')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
        console.log("email sent")
    }
  return (
    <div className='c'>
        <div className="c-bg"> </div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={github} alt="" className="c-icon" />
                        <a href="https://github.com/dung-dau" target="_blank">Github</a>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b> Get in touch. 
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user-name"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user-subject"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user-email"/>
                    <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message' name="message"></textarea>
                    <button>Submit</button>
                    {done && "Your message has been sent"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact