import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { dateBuilder } from '../home/home';
import { format } from "timeago.js";
import styles from "./profile.module.css";
const api = {
    key: "583bd670f771042fc9312c20036e8435",
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
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <div className='container' >
                <div className='row'>
                    <div className='col-12 col-lg-4'>
                        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                            <div className={`${styles.card} card p-4`}>
                                <div className=" image d-flex flex-column justify-content-center align-items-center">
                                    <button className="btn btn-secondary">
                                        <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" />
                                    </button> <span className="name mt-3">{user.username}</span>
                                    <span className="idd">{user.email}</span>
                                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                                        <span className="idd1"></span> <span><i className="fa fa-copy"></i></span>
                                    </div> <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                                        <span className="number"> <span className="follow"></span></span> </div>
                                    <div className=" d-flex mt-2"> <Link to="/edit"> <button className="btn1 btn-dark border rounded-3 p-2">Edit Profile</button> </Link>
                                    </div>
                                    <div className="text mt-3">
                                        <div className="text-muted text-center">heyaa this is a user from GlobalWeather nice to meet you</div>
                                        <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                                            <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span>
                                            <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span>
                                        </div> <div className=" px-2 rounded mt-4 date text-muted justify-right text-right" > <span className="join">Joined {format(user.createdAt)}</span>
                                        </div> </div> </div>
                            </div>
                        </div>
                    </div>
                    {/* main begins */}
                    {
                        weather.main ?
                            <>
                                <div className='col-12 col-md-12 col-lg-8' >
                                    <div className={styles.container}>
                                        <div className={styles.widget}>
                                            <div className={styles.details}>
                                                <div className={styles.temperature}>{weather.main.temp}°</div>
                                                <div className={styles.summary}>
                                                    <p className={styles.summarText}>{user.city} : {weather.weather[0].description}</p>
                                                </div>
                                                <div className={styles.precipitation}>Precipitation: {weather.main.humidity}%</div>
                                                <div className={styles.wind}>Wind: {weather.wind.speed} mph</div>
                                            </div>
                                            <span className=' d-lg-block d-none'>
                                                <div className={`${styles.pictoBackdrop}	.d-none `}></div>
                                                <div className={`${styles.pictoFrame}	.d-none `}></div>
                                                <div className={`${styles.pictoCloudBig}	.d-none `}></div>
                                                <div className={`${styles.pictoCloudFill}	.d-none `}></div>
                                                <div className={`${styles.pictoCloudSmall}	.d-none `}></div>
                                                <div className={`${styles.iconCloudBig}	.d-none `}></div>
                                                <div className={`${styles.iconCloudFill}	.d-none `}></div>
                                                <div className={`${styles.iconCloudSmall}	.d-none `}></div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <>
        
                            </>}

                </div>
            </div>
        </>
    )
}

export default Profile



// old weather card 

{/* <div className='col-8'>
                        <div className="container-fluid px-1 px-sm-3 py-5 m-5 bg-white border rounded">
                            <div className="row d-flex justify-content-center">
                                <div className="row card0">
                                    <div className="card1 col-lg-8 col-md-7">
                                        <small>the.weather</small>
                                        <div className="text-center">
                                            <img className={`${styles.image} mt-5`} src="https://i.imgur.com/M8VyA2h.png" />
                                        </div>
                                        <div className="row px-3 mt-3 mb-3">
                                            <h1 className="large-font mr-3">{weather.main.temp}&#176;</h1>
                                            <div className="d-flex flex-column mr-3">
                                                <h2 className="mt-3 mb-0">{user.city}</h2>
                                                <small>{dateBuilder(new Date())}</small>
                                            </div>
                                            <div className="d-flex flex-column text-center">
                                                <h3 className="fa fa-sun-o mt-4"></h3>
                                                <small>{weather.weather[0].description}</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card2 col-lg-4 col-md-5 mt-5">

                                        <div className="mr-5">
                                            <p className="light-text suggestion">MAXIMUM TEMPERATURE : {weather.main.temp + 5}</p>
                                            <p className="light-text suggestion">MINIMUM TEMPERATURE : {weather.main.temp - 5}</p>
                                            <p className="light-text suggestion">nice weather</p>
                                            <p className="light-text suggestion">today</p>

                                            <div className="line my-5"></div>

                                            <p>Weather Details</p>
                                            <div className="row px-3">
                                                <p className="light-text">Humidity</p>
                                                <p className="ml-auto">{weather.main.humidity}%</p>
                                            </div>
                                            <div className="row px-3">
                                                <p className="light-text">Pressure</p>
                                                <p className="ml-auto">{weather.main.pressure}</p>
                                            </div>
                                            <div className="row px-3">
                                                <p className="light-text">Wind Speed</p>
                                                <p className="ml-auto">{weather.wind.speed}</p>
                                            </div>
                                            <div className="row px-3">
                                                <p className="light-text">Rain</p>
                                                <p className="ml-auto">0mm</p>
                                            </div>

                                            <div className="line mt-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}