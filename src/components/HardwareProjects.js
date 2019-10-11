import React, { Component } from "react";
import cloneterestImage from "../images/cloneterest-screenshot.JPG";
import adventureArchiveImage from "../images/adventure-archinve-screenshot.PNG";
import starRunnerImage from "../images/star-runner-screenshot.PNG";
import sunsetInvestingImage from "../images/sunset-investing-screenshot.PNG";

export default class SoftwareProjects extends Component {
    render() {
        return (
            <>
                <h1 className="page-title">Hardware Projects</h1>
                <div className="d-flex p-2">
                    <div className="row">
                        <div className="card col-lg-5">
                            <img
                                className="card-img-top"
                                src={cloneterestImage}
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Cloneterest</h5>
                                <p className="card-text">
                                    Quick sample text to create the card title
                                    and make up the body of the card's content.
                                </p>
                                <p className="card-text grey-text">
                                    Rails, JavaScript, Fetch
                                </p>
                                <a
                                    href="https://seanhetzel.github.io/cloneterest/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                >
                                    Check it out
                                </a>
                                <a
                                    href="https://github.com/Seanhetzel/cloneterest"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                    style={{ marginLeft: "1em" }}
                                >
                                    Frontend GitHub
                                </a>
                                <a
                                    href="https://github.com/Seanhetzel/cloneterest_backend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                    style={{ marginLeft: "1em" }}
                                >
                                    Backend GitHub
                                </a>
                            </div>
                        </div>

                        <div className="card col-lg-5">
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
                                    Quick sample text to create the card title
                                    and make up the body of the card's content.
                                </p>
                                <p className="card-text grey-text">
                                    Rails, JavaScript, Fetch
                                </p>
                                <a
                                    href="https://seanhetzel.github.io/adventure_archive_frontend/index.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                >
                                    Check it out
                                </a>
                                <a
                                    href="https://github.com/Seanhetzel/adventure_archive_frontend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                    style={{ marginLeft: "1em" }}
                                >
                                    Frontend GitHub
                                </a>
                                <a
                                    href="https://github.com/Seanhetzel/adventure_archive_backend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                    style={{ marginLeft: "1em" }}
                                >
                                    Backend GitHub
                                </a>
                            </div>
                        </div>

                        <div className="card col-lg-5">
                            <img
                                className="card-img-top"
                                src={starRunnerImage}
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Star Runner</h5>
                                <p className="card-text">
                                    Quick sample text to create the card title
                                    and make up the body of the card's content.
                                </p>
                                <p className="card-text grey-text">
                                    React, Phaser Game Engine, Ion Phaser
                                    Wrapper, Rails
                                </p>
                                <a
                                    href="https://seanhetzel.github.io/cloneterest/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                >
                                    Offline
                                </a>
                                <a
                                    href="https://github.com/Seanhetzel/star-runner"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                    style={{ marginLeft: "1em" }}
                                >
                                    Frontend GitHub
                                </a>
                                <a
                                    href="https://github.com/Seanhetzel/star-runner-backend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                    style={{ marginLeft: "1em" }}
                                >
                                    Backend GitHub
                                </a>
                            </div>
                        </div>

                        <div className="card col-lg-5">
                            <img
                                className="card-img-top"
                                src={sunsetInvestingImage}
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Sunset Investing</h5>
                                <p className="card-text">
                                    Quick sample text to create the card title
                                    and make up the body of the card's content.
                                </p>
                                <p className="card-text grey-text">
                                    React, Bootstrap, Rails
                                </p>
                                <a
                                    href="https://seanhetzel.github.io/cloneterest/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                >
                                    Offline
                                </a>
                                <a
                                    href="https://github.com/Seanhetzel/sunset-investing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                    style={{ marginLeft: "1em" }}
                                >
                                    Frontend GitHub
                                </a>
                                <a
                                    href="https://github.com/Seanhetzel/sunset-investing-backend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                    style={{ marginLeft: "1em" }}
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
