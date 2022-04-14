import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <h2>Please Login</h2>
      <form action="">
        <input className="input" type="email" placeholder="Your Email" /><br />
        <input className="input" type="password" placeholder="Password" /><br /><br />
        <input className="btn" type="submit" value="Login" />
      </form><br />
      <button>Google Sign In</button>
    </div>
  );
};

export default Login;
