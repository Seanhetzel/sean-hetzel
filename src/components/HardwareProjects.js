import React, { Component } from "react";
import mrButtersImage1 from "../images/DSC04745.JPG";
import poolSkimmerImage1 from "../images/IMG_20190726_184341_717.jpg";
import lightBoxImage1 from "../images/20190330_213114.jpg";
import automaticDoor1 from "../images/20170319_090514.jpg";
import tvOffImage1 from "../images/20170122_184805.jpg";
import droneImage1 from "../images/20160512_185153.jpg";

export default class SoftwareProjects extends Component {
    render() {
        return (
            <>
                <h1 className="page-title">Hardware Projects</h1>
                <div className="d-flex p-2">
                    <div className="row">
                        <div className="card col-lg-3">
                            <img
                                className="card-img-top"
                                src={mrButtersImage1}
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Butter Robot from Rick and Morty
                                </h5>
                                <p style={{ color: "#00ffea" }}>Just for Fun</p>
                                <p className="card-text">
                                    After years of being lazy, I finally
                                    finished... MR BUTTERS! (Yes from Rick and
                                    Morty). JK he's not 100% finished yet and
                                    probably never will be. Everything is custom
                                    designed and 3d printed by me of course. The
                                    software is super basic cuz he just does
                                    whatever I command him to do with my phone.
                                    Anyway, I think I'm gonna document a few
                                    more things from my graveyard of unfinished
                                    projects so look out for more!
                                </p>
                                <p className="card-text grey-text">
                                    Autodesk 123D Design, 3D printing, Arduino,
                                    Bluetooth control with an Android phone
                                </p>
                                <a
                                    href="https://seanhetzel.github.io/cloneterest/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                >
                                    Check it out
                                </a>
                            </div>
                        </div>

                        <div className="card col-lg-3">
                            <img
                                className="card-img-top"
                                src={poolSkimmerImage1}
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Solar Powered Pool Skimmer Robot
                                </h5>
                                <p style={{ color: "#00ffea" }}>Just for Fun</p>
                                <p className="card-text">
                                    This is a solar powered robot pool skimmer.
                                    The hull is comprised of three seperate 3d
                                    printed sections that fit together. It has a
                                    distance sensor at the front, two electric
                                    motors at the back for propulsion, and four
                                    blue lights that blink and (would) look
                                    really cool at night above the water. Only
                                    problem is, I never got it to float.. But if
                                    we overlook that catastrophic failure that
                                    renders it totally useless, I think it
                                    turned out pretty well.
                                </p>
                                <p className="card-text grey-text">
                                    Autodesk 123D Design, 3D printing, Arduino
                                </p>
                                <a
                                    href="https://seanhetzel.github.io/adventure_archive_frontend/index.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                >
                                    Check it out
                                </a>
                            </div>
                        </div>

                        <div className="card col-lg-3">
                            <img
                                className="card-img-top"
                                src={lightBoxImage1}
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">UA Light Box</h5>
                                <p style={{ color: "#00ffea" }}>
                                    Fun and Money
                                </p>
                                <p className="card-text">
                                    This is a laser cut desk light that I made
                                    for the University of Arizona bookstore. Its
                                    just something that you assemble, plug in
                                    and put on your desk as a décor piece.
                                    Everything from the PCB to the packaging is
                                    designed by me of course. I probably spent
                                    over 200 hours designing, problem solving
                                    and manufacturing 200 units and I even got
                                    it on store shelves. Only problem was,
                                    nobody bought it.
                                </p>
                                <p className="card-text grey-text">
                                    Adobe Illustrator, PCB design,
                                </p>
                                <a
                                    href="https://seanhetzel.github.io/cloneterest/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                >
                                    Check it out
                                </a>
                            </div>
                        </div>

                        <div className="card col-lg-3">
                            <img
                                className="card-img-top"
                                src={automaticDoor1}
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Automactic Bedroom Door
                                </h5>
                                <p style={{ color: "#00ffea" }}>Just for Fun</p>
                                <p className="card-text">
                                    Bedroom door that opens when it detects
                                    someone walking towards it then closes and
                                    locks.
                                </p>
                                <p className="card-text grey-text">Arduino</p>
                                <a
                                    href="https://seanhetzel.github.io/cloneterest/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                >
                                    Check it out
                                </a>
                            </div>
                        </div>
                        <div className="card col-lg-3">
                            <img
                                className="card-img-top"
                                src={tvOffImage1}
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Auto TV Off Switch
                                </h5>
                                <p style={{ color: "#00ffea" }}>Necessity</p>
                                <p className="card-text">
                                    One of my old roommates used to leave the TV
                                    on all the time even when he wasn't in the
                                    room which got really annoying so I started
                                    building something that would turn it off if
                                    no motion was detected in the room after a
                                    certain amount of time. I even designed a
                                    fancy 3d printed housing for it. Only
                                    problem was, halfway through making it, I
                                    realized there's no way to differentiate
                                    sending an on vs off single which meant it
                                    would constantly be turning on and off the
                                    TV whenever nobody was in the room. So I
                                    stopped working on it.
                                </p>
                                <p className="card-text grey-text">Arduino</p>
                                <a
                                    href="https://seanhetzel.github.io/cloneterest/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                >
                                    Check it out
                                </a>
                            </div>
                        </div>
                        <div className="card col-lg-3">
                            <img
                                className="card-img-top"
                                src={droneImage1}
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Firefighting Drone
                                </h5>
                                <p style={{ color: "#00ffea" }}>
                                    School Project
                                </p>
                                <p className="card-text">
                                    FPV drone with a fire extinguisher on its
                                    back.
                                </p>
                                <p className="card-text grey-text">
                                    Cleanflight, basic drone stuff
                                </p>
                                <a
                                    href="https://seanhetzel.github.io/cloneterest/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                >
                                    Check it out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
