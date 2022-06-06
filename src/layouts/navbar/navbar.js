import React from "react"; 
import { useEffect , useState } from "react";
import 'bootstrap/dist/js/bootstrap.min.js'  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link , useNavigate  } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../components/contexts/AuthContext";


 function Navbar() { 
  const { user,logout } = useContext(AuthContext);
  const [cuser , setCuser] = useState(user)
  useEffect(() => {
      console.log(cuser)
  },[])
  // useEffect(() => {
  //     console.log({logout}) ;
  // })
  const Navigate = useNavigate() ;
  const handle2 = () => {
      Navigate("/login") 
  }
  
  const handle = async () => {
      const res = await logout()
      setCuser({}) ; 
      console.log("logged out")
      await window.location.reload()
      Navigate('/login')
      
  }
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
        {
        user ? 
        <li className="nav-item" onClick={handle}>
          <Link className="nav-link" to="/">logout</Link>
          {/* // <button onClick={handle}  >
        // logout
        // </button> */}
        </li>
         :
        <li className="nav-item" onClick={handle2}>
          <Link className="nav-link" to="/login">login</Link>{/* <button onClick={handle2}  >
          login
        </button>*/}</li>
          
        }
        <li className="nav-item">
        <Link className="nav-link" to="/profile">profile</Link>
        </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    ) ;
} 

export default Navbar