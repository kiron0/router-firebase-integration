import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Firebase.init";
import "./Products.css";

const Products = () => {
  const [user] = useAuthState(auth); 
  return (
    <div>
      <h2>Knock knock ! who is there</h2>
      <h3>{user ? user.displayName : 'vooooooooooot'}</h3>
    </div>
  );
};

export default Products;
