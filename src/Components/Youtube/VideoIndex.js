

export default function VideoIndex() {

let id = window.location.pathname.substring(8)


    return (
        <div id="player">
            <iframe src={`https://www.youtube.com/embed/${id}`}>
            </iframe>
           
        </div>
    )
}