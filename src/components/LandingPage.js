import React from "react";
import Header from "./Header";

function LandingPage() {
  return (
    <>
      <div id="landing_page">
      <h1 className="title">SEAN HETZEL</h1>
      <h4 className="title">Full Stack Developer</h4>

        <h1 className="lets-build">LET'S BUILD</h1>
        {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
                        </button> */}
        <div className="mouse-scroll">
          <span className="mouse">
            <span className="mouse-movement" />
          </span>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
