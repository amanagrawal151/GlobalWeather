import React from "react"; 
import 'bootstrap/dist/js/bootstrap.min.js'  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
 function Navbar() { 
    return (
        <nav className="shadow navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand ms-5" to="/GlobalWeather">GLOBAL WEATHER APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarSupportedContent"> 
    <div>
      <ul className="navbar-nav me-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/GlobalWeather">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact us</Link>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
    ) ;
} 

export default Navbar