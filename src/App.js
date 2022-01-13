import { useState } from "react";
import Education from "./Education";
import "./styles.css";

export default function App() {
  useState;

  const [education, seteducation] = useState(true);
  const [workhistory, setworkhistory] = useState(false);
  const [programmings, setprogrammings] = useState(false);
  const [projects, setprojects] = useState(false);

  return (
    <div className="App">
      <div className="herosection px-10 py-5">
        <nav className="d-flex flex-row justify-content-between">
          <span className="brand-name"> DGH STUDIOS </span>
          <div className="d-flex flex-row">
            <span className="mx-4 nav-items">Home</span>
            <span className="mx-4 nav-items">About me</span>
            <span className="mx-4 nav-items">Resume</span>
            <span className="mx-4 nav-items">Testimonial</span>
            <span className="mx-4 nav-items">Contact me</span>
          </div>
        </nav>
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section"></div>
            <span className="Im-text">
              Hello, I'm <span className="name-Im-text">Derick Hooley</span>
            </span>
            <span className="Im-text-enthusiastic py-2">
              {" "}
              an enthusiastic,{" "}
            </span>
            <span className="Im-text-subheading">junior web developer</span>
            <div className="d-flex flex-row justify-content-center mt-5">
              <button className="btn-hire-me">Hire me</button>
              <button className="btn-hire-me">Get Resume</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center Anim">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="https://res.cloudinary.com/dx5ybevyx/image/upload/v1642044048/IMG_6026_g0hziy.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text"> About me </span>
          <span className="why-text-sub"> Why hire me? </span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_qrqpmvph.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                Full stack web developer with a background in graphic design and
                most recently, training and certification in MERN Stack, CRUD
                operations, and agile development.
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are a few highlights:</span>
                <span className="few-list">
                  <ul>
                    <li> Full Stack web and mobile web development </li>
                    <li> HTML5, CSS, Javascript, JSON </li>
                    <li> Node JS, Express, MongoDB, REACT </li>
                    <li> Adherence to preferred design methodologies </li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-outer-section d-flex flex-column">
        <span className="about-me-text"> Resume </span>
        <span className="why-text-sub"> My Bio Details </span>

        <div className="resume-new-section row">
          <div
            className="col-lg-4 col-md-4 resume-left-section d-flex flex-row"
            style={{ width: "70%", marginInLine: "auto" }}
          >
            <div className="d-flex flex-column bg-new text-dark">
              <span class="icons-span">
                <i class="fas fa-graduation-cap"></i>
                {""}
              </span>
              <span class="icons-span">
                <i class="fas fa-briefcase"></i>
                {""}
              </span>
              <span class="icons-span">
                <i class="far fa-file-code"></i>
                {""}
              </span>
              <span class="icons-span">
                <i class="fas fa-project-diagram"></i>
                {""}
              </span>
            </div>

            <div className="d-flex flex-column">
              <span className="resume-options-items"> Education </span>
              <span className="resume-options-items"> Work </span>
              <span className="resume-options-items"> Programming </span>
              <span className="resume-options-items"> Projects </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right-section">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programmings === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>
    </div>
  );
}
