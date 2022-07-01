import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/about.css'

function About() {
  return (
    <>
      <section className="mainn">
        <h1>
          GLOBAL WEATHER APP
        </h1>
        <details>
          <summary>Details</summary>
          <p>
            check weather conditions of any place in the world with one quick search any many more features
          </p>
        </details>
        <details>
          <summary>Features</summary>
          <p>
            Easy to use.
            page will never refresh which makes it faster and smoother.
            compatible on all devices<br/>
            You can search places with its name or zip codes <br/>
            You can search places with its coordinates <br/>
            You can fetch your own location
          </p>
        </details>
        <details>
          <summary>Information
          </summary>
          <p>Global weather app is a react web application made by React Javascript HTML CSS and Bootstrap <br/>
          with backend build on mern stack </p>
        </details>
        <details>
          <summary>Specifications
          </summary>
          <p> React 17.0.2 <br /> Bootstrap 5.1 <br /> emailjs 3.4.0 <br /> openweathermap 3.0 </p>
        </details>
      </section>

    </>
  )
}
export default About