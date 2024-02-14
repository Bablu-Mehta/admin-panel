import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import classes from "./Auth.module.css";
import { useForm } from "react-hook-form";

const Auth = () => {
  const localStorgeValue = localStorage.getItem("admin");
  // console.log("localStorgeValue", localStorgeValue);
  const initialValue = localStorgeValue ? localStorgeValue : "";
  // console.log("initialValue", initialValue);
  const [admin, setAdmin] = useState(initialValue);
  // const auth = useSelector((state) => state.auth.isAuth);
  const authAdmin = useSelector((state) => state.auth.admin);
  const dispatch = useDispatch();

  const { reset } = useForm({});

  useEffect(() => {
    if (admin === authAdmin) {
      dispatch(authActions.login(admin));
    }
  }, []);

  const handleLogin = (e) => {
    // console.log("form data", data.email);
    e.preventDefault();
    // console.log("admin state", admin);
    dispatch(authActions.login(admin));
    // console.log("auth", auth);
    // console.log("auth", admin);
    if (authAdmin === admin) {
      localStorage.setItem("admin", admin);
      console.log("local storage is set");
    }
    reset();
  };
  return (
    <div className={classes.container}>
      <h3>Welcome to Admin Panel</h3>
      <p>Please Login</p>
      <form
        className={classes.form}
        onSubmit={handleLogin}
        // noValidate
      >
        <div className={classes.inputContainer}>
          <label htmlFor="email">Enter Your Email</label>
          <input
            type="email"
            onChange={(e) => {
              setAdmin(e.target.value);
            }}
          />
        </div>

        <button className={classes.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
