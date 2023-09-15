import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import { Link } from "react-router-dom";

function Register() {
  const [inputs, setInputs] = useState({
    name: "",
    contact: "",
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
        `https://sahil-goliwar-handson4-server.onrender.com/api/register`,
        inputs
      )
      .then((res) => {
        console.log(res.data);
        setServerRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="auth-container">
      <div className="intro-text">
        <h1>Hello There!!!</h1>
        <h1>Already Have an account?</h1>
        <Link to="/Login">Then click here to Login</Link>
      </div>
      <form className="formContainer">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={changeHandle}
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label htmlFor="contact">Phone No.</label>
          <input
            type="number"
            name="contact"
            id="contact"
            onChange={changeHandle}
            placeholder="Enter Contact Number"
          />
        </div>
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
          Register
        </button>
        {serverRes === undefined ? "" : <div>{serverRes.msg}</div>}
      </form>
    </div>
  );
}

export default Register;
