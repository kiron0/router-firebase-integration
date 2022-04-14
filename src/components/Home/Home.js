import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Firebase.init";
import "./Home.css";

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>This is home</h2>
      <h3>Current user is: {user ? user.displayName : "No body"}</h3>
    </div>
  );
};

export default Home;
