import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/home/home' ;  
import Navbar from './layouts/navbar/navbar'; 
import Contact from './components/Contact/Contact' ;
import Footer from './layouts/footer/footer';
import About from './components/about/Aboutus';
import Login from './components/login/login';
import Register from './components/register/register';
// import Coordinates from './components/home/latitude';
import { useNavigate } from 'react-router';
// import Geolocation from './components/geolocation/geolocation';
import {
  Switch,

  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/contexts/AuthContext";
import Profile from './components/profile/profile';
import Edit from './components/edit/edit';
import Coordinates from './components/home/latitude';
import Mylocation from './components/home/mylocation';
function App() {
  const { user } = useContext(AuthContext);
    return (
    <Router>  
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/GlobalWeather' element={<Home />} /> 
        <Route exact path='/Contact' element={<Contact />} /> 
        <Route exact path='/About' element={<About/>} /> 
        <Route path="/login" element={user ? <Navigate replace to="/GlobalWeather" /> : <Login />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate replace to="/login"/>}  />
        <Route exact path='register' element={<Register />} />
        <Route path = '/coordinates' element={<Coordinates/>} />
        <Route path = '/mylocation' element={<Mylocation />} />
        {/* <Route path ="/location" element={<Geolocation/>} /> */}
      </Routes>  
      <Footer />
    </Router>
  );
}

export default App;
