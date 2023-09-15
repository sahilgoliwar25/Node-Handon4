import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Form.css";

function Login() {
  const navi = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [serverRes, setServerRes] = useState();
  const changeHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(inputs);
    //axios.post("url",inputs) to send the data to the backend server
    axios
      .post(
        `https://sahil-goliwar-handson4-server.onrender.com/api/login`,
        inputs
      )
      .then((res) => {
        console.log(res.data);
        setServerRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // if (serverRes.msg === "User is LoggedIn successfully") {
    //   navi("/dashboard");
    // }
  };
  useEffect(() => {
    if (serverRes) {
      localStorage.setItem("token", serverRes.token);
      if (serverRes.msg === "User is LoggedIn successfully") {
        return () => {
          navi("/dashboard");
        };
      }
    }
  }, [serverRes, navi]);

  return (
    <div className="auth-container">
      <form className="formContainer">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={changeHandle}
            placeholder="Enter Email Id"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={changeHandle}
            placeholder="Enter Password"
          />
        </div>
        <button className="btn-submit" onClick={submitHandle}>
          Login
        </button>
        {serverRes === undefined ? "" : <div>{serverRes.msg}</div>}
      </form>
      <div className="intro-text">
        <h1>Hey, Welcome to our Website!!!</h1>
        <h1>You haven't registered yet</h1>
        <Link to="/register">Click here to Register</Link>
      </div>
    </div>
  );
}

export default Login;
