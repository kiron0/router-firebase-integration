import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLink from "../CustomLink/CustomLink";
import { auth } from "../Firebase/Firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

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
        {user && (
          <>
            <CustomLink to="/vip" className="link">VIP</CustomLink>
          </>
        )}
        {user?.email ? (
          <button onClick={() => signOut(auth)} className="logout-button">
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
