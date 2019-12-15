import React from "react";
import ImageGallery from "react-image-gallery";
import wrenchIcon from "../images/wrench-icon-blue.png";
import defaultImg from "../images/temp-pic.jpg";

import mrButtersImage1 from "../images/DSC04745.JPG";
import mrButtersImage2 from "../images/DSC04661.JPG";
import mrButtersImage3 from "../images/DSC04662.JPG";
import mrButtersImage4 from "../images/DSC04730.JPG";
import mrButtersImage5 from "../images/DSC04738.JPG";
import mrButtersImage6 from "../images/butter-robot-image-1.PNG";
import mrButtersImage7 from "../images/butter-robot-image-2.PNG";
import mrButtersImage8 from "../images/butter-robot-image-3.PNG";
import mrButtersImage9 from "../images/butter-robot-image-4.PNG";
import mrButtersImage10 from "../images/butter-robot-image-5.PNG";

import poolSkimmerImage1 from "../images/DSC04762.JPG";
import poolSkimmerImage2 from "../images/DSC04768.JPG";
import poolSkimmerImage3 from "../images/DSC04780.JPG";
import poolSkimmerImage4 from "../images/DSC04778.JPG";
import poolSkimmerImage5 from "../images/DSC04792.JPG";
import poolSkimmerImage6 from "../images/DSC04783.JPG";
import poolSkimmerImage7 from "../images/DSC04786.JPG";
import poolSkimmerImage8 from "../images/pool-skimmer-image-1.PNG";
import poolSkimmerImage9 from "../images/pool-skimmer-image-2.PNG";
import poolSkimmerImage10 from "../images/pool-skimmer-image-3.PNG";
import poolSkimmerImage11 from "../images/pool-skimmer-image-4.PNG";

import lightBoxImage2 from "../images/20190401_173050.jpg";
import lightBoxImage3 from "../images/20190309_122350.jpg";
import lightBoxImage4 from "../images/DSC04196.JPG";
import lightBoxImage5 from "../images/DSC04213.JPG";
import lightBoxImage9 from "../images/UA-Luminary-Retro-Label-7.jpg";
import lightBoxImage10 from "../images/ua-lamp-image-2.PNG";
import lightBoxImage11 from "../images/ua-lamp-image-1.PNG";
import lightBoxImage12 from "../images/DSC04153.JPG";
import lightBoxImage13 from "../images/DSC04210.JPG";
import lightBoxImage14 from "../images/DSC04395.JPG";
import lightBoxImage15 from "../images/20191214_195311.jpg"

import automaticDoor1 from "../images/20191214_160738.jpg";
import automaticDoor2 from "../images/20191214_160745.jpg";
import automaticDoor3 from "../images/20191214_160630.jpg";
import automaticDoor4 from "../images/20191214_160645.jpg";

import tvOffImage1 from "../images/20170122_184805.jpg";
import tvOffImage2 from "../images/TV-off-image-3.PNG";
import tvOffImage3 from "../images/TV-off-image-4.PNG";

import droneImage1 from "../images/20160512_185153.jpg";
import droneImage2 from "../images/20160512_185226.jpg";
import droneImage3 from "../images/20160512_185128.jpg";
import droneImage4 from "../images/20160512_185625.jpg";

export default function HardwareProjects() {
  const hardwareData = [
    {
      id: 1,
      name: "Butter Robot from Rick and Morty",
      images: [
        { original: mrButtersImage1, thumbnail: mrButtersImage1 },
        { original: mrButtersImage2, thumbnail: mrButtersImage2 },
        { original: mrButtersImage3, thumbnail: mrButtersImage3 },
        { original: mrButtersImage4, thumbnail: mrButtersImage4 },
        { original: mrButtersImage5, thumbnail: mrButtersImage5 },
        { original: mrButtersImage7, thumbnail: mrButtersImage7 },
        { original: mrButtersImage8, thumbnail: mrButtersImage8 },
        { original: mrButtersImage9, thumbnail: mrButtersImage9 },
        { original: mrButtersImage10, thumbnail: mrButtersImage10 },
        { original: mrButtersImage6, thumbnail: mrButtersImage6 }
      ],
      description:
        "After years of being lazy, I finally finished... MR BUTTERS! (Yes from Rick and Morty). JK hes not 100% finished yet and probably never will be. Everything is custom designed and 3d printed by me of course. The software is super basic cuz he just does whatever I command him to do with my phone.",
      tech:
        "Autodesk 123D Design, 3D printing, Arduino, Bluetooth control with an Android phone",
      finished: false,
      soloProject: true,
      links: [{ name: "YouTube", url: "https://youtu.be/lyy9mVMGQ5w" }]
    },
    {
      id: 2,
      name: "Solar Powered Pool Skimmer Robot",
      images: [
        { original: poolSkimmerImage1, thumbnail: poolSkimmerImage1 },
        { original: poolSkimmerImage2, thumbnail: poolSkimmerImage2 },
        { original: poolSkimmerImage3, thumbnail: poolSkimmerImage3 },
        { original: poolSkimmerImage4, thumbnail: poolSkimmerImage4 },
        { original: poolSkimmerImage6, thumbnail: poolSkimmerImage6 },
        { original: poolSkimmerImage7, thumbnail: poolSkimmerImage7 },
        { original: poolSkimmerImage5, thumbnail: poolSkimmerImage5 },
        { original: poolSkimmerImage8, thumbnail: poolSkimmerImage8 },
        { original: poolSkimmerImage9, thumbnail: poolSkimmerImage9 },
        { original: poolSkimmerImage10, thumbnail: poolSkimmerImage10 },
        { original: poolSkimmerImage11, thumbnail: poolSkimmerImage11 }
      ],
      description:
        "This is a solar powered robot pool skimmer. The hull is comprised of three seperate 3d printed sections that fit together. It has a distance sensor at the front, two electric motors at the back for propulsion, and four blue lights that blink and (would) look really cool at night above the water. Only problem is, I never got it to float.. But if we overlook that catastrophic failure that renders it totally useless, I think it turned out pretty well.",
      tech: "Autodesk 123D Design, 3D printing, Arduino",
      finished: false,
      soloProject: true,
      links: []
    },
    {
      id: 3,
      name: "UA Light Box",
      images: [
        { original: lightBoxImage12, thumbnail: lightBoxImage12 },
        { original: lightBoxImage14, thumbnail: lightBoxImage14 },
        { original: lightBoxImage5, thumbnail: lightBoxImage5 },
        { original: lightBoxImage4, thumbnail: lightBoxImage4 },
        { original: lightBoxImage13, thumbnail: lightBoxImage13 },
        { original: lightBoxImage2, thumbnail: lightBoxImage2 },
        { original: lightBoxImage15, thumbnail: lightBoxImage15 },
        { original: lightBoxImage3, thumbnail: lightBoxImage3 },
        { original: lightBoxImage9, thumbnail: lightBoxImage9 },
        { original: lightBoxImage10, thumbnail: lightBoxImage10 },
        { original: lightBoxImage11, thumbnail: lightBoxImage11 }
      ],
      description:
        "This is a laser cut desk light that I made for the University of Arizona bookstore. Its just something that you assemble, plug in and put on your desk as a décor piece. Everything from the PCB to the packaging is designed by me of course. I probably spent over 200 hours designing, problem solving and manufacturing 200 units and I even got it on store shelves. ",
      tech: "Adobe Illustrator, PCB design",
      finished: false,
      soloProject: true,
      links: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/beardown_light_box/"
        },
        {
          name: "UA News",
          url:
            "https://eller.arizona.edu/news/2019/02/entrepreneurship-students-sell-products-ua-bookstore"
        }
      ]
    },
    {
      id: 4,
      name: "Automactic Bedroom Door",
      images: [
        { original: automaticDoor1, thumbnail: automaticDoor1 },
        { original: automaticDoor2, thumbnail: automaticDoor2 },
        { original: automaticDoor3, thumbnail: automaticDoor3 },
        { original: automaticDoor4, thumbnail: automaticDoor4 }
      ],
      description:
        "Bedroom door that opens when it detects someone walking towards it then closes and locks.",
      tech: "Arduino",
      finished: false,
      soloProject: true,
      links: []
    },
    {
      id: 4,
      name: "Auto TV Off Switch",
      images: [
        { original: tvOffImage1, thumbnail: tvOffImage1 },
        { original: tvOffImage3, thumbnail: tvOffImage3 },
        { original: tvOffImage2, thumbnail: tvOffImage2 }
      ],
      description:
        "One of my old roommates used to leave the TV on all the time even when he wasn't in the room which got really annoying so I started building something that would turn it off if no motion was detected in the room after a certain amount of time. I even designed a fancy 3d printed housing for it. Only problem was, halfway through making it, I realized there's no way to differentiate sending an on vs off single which meant it would constantly be turning on and off the TV whenever nobody was in the room.",
      tech: "Arduino",
      finished: false,
      soloProject: true,
      links: []
    },
    {
      id: 4,
      name: "Firefighting Drone",
      images: [
        { original: droneImage1, thumbnail: droneImage1 },
        { original: droneImage2, thumbnail: droneImage2 },
        { original: droneImage3, thumbnail: droneImage3 },
        { original: droneImage4, thumbnail: droneImage4 }
      ],
      description: "FPV drone with a mini fire extinguisher on its back.",
      tech: "Cleanflight, basic drone stuff",
      finished: false,
      soloProject: true,
      links: []
    }
  ];

  return (
    <>
      <h1 className="page-title centered">HARDWARE PROJECTS</h1>
      {hardwareData.map(project => {
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
              {project.links.map(link => {
                return (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
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
