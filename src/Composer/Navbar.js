import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg" style={{ background: "black", color: "white" }}>
      <div className="container-fluid">
        <h2><Link className="navbar-brand" to="/"><b>GIGZONE</b></Link></h2>
        
        {/* Toggler for Mobile Offcanvas */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon" style={{ color: "white", border: "1px solid white" }}></span>
        </button>

        {/* Normal Navbar for Desktop */}
        <div className="collapse navbar-collapse d-none d-lg-flex">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link activeMenu" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/howitworks">How It Works</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">Browse Jobs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Offcanvas for Mobile Screens */}
<div
  className="offcanvas offcanvas-end text-light d-lg-none"
  tabIndex="-1"
  id="offcanvasNavbar"
  aria-labelledby="offcanvasNavbarLabel"
  style={{ width: "70%", background:'black'}}
>
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><b>GIGZONE</b></h5>
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>
  <div className="offcanvas-body text-start">
    <ul className="navbar-nav ms-3">
      <li className="nav-item">
        <Link className="nav-link activeMenu" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/howitworks">How It Works</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/jobs">Browse Jobs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact Us</Link>
      </li>
    </ul>
  </div>
</div>


      </div>
    </nav>
  );
};

export default Navbar;
