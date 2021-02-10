import React from 'react';

function Project() {
  return (
    <div className="project">
      <div>
        <h3>SpiroDvt</h3>
        <a target="_blank" rel="noreferrer" className="code-link" href="https://github.com/hbrender"><i className="fab fa-2x fa-github"></i></a>
        <p>Android application that links to an electronic Incentive Spirometer and DVT Exerciser via Bluetooth and allows medical professionals to easily monitor and assess patients' post-surgical progress.</p>
        <div className="img-carousel">
          <i className="carousel-btn fas fa-2x fa-angle-left"></i>
          <img className="img-preview img-left" src="images/spirodvt2.png" alt=""></img>
          <img className="img-main" src="images/spirodvt1.png" alt=""></img>
          <img className="img-preview img-right" src="images/spirodvt3.png" alt=""></img>
          <i className="carousel-btn fas fa-2x fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Project;
