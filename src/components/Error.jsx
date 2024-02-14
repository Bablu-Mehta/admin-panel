import React from "react";
import classes from "./Error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={classes.container}>
      <h1>Error 404</h1>
      <p>The URL You are trying to visit doesn't Exist!</p>
      <Link to="/">
        <button className={classes.button} variant="outlined">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
