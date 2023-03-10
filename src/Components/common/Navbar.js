import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    return (
        <header>
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