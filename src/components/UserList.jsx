import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Stack } from "@mui/material";
import { deleteUser, fetchUser } from "../util/http";
import { redirect } from "react-router-dom";

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

  useEffect(() => {
    const fetchedData = async () => {
      setIsLoading(true);
      const users = await fetchUser("http://localhost:3000/");
      setUsers(users);
      setIsLoading(false);
    };

    fetchedData();
  }, [isUpdated]);

  const handleDelete = async (id) => {
    const response = await deleteUser(id);
    // console.log(response);
    setIsUpdated((prev) => !prev);
    // redirect("/users");
  };

  // console.log(users);

  return (
    <div>
      {isLoading && <p>Users Data Fetching...</p>}
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
