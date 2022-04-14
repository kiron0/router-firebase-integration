import React from "react";
import useFirebase from "../../hooks/useFirebase";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const {user, handleLogout} = useFirebase();
  console.log(user);
  
  return (
    <div className="header">
      <nav>
        <CustomLink to="/home" className="link">
          Home
        </CustomLink>
        <CustomLink to="/products" className="link">
          Products
        </CustomLink>
        <CustomLink to="/orders" className="link">
          Orders
        </CustomLink>
        <CustomLink to="/register" className="link">
          Register
        </CustomLink>
        {user?.email ? (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        ) : (
          <CustomLink className="link" to="/login">
            Login
          </CustomLink>
        )}
        {user?.reloadUserInfo?.photoUrl ? (
              <CustomLink to="/">
                <img
                  src={user?.reloadUserInfo?.photoUrl}
                  alt=""
                  className="profile-pic"
                />
              </CustomLink>
            ) : (
              <span></span>
            )}
      </nav>
    </div>
  );
};

export default Header;
