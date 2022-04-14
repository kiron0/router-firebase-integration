import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <CustomLink to="/home" className='link'>Home</CustomLink>
        <CustomLink to="/login" className='link'>Login</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
