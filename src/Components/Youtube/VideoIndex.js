
import { useState } from "react";
import "./VideoIndex.css"
import { Link } from "react-router-dom";


export default function VideoIndex() {

const [searchTerm, setSearchTerm] = useState("");


const handleSearchInputChange = (event) => {
  setSearchTerm(event.target.value);
};

const handleSearchFormSubmit = (e) => {
  e.preventDefault();
  console.log(searchTerm);
};



let id = window.location.pathname.substring(13)
let arrayOfComments = []

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
  
  const numComments = 10; 
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
           

        <div id="player">
          <br></br><br></br>
            <section className="stuff">
            <iframe src={`https://www.youtube.com/embed/${id}`} className="videoplayer">
            </iframe>
            
                <ul className="comments">
                {arrayOfComments.map((comment, index) => {
                    return (
                        <div key={index}>
                            {comment}
                            <aside className="opinion">
                            {Math.floor(Math.random() * (1000 - 1 + 1) + 1)}
                            <button onClick={like()}>👍</button>
                            {Math.floor(Math.random() * (1000 - 1 + 1) + 1)}
                            <button onClick={dislike()}>👎</button>
                            </aside>
                        </div>
                    )
                })}
                </ul>
            </section>
        </div>
        </>
    )
}