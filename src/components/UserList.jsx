import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button, Stack } from "@mui/material";
import { deleteUser, fetchUser } from "../util/http";
// import { redirect } from "react-router-dom";
import Loader from "./Loader";
import ModalUI from "../UI/ModalUI";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modal-slice";

// function createData(name, userName, email) {
//   return { name, userName, email };
// }

// const rows = [
//   createData("Bablu", "bablu123", "bablu123@gmail.com"),
//   createData("Sham", "sham123", "sham123@gmail.com"),
//   createData("rahul", "rahul123", "rahul123@gmail.com"),
//   // createData("Bablu", "bablu123", "bablu123@gmail.com"),
// ];

const UserList = () => {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [userIdToDelete, setUserIdDelete] = useState(null);

  const open = useSelector((state) => state.modal.isOpen);
  const close = useSelector((state) => state.modal.isClose);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchedData = async () => {
      setIsLoading(true);
      const users = await fetchUser("http://localhost:3000/");
      setUsers(users);
      setIsLoading(false);
    };

    fetchedData();
  }, [isUpdated]);

  const handleConfirmation = async () => {
    if (userIdToDelete) {
      // console.log("user id to delete", userIdToDelete);
      const response = await deleteUser(userIdToDelete);
      setIsUpdated((prev) => !prev);
    }
    setUserIdDelete(null);
    dispatch(modalActions.closeModal());
  };

  const handleDelete = async (id) => {
    setUserIdDelete(id);
    dispatch(modalActions.openModal());
  };

  const handleCancelDelete = () => {
    dispatch(modalActions.closeModal());
  };

  // console.log(users);

  return (
    <div>
      <ModalUI onOpen={open} onClose={close}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are You Sure!!!
        </Typography>
        <Button onClick={handleCancelDelete}>Cancel</Button>
        <Button onClick={handleConfirmation}>Okay</Button>
      </ModalUI>
      {isLoading && <Loader />}
      {users && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">UserName</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell align="right">{user.username}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" color="success">
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default UserList;
