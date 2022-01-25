import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../layouts/footer/footer';
const api = {
  key: "50571f88a20f47961d7fa7f392951636",
  base: "https://api.openweathermap.org/data/2.5/"
}
function Home() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [icon, setIcon] = useState('');
  const [loading, setLoading] = useState(true);
  const empty = () => toast("Please type something in the search bar"); 
  const errorfound = () => toast("Place not found you can try the zip codes");
  const search = (e) => {
    if (e.key === "Enter") {
      setLoading(false);
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
          if (result.message === 'Nothing to geocode') {
            empty() ;
          }
          else if (result.message === 'city not found') {
            errorfound() ;
          }
          else {
            setIcon(result.weather[0].icon);
          }
          setLoading(true);
        });
    }
  } 

  const search2 = () => {
    setLoading(false);
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
          if (result.message === 'Nothing to geocode') {
            empty() ;
          }
          else if (result.message === 'city not found') {
            errorfound() ;
          }
          else {
            setIcon(result.weather[0].icon);
          }
          setLoading(true);
        });
    }


  const next = (e) => {
    const pages = document.querySelectorAll(".infor");
    console.log(pages);
    pages[0].classList.add("hide");
    pages[1].classList.remove("hide");
  }

  const prev = (e) => {
    const pages = document.querySelectorAll(".infor");
    console.log(pages);
    pages[1].classList.add("hide");
    pages[0].classList.remove("hide");
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
    <>
    <ToastContainer position='top-center' />
    <div className={(weather.main != null) ? (`app ${weather.weather[0].main}`) : 'app'}>
      <main> 
        <div className='container'> 
        <div className='row'>
          <div className='col-sm-10 col-8'>
        <div className="search-box mb-5">
          <input
            type="text"
            className="search-bar text-muted"
            placeholder="Find Place..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div> 
        </div> 
        <div className='col-sm-2 col-4'><button type="button" class="btn btn-outline-dark rounded-pill searchbutton mt-1 px-4" onClick={search2}>Search</button></div>
        </div>
        </div>
        {(weather.main != null) ? (
          (loading === true) ? (
            // information card begin 
            <>
              <div className='mt-5 infor vis' onAnimationEnd={next}>
                <div className="location-box">
                  <div className="location">{weather.name}, {weather.sys.country}</div>
                  <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                  <div className="temp">
                    {Math.round(weather.main.temp)}°C
                    <div className='ms-5'>
                    <img width="90" height="90" src={`http://openweathermap.org/img/w/${icon}.png`} />
                    </div>
                  </div>
                  <div className="weather">{weather.weather[0].main}</div>
                </div>
                <button class="carousel-control-prev" type="button" onClick={next} data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button onClick={next} class="carousel-control-next" type="button"><span className="carousel-control-next-icon" height="200%" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span></button>
              </div>
              {/* // information card end  */}
              <div className=' temp infor hide vis mt-5 pt-5' onAnimationEnd={prev}>
                <div className='d-flex justify-content-center text-start fs-4 fw-5' >
                  <p className='border-0 p-2 p-sm-4 rounder-3 para'>
                    pressure: {weather.main.pressure}mb<br />
                    humidity: {weather.main.humidity}%<br />
                    wind speed : {weather.wind.speed}m/s <br />
                    max temperature : {Math.floor(weather.main.temp_max + 5)}°C
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                    </svg> <br />
                    min temperature : {Math.floor(weather.main.temp_min - 5)}°C&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </p>
                </div>
                <button class="carousel-control-prev" type="button" onClick={prev} data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button onClick={prev} class="carousel-control-next" type="button"><span className="carousel-control-next-icon" height="200%" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span></button>

              </div>
            </>
          ) : (
            <>
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            </>
          )
        ) : (
          <>
            <div className='container-fluid mt-5'>
              <div className='row mt-5'>
                <div className='col-12 mt-5'>
                  <div className='text-center notfound mt-5'>GLOBAL WEATHER APP</div>
                </div>
              </div>
            </div>
          </>
        )
        }
      </main> 
    </div>
    </>
  );
}

export default Home;