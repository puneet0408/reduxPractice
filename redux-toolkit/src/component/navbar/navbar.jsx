import { AiOutlineArrowDown } from "react-icons/ai";
import React from "react";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {

  const name = useSelector(state => state.user.userInfo.name);

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">Redux App</span>
          <span className="navbarLink">Home</span>
          <span className="navbarLink">About</span>
          <span className="navbarLink">Contact</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              style={{ width: "100%", height: "100%", border: "none", overflow: "" }}
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <img
            className="avatar"
            src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <span className="navbarName">{name}</span>
          <AiOutlineArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;