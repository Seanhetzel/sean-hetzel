import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import ImageGallery from "react-image-gallery";
import wrenchIcon from "../images/wrench-icon-blue.png";
import defaultImg from "../images/temp-pic.jpg";

import mrButtersImage1 from "../images/DSC04745.jpg";
import mrButtersImage2 from "../images/DSC04661.jpg";
import mrButtersImage3 from "../images/DSC04662.jpg";
import mrButtersImage4 from "../images/DSC04730.jpg";
import mrButtersImage5 from "../images/DSC04738.jpg";
import mrButtersImage6 from "../images/butter-robot-image-1.jpg";
import mrButtersImage7 from "../images/butter-robot-image-2.jpg";
import mrButtersImage8 from "../images/butter-robot-image-3.jpg";
import mrButtersImage9 from "../images/butter-robot-image-4.jpg";
import mrButtersImage10 from "../images/butter-robot-image-5.jpg";

import poolSkimmerImage1 from "../images/DSC04762.jpg";
import poolSkimmerImage2 from "../images/DSC04768.jpg";
import poolSkimmerImage3 from "../images/DSC04780.jpg";
import poolSkimmerImage4 from "../images/DSC04778.jpg";
import poolSkimmerImage5 from "../images/DSC04792.jpg";
import poolSkimmerImage6 from "../images/DSC04783.jpg";
import poolSkimmerImage7 from "../images/DSC04786.jpg";
import poolSkimmerImage8 from "../images/pool-skimmer-image-1.jpg";
import poolSkimmerImage9 from "../images/pool-skimmer-image-2.jpg";
import poolSkimmerImage10 from "../images/pool-skimmer-image-3.jpg";
import poolSkimmerImage11 from "../images/pool-skimmer-image-4.jpg";

import lightBoxImage2 from "../images/20190401_173050.jpg";
import lightBoxImage3 from "../images/20190309_122350.jpg";
import lightBoxImage4 from "../images/DSC04196.jpg";
import lightBoxImage5 from "../images/DSC04213.jpg";
import lightBoxImage9 from "../images/UA-Luminary-Retro-Label-7.jpg";
import lightBoxImage10 from "../images/ua-lamp-image-2.jpg";
import lightBoxImage11 from "../images/ua-lamp-image-1.jpg";
import lightBoxImage12 from "../images/DSC04153.jpg";
import lightBoxImage13 from "../images/DSC04210.jpg";
import lightBoxImage14 from "../images/DSC04395.jpg";
import lightBoxImage15 from "../images/20191214_195311.jpg";

import automaticDoor1 from "../images/20191214_160738.jpg";
import automaticDoor2 from "../images/20191214_160745.jpg";
import automaticDoor3 from "../images/20191214_160630.jpg";
import automaticDoor4 from "../images/20191214_160645.jpg";

import tvOffImage1 from "../images/20170122_184805.jpg";
import tvOffImage2 from "../images/TV-off-image-3.jpg";
import tvOffImage3 from "../images/TV-off-image-4.jpg";

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
        { original: mrButtersImage6, thumbnail: mrButtersImage6 },
      ],
      description: `3D printed butter robot from Rick and Morty. I designed it and printed it with my 3D printer. Both his arms can move and he can look up and down. He has treads like in the show but I need to adjust the gear ratio and give him more power for him to be able to move. He has a speaker with the pre-programmed line, "What is my purpose?" He can be fully controlled with any Android phone over bluetooth. Cramming all the electronics in such a small space was a fun design challenge.`,
      tech: "Autodesk 123D Design, 3D printing, Arduino, Bluetooth control with an Android phone",
      finished: false,
      soloProject: true,
      links: [
        { id: 1, name: "YouTube 1", url: "https://youtu.be/PJr8bjc1ncM" },
        { id: 2, name: "YouTube 2", url: "https://youtu.be/lyy9mVMGQ5w" },
      ],
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
        { original: poolSkimmerImage11, thumbnail: poolSkimmerImage11 },
      ],
      description:
        "The hull is comprised of three separate 3D printed sections that fit together which I designed. It has a distance sensor at the front, two electric motors at the back for propulsion, and four blue lights that blink and (would) look really cool at night above the water. It's designed to propel itself across the surface of a pool and collect leaves. It would shut off one of its motors when the distance sensor detects a wall in its path, causing it to turn. The solar panel provides more than enough power, and it would tap into its reserve battery when the sun went down. Only problem is, I never got it to float.. But if we overlook that catastrophic failure that renders it totally useless, I think it turned out pretty well.",
      tech: "Autodesk 123D Design, 3D printing, Arduino",
      finished: false,
      soloProject: true,
      links: [],
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
        { original: lightBoxImage11, thumbnail: lightBoxImage11 },
      ],
      description: `Laser cut desk light made for the University of Arizona bookstore. It's a décor piece that you can assemble, plug in, and put on your desk. The design is a synthwave inspired landscape of Tucson AZ with Mt. Lemmon in the background. I designed the pattern on the wood panels with Adobe Illustrator and outsourced the laser cutting to a small business in Phoenix AZ called the Leading Etch (because I don't have a laser cutter). Other components such as the custom printed circuit board, USB cables and cardboard boxes were sourced directly from Chinese manufacturers to minimize cost. I chose a blue LED because it looks cool, but it could be RGB and react to music or something with some upgrades. In order to use the school branding such as its logo and "BearDown" slogan, licensing was obtained. It retailed at the UA Bookstore for $25.`,
      tech: "Adobe Illustrator, PCB design",
      finished: true,
      soloProject: true,
      links: [
        {
          id: 3,
          name: "Instagram",
          url: "https://www.instagram.com/beardown_light_box/",
        },
        {
          id: 4,
          name: "UA News",
          url: "https://eller.arizona.edu/news/2019/02/entrepreneurship-students-sell-products-ua-bookstore",
        },
      ],
    },
    {
      id: 4,
      name: "Automatic Bedroom Door",
      images: [
        { original: automaticDoor1, thumbnail: automaticDoor1 },
        { original: automaticDoor2, thumbnail: automaticDoor2 },
        { original: automaticDoor3, thumbnail: automaticDoor3 },
        { original: automaticDoor4, thumbnail: automaticDoor4 },
      ],
      description:
        "Bedroom door that opens when it detects someone walking towards it then closes and locks. There's a distance sensor on the walls both inside my bedroom and outside that are meant to blend in. It uses a linear actuator that can open the door in 5 seconds. There's a solenoid motor inside the door where the knob used to be with a backup reserve battery as an override to open the door in case of power failure. The whole thing is powered by a wall outlet.  I stopped working on it because it was too finicky and I got bored. Turns out regular door knobs work pretty well after all.",
      tech: "Arduino",
      finished: false,
      soloProject: true,
      links: [],
    },
    {
      id: 5,
      name: "Auto TV Off Switch",
      images: [
        { original: tvOffImage1, thumbnail: tvOffImage1 },
        { original: tvOffImage3, thumbnail: tvOffImage3 },
        { original: tvOffImage2, thumbnail: tvOffImage2 },
      ],
      description:
        "One of my old roommates used to leave the TV on all the time even when he wasn't in the room, which got really annoying. So I started building something that would automatically turn it off if no motion was detected in the room after a certain amount of time. I also designed a 3D printed housing for it. Only problem was, halfway through making it, I realized that there's no way to differentiate between sending on vs off signals (because it's just one button on the remote), which meant it would be constantly turning on and off the TV whenever nobody was in the room. So I stopped working on it.",
      tech: "Arduino",
      finished: false,
      soloProject: true,
      links: [],
    },
    {
      id: 6,
      name: "Firefighting Drone",
      images: [
        { original: droneImage1, thumbnail: droneImage1 },
        { original: droneImage2, thumbnail: droneImage2 },
        { original: droneImage3, thumbnail: droneImage3 },
        { original: droneImage4, thumbnail: droneImage4 },
      ],
      description:
        "FPV drone with a mini fire extinguisher on its back. The idea being it could fly faster and put out small fires in hard to reach places before they got too big. It could be deployed from a fire truck and fly up to the roofs of buildings, above power cables and put out small brush fires. It could also be used for recon and eyes in the sky. It had an FPV camera pointing down meaning you could put on some goggles and see what it sees. It can fly and is pretty stable. But finding a receiver with enough outputs was a challenge (6 motors and 1 for a servo to control the fire extinguisher valve).",
      tech: "Cleanflight, basic drone stuff",
      finished: false,
      soloProject: true,
      links: [{ id: 5, name: "YouTube", url: "https://youtu.be/gJsW0B7UBVc" }],
    },
  ];

  return (
    <>
      <ScrollableAnchor id={"hardware"}>
        <h1 className="page-title centered">HARDWARE PROJECTS</h1>
      </ScrollableAnchor>
      {hardwareData.map((project) => {
        return (
          <div key={project.id} className="project-card">
            <div className="gallery">
              <ImageGallery
                items={project.images}
                slideDuration={200}
                showPlayButton={false}
                defaultImage={defaultImg}
                disableArrowKeys={true}
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
                  Teammate:
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
              {project.links.map((link) => {
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
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
