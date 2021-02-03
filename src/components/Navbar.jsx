import React, {useState} from 'react'

function Navbar() {
  const [burgerClicked, setBurgerClicked] = useState(false);

  function handleClick() {
    setBurgerClicked(!burgerClicked);
  }

  return (
    <div className="navbar">
      <nav className={burgerClicked ? "nav-active" : ""}>
        <img className="logo" src="images/logo.png" alt="Site icon"></img>
        <ul className={burgerClicked ? "nav-links-active nav-links" : "nav-links"}>
          <li><a href="#about">about</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#contact">contact</a></li>
          <li><a target="_blank" rel="noreferrer" className="resume" href="resume.pdf">resume</a></li>
        </ul>
        <div className={burgerClicked ? "fa-bars-active" : ""} onClick={handleClick}><i className="fas fa-lg fa-bars"></i></div>
      </nav>
    </div>
  )
}

export default Navbar;
