import React from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <p className="body-text no-margin muted">Last Updated: 1:37PM 7/26/19</p>
      <div className={classes["button-group"]}>
        <Button className="primary header-text">Edit Note</Button>
        <Button className="secondary header-text">Delete Note</Button>
      </div>
    </header>
  );
};

export default Header;
