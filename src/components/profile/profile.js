import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { dateBuilder } from '../home/home';
const api = {
    key: "50571f88a20f47961d7fa7f392951636",
    base: "https://api.openweathermap.org/data/2.5/"
  }
const Profile = () => {
    const { user } = useContext(AuthContext);
    const [weather, setWeather] = useState({});
    useEffect(() => {
        console.log(user); 
        fetch(`${api.base}weather?q=${user.city}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
        //   setQuery('');
          console.log(result);
        })
        .catch(err => console.log(err)) ;
    },[])
    return (
        <>
            <div className='container' >
                <div className='row'>
                    <div className='col-4 col-md-4'>
                        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
                            <div class="card p-4">
                                <div class=" image d-flex flex-column justify-content-center align-items-center">
                                    <button class="btn btn-secondary">
                                        <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" />
                                    </button> <span class="name mt-3">{user.username}</span>
                                    <span class="idd">{user.email}</span>
                                    <div class="d-flex flex-row justify-content-center align-items-center gap-2">
                                        <span class="idd1"></span> <span><i class="fa fa-copy"></i></span>
                                    </div> <div class="d-flex flex-row justify-content-center align-items-center mt-3">
                                        <span class="number"> <span class="follow"></span></span> </div>
                                    <div class=" d-flex mt-2"> <Link to="/edit"> <button class="btn1 btn-dark">Edit Profile</button> </Link>
                                    </div>
                                    <div class="text mt-3">
                                        <div>heya this is a user from GlobalWeather nice to meet you</div>
                                        <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                                            <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span>
                                            <span><i class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span>
                                        </div> <div class=" px-2 rounded mt-4 date "> <span class="join">Joined May,2021</span>
                                        </div> </div> </div>
                            </div>
                        </div>
                    </div>
                    {/* main begins */}
                    {weather.main ?  
                    <div className='col-8'>
                        <div class="container-fluid px-1 px-sm-3 py-5 m-5 bg-white border rounded">
                            <div class="row d-flex justify-content-center">
                                <div class="row card0">
                                    <div class="card1 col-lg-8 col-md-7">
                                        {/* <small>the.weather</small> */}
                                        <div class="text-center">
                                            <img class="image mt-5" src="https://i.imgur.com/M8VyA2h.png" />
                                        </div>
                                        <div class="row px-3 mt-3 mb-3">
                                            <h1 class="large-font mr-3">{weather.main.temp}&#176;</h1>
                                            <div class="d-flex flex-column mr-3">
                                                <h2 class="mt-3 mb-0">{user.city}</h2>
                                                <small>{dateBuilder(new Date())}</small>
                                            </div>
                                            <div class="d-flex flex-column text-center">
                                                <h3 class="fa fa-sun-o mt-4"></h3>
                                                <small>{weather.weather[0].description}</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card2 col-lg-4 col-md-5 mt-5">

                                        <div class="mr-5">
                                            <p class="light-text suggestion">MAXIMUM TEMPERATURE : {weather.main.temp + 5}</p>
                                            <p class="light-text suggestion">MINIMUM TEMPERATURE : {weather.main.temp - 5}</p>
                                            <p class="light-text suggestion">New York</p>
                                            <p class="light-text suggestion">California</p>

                                            <div class="line my-5"></div>

                                            <p>Weather Details</p>
                                            <div class="row px-3">
                                                <p class="light-text">Humidity</p>
                                                <p class="ml-auto">{weather.main.humidity}%</p>
                                            </div>
                                            <div class="row px-3">
                                                <p class="light-text">Pressure</p>
                                                <p class="ml-auto">{weather.main.pressure}</p>
                                            </div>
                                            <div class="row px-3">
                                                <p class="light-text">Wind Speed</p>
                                                <p class="ml-auto">{weather.wind.speed}</p>
                                            </div>
                                            {/* <div class="row px-3">
                                                <p class="light-text">Rain</p>
                                                <p class="ml-auto">0mm</p>
                                            </div> */}

                                            <div class="line mt-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <></> }
                    
                </div>
            </div>
            </>
    )
}

export default Profile