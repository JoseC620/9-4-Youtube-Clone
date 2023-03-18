
import React from "react";
import "./About.css";

export default function About( { mode } ) {

    const teamMembers = [
        {
            name: "Jose Cepeda",
            bio: `I'm currently a Full Stack Web Development Fellow at Pursuit, a 12-month, Google-funded software engineering fellowship with a 9% acceptance rate whose graduates have been hired as developers at leading companies such as Pinterest, JP Morgan, Citi, Spotify, and Blackstone.
    
            I'm currently learning React, having already studied JavaScript, HTML & CSS and I am training to become a software engineer so that I can solve real-world problems.`,
            github: "https://github.com/JoseC620",
        },

        {
            name: "Mark Roberston",
            bio: `I'm currently a Full Stack Web Development Fellow at Pursuit, a 12-month, Google-funded software engineering fellowship with a 9% acceptance rate whose graduates have been hired as developers at leading companies such as Pinterest, JP Morgan, Citi, Spotify, and Blackstone.
    
            I'm currently learning React, having already studied JavaScript, HTML & CSS and I am training to become a software engineer so that I can solve real-world problems.  When I'm not coding, I enjoy movies, watching Formula 1 racing, music, travel and playing with my German Shepherd.

            Being a Pursuit Fellow will give me the foundation to go on and learn new and exciting languages such as Python, C++, C# et al. that I would like to use both personally and professionally. My first personal project will be to design and implement a quantitative trading algorithm that I can run through an API to a trading platform.
            
            I would very much enjoy working for a start-up (as I have start-up experience) or even a large financial firm, as my experience up until Pursuit has been in the financial markets.`,
            github: "https://github.com/MarkRobertson67",
        },
    ];


    return (

      <div className="about-wrapper" style={{ 
        backgroundImage: "url('/aboutbackground.jpg')",
        filter: mode ? "brightness(40%)" : "none",
      }}>

        <div className="about-container">
          {/* <div style={{ 
            backgroundImage: "url('/aboutbackground.jpg')",

            filter: mode ? "brightness(50%)" : "none",
            }}>


          <div className="about">
            <br></br>
            <h1>About Our Project</h1>
            <p>
              Our project is a video search and viewing app, YouTube clone, that allows users to
              search for videos and play them within the app. The app has a simple
              and intuitive user interface, which includes a search bar on the home
              page that allows users to get a list of videos based on their search
              criteria. Users can click on a video thumbnail to play the video they
              are interested in and share the link to the individual video with
              others.
            </p>
            <p>
              The app also includes an "About" page where users can learn about the
              project and its developers. This page contains a brief project
              description, as well as a short bio for each teammate and links to
              their GitHub accounts. The "About" page can be accessed through the
              navigation bar that appears on every page of the app.
            </p>
            <p>
              In order to ensure a seamless user experience, we have also implemented
              a modal window that displays when a 400 error occurs. This modal allows
              users to try their search again and exit the message by clicking an x
              or outside the modal.
            </p>
            <p>
              Our app is built using JSX to create components, and we have committed
              to using  hooks. We have
              used create-react-app to build the app and fetch to make API calls.
              React-router-dom is used to create different views, while youtube-react
              is used to create a Youtube component for viewing videos from the
              Youtube API. State is used to build a stateful React application, and
              CSS is used to make a responsive and attractive app with decent
              interface.
            </p>
          </div>
          <h1>App Screenshots</h1>
          <div style={{ 
            filter: mode ? "brightness(100%)" : "brightness(100%)",
            }}>
          <div className="app-screenshots">
          <img src="./homescreen.png" alt="Screenshota" style={{ zIndex: "999" }} />
          <img src="./searchscreen.png" alt="Screenshotb" style={{ zIndex: "999" }} />
          <img src="./videoscreen.png" alt="Screenshotc" style={{ zIndex: "999" }} />
  
          </div>
          </div>
    
          <div className="team"><br></br><br></br>
            <h1>Meet the Team</h1>
            <div className="team-members">
              {teamMembers.map((member, index) => (
                <div key={index} className="member-card">
                  <h3>{member.name}</h3>
                  <p>{member.bio}</p>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
        </div>
      );
    }