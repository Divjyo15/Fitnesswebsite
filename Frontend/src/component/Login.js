/*
import React, { useState, useContext } from 'react';
import { StoreContextapi } from "../services/ContextApi.js";
import axios from 'axios';
import "./Login.css";

const Login = ({ closeLogin }) => {
  const { url, setToken } = useContext(StoreContextapi);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage({ text: "", type: "" });
    setIsLoading(true);
    const endpoint = currState === "Login" ? "/user/login" : "/user/register";
    const newUrl = `${url}${endpoint}`;

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        if (currState === "Login") {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          closeLogin();  // Close modal on successful login
        } else {
          setMessage({ text: "Account created successfully! You can now log in.", type: "success" });
          setCurrState("Login");
        }
      } else {
        setMessage({ text: response.data.message || "An error occurred.", type: "error" });
      }
    } catch (error) {
      setMessage({ text: error.response?.data?.message || "An error occurred.", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='login-popup'>
      <div className="login-popup__container">
        <div className="login-popup__title">
          <h2>{currState}</h2>
          <button onClick={closeLogin} className="close-button">X</button>
        </div>
        {message.text && <div className={`message ${message.type}`}>{message.text}</div>}
        <form onSubmit={onSubmit}>
          {currState === "Sign Up" && (
            <input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Your Name' required />
          )}
          <input name='email' type="email" onChange={onChangeHandler} value={data.email} placeholder="Your Email" required />
          <input name='password' type='password' onChange={onChangeHandler} value={data.password} placeholder='Your Password' required />
          <button type='submit' disabled={isLoading}>
            {isLoading ? "Processing..." : (currState === "Sign Up" ? "Create Account" : "Login")}
          </button>
        </form>
        <div className='login-popup-condition'>
          <input type='checkbox' required id="terms-checkbox" />
          <label htmlFor="terms-checkbox">By continuing, I agree to the terms of use & privacy policy.</label>
        </div>
        {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>}
      </div>
    </div>
  );
};

export default Login;*/
import React, { useState, useContext } from 'react';
import { StoreContextapi } from "../services/ContextApi.js";
import axios from 'axios';
import "./Login.css";

const Login = ({ closeLogin }) => {
  const { url, setToken } = useContext(StoreContextapi);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!acceptTerms) {
      setMessage({ text: "Please accept the terms and conditions", type: "error" });
      return;
    }

    setMessage({ text: "", type: "" });
    setIsLoading(true);
    const endpoint = currState === "Login" ? "/user/login" : "/user/register";
    const newUrl = `${url}${endpoint}`;

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        if (currState === "Login") {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          closeLogin();
        } else {
          setMessage({ text: "Account created successfully! You can now log in.", type: "success" });
          setCurrState("Login");
          setData({ name: "", email: "", password: "" });
        }
      } else {
        setMessage({ text: response.data.message || "An error occurred.", type: "error" });
      }
    } catch (error) {
      setMessage({ 
        text: error.response?.data?.message || "An error occurred while processing your request.", 
        type: "error" 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleState = () => {
    setCurrState(currState === "Login" ? "Sign Up" : "Login");
    setMessage({ text: "", type: "" });
    setData({ name: "", email: "", password: "" });
  };

  return (
    <div className='login-popup' onClick={(e) => e.target.className === 'login-popup' && closeLogin()}>
      <div className="login-popup__container">
        <div className="login-popup__title">
          <h2>{currState}</h2>
          <button onClick={closeLogin} className="close-button">&times;</button>
        </div>

        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={onSubmit}>
          {currState === "Sign Up" && (
            <input
              name='name'
              type='text'
              placeholder='Your Name'
              value={data.name}
              onChange={onChangeHandler}
              required
            />
          )}
          <input
            name='email'
            type='email'
            placeholder='Your Email'
            value={data.email}
            onChange={onChangeHandler}
            required
          />
          <input
            name='password'
            type='password'
            placeholder='Your Password'
            value={data.password}
            onChange={onChangeHandler}
            required
          />
          
          <div className='login-popup-condition'>
            <input
              type='checkbox'
              id="terms-checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />
            <label htmlFor="terms-checkbox">
              By continuing, I agree to the terms of use & privacy policy.
            </label>
          </div>

          <button type='submit' disabled={isLoading || !acceptTerms}>
            {isLoading ? (
              "Processing..."
            ) : currState === "Sign Up" ? (
              "Create Account"
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p>
          {currState === "Login" ? (
            <>Don't have an account? <span onClick={toggleState}>Sign up</span></>
          ) : (
            <>Already have an account? <span onClick={toggleState}>Login</span></>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;