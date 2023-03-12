
import { getAllVideos } from "../../api/fetch"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./VideoListing.css"


export default function VideoListing({ search }) {

    

    const [loadingError, setLoadingError] = useState(false)
    const [videos, setVideos] = useState([])

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
        
        <div className="videos">
          {videos.map((video) => {
            return (
              <div key={video.id.videoId}>
                <Link to={`/Videos/${video.id.videoId}`}>
                <img src={video.snippet.thumbnails.high.url} alt="box" width="230px" className="thumbnail"></img>
                <h3 className="text">{video.snippet.title}</h3>
                </Link>
              </div>
            )
          })}
            
            </div>
    )
}