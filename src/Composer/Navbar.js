import { useEffect } from "react";

const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg" style={{background:'black',color:'white'}}>
      <div className="container-fluid">
        <a className="navbar-brand te" href="#"><b>GIGZONE</b></a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasNavbar" 
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon" style={{color:'white', border:'1px solid white'}}></span>
        </button>

        {/* Offcanvas Sidebar */}
        <div 
          className="offcanvas offcanvas-end bg-dark text-light" 
          tabIndex="-1" 
          id="offcanvasNavbar" 
          aria-labelledby="offcanvasNavbarLabel"
           style={{width:'70%'}}
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
          <div className="offcanvas-body text-light text-left">
            <ul className="navbar-nav text-start mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">How It Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Browse Jobs
                </a>
                <ul className="dropdown-menu border-0">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
