import React, { Component } from "react";
import cloneterestImage from "../images/cloneterest-screenshot.JPG";
import adventureArchiveImage from "../images/adventure-archinve-screenshot.PNG";
import starRunnerImage from "../images/star-runner-screenshot.PNG";
import sunsetInvestingImage from "../images/sunset-investing-image.png";

export default class SoftwareProjects extends Component {
    render() {
        return (
            <>
                <h1 className="page-title">Software Projects</h1>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="card col-lg-3">
                            <img
                                className="card-img-top"
                                src={cloneterestImage}
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Cloneterest</h5>
                                <p className="card-text">
                                    Clone of Pinterest. Users can add and delete
                                    pins.
                                </p>
                                <p className="card-text grey-text">
                                    Rails, JavaScript, Fetch
                                </p>
                                <a
                                    href="https://seanhetzel.github.io/cloneterest/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Check it out
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

                        <div className="card col-lg-3">
                            <img
                                className="card-img-top"
                                src={adventureArchiveImage}
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Adventure Archive
                                </h5>
                                <p className="card-text">
                                    Share interesting archeological sites and
                                    amazing places. Places resource has full
                                    CRUD and users can add comments to places.
                                </p>
                                <p className="card-text grey-text">
                                    Rails, JavaScript, Fetch
                                </p>
                                <a
                                    href="https://seanhetzel.github.io/adventure_archive_frontend/index.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Check it out
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

                        <div className="card col-lg-3">
                            <img
                                className="card-img-top"
                                src={starRunnerImage}
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Star Runner</h5>
                                <p className="card-text">
                                    Space shooter game built with the Phaser
                                    game engine. Players fly through an asteroid
                                    field in a race against time. Do you have
                                    what it takes?
                                </p>
                                <p className="card-text grey-text">
                                    React, Phaser, Ion Phaser, Rails
                                </p>
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

                        <div className="card col-lg-3">
                            <img
                                className="card-img-top"
                                src={sunsetInvestingImage}
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Sunset Investing</h5>
                                <p className="card-text">
                                    Invest in fractions of a rental properties.
                                    Like stocks, but for real estate. The
                                    advantages for buying just a fraction of
                                    rental properties are increased
                                    diversification and accessibility. You'll
                                    get a fraction of the rent and appreciation.
                                </p>
                                <p className="card-text grey-text">
                                    React, Bootstrap, Rails
                                </p>
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
                    </div>
                </div>
            </>
        );
    }
}
