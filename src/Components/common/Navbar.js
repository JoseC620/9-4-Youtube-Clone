import { Link } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"

export default function Navbar( { callback } ) {

  const [mode, setMode] = useState()

  callback(mode)
   
  return (

        <header className="navbar" style={{backgroundColor:!mode?"red":"rgb(80,80,80)"}}>

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
            <section className="darkButton">       
            <label class="switch">
            <input type="checkbox" onClick={() => {setMode(!mode)}}/>
            <span class="slider round"></span>
            </label>
            <aside className="darkText">Dark Mode</aside>  
            </section>
            

      </header>
    )
}