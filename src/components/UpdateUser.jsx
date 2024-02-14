import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modal-slice";
import ModalUI from "../UI/ModalUI";
import classes from "./UpdateUser.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleUser } from "../util/http";

const UpdateUser = () => {
  const [user, setUser] = useState({});

  const open = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const openModal = () => {
      dispatch(modalActions.openModal());
    };
    openModal();
    console.log(params.id);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetchSingleUser(params.id);
      console.log(response);
      setUser(response);
    };
    fetchUser();
  }, []);

  const handleCancelUpdate = () => {
    dispatch(modalActions.closeModal());
    navigate("/users");
  };

  return (
    <ModalUI isOpen={open} onClose={handleCancelUpdate}>
      <div className={classes.container}>
        <form
          className={classes.form}
          //   onSubmit={handleSubmit(handleFormSubmission)}
          noValidate
        >
          <div className={classes.inputContainer}>
            <label htmlFor="name">Enter Your Name</label>
            <input type="text" defaultValue={user ? user.name : ""} />
          </div>

          <div className={classes.inputContainer}>
            <label htmlFor="username">Enter Your Username</label>
            <input
              type="text"
              name="name"
              defaultValue={user ? user.username : ""}
            />
          </div>

          <div className={classes.inputContainer}>
            <label htmlFor="email">Enter Your Email</label>
            <input
              type="text"
              name="email"
              defaultValue={user ? user.email : ""}
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
