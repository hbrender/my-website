import React from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  function sendEmail(event) {
    event.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, event.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      event.target.reset();    
  }

  return (
    <div id="contact" className="dark">
      <h2>
        <span className="first-letter">c</span>ontact 
        <span className="first-letter"> m</span>e
      </h2>
      <p>If you have any questions, job inquiries, or just want to chat fill out the form below!</p>
      <form onSubmit={sendEmail}> 
        <input 
          className="contact-content contact-email" 
          type="text" 
          name="email"
          placeholder="Your email" 
          required
        />
        <input 
          className="contact-content contact-subject" 
          type="text" 
          name="subject" 
          placeholder="Subject" 
          required
        />
        <textarea 
          className="contact-content contact-message" 
          name="message" 
          placeholder="Your message . . . " 
          rows="12"
          required
        />
        <button className="button button-dark" type="submit">send</button>
      </form>
    </div>
  );
}

export default Contact;
