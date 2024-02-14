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
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const openModal = () => {
  //     dispatch(modalActions.openModal());
  //   };
  //   openModal();
  // }, []);

  // const handleCloseModal = () => {
  //   dispatch(modalActions.closeModal());
  //   // return redirect("..");
  // };

  const handleFormSubmission = (data) => {
    // event.preventDefault();
    // console.log("Form submitted successfully", event);
    // dispatch(modalActions.closeModal());
    console.log(data);
    // return redirect("/users");
  };

  return (
    // <ModalUI isOpen={open} onClose={close}>
    //   <Stack>
    //     <Button variant="contained" onClick={handleSubmit}>
    //       close
    //     </Button>
    //   </Stack>
    //   {/* <button>close</button>   */}
    // </ModalUI>

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
          <button type="button">Cancel</button>
          <button type="submit">Submit Form</button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
