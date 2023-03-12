
import { getAllVideos } from "../../api/fetch"
import { useEffect, useState } from "react"
import './Home.css'

export default function Home() {

    const [searchVisible, setSearchVisible] = useState(false);
    const [loadingError, setLoadingError] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [videos, setVideos] = useState([])

    // useEffect(() => {
    //     getAllVideos(searchTerm).then((response) => {
    //       console.log(response)
          
    //       setLoadingError(false)
    //     }).catch((error) => {
    //       setLoadingError(true)
    //     })
    //   }, [searchTerm])


      const handleSearchIconClick = () => {
        setSearchVisible(!searchVisible);
      };

      const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const handleSearchFormSubmit = (e) => {
        e.preventDefault();
        console.log(searchTerm);
        setSearchTerm('');
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
              <button type="submit">Go</button>
            </form>
          </div>
        </div>
      );
}


