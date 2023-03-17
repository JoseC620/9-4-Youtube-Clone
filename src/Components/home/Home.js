
import { useState } from "react"
import { Link } from "react-router-dom";
import ModalError from "../error/ModalError";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Home.css'

export default function Home({ callback, mode, loadingError }) {

    const [searchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  


    let image

    if(!mode){
    image = "./lightBackground.png"
    } else{
      image = "./galaxy.jpg"
    }


      const handleSearchIconClick = () => {
        setSearchVisible(!searchVisible);
      };

      const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const handleSearchFormSubmit = (e) => {
        e.preventDefault();
        console.log(searchTerm);
        setSearchVisible(false);
      };

      console.log(mode)


      return (

        
        <div className="home-container" style={{backgroundImage: `url(${image})`}}>
          <div className="search-container">
            <div className="search-icon" onClick={handleSearchIconClick} style={{backgroundColor: !mode ? "red": "blue"}}>
              <i className="fa fa-search"></i>
            </div>
            <form
              className={`search-box ${searchVisible ? "expanded" : ""}`}
              onSubmit={handleSearchFormSubmit}
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
              <Link to={`/Videos/Search/${!searchTerm ? "": searchTerm}`}>
              <button type="submit" onClick={() => callback(searchTerm)}>Go</button>
              </Link>
            </form>
          </div>
        </div>
      )
}


