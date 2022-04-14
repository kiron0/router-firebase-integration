import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth)
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
      <button className="google-btn" onClick={handleGoogleSignIn}>
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
