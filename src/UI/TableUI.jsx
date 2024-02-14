import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchUser } from "../util/http";
import { Link } from "react-router-dom";

const TableUI = ({ data, rowLenght, onDelete }) => {
  const headers = [
    { id: "1", name: "id" },
    { id: "2", name: "name" },
    { id: "3", name: "username" },
    { id: "4", name: "email" },
  ];

  const [rows, setRows] = useState(data);
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchedData = async () => {
      const users = await fetchUser();
      setRows(users);
    };

    fetchedData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPage = (event) => {
    setRowPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Users List</h2>

      
      <TextField
        label="Search"
        variant="standard"
        value={searchTerm}
        onChange={handleSearchTermChange}
        style={{ marginBottom: "1rem", float: "right" }}
      />

      <TableContainer component={Paper} sx={{ maxHeight: 450, maxWidth: 1200 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell
                  //   style={{ backgroundColor: "black", color: "white" }}
                  key={header.id}
                >
                  {header.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows &&
              filteredRows
                .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
                .map((row, index) => {
                  return (
                    <TableRow key={index}>
                      {headers.map((header) => {
                        let value = row[header.name];
                        return (
                          <>
                            <TableCell key={value}>{value}</TableCell>
                          </>
                        );
                      })}

                      <TableCell
                        style={{ backgroundColor: "#fff", color: "black" }}
                      >
                        <Stack direction="row" spacing={2}>
                          <Link to={`/users/${row.id}`}>
                            <Button variant="contained" color="success">
                              Edit
                            </Button>
                          </Link>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => onDelete(row.id)}
                          >
                            Delete
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        page={page}
        count={rowLenght}
        rowsPerPage={rowPerPage}
        component="div"
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleRowsPerPage}
      ></TablePagination>
    </div>
  );
};

export default TableUI;
