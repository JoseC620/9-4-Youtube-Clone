import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
   
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
            </ul>

      </header>
    )
}