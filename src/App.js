import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/home/home' ;  
import Navbar from './layouts/navbar/navbar'; 
import About from './components/About/About' ;

function App() {
  return (
    <Router>  
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/GlobalWeather' element={<Home />} /> 
        <Route exact path='/Contact' element={<About />} />
      </Routes> 
    </Router>
  );
}

export default App;
