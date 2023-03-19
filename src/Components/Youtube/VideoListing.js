import { getAllVideos } from "../../api/fetch"
import { useEffect, useState  } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "./VideoListing.css"



export default function VideoListing({ search, mode, callback }) {


    const [loadingError, setLoadingError] = useState(false)
    const [videos, setVideos] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [place, setPlace] = useState("")

    let navigate = useNavigate()



    const handleSearchInputChange = (event) => {
      setPlace(event.target.value);
    };
    
    const handleSearchFormSubmit = (e) => {
      e.preventDefault();
      console.log(searchTerm);
      
    };

    const handleSearch = () => {
      setSearchTerm(place)
      setPlace("")
    }


    useEffect(() => {
        getAllVideos(!searchTerm ? search: searchTerm).then((response) => {
          // if(response.error.code === 403){
          //   navigate("/403")
          // }
         if (Object.keys(response).length === 0) {
            setLoadingError(true)
            callback(loadingError)
          } else {
            setLoadingError(false)
            console.log(response.items)
            setVideos(response.items)
          }
        }).catch((error) => {
          setLoadingError(true)
          callback(loadingError)
          navigate("/error")
        })
      }, [callback,loadingError,navigate,search,searchTerm])


    return (


      <div style={{backgroundColor:!mode ? "white":"rgb(50,50,50)"}}>
       <div className="search-container2">
      <form onSubmit={handleSearchFormSubmit} className="form2">
        <input
          className="input2"
          type="text"
          placeholder="Search..."
          value={place}
          onChange={handleSearchInputChange}
        />
        <Link to={!place ? `/error` : (`/Videos/Search/${place}`)}>
          <button className="button2" type="submit" style={{backgroundColor: !mode ? "green": "orange"}} onClick={handleSearch}>Go</button>
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