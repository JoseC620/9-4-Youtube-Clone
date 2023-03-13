
import React from "react";
import { Link } from "react-router-dom";
import "./About.css";


export default function About() {

    const teamMembers = [
        {
            name: "Jose Cepeda",
            bio: "Super fantastic guy",
            github: "https://github.com/JoseC620",
        },

        {
            name: "Mark Roberston",
            bio: "Super fantastic guy",
            github: "https://github.com/MarkRobertson67",
        },
    ];


    return (
        <div className="about-container">
          <div className="about">
            <h1>About Our Project</h1>
            <p>
              Our project is a video search and viewing app that allows users to
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
              to using either class based components or hooks, but not both. We have
              used create-react-app to build the app and fetch to make API calls.
              React-router-dom is used to create different views, while youtube-react
              is used to create a Youtube component for viewing videos from the
              Youtube API. State is used to build a stateful React application, and
              CSS is used to make a responsive and attractive app with decent
              interface.
            </p>
          </div>
    
          <div className="team">
            <h2>Meet the Team</h2>
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
      );
    }