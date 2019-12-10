import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import wrenchIcon from "../images/wrench-icon-blue.png";
import mrButtersImage1 from "../images/DSC04745.JPG";
import poolSkimmerImage1 from "../images/IMG_20190726_184341_717.jpg";
import lightBoxImage1 from "../images/20190330_213114.jpg";
import automaticDoor1 from "../images/20170319_090514.jpg";
import tvOffImage1 from "../images/20170122_184805.jpg";
import droneImage1 from "../images/20160512_185153.jpg";

export default function HardwareProjects() {
  const [index, setIndex] = React.useState(0);

  const hardwareData = [
    {
      id: 1,
      name: "Butter Robot from Rick and Morty",
      images: [{ src: mrButtersImage1 }, { src: mrButtersImage1 }],
      description:
        "After years of being lazy, I finally finished... MR BUTTERS! (Yes from Rick and Morty). JK hes not 100% finished yet and probably never will be. Everything is custom designed and 3d printed by me of course. The software is super basic cuz he just does whatever I command him to do with my phone.",
      tech:
        "Autodesk 123D Design, 3D printing, Arduino, Bluetooth control with an Android phone",
      finished: false,
      soloProject: true,
      visitLink: "https://sean-hetzel.github.io/cloneterest/",
      frontEndLink: "https://github.com/sean-hetzel/cloneterest",
      backEndLink: "https://github.com/sean-hetzel/cloneterest_backend"
    },
    {
      id: 2,
      name: "Solar Powered Pool Skimmer Robot",
      images: [{ src: poolSkimmerImage1 }, { src: poolSkimmerImage1 }],
      description:
        "This is a solar powered robot pool skimmer. The hull is comprised of three seperate 3d printed sections that fit together. It has a distance sensor at the front, two electric motors at the back for propulsion, and four blue lights that blink and (would) look really cool at night above the water. Only problem is, I never got it to float.. But if we overlook that catastrophic failure that renders it totally useless, I think it turned out pretty well.",
      tech: "Autodesk 123D Design, 3D printing, Arduino",
      finished: false,
      soloProject: true,
      visitLink:
        "https://sean-hetzel.github.io/adventure_archive_frontend/index.html",
      frontEndLink: "https://github.com/sean-hetzel/adventure_archive_frontend",
      backEndLink: "https://github.com/sean-hetzel/adventure_archive_backend"
    },
    {
      id: 3,
      name: "UA Light Box",
      images: [{ src: lightBoxImage1 }, { src: lightBoxImage1 }],
      description:
        "This is a laser cut desk light that I made for the University of Arizona bookstore. Its just something that you assemble, plug in and put on your desk as a décor piece. Everything from the PCB to the packaging is designed by me of course. I probably spent over 200 hours designing, problem solving and manufacturing 200 units and I even got it on store shelves. ",
      tech: "Adobe Illustrator, PCB design",
      finished: false,
      soloProject: true,
      visitLink: "https://sean-hetzel.github.io/star-runner/#/",
      frontEndLink: "https://github.com/sean-hetzel/star-runner",
      backEndLink: "https://github.com/sean-hetzel/star-runner-backend"
    },
    {
      id: 4,
      name: "Automactic Bedroom Door",
      images: [{ src: automaticDoor1 }, { src: automaticDoor1 }],
      description:
        "Bedroom door that opens when it detects someone walking towards it then closes and locks.",
      tech: "Arduino",
      finished: false,
      soloProject: true,
      visitLink: "#",
      frontEndLink: "https://github.com/sean-hetzel/sunset-investing",
      backEndLink: "https://github.com/sean-hetzel/sunset-investing-backend"
    },
    {
      id: 4,
      name: "Auto TV Off Switch",
      images: [{ src: tvOffImage1 }, { src: tvOffImage1 }],
      description:
        "One of my old roommates used to leave the TV on all the time even when he wasn't in the room which got really annoying so I started building something that would turn it off if no motion was detected in the room after a certain amount of time. I even designed a fancy 3d printed housing for it. Only problem was, halfway through making it, I realized there's no way to differentiate sending an on vs off single which meant it would constantly be turning on and off the TV whenever nobody was in the room.",
      tech: "Arduino",
      finished: false,
      soloProject: true,
      visitLink: "#",
      frontEndLink: "https://github.com/sean-hetzel/sunset-investing",
      backEndLink: "https://github.com/sean-hetzel/sunset-investing-backend"
    },
    {
      id: 4,
      name: "Firefighting Drone",
      images: [{ src: droneImage1 }, { src: droneImage1 }],
      description: "FPV drone with a mini fire extinguisher on its back.",
      tech: "Cleanflight, basic drone stuff",
      finished: false,
      soloProject: true,
      visitLink: "#",
      frontEndLink: "https://github.com/sean-hetzel/sunset-investing",
      backEndLink: "https://github.com/sean-hetzel/sunset-investing-backend"
    }
  ];

  return (
    <>
    <h1 className="page-title centered">HARDWARE</h1>
      {hardwareData.map(project => {
        return (
          <div className="project-card">
            <div className="gallery">
              <Gallery
                index={index}
                onRequestChange={i => {
                  setIndex(i);
                }}
              >
                {project.images.map(img => (
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
                ))}
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
              <a
                href={project.visitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Visit
              </a>
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
