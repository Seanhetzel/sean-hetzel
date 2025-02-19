import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
// import mediumLogo from "../images/medium-logo.png";
import resume from "../images/sean-hetzel-resume-2022.pdf";

export default function Connect() {
  return (
    <div id="connect">
      <ScrollableAnchor id={"about"}>
        <h1 className="page-title centered">About Me</h1>
      </ScrollableAnchor>
      <p className="grey-text" id="my-summary">
        I've always loved building things. I'm the creative type. I'll spend
        days coming up with a clever solution to fix a problem or automate a
        boring task, just so I never have to do it again. I also enjoy building
        things with other people. Few things are more fun than working with a
        group of friends to create something that has yet to exist. I believe
        that function and design are equally important. I'll learn whatever I
        need to learn to achieve the desired result. If I set my mind on
        something, I'll find a way to make it happen. I'm not one to stick to
        tradition or hold on to my pre-conceived notions. I reason by first
        principles. I value an open mind, a positive attitude and new ideas.
        Let's build something incredible and make the world a better place.
      </p>
      <h1 className="page-title centered">Let's Connect</h1>

      <ul className="soc">
        <li>
          <a
            className="icon-28 youtube hov"
            href="https://www.youtube.com/channel/UCnAeHxUezq50j_HcjdJ4LIg"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <div className="ir">
              <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z" />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a
            className="icon-15 instagram hov"
            href="https://www.instagram.com/hetzelsean/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <div className="ir">
              <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" />
                <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" />
                <circle cx="351.5" cy="160.5" r="21.5" />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a
            className="icon-13 github hov"
            href="https://github.com/sean-hetzel"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <div className="ir">
              <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a
            className="icon-17 linkedin hov"
            href="https://www.linkedin.com/in/sean-hetzel-983a94175"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <div className="ir">
              <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a
            className="icon-8 email hov"
            href="mailto:seanhetzel1@gmail.com"
            target="_top"
            rel="noopener noreferrer"
            title="Email"
          >
            <div className="ir">
              <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z" />
              </svg>
            </div>
          </a>
        </li>
        {/* <li>
          <a
            className="icon-8 medium hov"
            href="https://medium.com/@seanhetzel1"
            target="_blank"
            rel="noopener noreferrer"
            title="Medium"
          >
            <div className="ir">
              <img src={mediumLogo} alt="Medium" />
            </div>
          </a>
        </li> */}
      </ul>
      <div className="num-res">
        <h4 className="page-title res-num-info">(425) 408-2068</h4>
        <a href={resume}  target="_blank"
            rel="noopener noreferrer">
          
          <h4
            className="page-title res-num-info hov"
            id="resume"
            title="Resume"
          >
            RESUME{" "}
          </h4>
        </a>
      </div>
    </div>
  );
}
