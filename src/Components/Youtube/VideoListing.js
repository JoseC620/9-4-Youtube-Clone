import { getAllVideos } from "../../api/fetch"
import { useEffect, useState  } from "react"
import { Link } from "react-router-dom"
import "./VideoListing.css"



export default function VideoListing({ search, mode }) {


    const [loadingError, setLoadingError] = useState(false)
    const [videos, setVideos] = useState([])
    const [searchTerm, setSearchTerm] = useState("");


    const handleSearchInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
    
    const handleSearchFormSubmit = (e) => {
      e.preventDefault();
      console.log(searchTerm);
      
    };


    useEffect(() => {
        getAllVideos(!searchTerm ? search: searchTerm).then((response) => {
          console.log(response.items)
          setVideos(response.items)
          if (Object.keys(response).length === 0) {
            setLoadingError(true)
          } else {
            setLoadingError(false)
          }
        }).catch((error) => {
          setLoadingError(true)
        })
      }, [!searchTerm ? search: searchTerm])


    return (


      <div style={{backgroundColor:!mode ? "white":"rgb(50,50,50)"}}>
       <div className="search-container2">
      <form onSubmit={handleSearchFormSubmit} className="form2">
        <input
          className="input2"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <Link to={`/Videos/Search/${searchTerm}`}>
          <button className="button2" type="submit" style={{backgroundColor: !mode ? "green": "orange"}}>Go</button>
        </Link>
      </form>
    </div>
        
        <div className="videos">
          
          {videos.map((video) => {
            return (
              <div key={video.id.videoId}>
                  <br></br><br></br><br></br>
                <Link to={`/Videos/play/${video.id.videoId}`}>

                <img src={video.snippet.thumbnails.high.url} alt="box" width="230px" className="thumbnail"></img>
                <h3 className="text" style={{color:!mode ? "black" : "white"}}>{video.snippet.title}</h3>
                </Link>
              </div>
            )
          })}
            </div>
            </div>
    )
}