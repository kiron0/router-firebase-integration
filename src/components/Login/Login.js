import React from "react";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h2>Please Login</h2>
      <form action="">
        <input className="input" type="email" placeholder="Your Email" />
        <br />
        <input className="input" type="password" placeholder="Password" />
        <br />
        <br />
        <input className="btn" type="submit" value="Login" />
      </form>
      <br />
      <button className="google-btn" onClick={signInWithGoogle}>Google Sign In</button>
    </div>
  );
};

export default Login;
