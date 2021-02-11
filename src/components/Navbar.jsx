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
          <li onClick={handleClick}><a href="#about">about</a></li>
          <li onClick={handleClick}><a href="#projects">projects</a></li>
          <li onClick={handleClick}><a href="#contact">contact</a></li>
          <li onClick={handleClick}><a target="_blank" rel="noreferrer" className="resume" href="resume.pdf">resume</a></li>
        </ul>
        <div className={burgerClicked ? "fa-bars-active" : ""} onClick={handleClick}><i className="fas fa-lg fa-bars"></i></div>
      </nav>
    </div>
  )
}

export default Navbar;
