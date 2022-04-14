import React from "react";
import useFirebase from "../../hooks/useFirebase";
import "./Home.css";

const Home = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h2>This is home</h2>
      <h3>Current User: {user ? user.displayName : "Nobody"}</h3>
    </div>
  );
};

export default Home;
