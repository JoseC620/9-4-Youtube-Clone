
import { useState } from "react"
import { Link } from "react-router-dom";
import './Home.css'

export default function Home({ callback, mode }) {

    const [searchVisible, setSearchVisible] = useState(false);
    const [loadingError, setLoadingError] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")


    let image

    if(!mode){
    image = "./lightBackground.png"
    } else{
      image = "./darkBackground.png"
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
            <div className="search-icon" onClick={handleSearchIconClick}>
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
      );
}


