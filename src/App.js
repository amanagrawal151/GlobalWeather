import React, { useState } from 'react'; 
import './App.css' ; 
import 'bootstrap/dist/css/bootstrap.min.css';
const api = {
  key: "50571f88a20f47961d7fa7f392951636",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({}); 
  const [icon, setIcon] = useState('') ;
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result); 
          setQuery('');
          console.log(result);
          if(result.message != null) 
          {
            alert("place not found") ;
          }
          else
          {
            setIcon(result.weather[0].icon) ;
          }
        });
    }
  } 


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(weather.main != null) ? (`app ${weather.weather[0].main}`) : 'app'}>
      <main>
        <div className="search-box mb-5">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(weather.main != null) ? (
        <div className='mt-5'>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
              <img width = "75" height="75" src={`http://openweathermap.org/img/w/${icon}.png`} />
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ( 
          <>
          <div className='container-fluid mt-5'> 
          <div className='row mt-5'> 
          <div className= 'col-12 mt-5'>
          <div className='text-center notfound mt-5'>GLOBAL WEATHER APP</div>  
        </div>
        </div>
        </div>
        </>
        )
        }
      </main>
    </div>
  );
}

export default App;