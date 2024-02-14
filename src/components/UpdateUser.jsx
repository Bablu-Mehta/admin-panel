import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modal-slice";
import ModalUI from "../UI/ModalUI";
import classes from "./UpdateUser.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleUser, updatingUser } from "../util/http";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../util/validation";

const UpdateUser = () => {
  const [user, setUser] = useState({});

  const open = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const openModal = () => {
      dispatch(modalActions.openModal());
    };
    openModal();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetchSingleUser(params.id);
    //   console.log(response);
      setUser(response);
    };
    fetchUser();
  }, []);

  const handleCancelUpdate = () => {
    dispatch(modalActions.closeModal());
    navigate("/users");
  };

  const handleUserUpdate = async (data) => {
    // console.log("upadte data", data);
    const response = await updatingUser(params.id, data);
    // console.log("user Updated successfully", response);
    reset();
    dispatch(modalActions.closeModal());
    navigate("/users");
  };

  return (
    <ModalUI isOpen={open} onClose={handleCancelUpdate}>
      <div className={classes.container}>
        <form
          className={classes.form}
          onSubmit={handleSubmit(handleUserUpdate)}
          noValidate
        >
          <div className={classes.inputContainer}>
            <label htmlFor="name">Enter Your Name</label>
            <input defaultValue={user ? user.name : ""} {...register("name")} />
          </div>

          <div className={classes.inputContainer}>
            <label htmlFor="username">Enter Your Username</label>
            <input
              defaultValue={user ? user.username : ""}
              {...register("username")}
            />
          </div>

          <div className={classes.inputContainer}>
            <label htmlFor="email">Enter Your Email</label>
            <input
              defaultValue={user ? user.email : ""}
              {...register("email")}
            />
          </div>
          <div className={classes.buttonContainer}>
            <button type="button" onClick={handleCancelUpdate}>
              Cancel
            </button>
            <button type="submit">Update User</button>
          </div>
        </form>
      </div>
    </ModalUI>
  );
};

export default UpdateUser;
