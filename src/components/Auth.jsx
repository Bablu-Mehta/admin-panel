import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import classes from "./Auth.module.css";

const Auth = () => {
  const [admin, setAdmin] = useState();
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(authActions.login(admin));
  };
  return (
    <div className={classes.container}>
      <h3>Welcome to Admin Panel</h3>
      <p>Please Login</p>
      <input
        placeholder="enter email"
        onChange={(e) => setAdmin(e.target.value)}
      />
      <button onClick={handleLogin}>Submit</button>
    </div>
  );
};

export default Auth;
