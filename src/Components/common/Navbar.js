import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
   
  return (

        <header>

            <div className="youtube-logo" style={{ marginRight: "10px" }}>
              <div className="playBtn"></div>
            </div>


        <article>
          <h1>
            <Link to="/">
              Youtube<span> Clone</span>
            </Link>
          </h1>
         
        </article>
        <ul> 
            <Link to="/about">
              <span> About</span>
            </Link>
            </ul>

            
      </header>
    )
}