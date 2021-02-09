import React from 'react';

function About() {
  return (
    <div id="about" className="dark">
      <h2><span className="first-letter">a</span>bout</h2>
      <div className="about-content">
        <p>Hi! My name is Hanna Brender and I am from the Seattle, WA area. I recently graduated from <a href="https://www.gonzaga.edu/">Gonzaga University</a> in May 2020 with a Bachelor's degree in Computer Science.</p>
        <p>I have industry experience as a Java Developer and Android App Developer through my internship with <a href="https://www.boeing.com/">Boeing</a> and my contract work with <a href="https://gravityjack.com/">Gravity Jack</a>. In my free time I have taken courses on Web Development where I have learned HTML, CSS, JavaScript, React, MongoDB and Express.</p>
        <p>When I am not coding, you can catch me drawing, painting, crafting or walking my dog Millie! </p>
      </div>
      <div className="about-img">
        <img src="images/profile.png" alt="profile"></img>
      </div>
    </div>
  );
}

export default About;
