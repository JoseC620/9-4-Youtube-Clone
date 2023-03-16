
import { useState } from "react"
import { Link } from "react-router-dom";
import ErrorModal from "../error/ModalError";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Home.css'

export default function Home({ callback, mode, loadingError }) {

    const [searchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("")


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

      function modal() {
        if (loadingError){
        return (
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
          >
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
      
              <Modal.Body>
                <p>Modal body text goes here.</p>
              </Modal.Body>
      
              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        )
      }
    }

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


