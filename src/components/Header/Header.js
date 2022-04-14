import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <CustomLink to="/home" className='link'>Home</CustomLink>
        <CustomLink to="/products" className='link'>Products</CustomLink>
        <CustomLink to="/orders" className='link'>Orders</CustomLink>
        <CustomLink to="/register" className='link'>Register</CustomLink>
        <CustomLink to="/login" className='link'>Login</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
