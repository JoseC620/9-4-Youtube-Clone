const KEY = process.env.REACT_APP_API_KEY


export function getAllVideos(search) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${search}&part=snippet&maxResults=10&key=${KEY}`).then((response) => response.json())
}
