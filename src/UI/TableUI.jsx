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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchUser } from "../util/http";

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

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Users List</h2>

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
            {rows &&
              rows
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
                          <Button variant="contained" color="success">
                            Edit
                          </Button>
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
