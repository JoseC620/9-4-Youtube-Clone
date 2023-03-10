

import { getAllVideos } from "../../Api/fetch"
import { useEffect, useState } from "react"


export default function Home() {

    

    const [loadingError, setLoadingError] = useState(false)
    const [searchTerm, setSearchTerm] = useState("surfing")
    const [videos, setVideos] = useState([])

    useEffect(() => {
        getAllVideos(searchTerm).then((response) => {
          
          
          setLoadingError(false)
        }).catch((error) => {
          setLoadingError(true)
        })
      }, [searchTerm])
    return (
        
        <div>
          
            
            </div>
    )
}

