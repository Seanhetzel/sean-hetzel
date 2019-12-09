import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import cloneterestImage from "../images/cloneterest-screenshot.JPG";
import adventureArchiveImage from "../images/adventure-archinve-screenshot.PNG";
import starRunnerImage from "../images/star-runner-screenshot.PNG";
import sunsetInvestingImage from "../images/sunset-investing-image.png";



export default function SoftwareProjectsContainer() {
    const [index, setIndex] = React.useState(0);

    const softwareData = [
        {
          id: 1,
          name: "Sunset Investing",
          images: [{ src: "sunset-investing-image.png" }],
          description:
            "Invest in fractions of a rental properties. Like stocks, but for real estate. The advantages for buying just a fraction of rental properties are increased diversification and accessibility. You'll get a fraction of the rent and appreciation.",
          tech: "React, Bootstrap, Rails",
          visitLink: "github.io/adventure_archive_frontend/index.html",
          frontEndLink: "/star-runner",
          backEndLink: "/star-runner-backend"
        },
        {id: 2,
        name: "STAR RUNNER",
      images}
      ];

  return (
    <>
      {softwareData.map(project => {
        return (
          <>
            <div
              style={{ background: "black", width: "100vw", height: "100vh" }}
            >
              <Gallery
                index={index}
                onRequestChange={i => {
                  setIndex(i);
                }}
              >
                {project.images.map(img => (
                  <GalleryImage
                    objectFit="contain"
                    key={img.src}
                    src={img.src}
                  />
                ))}
              </Gallery>
            </div>
            <h5 className="card-title">{project.name}</h5>
          </>
        );
      })}
      <h1 className="page-title">Software Projects</h1>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center container-fluid">
          <div className="">
            <img
              className="card-img-top"
              src={sunsetInvestingImage}
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Sunset Investing</h5>
              <p className="card-text">
                Invest in fractions of a rental properties. Like stocks, but for
                real estate. The advantages for buying just a fraction of rental
                properties are increased diversification and accessibility.
                You'll get a fraction of the rent and appreciation.
              </p>
              <p className="card-text grey-text">React, Bootstrap, Rails</p>
              <a
                href="https://seanhetzel.github.io/cloneterest/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Offline
              </a>
              <a
                href="https://github.com/Seanhetzel/sunset-investing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                Frontend GitHub
              </a>
              <a
                href="https://github.com/Seanhetzel/sunset-investing-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                Backend GitHub
              </a>
            </div>
          </div>
          <div className="card col-lg-4">
            <img
              className="card-img-top"
              src={starRunnerImage}
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Star Runner</h5>
              <p className="card-text">
                Space shooter game built with the Phaser game engine. Players
                fly through an asteroid field in a race against time. Do you
                have what it takes?
              </p>
              <p className="card-text grey-text">
                React, Phaser, Ion Phaser, Rails
              </p>
              <div className="btn-group" role="group">
                <a
                  href="https://seanhetzel.github.io/cloneterest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Offline
                </a>
                <a
                  href="https://github.com/Seanhetzel/star-runner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Frontend GitHub
                </a>
                <a
                  href="https://github.com/Seanhetzel/star-runner-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Backend GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="card col-lg-4">
            <img
              className="card-img-top"
              src={adventureArchiveImage}
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Adventure Archive</h5>
              <p className="card-text">
                Share interesting archeological sites and amazing places. Places
                resource has full CRUD and users can add comments to places.
              </p>
              <p className="card-text grey-text">Rails, JavaScript, Fetch</p>
              <div className="btn-group" role="group">
                <a
                  href="https://seanhetzel.github.io/adventure_archive_frontend/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/Seanhetzel/adventure_archive_frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Frontend GitHub
                </a>
                <a
                  href="https://github.com/Seanhetzel/adventure_archive_backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Backend GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="card col-lg-4">
            <img
              className="card-img-top"
              src={cloneterestImage}
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Cloneterest</h5>
              <p className="card-text">
                Clone of Pinterest. Users can add and delete pins.
              </p>
              <p className="card-text grey-text">Rails, JavaScript, Fetch</p>
              <div className="btn-group" role="group">
                <a
                  href="https://seanhetzel.github.io/cloneterest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/Seanhetzel/cloneterest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Frontend GitHub
                </a>
                <a
                  href="https://github.com/Seanhetzel/cloneterest_backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Backend GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="card col-lg-4">
            <img
              className="card-img-top"
              src={adventureArchiveImage}
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Personality Quiz</h5>
              <h6>
                Teammate:{" "}
                <a
                  href="https://github.com/aminamos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Amin Aminamos
                </a>
              </h6>
              <p className="card-text">
                Share interesting archeological sites and amazing places. Places
                resource has full CRUD and users can add comments to places.
              </p>
              <p className="card-text grey-text">Rails, JavaScript, Fetch</p>
              <div className="btn-group" role="group">
                <a
                  href="https://seanhetzel.github.io/adventure_archive_frontend/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/Seanhetzel/adventure_archive_frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Frontend GitHub
                </a>
                <a
                  href="https://github.com/Seanhetzel/adventure_archive_backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Backend GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="card col-lg-4">
            <img
              className="card-img-top"
              src={adventureArchiveImage}
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Mars Rover Photos</h5>
              <h6>
                Teammate:{" "}
                <a
                  href="https://github.com/evancarlsen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Evan Carlsen
                </a>
              </h6>
              <p className="card-text">
                Share interesting archeological sites and amazing places. Places
                resource has full CRUD and users can add comments to places.
              </p>
              <p className="card-text grey-text">Rails, JavaScript, Fetch</p>
              <div className="btn-group" role="group">
                <a
                  href="https://seanhetzel.github.io/adventure_archive_frontend/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/Seanhetzel/adventure_archive_frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Frontend GitHub
                </a>
                <a
                  href="https://github.com/Seanhetzel/adventure_archive_backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Backend GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
