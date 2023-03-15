import { Link } from "react-router-dom"
import React, { useState } from "react"
import "./Navbar.css"

export default function Navbar(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    props.onModeChange();
  };
  

  // const background = `url(/${isDarkMode ? 'dark' : 'light'}-background.png)`;




  return (

        <header className="navbar">
            <div className="youtube-logo" style={{ marginRight: "10px" }}>
              <div className="playBtn"></div>
            </div>

        <article>
          <h1 className="navbarh1">
            <Link to="/">
              Youtube<span className="navbarspan"> Clone</span>
            </Link>
          </h1>
         
        </article>
        <ul className="navbarul">
          
            <Link to="/about">
              <span> About</span>
            </Link>
          
            <label htmlFor="mode-switch" className="checkbox-container" style={{ marginLeft: "auto" }}>
        <input
          type="checkbox"
          id="mode-switch"
          onChange={toggleMode}
          checked={isDarkMode}
          />
        <span className="checkmark"></span>
        <span className="mode-switch-label">Dark Mode</span>
        </label>


        </ul>
      </header>
    )
}