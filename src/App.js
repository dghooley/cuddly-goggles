import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="heroSection py-5">
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
      </div>
    </div>
  );
}
