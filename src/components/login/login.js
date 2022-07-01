import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
// import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">GlobalWeather</h3>
          <span className="loginDesc">
            all about weather anywhere from globe
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                  <></>
              ) : (
                "Log In"
              )}
            </button>
            {/* <span className="loginForgot">Forgot Password?</span> */}
            <Link to="/register" >
            <button className="loginRegisterButton">
              {isFetching ? (
                <></>
              ) : (
                "Create a New Account"
              )}
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}