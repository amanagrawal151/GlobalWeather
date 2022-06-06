import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/home/home' ;  
import Navbar from './layouts/navbar/navbar'; 
import Contact from './components/Contact/Contact' ;
import Footer from './layouts/footer/footer';
import About from './components/about/Aboutus';
import Login from './components/login/login';
import Register from './components/register/register';
import { useNavigate } from 'react-router';

import {
  Switch,

  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/contexts/AuthContext";
import Profile from './components/profile/profile';
import Edit from './components/edit/edit';
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
      </Routes>  
      <Footer />
    </Router>
  );
}

export default App;
