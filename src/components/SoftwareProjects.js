import React, { Component } from "react";
import palm from "../images/2987897_0.jpg";

export default class SoftwareProjects extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="card" style={{ width: "40%" }}>
                        <img
                            className="card-img-top"
                            src={palm}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Quick sample text to create the card title and
                                make up the body of the card's content.
                            </p>
                            <a href="#" className="btn btn-outline-primary">
                                Check It Out
                            </a>
                            <a href="#" className="btn btn-outline-primary" style={{marginLeft: "1em"}}>
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className="card" style={{ width: "40%" }}>
                        <img
                            className="card-img-top"
                            src={palm}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Quick sample text to create the card title and
                                make up the body of the card's content.
                            </p>
                            <a href="#" className="btn btn-outline-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>

                    <div className="card" style={{ width: "40%" }}>
                        <img
                            className="card-img-top"
                            src={palm}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Quick sample text to create the card title and
                                make up the body of the card's content.
                            </p>
                            <a href="#" className="btn btn-outline-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>

                    <div className="card" style={{ width: "40%" }}>
                        <img
                            className="card-img-top"
                            src={palm}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Quick sample text to create the card title and
                                make up the body of the card's content.
                            </p>
                            <a href="#" className="btn btn-outline-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
