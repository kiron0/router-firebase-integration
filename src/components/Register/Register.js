import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <h2>Please Register</h2>
      <form action="">
        <input className="input" type="text" placeholder="Your Name" /><br />
        <input className="input" type="email" placeholder="Your Email" /><br />
        <input className="input" type="password" placeholder="Password" /><br />
        <input className="btn" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
