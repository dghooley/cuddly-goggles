import "./styles.css";

export default function App() {
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
            <span className="Im=-text">
              Hello, I'm <span className="name-Im-text">Derick Hooley</span>
            </span>
            <span className="Im-text-enthusiastic py-2">enthusiastic dev </span>
            <span className="Im-text-subheading">junior web developer</span>
            <div className="d-flex flex-row justify-content-center mt-5">
              <button className="btn-hire-me">Hire me</button>
              <button className="btn-hire-me">Get Resume</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12"> </div>
        </div>
        <div className="d-flex justify-content-center custom-div-outer-img">
          <img
            className="img-fluid"
            alt="heroimage"
            src="https://res.cloudinary.com/dx5ybevyx/image/upload/c_scale,h_204,q_100,r_29/a_0/v1641966264/IMG_3117_tdftfw.gif"
          />
        </div>
      </div>
    </div>
  );
}
