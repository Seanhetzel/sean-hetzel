import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import ImageGallery from "react-image-gallery";
import wrenchIcon from "../images/wrench-icon-blue.png";
import defaultImg from "../images/temp-pic.jpg";

import cloneterestImage2 from "../images/cloneterest-screenshot-2.PNG";
import cloneterestImage3 from "../images/cloneterest-screenshot-3.PNG";

import adventureArchiveImage3 from "../images/adventure-archive-screenshot-3.PNG";
import adventureArchiveImage4 from "../images/adventure-archive-screenshot-4.PNG";
import adventureArchiveImage5 from "../images/adventure-archive-screenshot-5.PNG";
import adventureArchiveImage6 from "../images/adventure-archive-screenshot-6.PNG";
import adventureArchiveImage7 from "../images/adventure-archive-screenshot-7.PNG";
import adventureArchiveImage8 from "../images/adventure-archive-screenshot-8.PNG";

import starRunnerImage2 from "../images/star-runner-screenshot-2.PNG";
import starRunnerImage3 from "../images/star-runner-screenshot-3.PNG";
import starRunnerImage4 from "../images/star-runner-screenshot-4.PNG";
import starRunnerImage5 from "../images/star-runner-screenshot-5.PNG";
import starRunnerImage6 from "../images/star-runner-screenshot-6.PNG";

import sunsetInvestingImage3 from "../images/sunset-investing-screenshot-3.PNG";
import sunsetInvestingImage4 from "../images/sunset-investing-screenshot-4.PNG";
import sunsetInvestingImage5 from "../images/sunset-investing-screenshot-5.PNG";
import sunsetInvestingImage6 from "../images/sunset-investing-screenshot-6.PNG";
import sunsetInvestingImage7 from "../images/sunset-investing-screenshot-7.PNG";
import sunsetInvestingImage8 from "../images/sunset-investing-screenshot-8.PNG";
import sunsetInvestingImage9 from "../images/sunset-investing-screenshot-9.PNG";
import sunsetInvestingImage10 from "../images/sunset-investing-screenshot-10.PNG";
import sunsetInvestingImage11 from "../images/sunset-investing-screenshot-11.PNG";

import Buzz2 from "../images/Buzz2.png";
import Buzz4 from "../images/Buzz4.png";
import Buzz7 from "../images/Buzz7.png";
import Buzz8 from "../images/Buzz8.png";
import Buzz9 from "../images/Buzz9.png";

import Mars2 from "../images/Mars2.png";
import Mars10 from "../images/Mars10.png";
import Mars4 from "../images/Mars4.png";
import Mars6 from "../images/Mars6.png";
import Mars9 from "../images/Mars9.png";

export default function SoftwareProjects() {
  const softwareData = [
    {
      id: 1,
      name: "Sunset Investing",
      images: [
        { original: sunsetInvestingImage10, thumbnail: sunsetInvestingImage10 },
        { original: sunsetInvestingImage3, thumbnail: sunsetInvestingImage3 },
        { original: sunsetInvestingImage4, thumbnail: sunsetInvestingImage4 },
        { original: sunsetInvestingImage7, thumbnail: sunsetInvestingImage7 },
        { original: sunsetInvestingImage8, thumbnail: sunsetInvestingImage8 },
        { original: sunsetInvestingImage9, thumbnail: sunsetInvestingImage9 },
        { original: sunsetInvestingImage11, thumbnail: sunsetInvestingImage11 },
        { original: sunsetInvestingImage6, thumbnail: sunsetInvestingImage6 },
        { original: sunsetInvestingImage5, thumbnail: sunsetInvestingImage5 }
      ],
      description:
        "Real estate investing platform where investors can buy/sell fractions of rental properties akin to buying stocks of companies. The advantages for buying just a fraction of rental properties are increased diversification and accessibility. You'll get a fraction of the rent and appreciation.",
      tech: "React, Bootstrap, Rails, JWT",
      finished: false,
      online: false,
      soloProject: true,
      visitLink: "#",
      gitHubLinks: [
        {
          name: "Frontend GitHub",
          url: "https://github.com/sean-hetzel/sunset-investing"
        },
        {
          name: "Backend GitHub",
          url: "https://github.com/sean-hetzel/sunset-investing-backend"
        }
      ]
    },
    {
      id: 2,
      name: "STAR RUNNER",
      images: [
        { original: starRunnerImage2, thumbnail: starRunnerImage2 },
        { original: starRunnerImage3, thumbnail: starRunnerImage3 },
        { original: starRunnerImage4, thumbnail: starRunnerImage4 },
        { original: starRunnerImage5, thumbnail: starRunnerImage5 },
        { original: starRunnerImage6, thumbnail: starRunnerImage6 }
      ],
      description:
        "80's inspired space shooter game built with the Phaser game engine. Players fly through an asteroid field in a race against time. Do you have what it takes?",
      tech: "React, Phaser, Ion Phaser, Rails",
      finished: false,
      online: true,
      soloProject: true,
      visitLink: "https://sean-hetzel.github.io/star-runner/#/",
      gitHubLinks: [
        {
          name: "Frontend GitHub",
          url: "https://github.com/sean-hetzel/star-runner"
        },
        {
          name: "Backend GitHub",
          url: "https://github.com/sean-hetzel/star-runner-backend"
        }
      ]
    },
    {
      id: 3,
      name: "Adventure Archive",
      images: [
        { original: adventureArchiveImage3, thumbnail: adventureArchiveImage3 },
        { original: adventureArchiveImage4, thumbnail: adventureArchiveImage4 },
        { original: adventureArchiveImage5, thumbnail: adventureArchiveImage5 },
        { original: adventureArchiveImage7, thumbnail: adventureArchiveImage7 },
        { original: adventureArchiveImage8, thumbnail: adventureArchiveImage8 },
        { original: adventureArchiveImage6, thumbnail: adventureArchiveImage6 }
      ],
      description:
        "Platform where users can share archaeological sites and amazing places. It's sorta like Reddit because it's a discussion platform for sharing/talking about archaeological sites and sorta like Instagram because users can scroll through sites and leave comments, much like Instagram.",
      tech: "Rails, JavaScript",
      finished: true,
      online: true,
      soloProject: true,
      visitLink:
        "https://sean-hetzel.github.io/adventure_archive_frontend/index.html",
      gitHubLinks: [
        {
          name: "Frontend GitHub",
          url: "https://github.com/sean-hetzel/adventure_archive_frontend"
        },
        {
          name: "Backend GitHub",
          url: "https://github.com/sean-hetzel/adventure_archive_backend"
        }
      ]
    },
    {
      id: 4,
      name: "C L O N E T E R E S T",
      images: [
        { original: cloneterestImage2, thumbnail: cloneterestImage2 },
        { original: cloneterestImage3, thumbnail: cloneterestImage3 }
      ],
      description:
        "Idea board for images much like Pinterest where users can add, like and delete pins. The Pins are organized in a masonry layout.",
      tech: "Rails, JavaScript",
      finished: true,
      online: true,
      soloProject: true,
      visitLink: "https://sean-hetzel.github.io/cloneterest/",
      gitHubLinks: [
        {
          name: "Frontend GitHub",
          url: "https://github.com/sean-hetzel/cloneterest"
        },
        {
          name: "Backend GitHub",
          url: "https://github.com/sean-hetzel/cloneterest_backend"
        }
      ]
    },
    {
      id: 5,
      name: "Personality Quiz",
      images: [
        { original: Buzz8, thumbnail: Buzz8 },
        { original: Buzz4, thumbnail: Buzz4 },
        { original: Buzz7, thumbnail: Buzz7 },
        { original: Buzz2, thumbnail: Buzz2 },
        { original: Buzz9, thumbnail: Buzz9 }
      ],
      description:
        "Personality quiz similar to a buzzfeed quiz where users can choose from four quizzes, answer questions and get a recommendation at the end, based on their responses. Users can create and account and login with full authentication.",
      tech: "Rails",
      finished: true,
      online: false,
      soloProject: false,
      teammate: {
        name: "Amin Aminamos",
        github: "https://github.com/aminamos"
      },
      gitHubLinks: [
        { name: "GitHub", url: "https://github.com/sean-hetzel/mod_2_project" }
      ]
    },
    {
      id: 6,
      name: "Mars Rover Photos",
      images: [
        { original: Mars2, thumbnail: Mars2 },
        { original: Mars4, thumbnail: Mars4 },
        { original: Mars9, thumbnail: Mars9 },
        { original: Mars6, thumbnail: Mars6 },
        { original: Mars10, thumbnail: Mars10 }
      ],
      description:
        "CLI app that pulls random photos from the NASA API taken by the Martian rovers. Users can play a guessing game and guess the rover and type of camera when presented with a random photo. Users can also see random photos and save them, and see their favorites.",
      tech: "Ruby, NASA API",
      finished: true,
      online: false,
      soloProject: false,
      teammate: {
        name: "Evan Carlsen",
        github: "https://github.com/evancarlsen"
      },
      gitHubLinks: [
        {
          name: "GitHub",
          url:
            "https://github.com/evancarlsen/module-one-final-project-guidelines-seattle-web-062419"
        }
      ]
    }
  ];

  return (
    <>
      <ScrollableAnchor id={"software"}>
        <h1 className="page-title centered">SOFTWARE PROJECTS</h1>
      </ScrollableAnchor>
      {softwareData.map(project => {
        return (
          <div className="project-card">
            <div className="gallery">
              <ImageGallery
                items={project.images}
                slideDuration={200}
                showPlayButton={false}
                defaultImage={defaultImg}
              />
            </div>
            <div className="project-info">
              <h5 className="card-title">{project.name}</h5>
              <p>{project.description}</p>
              <p className="grey-text">{project.tech}</p>
              {project.soloProject ? (
                <p className="blue-text">Solo Project</p>
              ) : (
                <p>
                  Teammate:{" "}
                  <a
                    href={project.teammate.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                    title={project.teammate.name}
                  >
                    {project.teammate.name}
                  </a>
                </p>
              )}
              {project.finished ? null : (
                <div className="wip-container">
                  <img src={wrenchIcon} alt="wrench icon" height="30" />
                  <p className="blue-text">Work in Progress</p>
                </div>
              )}
              {project.online ? (
                <a
                  href={project.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  title="Visit"
                >
                  Visit
                </a>
              ) : null}
              {project.gitHubLinks.map(link => {
                return (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                    title={link.name}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
