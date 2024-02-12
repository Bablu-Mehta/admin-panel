import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(name, userName, email) {
  return { name, userName, email };
}

const rows = [
  createData("Bablu", "bablu123", "bablu123@gmail.com"),
  createData("Sham", "sham123", "sham123@gmail.com"),
  createData("rahul", "rahul123", "rahul123@gmail.com"),
  createData("Bablu", "bablu123", "bablu123@gmail.com"),
];

const UserList = () => {
  return (
    <TableContainer component={Paper}>
      <Table  sx={{ minWidth: 650, maxWidth: 1200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">UserName</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.userName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="success">
                  Details
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button variant="outlined" color="error">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
