import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import wrenchIcon from "../images/wrench-icon-blue.png";

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

import sunsetInvestingImage2 from "../images/sunset-investing-screenshot-2.PNG";
import sunsetInvestingImage3 from "../images/sunset-investing-screenshot-3.PNG";
import sunsetInvestingImage4 from "../images/sunset-investing-screenshot-4.PNG";

import Buzz2 from "../images/Buzz2.png";
import Buzz4 from "../images/Buzz4.png";
import Buzz8 from "../images/Buzz8.png";
import Buzz9 from "../images/Buzz9.png";

import Mars2 from "../images/Mars2.png";
import Mars10 from "../images/Mars10.png";
import Mars4 from "../images/Mars4.png";
import Mars6 from "../images/Mars6.png";
import Mars9 from "../images/Mars9.png";

export default function SoftwareProjects() {
  const [index, setIndex] = React.useState(0);

  const softwareData = [
    {
      id: 1,
      name: "Sunset Investing",
      images: [
        { src: sunsetInvestingImage2 },
        { src: sunsetInvestingImage3 },
        { src: sunsetInvestingImage4 }
      ],
      description:
        "Real estate investing platform where investors can buy/sell fractions of rental properties akin to buying stocks of companies. The advantages for buying just a fraction of rental properties are increased diversification and accessibility. You'll get a fraction of the rent and appreciation.",
      tech: "React, Bootstrap, Rails, JWT",
      finished: false,
      online: false,
      soloProject: true,
      visitLink: "#",
      frontEndLink: "https://github.com/sean-hetzel/sunset-investing",
      backEndLink: "https://github.com/sean-hetzel/sunset-investing-backend"
    },
    {
      id: 2,
      name: "STAR RUNNER",
      images: [
        { src: starRunnerImage5 },
        { src: starRunnerImage2 },
        { src: starRunnerImage3 },
        { src: starRunnerImage4 },
        { src: starRunnerImage6 }
      ],
      description:
        "80s inspired space shooter game built with the Phaser game engine. Players fly through an asteroid field in a race against time. Do you have what it takes?",
      tech: "React, Phaser, Ion Phaser, Rails",
      finished: false,
      online: true,
      soloProject: true,
      visitLink: "https://sean-hetzel.github.io/star-runner/#/",
      frontEndLink: "https://github.com/sean-hetzel/star-runner",
      backEndLink: "https://github.com/sean-hetzel/star-runner-backend"
    },
    {
      id: 3,
      name: "Adventure Archive",
      images: [
        { src: adventureArchiveImage3 },
        { src: adventureArchiveImage4 },
        { src: adventureArchiveImage5 },
        { src: adventureArchiveImage7 },
        { src: adventureArchiveImage8 },
        { src: adventureArchiveImage6 }
      ],
      description:
        "Platform where users can share archaeological sites and amazing places. Its sorta like Reddit because its a discussion platform for sharing/talking about archaeological sites and sorta like Instagram because users can scroll through sites and leave comments much like Instagram.",
      tech: "Rails, JavaScript",
      finished: true,
      online: true,
      soloProject: true,
      visitLink:
        "https://sean-hetzel.github.io/adventure_archive_frontend/index.html",
      frontEndLink: "https://github.com/sean-hetzel/adventure_archive_frontend",
      backEndLink: "https://github.com/sean-hetzel/adventure_archive_backend"
    },
    {
      id: 4,
      name: "C L O N E T E R E S T",
      images: [{ src: cloneterestImage2 }, { src: cloneterestImage3 }],
      description:
        "Idea board for images much like Pinterest where users can add, like and delete pins. The Pins are organized in a masonry layout.",
      tech: "Rails, JavaScript",
      finished: true,
      online: true,
      soloProject: true,
      visitLink: "https://sean-hetzel.github.io/cloneterest/",
      frontEndLink: "https://github.com/sean-hetzel/cloneterest",
      backEndLink: "https://github.com/sean-hetzel/cloneterest_backend"
    },
    {
      id: 5,
      name: "Personality Quiz",
      images: [{ src: Buzz8 }, { src: Buzz4 }, { src: Buzz2 }, { src: Buzz9 }],
      description:
        "Real estate investing platform where investors can buy/sell fractions of rental properties akin to buying stocks of companies. The advantages for buying just a fraction of rental properties are increased diversification and accessibility. You'll get a fraction of the rent and appreciation.",
      tech: "Rails",
      finished: true,
      online: false,
      soloProject: false,
      teammate: {
        name: "Amin Aminamos",
        github: "https://github.com/aminamos"
      },
      frontEndLink: "https://github.com/sean-hetzel/mod_2_project",
      backEndLink: "#"
    },
    {
      id: 6,
      name: "Mars Rover Photos",
      images: [
        { src: Mars2 },
        { src: Mars4 },
        { src: Mars9 },
        { src: Mars6 },
        { src: Mars10 }
      ],
      description:
        "Real estate investing platform where investors can buy/sell fractions of rental properties akin to buying stocks of companies. The advantages for buying just a fraction of rental properties are increased diversification and accessibility. You'll get a fraction of the rent and appreciation.",
      tech: "Ruby, NASA API",
      finished: true,
      online: false,
      soloProject: false,
      teammate: {
        name: "Evan Carlsen",
        github: "https://github.com/evancarlsen"
      },
      frontEndLink:
        "https://github.com/evancarlsen/module-one-final-project-guidelines-seattle-web-062419",
      backEndLink: "#"
    }
  ];

  return (
    <>
      <h1 className="page-title centered">SOFTWARE PROJECTS</h1>
      {softwareData.map(project => {
        return (
          <div className="project-card">
            <div className="gallery">
              <Gallery
                index={index}
                onRequestChange={i => {
                  setIndex(i);
                }}
              >
                {project.images.map(img =>
                  project.online ? (
                    <a
                      href={project.visitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GalleryImage
                        objectFit="contain"
                        key={img.src}
                        src={img.src}
                      />
                    </a>
                  ) : (
                    <GalleryImage
                      objectFit="contain"
                      key={img.src}
                      src={img.src}
                    />
                  )
                )}
              </Gallery>
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
                >
                  Visit
                </a>
              ) : null}
              <a
                href={project.frontEndLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                Frontend GitHub
              </a>
              <a
                href={project.backEndLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                Backend GitHub
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}
