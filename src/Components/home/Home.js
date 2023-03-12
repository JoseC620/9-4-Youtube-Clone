
import { useState } from "react"
import { Link } from "react-router-dom";
import './Home.css'

export default function Home({ callback }) {

    const [searchVisible, setSearchVisible] = useState(false);
    const [loadingError, setLoadingError] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")


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


      return (
        <div className="home-container">
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
              <Link to={`/Videos/Search/${!searchTerm ? "surfing": searchTerm}`}>
              <button type="submit" onClick={() => callback(searchTerm)}>Go</button>
              </Link>
            </form>
          </div>
        </div>
      );
}


