import React, { useEffect } from "react";
import ModalUI from "../UI/ModalUI";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/base";
import { modalActions } from "../store/modal-slice";
// import { redirect } from "react-router-dom";
import { Stack } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../util/validation";

import classes from "./CreateUser.module.css";

const CreateUser = () => {
  const open = useSelector((state) => state.modal.isOpen);
  const close = useSelector((state) => state.modal.isClose);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const openModal = () => {
      dispatch(modalActions.openModal());
    };
    openModal();
  }, []);

  const handleCancelSubmission = () => {
    dispatch(modalActions.closeModal());
  };

  const handleFormSubmission = (data) => {
    console.log(data);
    reset();
    dispatch(modalActions.closeModal());
  };

  return (
    <ModalUI isOpen={open} onClose={handleCancelSubmission}>
      <div className={classes.container}>
        <form
          className={classes.form}
          onSubmit={handleSubmit(handleFormSubmission)}
          noValidate
        >
          <div className={classes.inputContainer}>
            <label htmlFor="name">Enter Your Name</label>
            <input type="text" {...register("name")} />
          </div>

          <div className={classes.inputContainer}>
            <label htmlFor="username">Enter Your Username</label>
            <input type="text" name="name" {...register("username")} />
          </div>

          <div className={classes.inputContainer}>
            <label htmlFor="email">Enter Your Email</label>
            <input type="text" name="email" {...register("email")} />
          </div>
          <div className={classes.buttonContainer}>
            <button type="button" onClick={handleCancelSubmission}>
              Cancel
            </button>
            <button type="submit">Submit Form</button>
          </div>
        </form>
      </div>
    </ModalUI>
  );
};

export default CreateUser;
