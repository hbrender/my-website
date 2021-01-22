import React from 'react';

function Contact() {
  return (
    <div class="contact">
      <form> 
        <input type="text"></input>
        <input name="title" placeholder="Title" 
            value="" />
        <textarea name="content" placeholder="Take a note..." value="" />
        
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default Contact;
