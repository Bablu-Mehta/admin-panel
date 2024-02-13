import React, { useEffect } from "react";
import ModalUI from "../UI/ModalUI";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/base";
import { modalActions } from "../store/modal-slice";
// import { redirect } from "react-router-dom";
import { Stack } from "@mui/material";

const CreateUser = () => {
  const open = useSelector((state) => state.modal.isOpen);
  const close = useSelector((state) => state.modal.isClose);

  const dispatch = useDispatch();

  useEffect(() => {
    const openModal = () => {
      dispatch(modalActions.openModal());
    };
    openModal();
  }, []);

  // const handleCloseModal = () => {
  //   dispatch(modalActions.closeModal());
  //   // return redirect("..");
  // };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // console.log("Form submitted successfully", event);
    dispatch(modalActions.closeModal());
    // return redirect("/users");
  };

  return (
    <ModalUI isOpen={open} onClose={close}>
      <Stack>
        <Button variant="contained" onClick={handleSubmit}>
          close
        </Button>
      </Stack>
      {/* <button>close</button>   */}
    </ModalUI>
  );
};

export default CreateUser;
