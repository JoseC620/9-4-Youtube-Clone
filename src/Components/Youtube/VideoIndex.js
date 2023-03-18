
import { useState, useEffect } from "react";
import "./VideoIndex.css"
import { Link } from "react-router-dom";
import { getAllVideos } from "../../api/fetch";



export default function VideoIndex( { callback, mode }) {


const [searchTerm, setSearchTerm] = useState("");
const [videos, setVideos] = useState([])
const [loadingError, setLoadingError] = useState(false)
const [notes, setNotes] = useState([]);
const [likeCount, setLikeCount] = useState(0);
const [dislikeCount, setDislikeCount] = useState(0);




let arrayOfComments = []

const handleComments = (event) => {
  event.preventDefault();
  const commenterName = event.target.elements["commenter"].value;
  const commentText = event.target.elements["comment"].value;
  const newCommentNote = { commenter: commenterName, comment: commentText };
  // student.notes.push(newCommentNote);
  // setNotes([]);
  setNotes((notes) => [...notes, newCommentNote]);
  setLikeCount(0);
  setDislikeCount(0);
  event.target.reset();
};

// useEffect(() => {
//   getAllVideos(searchTerm).then((response) => {
//     console.log(response.items)
//     setVideos(response.items)
//     if (Object.keys(response).length === 0) {
//       setLoadingError(true)
//     } else {
//       setLoadingError(false)
//     }
//   }).catch((error) => {
//     setLoadingError(true)
//   })
// }, [searchTerm])


const handleSearchInputChange = (event) => {
  setSearchTerm(event.target.value);
};

const handleSearchFormSubmit = (e) => {
  e.preventDefault();
  console.log(searchTerm);
};



let id = window.location.pathname.substring(13)

const names = ["John Doe", "Jane Smith", "Bob Johnson", "Mary Brown"]; 

const messages = [ "Great video, thanks for sharing!", "I learned so much from this video!", "You're doing an amazing job, keep it up! 👍👍👍", "Can't wait for the next video! 😁", "I hated this video 😡", "Really informative. Helped me a lot on my project.", "You need to do more videos like this fr fr.", "Jose and Mark best duo!!!", "This webpage came out amazing you guys did fantastic!!! ⭐️" ];

 function getRandomInt(max) { return Math.floor(Math.random() * Math.floor(max)); }


 let count = 0
 let count2 = 0


  function like() {
    count = 1
  }

  function dislike() {
    count2 = 1
  }
  
  const numComments = 3; 
  for (let i = 0; i < numComments; i++) { 
    const comment = generateRandomComment();
    arrayOfComments.push(comment)
  }

    function generateRandomComment() {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomMessage = messages[getRandomInt(messages.length)]; 
        return `${randomName} commented: ${randomMessage}.`;
      }


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
          <button className="button2" type="submit" onClick={() => callback(searchTerm)} style={{backgroundColor: !mode ? "green": "orange"}}>Go</button>
        </Link>
      </form>
      <section className="videoscroll">
      {videos.map((video) => {
            return (
              <div key={video.id.videoId} >
                  <br></br><br></br><br></br>
                <Link to={`/Videos/play/${video.id.videoId}`}>

                <img src={video.snippet.thumbnails.high.url} alt="box" width="230px" className="thumbnail2"></img>
                <h3 className="text2">{video.snippet.title}</h3>
                </Link>
              </div>
            )
          })}
      </section>
    </div>
           

        <div id="player">
          <br></br><br></br>
            <section className="stuff">
            <iframe src={`https://www.youtube.com/embed/${id}`} className="videoplayer">
            </iframe>
            <div className="comment-section">
            <h4>Leave a comment!</h4>
            <form className="comment" onSubmit={handleComments}>
            <label htmlFor="Commenter Name">Your Name:</label>
            <input type="text" name="commenter" onChange={handleComments}/>
            <br></br>
            <label htmlFor="Comment">Comment:</label>
            <input type="text" name="comment" onChange={handleComments}/>
            <br></br>
            <button type="submit">Add Note</button>
            </form> 
            </div>
            <ul className="comments">
  {notes.map((note, index) => (
    <div key={index}>
      <li>{note.commenter} commented: {note.comment}.</li>
      <aside className="opinion">
        {Math.floor(Math.random() * (1000 - 1 + 1) + 1)}
        <button onClick={() => like()}>👍</button>
        {Math.floor(Math.random() * (1000 - 1 + 1) + 1)}
        <button onClick={() => dislike()}>👎</button>
      </aside>
    </div>
  ))}
  {arrayOfComments.map((comment, index) => (
    <div key={index}>
      <li>{comment}</li>
      <aside className="opinion">
        {Math.floor(Math.random() * (1000 - 1 + 1) + 1)}
        <button onClick={() => like()}>👍</button>
        {Math.floor(Math.random() * (1000 - 1 + 1) + 1)}
        <button onClick={() => dislike()}>👎</button>
      </aside>
    </div>
  ))}
</ul>

            </section>
        </div>
        </div>
    )
}