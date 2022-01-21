import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/home/home' ;  
import Navbar from './layouts/navbar/navbar'; 
import Contact from './components/Contact/Contact' ;
import Footer from './layouts/footer/footer';
import About from './components/about/Aboutus';

function App() {
  return (
    <Router>  
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/GlobalWeather' element={<Home />} /> 
        <Route exact path='/Contact' element={<Contact />} /> 
        <Route exact path='/About' element={<About/>} /> 
      </Routes>  
      <Footer />
    </Router>
  );
}

export default App;
