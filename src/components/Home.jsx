import React from 'react';

function Home() {
  return (
    <div id="home" className="light">
      <div className="home-text">
        <h1> 
          <span className="name">
            <span className="first-letter">h</span>anna
            <span className="first-letter"> b</span>render
          </span>
        </h1>
        <p>Hi, I am a software developer based in Seattle, WA and I have a passion for creative problem solving and optimizing user experience with software.</p>
        <div className="home-buttons">
          <a className="button button-dark" href="mailto:hbrender615@gmail.com">get in touch</a>
          <a className="button button-light" target="_blank" rel="noreferrer" href="resume.pdf">resume</a>
        </div>
      </div>

      <div className="home-img">
        <img className="laptop-img" src="images/laptopanim4.gif" alt="Coding gif" />
      </div>
    </div>
  );
}

export default Home;
