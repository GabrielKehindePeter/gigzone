import { useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg" style={{background:'black',color:'white'}}>
      <div className="container-fluid">
        <Link className="navbar-brand te" to="#"><b>GIGZONE</b></Link>
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
                <Link className="nav-link activeMenu" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">How It Works</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Contact Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Browse Jobs
                </Link>
                <ul className="dropdown-menu border-0">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
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
