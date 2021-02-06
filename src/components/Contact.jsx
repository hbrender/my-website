import React from 'react';

function Contact() {
  return (
    <div id="contact" className="dark">
      <h2>
        <span className="first-letter">c</span>ontact 
        <span className="first-letter"> m</span>e
      </h2>
      <p>If you have any questions, job inquiries, or just want to chat fill out the form below!</p>
      <form> 
        <input className="contact-content contact-email" type="text" placeholder="Your email" required></input>
        <input className="contact-content contact-subject" name="subject" placeholder="Subject"required />
        <textarea 
          className="contact-content contact-message" 
          name="content" 
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
