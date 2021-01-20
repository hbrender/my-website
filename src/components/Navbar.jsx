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
          <li><a href="#news">About</a></li>
          <li><a href="#contact">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a className="resume" href="#resume">Resume</a></li>
        </ul>
        <div onClick={handleClick} className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
