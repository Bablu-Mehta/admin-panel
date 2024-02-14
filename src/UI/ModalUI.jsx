import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid red",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

const ModalUI = ({ children, isOpen, onClose }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setOpen(onClose);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default ModalUI;
