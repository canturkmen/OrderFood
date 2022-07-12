import React from "react";
import classes from "./Header.module.css";

import mealsImage from "../../assets/SabancıÜniversitesiYemekhane.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>SU Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Sabanci University dining hall"/> 
      </div>
    </React.Fragment>
  );
};

export default Header;
