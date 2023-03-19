
import { useState } from "react"
import { Link } from "react-router-dom";
import './Home.css'

export default function Home({ callback, mode }) {

    const [searchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("")
    const [loadingError, setLoadingError] = useState(false)
  
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

      function handleSearch(){
        if(searchTerm === ""){
          setLoadingError(true)
        } else if (loadingError){
          setLoadingError(true)
        }
      }
    
      const handleSearchFormSubmit = (e) => {
        e.preventDefault();
        console.log(searchTerm);
        setSearchVisible(false);
      };

      function pleaseSubmit() {
        return(
          <div>
            <h3>Please submit a search!</h3>
          </div>
        )
      }


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
              <Link to={!searchTerm ? `/error` : (`/Videos/Search/${searchTerm}`)}>
              <button type="submit" onClick={() => {
                handleSearch()
                callback(searchTerm)}}>Go</button>
              </Link>
            </form>
          </div>
          <section className="pleaseText">{searchVisible ? pleaseSubmit(): ""}</section>
        </div>
      )
}


