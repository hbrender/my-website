import React, {useState} from 'react'

function Navbar() {
  const [burgerClicked, setBurgerClicked] = useState(false);

  function handleClick() {
    console.log("clicked")
    setBurgerClicked(!burgerClicked);
  }

  return (
    <div className="navbar">
      <nav className={burgerClicked ? "nav-active" : ""}>
        <div className="brand">Hanna Brender</div>
        <ul className={burgerClicked ? "nav-links-active nav-links" : "nav-links"}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a className="resume" href="#resume">Resume</a></li>
        </ul>
        <div onClick={handleClick}><i className="fas fa-bars"></i></div>
      </nav>
    </div>
  )
}

export default Navbar;
