import React from "react";
import useFirebase from "../../hooks/useFirebase";
import "./Products.css";

const Products = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h2>Knock knock ! who is there</h2>
      <h5>{user ? user.displayName : 'vooooooooooot'}</h5>
    </div>
  );
};

export default Products;
