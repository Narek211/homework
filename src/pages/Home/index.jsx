import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "../Login/Login.module.scss";

const getActiveClassName = ({ isActive }) => {
  if (isActive) {
    return styles.active;
  }
  return "";
};

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <NavLink onClick={() => localStorage.setItem("token", false)} className={getActiveClassName} to="/login">
          Log out
        </NavLink>
      </div>
    );
  }
}

export default Home;
