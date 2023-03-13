
import { getAllVideos } from "../../api/fetch"
import { useEffect, useState  } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./VideoListing.css"


export default function VideoListing({ search }) {

    const [loadingError, setLoadingError] = useState(false)
    const [videos, setVideos] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate()


const handleSearchInputChange = (event) => {
  setSearchTerm(event.target.value);
};

const handleSearchFormSubmit = (e) => {
  e.preventDefault();
  console.log(searchTerm);
};

    if (search === undefined){
      search = "surfing"
    }

    useEffect(() => {
        getAllVideos(search).then((response) => {
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
      }, [search])

    console.log(search)

    return (


      <>
      <div className="search-container2">
      <form onSubmit={handleSearchFormSubmit} className="form2">
        <input
          className="input2"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <Link to={`/Videos/Search/${!searchTerm ? "surfing": searchTerm}`}>
          <button className="button2" type="submit">Go</button>
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
                <h3 className="text">{video.snippet.title}</h3>
                </Link>
              </div>
            )
          })}
            </div>
            </>
    )
}