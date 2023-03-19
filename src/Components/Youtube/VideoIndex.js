
import { useState } from "react";
import "./VideoIndex.css"
import { Link, useNavigate } from "react-router-dom";




export default function VideoIndex( { callback, mode, loadingError }) {


const [searchTerm, setSearchTerm] = useState("");
const [notes, setNotes] = useState([]);
// const [likeCount, setLikeCount] = useState(0);
// const [dislikeCount, setDislikeCount] = useState(0);


let navigate = useNavigate()

let arrayOfComments = []

const handleComments = (event) => {
  event.preventDefault();
  const commenterName = event.target.elements["commenter"].value;
  const commentText = event.target.elements["comment"].value;
  const newCommentNote = { commenter: commenterName, comment: commentText };
  setNotes((notes) => [...notes, newCommentNote]);
  setLikeCount(0);
  setDislikeCount(0);
  event.target.reset();
};


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


  // function like() {

  // }

  // function dislike() {
   
  // }
  
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

      if(loadingError){
        navigate("/error")
      } else 

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
        <Link to={!searchTerm ? `/error` : (`/Videos/Search/${searchTerm}`)}>
          <button className="button2" type="submit" onClick={() => callback(searchTerm)} style={{backgroundColor: !mode ? "green": "orange"}}>Go</button>
        </Link>
      </form>
    </div>
           

        <div id="player">
          <br></br><br></br>
            <section className="stuff">
            <iframe title="myFrame"   src={`https://www.youtube.com/embed/${id}`} className="videoplayer">
            </iframe>
            <div className="comment-section">
            <h4 style={{color:!mode ? "black" : "white"}}>Leave a comment!</h4>
            <form className="comment" onSubmit={handleComments}>
            <label htmlFor="Commenter Name" style={{color:!mode ? "black" : "white"}}>Your Name:</label>
            <input type="text" name="commenter" onChange={handleComments}/>
            <br></br>
            <label htmlFor="Comment" style={{color:!mode ? "black" : "white"}}>Comment:</label>
            <input type="text" name="comment" onChange={handleComments}/>
            <br></br>
            <button type="submit" style={{color:!mode ? "black" : "blue"}}>Add Note</button>
            </form> 
            </div>
            <ul className="comments">
  {notes.map((note, index) => (
    <div key={index}>
      <li style={{color:!mode ? "black" : "white"}}>{note.commenter} commented: {note.comment}.</li>
      <aside className="opinion">
      
        {/* <button onClick={() => like()}>👍</button>

        <button onClick={() => dislike()}>👎</button> */}
      </aside>
    </div>
  ))}
  {arrayOfComments.map((comment, index) => (
    <div key={index}>
      <li style={{color:!mode ? "black" : "white"}}>{comment}</li>
      <aside className="opinion">
       
        {/* <button onClick={() => like()}>👍</button>

        <button onClick={() => dislike()}>👎</button> */}
      </aside>
    </div>
  ))}
</ul>

            </section>
        </div>
        </div>
    )
}